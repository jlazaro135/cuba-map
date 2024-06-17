import { Component, effect, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { LeafletMarkerClusterModule } from '@asymmetrik/ngx-leaflet-markercluster';
import {
  Marker,
  Polyline,
  latLng,
  marker,
  Map,
  polyline,
  tileLayer,
  MapOptions,
  markerClusterGroup,
  LatLng,
  icon,
  MarkerClusterGroup,
  Layer,
  LatLngBounds,
  Popup,
} from 'leaflet';
import 'leaflet.markercluster';
import { markerData, cities } from '../../../data/data';
import { FooterComponent } from '../../components/footer/footer.component';
import { PointContent } from '../../interfaces/pointContent.interface';
import { LangService } from '../../services/lang.service';
import { PopupService } from '../../services/point.service';
import { ModalComponent } from '../../components/modal/modal.component';
import { MapOptionsService } from '../../services/mapOptions.service';
import { IntroComponent } from '../../components/intro/intro.component';

interface MarkerData {
  pointContent: PointContent;
  coordinates: [number, number];
}

interface Cities {
  name: string;
  coords: LatLng;
}

@Component({
  selector: 'home',
  standalone: true,
  imports: [
    RouterOutlet,
    LeafletModule,
    LeafletMarkerClusterModule,
    ModalComponent,
    FooterComponent,
    IntroComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  mapOptions!: MapOptions;
  map!: Map;
  markers: Marker[] = [];
  polyline!: Polyline;
  markerClusterGroup!: MarkerClusterGroup;
  markerClusterData = [];
  lastLayer!: Layer;
  popups: Popup[] = [];
  showPopup: boolean = false;

  public popupService = inject(PopupService);
  public mapOptionsService = inject(MapOptionsService);
  public langService = inject(LangService);
  public route = inject(Router);
  public markerData: MarkerData[];
  public cities: Cities[];

  public e = effect(() => {
    console.log(this.langService.lang())
    if (this.langService.lang()) {
      this.onLangChange();
    }
  });

  constructor() {
    this.markerData = markerData;
    this.cities = cities;
  }

  private createpointContent(data: PointContent): HTMLElement {
    const { title, alt, imgUrl } = data;
    const div = document.createElement('div');
    div.style.width = '200px';
    div.style.textAlign = 'center';

    const h3 = document.createElement('h3');
    h3.style.marginTop = '0';
    h3.style.marginBottom = '0.5rem';
    h3.textContent = title[this.langService.lang()];
    div.appendChild(h3);

    const img = document.createElement('img');
    img.src = imgUrl;
    img.alt = alt;
    img.style.width = '100%';
    img.style.height = 'auto';
    div.appendChild(img);

    const button = document.createElement('button');
    button.className = 'popup-content-btn';
    button.textContent =
      this.langService.lang() === 'es' ? 'Ver detalles' : 'See details';
    button.addEventListener('click', () => this.goToLink());
    div.appendChild(button);

    return div;
  }

  // Define our base layers so we can reference them multiple times
  streetMaps = tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    detectRetina: true,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  });

  bounds: LatLngBounds = new LatLngBounds(
    latLng(18.0, -89.0), // Suroeste
    latLng(26.4, -77.0) // Noreste
  );

  // Set the initial set of displayed layers (we could also use the leafletLayers input binding for this)
  options = {
    layers: [this.streetMaps],
    zoom: this.mapOptionsService.zoom,
    center: this.mapOptionsService.center,
    maxBounds: this.bounds,
    maxBoundsViscosity: 0.5,
  };

  ngOnInit() {
    this.langService.setLanguageFromBrowser();
    this.markerClusterGroup = markerClusterGroup({
      removeOutsideVisibleBounds: true,
    });
    const coords = this.cities
      .map((city) => `${city.coords.lng},${city.coords.lat}`)
      .join(';');
    const url = `https://router.project-osrm.org/route/v1/driving/${coords}?overview=full&geometries=geojson`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const route = data.routes[0].geometry.coordinates.map((coord: any) =>
          latLng(coord[1], coord[0])
        );

        this.polyline = polyline(route, { color: 'blue' });

        // Añadir la polyline al mapa
        if (this.map) {
          this.polyline.addTo(this.map);
          // this.addLayersToMap()
        } else {
          console.error('No routes found');
        }
      })
      .catch((err) => console.error(err));
  }

  onMapReady(map: Map) {
    this.map = map;
    if (this.polyline) {
      this.polyline.addTo(this.map);
    }
    this.markerData.forEach((marker) => this.createMarker(marker));
    this.addLayersToMap();
  }

  onLangChange() {
    this.removeLayersToMap();
    this.markerData.forEach((marker) => this.createMarker(marker));
    this.addLayersToMap();
  }

  private createMarker(markerData: MarkerData) {
    const { coordinates, pointContent } = markerData;
    const popupHtml = this.createpointContent(pointContent);

    const mapIcon = this.getDefaultIcon();
    this.lastLayer = marker(coordinates)
      .setIcon(mapIcon)
      .bindPopup(popupHtml)
      .on('click', () => (this.popupService.pointContent = pointContent));
    const popup = this.lastLayer.getPopup();
    if (this.lastLayer && popup) this.popups.push(popup);

    this.markerClusterGroup.addLayer(this.lastLayer);
  }

  private getDefaultIcon() {
    return icon({
      iconSize: [50, 82],
      iconAnchor: [25, 42],
      iconUrl: 'assets/camera.svg',
    });
  }

  private addLayersToMap() {
    this.markerClusterGroup.addTo(this.map);
  }

  private removeLayersToMap() {
    this.markerClusterGroup.clearLayers();
  }

  closePopup(): void {
    this.showPopup = false;
  }

  goToLink(): void {
    this.mapOptionsService.center = this.map.getCenter();
    this.mapOptionsService.zoom = this.map.getZoom();
    this.route.navigateByUrl('details');
  }
}

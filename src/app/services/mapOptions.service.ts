import { Injectable } from '@angular/core';
import { LatLng, latLng } from 'leaflet';

@Injectable({providedIn: 'root'})
export class MapOptionsService {


  public center: LatLng = latLng(22.5, -80.5)
  public zoom: number = this.isDesktop()

  isDesktop(){
    if(document.body.clientWidth > 1200) return 7
    return 6
  }

}

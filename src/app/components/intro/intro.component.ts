import { Component, computed, inject } from '@angular/core';
import { LangService } from '../../services/lang.service';
import { IntroService } from '../../services/intro.service';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css'
})
export class IntroComponent {

  public langService = inject(LangService);
  public introService = inject(IntroService);
  public description = ''

  ngOnInit(){
    this.description = this.getDescription();
  }

  handleClick(){
    this.introService.isHidden = true;
  }

  getDescription = computed(() => {
    if(this.langService.lang() === 'es'){
      return `
      Hola! Soy Jesús Lázaro, desarrollador web y he desarrollado esta aplicación como respuesta a la pregunta:
      <span>"¿Qué tal tu viaje por Cuba?".</span><br>
      La mejor forma que he encontrado de responder a esa pregunta es mediante este mapa interactivo, donde podrás encontrar marcadores
      de los sitios mas interesantes que hemos vistado, con imágenes y videos tomados por Silvia y por mí, junto con un pequeña descripción del lugar.
      <br><br>
      ¡Espero que lo disfrutes!`
    }
    return `Hello! I am Jesús Lázaro, a web developer, and I have developed this application in response to the question:
    <span>"How was your trip to Cuba?".</span><br>
    The best way I have found to answer that question is through this interactive map, where you can find markers
    of the most interesting places we have visited, with images and videos taken by Silvia and me, along with a brief description of the place.
    <br><br>
    I hope you enjoy it!`
  })
}

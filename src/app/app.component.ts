import { Component, OnInit } from '@angular/core';

interface Tarjeta{ /*Creamos interface de metodos y propiedades Tarjeta*/ 
  titulo:String;
  subtitulo:String;
  nro?:number; /*El ? significa que el metodo o propiedad es nula, puede ser usada o no*/ 
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Mi primer app de Angular';
  public ArregloTarjetas: Tarjeta[]=[]; /*Creamos una variable publica ArregloTarjetas y nuestra interface va a ser de tipo arreglo; lo declaramos sin ningun valor.*/

  ngOnInit(): void { /*Este metodo se ejecuta una unica vez cuando se inicializa la pagina*/
      this.ArregloTarjetas = [
        {titulo: "Video 1", subtitulo: "subtitulo video 1"},
        {titulo: "Video 2", subtitulo: "subtitulo video 2"},
        {titulo: "Video 3", subtitulo: "subtitulo video 3"}
      ]
  }
}

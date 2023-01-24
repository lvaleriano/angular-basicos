import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  // styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  heroeBorrado: string = '';
  borrarHeroe(){
    console.log('borrando...');
    //Borrar todos los elementos del arreglo
    //this.heroes = [];

    //Borrar un elemento del arreglo
    this.heroeBorrado = this.heroes.shift() || '';
  }

}

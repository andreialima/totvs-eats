import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from './restaurants.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  public listRestaurants:any;

  constructor(private negocioRestaurant: RestaurantsService) {

    this.negocioRestaurant.listaRestaurants().subscribe( result => {
      this.listRestaurants = result;

      console.log(result);
    });

    this.teste();
    this.teste();
    this.teste();
    this.teste();

  }

  ngOnInit() {
  }

  teste(){
    console.log('teste');
  }

}

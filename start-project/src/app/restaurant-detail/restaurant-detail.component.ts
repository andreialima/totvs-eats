import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { RestaurantsService } from '../restaurants/restaurants.service'

import { Restaurant } from '../restaurants/restaurant/restaurant.model'

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant;

  constructor(private restaurantsService: RestaurantsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    
    let id = this.route.snapshot.params['id'];

    this.restaurantsService.restaurantById(id)
      .subscribe(result => this.restaurant = result);
  }

}
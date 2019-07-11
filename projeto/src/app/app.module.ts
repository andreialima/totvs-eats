import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantComponent,
    RestaurantsComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    RestaurantDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

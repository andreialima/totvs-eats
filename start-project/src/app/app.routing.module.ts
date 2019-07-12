import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';

const routes: Routes = [
 {path: '', component: HomeComponent},
 {path: 'about', component: AboutComponent},
 {path: 'restaurants', component: RestaurantsComponent},
 {path: 'restaurants/:id', component: RestaurantDetailComponent,
  children: [
    {path: 'reviews', component: ReviewsComponent}
  ]
},
 {path: '**', component: NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

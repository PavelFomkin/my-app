import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HeroesComponent} from './heroes/heroes.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {ToursComponent} from './tours/tours.component';
import {TourDetailComponent} from './tour-detail/tour-detail.component';
import {InfoComponent} from './info/info.component';
import {EditTourComponent} from './edit-tour/edit-tour.component';
import {OrderComponent} from './order/order.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', redirectTo: '/tours', pathMatch: 'full'},
  {path: 'tours', component: ToursComponent},
  {path: 'tours/:id', component: TourDetailComponent},
  {path: 'about', component: InfoComponent},
  {path: 'edit', component: EditTourComponent},
  // {path: 'order', component: OrderComponent},
  {path: 'order/:vacId', component: OrderComponent},
  {path: '**', component: PageNotFoundComponent}
  // {path: 'detail/:id', component: HeroDetailComponent},
  // {path: 'heroes', component: HeroesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

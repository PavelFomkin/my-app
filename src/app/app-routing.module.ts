import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ToursComponent} from './tours/tours.component';
import {InfoComponent} from './info/info.component';
import {TourComponent} from './admin/tour-editor/tour/tour.component';
import {BookingComponent} from './booking/booking.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {TourEditorComponent} from './admin/tour-editor/tour-editor.component';
import {VacantDateComponent} from './admin/tour-editor/vacant-date/vacant-date.component';
import {TourInfoComponent} from './tour-info/tour-info.component';
import {OrdersComponent} from './admin/orders/orders.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: '/tours', pathMatch: 'full'},
  {path: 'tours', component: ToursComponent},
  {path: 'tours/:id', component: TourInfoComponent},
  {path: 'about', component: InfoComponent},
  {path: 'booking/:vacId', component: BookingComponent},
  {path: 'confirmation/:vacId', component: ToursComponent},
  {path: 'login', component: LoginComponent},
  {path: 'orders', component: OrdersComponent, canActivate: [AuthGuard]},
  {path: 'editor', component: TourEditorComponent, canActivate: [AuthGuard]},
  {path: 'editor/:id', component: TourComponent, canActivate: [AuthGuard]},
  {path: 'editor/vacant/:id', component: VacantDateComponent, canActivate: [AuthGuard]},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

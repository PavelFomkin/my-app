import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ToursComponent} from './tours/tours.component';
import {InfoComponent} from './info/info.component';
import {AdminTourComponent} from './admin-tour/admin-tour.component';
import {BookingComponent} from './booking/booking.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AdminTourEditorComponent} from './admin-tour-editor/admin-tour-editor.component';
import {AdminVacantDateComponent} from './admin-vacant-date/admin-vacant-date.component';
import {TourInfoComponent} from './tour-info/tour-info.component';
import {AdminComponent} from './admin/admin.component';
import {AdminOrdersComponent} from './admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: '', redirectTo: '/tours', pathMatch: 'full'},
  {path: 'tours', component: ToursComponent},
  {path: 'tours/:id', component: TourInfoComponent},
  {path: 'about', component: InfoComponent},
  {path: 'booking/:vacId', component: BookingComponent},
  {path: 'confirmation/:vacId', component: ToursComponent},
  {path: 'login', component: LoginComponent},
  {path: 'orders', component: AdminOrdersComponent, canActivate: [AuthGuard]},
  {path: 'editor', component: AdminTourEditorComponent, canActivate: [AuthGuard]},
  {path: 'editor/:id', component: AdminTourComponent, canActivate: [AuthGuard]},
  {path: 'editor/vacant/:id', component: AdminVacantDateComponent, canActivate: [AuthGuard]},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

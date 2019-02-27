import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ToursComponent} from './tours/tours.component';
import {TourDetailComponent} from './tour-detail/tour-detail.component';
import {InfoComponent} from './info/info.component';
import {EditTourComponent} from './edit-tour/edit-tour.component';
import {OrderComponent} from './order/order.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {TourEditorComponent} from './tour-editor/tour-editor.component';
import {EditVacantTourComponent} from './edit-vacant-tour/edit-vacant-tour.component';

const routes: Routes = [
  {path: '', redirectTo: '/tours', pathMatch: 'full'},
  {path: 'tours', component: ToursComponent},
  {path: 'vacant/:id', component: TourDetailComponent},
  {path: 'about', component: InfoComponent},
  {path: 'edit', component: TourEditorComponent},
  {path: 'edit/:id', component: EditTourComponent},
  {path: 'edit/vacant/:id', component: EditVacantTourComponent},
  // {path: 'order', component: OrderComponent},
  {path: 'order/:vacId', component: OrderComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

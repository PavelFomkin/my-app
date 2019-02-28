import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
//import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ToursComponent } from './tours/tours.component';
import { InfoComponent } from './info/info.component';
import { EditTourComponent } from './edit-tour/edit-tour.component';
import { OrderComponent } from './order/order.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TourEditorComponent } from './tour-editor/tour-editor.component';
import { EditVacantTourComponent } from './edit-vacant-tour/edit-vacant-tour.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ToursComponent,
    InfoComponent,
    EditTourComponent,
    OrderComponent,
    PageNotFoundComponent,
    TourEditorComponent,
    EditVacantTourComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
//    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

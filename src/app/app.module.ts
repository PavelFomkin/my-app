import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ToursComponent } from './tours/tours.component';
import { InfoComponent } from './info/info.component';
import { AdminTourComponent } from './admin-tour/admin-tour.component';
import { BookingComponent } from './booking/booking.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminTourEditorComponent } from './admin-tour-editor/admin-tour-editor.component';
import { AdminVacantDateComponent } from './admin-vacant-date/admin-vacant-date.component';
import { TourInfoComponent } from './tour-info/tour-info.component';
import { AdminComponent } from './admin/admin.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ToursComponent,
    InfoComponent,
    AdminTourComponent,
    BookingComponent,
    PageNotFoundComponent,
    AdminTourEditorComponent,
    AdminVacantDateComponent,
    TourInfoComponent,
    AdminComponent,
    AdminOrdersComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

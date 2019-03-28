import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ToursComponent } from './tours/tours.component';
import { InfoComponent } from './info/info.component';
import { TourComponent } from './admin/tour-editor/tour/tour.component';
import { BookingComponent } from './booking/booking.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TourEditorComponent } from './admin/tour-editor/tour-editor.component';
import { VacantDateComponent } from './admin/tour-editor/vacant-date/vacant-date.component';
import { TourInfoComponent } from './tour-info/tour-info.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { LoginComponent } from './login/login.component';
import {TokenInterceptor} from './services/token.interceptor';
import {SlideshowModule} from 'ng-simple-slideshow';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ToursComponent,
    InfoComponent,
    TourComponent,
    BookingComponent,
    PageNotFoundComponent,
    TourEditorComponent,
    VacantDateComponent,
    TourInfoComponent,
    OrdersComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    SlideshowModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

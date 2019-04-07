import {BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {SlideshowModule} from 'ng-simple-slideshow';
import {GalleriaModule} from 'primeng/galleria';
import {CheckboxModule} from 'primeng/checkbox';
import {EditorModule} from 'primeng/editor';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {SpinnerModule} from 'primeng/spinner';
import {DropdownModule} from 'primeng/dropdown';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {ToursComponent} from './tours/tours.component';
import {InfoComponent} from './info/info.component';
import {TourComponent} from './admin/tour-editor/tour/tour.component';
import {BookingComponent} from './booking/booking.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {TourEditorComponent} from './admin/tour-editor/tour-editor.component';
import {VacantDateComponent} from './admin/tour-editor/vacant-date/vacant-date.component';
import {TourInfoComponent} from './tour-info/tour-info.component';
import {OrdersComponent} from './admin/orders/orders.component';
import {LoginComponent} from './login/login.component';
import {TokenInterceptor} from './services/token.interceptor';
import {CalendarModule} from 'primeng/calendar';
import {CalendarComponent} from './calendar/calendar.component';

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
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    SlideshowModule,
    GalleriaModule,
    CalendarModule,
    CheckboxModule,
    EditorModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    SpinnerModule,
    DropdownModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

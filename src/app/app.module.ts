import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TourLiteComponent } from './tour-lite/tour-lite.component';
import { ToursComponent } from './tours/tours.component';
import { TourDetailComponent } from './tour-detail/tour-detail.component';
import { TourFullComponent } from './tour-full/tour-full.component';
import { InfoComponent } from './info/info.component';
import { EditTourComponent } from './edit-tour/edit-tour.component';
import { OrderComponent } from './order/order.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    TourLiteComponent,
    ToursComponent,
    TourDetailComponent,
    TourFullComponent,
    InfoComponent,
    EditTourComponent,
    OrderComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

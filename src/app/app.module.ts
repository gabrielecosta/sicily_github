import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ContattiComponent } from './features/contatti/contatti.component';
import { DestinationsComponent } from './features/destinations/destinations.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './features/home/home.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryDataService } from './shared/services/in-memory-data.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavbarComponent } from './features/navbar/navbar.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { NgModule } from '@angular/core';
import { TransfertsComponent } from './features/transferts/transferts.component';
import { TripDetailComponent } from './features/trip-detail/trip-detail.component';
import { TripSearchComponent } from './features/trip-search/trip-search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ContattiComponent,
    DestinationsComponent,
    TransfertsComponent,
    TripDetailComponent,
    TripSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    HttpClientModule,
    NgImageSliderModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  exports: [
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    NgImageSliderModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

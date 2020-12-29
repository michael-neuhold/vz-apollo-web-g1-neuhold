import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// angular material
import { MaterialModule } from './material';

// angular stuff
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { MovieOverviewComponent } from './movie-overview/movie-overview.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieOverviewSmallCardSliderComponent } from './movie-overview-small-card-slider/movie-overview-small-card-slider.component';
import { MovieOverviewLargeCardSliderComponent } from './movie-overview-large-card-slider/movie-overview-large-card-slider.component';
import { MovieOverviewFilterComponent } from './movie-overview-filter/movie-overview-filter.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MovieDetailActorsComponent } from './movie-detail-actors/movie-detail-actors.component';
import { MovieDetailSchedulesComponent } from './movie-detail-schedules/movie-detail-schedules.component';
import { MovieDetailInformationComponent } from './movie-detail-information/movie-detail-information.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieOverviewComponent,
    PageNotFoundComponent,
    MovieDetailsComponent,
    MovieOverviewSmallCardSliderComponent,
    MovieOverviewLargeCardSliderComponent,
    MovieOverviewFilterComponent,
    NavigationComponent,
    MovieDetailActorsComponent,
    MovieDetailSchedulesComponent,
    MovieDetailInformationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

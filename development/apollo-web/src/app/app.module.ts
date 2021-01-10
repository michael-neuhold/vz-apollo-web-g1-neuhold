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
import { MatSidenavModule, MatSidenavContainer } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MovieDetailActorsComponent } from './movie-detail-actors/movie-detail-actors.component';
import { MovieDetailInformationComponent } from './movie-detail-information/movie-detail-information.component';
import { AdminDashboradComponent } from './admin-dashborad/admin-dashborad.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { AdminPaymentStatisticsComponent } from './admin-payment-statistics/admin-payment-statistics.component';
import { AdminCinemaHallComponent } from './admin-cinema-hall/admin-cinema-hall.component';
import { AdminScheduleComponent } from './admin-schedule/admin-schedule.component';
import { AdminMovieComponent } from './admin-movie/admin-movie.component';
import { AdminGenreComponent } from './admin-genre/admin-genre.component';
import { AdminReservationComponent } from './admin-reservation/admin-reservation.component';
import { OAuthModule } from 'angular-oauth2-oidc';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminCategoryComponent } from './admin-category/admin-category.component';
import { ChartsModule } from 'ng2-charts';
import { AdminChartComponent } from './admin-chart/admin-chart.component';
import { AdminCinemaHallAddComponent } from './admin-cinema-hall-add/admin-cinema-hall-add.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AdminCinemaHallEditComponent } from './admin-cinema-hall-edit/admin-cinema-hall-edit.component';
import { AdminGenreAddComponent } from './admin-genre-add/admin-genre-add.component';
import { AdminGenreEditComponent } from './admin-genre-edit/admin-genre-edit.component';
import { AdminCategoryAddComponent } from './admin-category-add/admin-category-add.component';
import { AdminCategoryEditComponent } from './admin-category-edit/admin-category-edit.component';
import { AdminMovieAddComponent } from './admin-movie-add/admin-movie-add.component';
import { AdminScheduleAddComponent } from './admin-schedule-add/admin-schedule-add.component';
import { AdminScheduleEditComponent } from './admin-schedule-edit/admin-schedule-edit.component';
import { ScheduleService } from './services/schedule.service';
import {MatChipsModule} from '@angular/material/chips';
import { TransformUrlPipe } from './pipes/transform-url.pipe';
import { GetStatisticValuesPipe } from './pipes/get-statistic-values.pipe';
import { GetStatisticNamesPipe } from './pipes/get-statistic-names.pipe';

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
    MovieDetailInformationComponent,
    AdminDashboradComponent,
    AdminPaymentStatisticsComponent,
    AdminCinemaHallComponent,
    AdminScheduleComponent,
    AdminMovieComponent,
    AdminGenreComponent,
    AdminReservationComponent,
    AdminLoginComponent,
    AdminCategoryComponent,
    AdminChartComponent,
    AdminCinemaHallAddComponent,
    AdminCinemaHallEditComponent,
    AdminGenreAddComponent,
    AdminGenreEditComponent,
    AdminCategoryAddComponent,
    AdminCategoryEditComponent,
    AdminMovieAddComponent,
    AdminScheduleAddComponent,
    AdminScheduleEditComponent,
    TransformUrlPipe,
    GetStatisticValuesPipe,
    GetStatisticNamesPipe
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
    MatDialogModule,
    MatGridListModule,
    MatChipsModule,
    MatCardModule,
    MatMenuModule,
    HttpClientModule,
    ChartsModule,
    OAuthModule.forRoot()
  ],
  entryComponents: [
    // cinema hall
    AdminCinemaHallAddComponent,
    AdminCinemaHallEditComponent,
    // category
    AdminCategoryAddComponent,
    AdminCategoryEditComponent,
    // genre
    AdminGenreAddComponent,
    AdminCategoryEditComponent,
    // movie
    AdminMovieAddComponent,
    // schedule
    AdminScheduleAddComponent,
    AdminScheduleEditComponent
  ],
  providers: [ScheduleService],
  bootstrap: [AppComponent]
})
export class AppModule { }

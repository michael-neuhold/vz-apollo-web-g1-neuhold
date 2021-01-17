import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// angular material
import { MaterialModule } from './material';

// angular stuff
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { MovieOverviewComponent } from './overview/movie-overview/movie-overview.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MovieDetailsComponent } from './detail/movie-details/movie-details.component';
import { MovieOverviewSmallCardSliderComponent } from './overview/movie-overview-small-card-slider/movie-overview-small-card-slider.component';
import { MovieOverviewLargeCardSliderComponent } from './overview/movie-overview-large-card-slider/movie-overview-large-card-slider.component';
import { MovieOverviewFilterComponent } from './overview/movie-overview-filter/movie-overview-filter.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule, MatSidenavContainer } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MovieDetailActorsComponent } from './detail/movie-detail-actors/movie-detail-actors.component';
import { MovieDetailInformationComponent } from './detail/movie-detail-information/movie-detail-information.component';
import { AdminDashboradComponent } from './admin/admin-dashborad/admin-dashborad.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { AdminPaymentStatisticsComponent } from './admin/admin-paymentstatistic/admin-payment-statistics/admin-payment-statistics.component';
import { AdminCinemaHallComponent } from './admin/admin-cinemahall/admin-cinema-hall/admin-cinema-hall.component';
import { AdminScheduleComponent } from './admin/admin-schedule/admin-schedule/admin-schedule.component';
import { AdminMovieComponent } from './admin/admin-movie/admin-movie/admin-movie.component';
import { AdminGenreComponent } from './admin/admin-genre/admin-genre/admin-genre.component';
import { AdminReservationComponent } from './admin/admin-reservation/admin-reservation/admin-reservation.component';
import { OAuthModule } from 'angular-oauth2-oidc';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminCategoryComponent } from './admin/admin-category/admin-category/admin-category.component';
import { ChartsModule } from 'ng2-charts';
import { AdminChartComponent } from './admin/admin-chart/admin-chart.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AdminGenreAddComponent } from './admin/admin-genre/admin-genre-add/admin-genre-add.component';
import { AdminGenreEditComponent } from './admin/admin-genre/admin-genre-edit/admin-genre-edit.component';
import { AdminCategoryAddComponent } from './admin/admin-category/admin-category-add/admin-category-add.component';
import { AdminCategoryEditComponent } from './admin/admin-category/admin-category-edit/admin-category-edit.component';
import { AdminMovieAddComponent } from './admin/admin-movie/admin-movie-add/admin-movie-add.component';
import { AdminScheduleAddComponent } from './admin/admin-schedule/admin-schedule-add/admin-schedule-add.component';
import { AdminScheduleEditComponent } from './admin/admin-schedule/admin-schedule-edit/admin-schedule-edit.component';
import { ScheduleService } from './services/schedule/schedule.service';
import {MatChipsModule} from '@angular/material/chips';
import { TransformUrlPipe } from './pipes/transform-url.pipe';
import { GetStatisticValuesPipe } from './pipes/get-statistic-values.pipe';
import { GetStatisticNamesPipe } from './pipes/get-statistic-names.pipe';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { AdminReservationDetailsComponent } from './admin/admin-reservation/admin-reservation-details/admin-reservation-details.component';
import { ImageEndpointPipe } from './pipes/image-endpoint.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { PricePipe } from './pipes/price.pipe';
import { InputErrorMessageComponent } from './shared/input-error-message/input-error-message.component';
import { ReservationDetailComponent } from './detail/reservation-detail/reservation-detail.component';
import {MatSliderModule} from '@angular/material/slider';
import { AdminCinemaHallAddComponent } from './admin/admin-cinemahall/admin-cinema-hall-add/admin-cinema-hall-add.component';
import { AdminCinemaHallEditComponent } from './admin/admin-cinemahall/admin-cinema-hall-edit/admin-cinema-hall-edit.component';
import { AdminCinemahallShowComponent } from './admin/admin-cinemahall/admin-cinema-hall-show/admin-cinema-hall-show.component';
import { CinemahallComponent } from './shared/cinemahall/cinemahall.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { NoContentComponent } from './shared/no-content/no-content.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { CinemahallEditComponent } from './shared/cinemahall-edit/cinemahall-edit.component';
import { CoronaSettingsComponent } from './shared/corona-settings/corona-settings.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatTimepickerModule } from 'mat-timepicker';

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
    AdminCinemahallShowComponent,
    AdminGenreAddComponent,
    AdminGenreEditComponent,
    AdminCategoryAddComponent,
    AdminCategoryEditComponent,
    AdminMovieAddComponent,
    AdminScheduleAddComponent,
    AdminScheduleEditComponent,
    TransformUrlPipe,
    GetStatisticValuesPipe,
    GetStatisticNamesPipe,
    AdminReservationDetailsComponent,
    ImageEndpointPipe,
    PricePipe,
    InputErrorMessageComponent,
    ReservationDetailComponent,
    CinemahallComponent,
    NoContentComponent,
    CinemahallEditComponent,
    CoronaSettingsComponent
  ],
  imports: [
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
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
    MatTableModule,
    MatCardModule,
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatPaginatorModule,
    MatTimepickerModule,
    HttpClientModule,
    MatSliderModule,
    ChartsModule,
    OAuthModule.forRoot()
  ],
  entryComponents: [
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
    AdminScheduleEditComponent,
    // cinemahall
    CoronaSettingsComponent,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

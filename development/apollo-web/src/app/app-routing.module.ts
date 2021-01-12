import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminCategoryComponent } from './admin/admin-category/admin-category/admin-category.component';
import { AdminCinemaHallComponent } from './admin/admin-cinemahall/admin-cinema-hall/admin-cinema-hall.component';
import { AdminDashboradComponent } from './admin/admin-dashborad/admin-dashborad.component';
import { AdminGenreComponent } from './admin/admin-genre/admin-genre/admin-genre.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminMovieComponent } from './admin/admin-movie/admin-movie/admin-movie.component';
import { AdminPaymentStatisticsComponent } from './admin/admin-paymentstatistic/admin-payment-statistics/admin-payment-statistics.component';
import { AdminReservationComponent } from './admin/admin-reservation/admin-reservation/admin-reservation.component';
import { AdminScheduleComponent } from './admin/admin-schedule/admin-schedule/admin-schedule.component';
import { MovieDetailsComponent } from './detail/movie-details/movie-details.component';
import { MovieOverviewComponent } from './overview/movie-overview/movie-overview.component';
import { NavigateToAdminGuard } from './navigate-to-admin.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'overview', pathMatch:'full' },
  {
    path: 'index.html',
    redirectTo: 'overview',
    pathMatch: 'full'
  },
  { path: 'overview', component: MovieOverviewComponent },
  { path: 'movies/:id', component: MovieDetailsComponent },
  {
    path: 'admin',
    component: AdminDashboradComponent,
    //canActivate: [NavigateToAdminGuard],
    children : [
      { path: '', redirectTo: 'statistic', pathMatch:'full' },
      { path: 'statistic', component: AdminPaymentStatisticsComponent },
      { path: 'cinemahall', component: AdminCinemaHallComponent },
      { path: 'reservation', component: AdminReservationComponent },
      { path: 'genre', component: AdminGenreComponent },
      { path: 'movie', component: AdminMovieComponent },
      { path: 'schedule', component: AdminScheduleComponent },
      { path: 'category', component: AdminCategoryComponent }
    ]
  },
  { path: 'login', component: AdminLoginComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


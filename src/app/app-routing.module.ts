import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { ForecastComponent } from './forecast/forecast.component';

const routes: Routes = [
  { path: '', redirectTo: 'current-weather', pathMatch: 'full' },
  { path: 'current-weather', component: CurrentWeatherComponent },
  { path: 'forecast', component: ForecastComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

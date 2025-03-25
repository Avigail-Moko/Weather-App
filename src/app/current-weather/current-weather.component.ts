import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent {
  constructor(private service:WeatherService){}
  
  errorMessage: string = '';
  weatherData:any;
  selectedUnit: string = 'C'; 
  today=new Date();

  ngOnInit() {
    this.service.getCurrentWeather().subscribe({
      next: (data) => {
        this.weatherData = data;
        this.errorMessage = '';
      },
      error: (err) => {
        this.errorMessage = 'Failed to load weather data. Please try again later.';
        console.error('Error:', err);
      }
    });
  }


}

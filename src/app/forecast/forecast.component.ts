import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
})
export class ForecastComponent {
  cityName: any;
  list: any;
  limitedItems: any;
  // temp: any;
  cnt: any = 0;
  avg: any = 0;
  allTempArray: any[] = [];

  constructor(private service: WeatherService) {}

  ngOnInit() {
    this.duplicateDel();
  }

  duplicateDel() {
    this.service.getForecastWeather().subscribe(
      (data) => {
        this.list = data.list;
        this.cityName = data.city.name;
        const uniqueDays = new Map<String, any>();
        for (let item of this.list as any[]) {
          const date = item.dt_txt.split(' ')[0];
          if (!uniqueDays.has(date)) {
            uniqueDays.set(date, item);
          }
        }
        const items = Array.from(uniqueDays.values());
        this.limitedItems = items.slice(0, 5);
        this.allTempArray = this.limitedItems.map(
          (item: any) => item.main.temp
        );
        this.cnt = this.allTempArray.reduce((sum, temp) => sum + temp, 0);
        this.avg = this.cnt / this.allTempArray.length;
      },
      (error) => {
        console.error('Error:', error.error.message);
      }
    );
  }
}

import { Injectable } from '@angular/core';
import { environment } from 'src/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  apiKey: string = environment.apiKey;
  base_url: string = 'https://api.openweathermap.org/data/2.5';
 

  getCurrentWeather(): Observable<any> {
    const url = `${this.base_url}/weather?q=Tel%20Aviv&appid=${this.apiKey}&units=metric`;
    return this.http.get(url);
  }
  getForecastWeather():Observable<any>{
    const url = `${this.base_url}/forecast?q=Tel%20Aviv&appid=${this.apiKey}&units=metric`;
    return this.http.get(url);
  }
}

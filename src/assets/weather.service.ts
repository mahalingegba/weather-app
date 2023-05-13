import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class WeatherService {

  constructor(private http:HttpClient) { }

  getWeatherData(city:string):Observable<any>{
   return this.http.get<any>('https://open-weather13.p.rapidapi.com/city/landon',
      {
        headers: new HttpHeaders().
          set('X-RapidAPI-Key', '33c6f409c9msh712769f2f13e5c1p136a87jsn7bec58f48073')
          .set('X-RapidAPI-Host', 'open-weather13.p.rapidapi.com')
      });
  }
}

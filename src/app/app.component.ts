import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-app';
  data: any;
  cityName: string='bangalore';

  constructor(private weather:WeatherService){}
  weatherSubject$ =new Subject();


  
  ngOnInit():void{

  this.getWeatherDetails(this.cityName);
   this.cityName='';
  this.weatherSubject$.subscribe({
    next:(data:any)=>{
      if(!data.isError){
        this.data=data.data;
        console.log(data)
      }else{
        console.log('error'+ data.data)
      }
    }
  })

  
}

onSubmit(){
  this.getWeatherDetails(this.cityName);
  this.cityName='';
}

 private getWeatherDetails(city:string){
   this.weather.getWeatherData(city).subscribe({
    next:(data)=>{
    this.weatherSubject$.next({isError:false,data:data})
  },
  error:(err)=>{
    this.weatherSubject$.next({isError:true,data:err.error.message})
  },
  complete:()=>{}
  })
 }
}
  

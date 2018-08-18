import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";

@Injectable()
export class WeatherProvider {
  apiKey = "213e0e3db84c82cefda681d07acd5a8a";
  url;

  constructor(public http: HttpClient) {
    console.log("Hello WeatherProvider Provider");
    this.url = "https://api.openweathermap.org/data/2.5/weather?q=";
  }
  getWeather(city) {
    return this.http.get(
      this.url + city + "&units=metric&APPID=" + this.apiKey
    );
  }
}

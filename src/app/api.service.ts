import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URL  =  'http://35.226.12.143:9000/api';
STATIC_CONTENT = 'http://35.226.12.143:9000';

  constructor(private  httpClient:  HttpClient) { }


  getNoticias() {
        return  this.httpClient.get(`${this.API_URL}/publishednoticia?limit=20&page=1&type=noticia`);
  }

}

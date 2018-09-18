import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

API_URL  =  'https://edurobotica.abc.gob.ar//api';


  constructor(private  httpClient:  HttpClient) { }


  getNoticias() {
        return  this.httpClient.get(`${this.API_URL}/publishednoticia?limit=20&page=1&type=noticia`);
  }

}

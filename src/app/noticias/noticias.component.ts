import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'rpp-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})


export class NoticiasComponent implements OnInit {
  noticias:  Array<object> = [];
  staticContent;

  constructor(private apiService: ApiService ) { }

  ngOnInit() {
    this.getNoticias();
    this.staticContent = this.apiService.STATIC_CONTENT;
  }


  public  getNoticias() {
    this.apiService.getNoticias().subscribe((data:  Array<object>) => {
        this.noticias  =  data;
        console.log(data);
    });
}


}

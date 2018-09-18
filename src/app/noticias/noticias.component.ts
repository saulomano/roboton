import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'rpp-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {
  private  noticas:  Array<object> = [];
  constructor(private apiService: ApiService ) { }

  ngOnInit() {
    this.getNoticias();
  }


  public  getNoticias() {
    this.apiService.getNoticias().subscribe((data:  Array<object>) => {
        this.noticas  =  data;
        console.log(data);
    });
}


}

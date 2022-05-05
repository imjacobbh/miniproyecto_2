import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from '../heroes';
import { HeroeService } from '../shared/heroe.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  nombreH: string = "";
  indice: number = 0;

  miHeroe: Heroe = {
    nombre: "",
    bio: "",
    img: "",
    aparicion: "",
    casa: ""
  };

  constructor(private heroeService: HeroeService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this.nombreH = params['nombreH'];
      this.indice = this.heroeService.searchUnHeroe(this.nombreH);
      console.log(this.indice);
      if (this.indice != -1) {
        this.miHeroe = this.heroeService.getUnHeroe(this.indice)
      }
    });
  }

  ngOnInit(): void {
  }

}

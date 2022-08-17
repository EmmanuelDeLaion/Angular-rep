import { Component, Input, OnInit } from '@angular/core';
import { PersonajesService } from 'src/app/services/personajes.service';
import { Personajes } from 'src/interfaces/personajes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() personaje: any;

  img: string = "";

  constructor(
    public http: PersonajesService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.img = this.personaje.imageUrl;
  }

  verPersonaje(name: string){
    this.route.navigateByUrl(`personaje-view/${name}`);
  }

}

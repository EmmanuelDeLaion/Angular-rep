import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonajesService } from '../../../services/personajes.service';

@Component({
  selector: 'app-personaje-view',
  templateUrl: './personaje-view.component.html',
  styleUrls: ['./personaje-view.component.scss']
})
export class PersonajeViewComponent implements OnInit {

  nombrePersonaje: any;
  personajeDB: any = {};

  constructor(
    public activatedRoute: ActivatedRoute,
    public route: Router,
    public http: PersonajesService
  ) {
    this.nombrePersonaje = this.activatedRoute.snapshot.paramMap.get("name");
   }

  ngOnInit(): void {
    this.getPersonaje();
  }

  getPersonaje():void{
    this.http.getPersonajeName(this.nombrePersonaje).subscribe(
      resp => {
        this.personajeDB = resp;
      }
    );
  }

  home():void{
    this.route.navigateByUrl("home");
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personajes } from 'src/interfaces/personajes';
import { PersonajesService } from '../../services/personajes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  personajes: Personajes[] = [];

  constructor(
    private route: Router,
    public http: PersonajesService
  ) { }

  ngOnInit(): void {
    this.getPersonajes();
  }

  login(){
    this.route.navigateByUrl("login");
  }

  getPersonajes(){
    this.http.getPersonajes().subscribe(
      resp => {
        this.personajes = resp;
      }
    );
  }

}

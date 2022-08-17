import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-personaje-view',
  templateUrl: './personaje-view.component.html',
  styleUrls: ['./personaje-view.component.scss']
})
export class PersonajeViewComponent implements OnInit {

  nombrePersonaje: any;

  constructor(
    public activatedRoute: ActivatedRoute,
    public route: Router
  ) {
    this.nombrePersonaje = this.activatedRoute.snapshot.paramMap.get("name");
   }

  ngOnInit(): void {
    console.log(this.nombrePersonaje);
  }

  home():void{
    this.route.navigateByUrl("home");
  }

}

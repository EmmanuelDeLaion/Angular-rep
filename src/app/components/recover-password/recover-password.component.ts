import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss']
})
export class RecoverPasswordComponent implements OnInit {

  constructor(
    private route: Router
  ) {}

  ngOnInit(): void {
  }

  login(){
    this.route.navigateByUrl("login");
  }

}

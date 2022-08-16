import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Empleado } from 'src/interfaces/empleado-login';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formLogin: FormGroup;


  constructor(
    public formBuilder: FormBuilder
  ) {

    this.formLogin = formBuilder.group({
      nombre: ['', [Validators.required]],
      correo: ['',[Validators.required]]
    });

  }


  ngOnInit(): void {}


  login(body: Empleado):void{
    if(this.formLogin.valid){
      console.log(body);
      this.resetCampos();
    }else{
      Swal.fire({
        title: 'Faltan campos',
        icon: 'error',
        text: 'Ingrese todos los campos',
        confirmButtonText: 'Aceptar'
      });
    }
  }

  resetCampos():void{
    this.formLogin.reset();
  }

}

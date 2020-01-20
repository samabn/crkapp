import { Component, OnInit } from '@angular/core';
import { ClienteModel } from 'src/app/models/cliente.model';
import { NgForm } from '@angular/forms';
import { faSave, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  cliente = new ClienteModel();
  _faSave = faSave;
  _faArrowLeft = faArrowLeft;
  activo = false;

  constructor() { }

  ngOnInit() {
  }

  save(formulario: NgForm) {
    if(formulario.invalid) {
      console.log('Faltan datos');      
    } else {
      this.activo = true;
      console.log(formulario);
      console.log(this.cliente);
    }
  }

}

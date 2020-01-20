import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClienteModel } from '../models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private url = 'https://creatikos-96271.firebaseio.com';

  //https://creatikos-96271.firebaseio.com/clientes

  constructor(private httpclient: HttpClient) {}

  crearCliente(cliente: ClienteModel) {
    this.httpclient.post(`${this.url}/clientes`, '');
  }
}

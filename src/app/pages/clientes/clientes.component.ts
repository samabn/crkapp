import { Component, OnInit } from '@angular/core';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons'
// import { state, transition, trigger, style, animate } from '@angular/animations';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  _faPencil = faPencilAlt;
  _faTrash = faTrash;

  clientes = [
    {
      id: 'saa1',
      nombre: 'Samuel Arizmendi Abundis',
      direccion: 'Cumbres de Llano Largo',
      celular: '7443811179',
      telefono: '4350421',
      correo: 'sam.abundis82@gmail.com'
    },
    {
      id: 'eal2',
      nombre: 'Emilio Arizmendi León',
      direccion: 'San Pedro',
      celular: '7443811170',
      telefono: '',
      correo: 'leon@gmail.com'
    },
    {
      id: 'aap3',
      nombre: 'Antonia Abundis Poblete',
      direccion: 'Tres Palos',
      celular: '7443811171',
      telefono: '',
      correo: 'tonita@gmail.com'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  deleteClient(id: string) {
    console.log('Se va a eliminar el cliente con id: ', id);
    
  }

  editClient(id: string) {
    console.log('Se va a editar el cliente con id: ', id);
    
  }

}

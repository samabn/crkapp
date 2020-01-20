import { Component, OnInit } from '@angular/core';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
/*import { state, transition, trigger, style, animate } from '@angular/animations';*/

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  /*animations: [
    trigger('hideState', [
      state('hide', style({
        transition: 'translateX(-100%)',
        opacity: 0
      })),
      state('show', style({
          transition: 'translateX(0)',
          opacity: 1
        })),
        transition('hide => show', animate('100ms ease-in')),
        transition('show => hide', animate('100ms ease-out'))
    ])
  ]*/
})
export class HeaderComponent implements OnInit {

  _faBars = faBars;
  _faSearch = faSearch;
  _stateMenu = 'hide';

  constructor() { }

  ngOnInit() {
  }

  hideShowMenu() {
    this._stateMenu = this._stateMenu === 'hide' ? 'show-menu' : 'hide';
    console.log('Hola', this._stateMenu);
  }

}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidenavComponent implements OnInit {
  panelOpenState = false;

  TypeofShakes: string[] = ['Baunilha', 'Morango', 'Chocolate', 'Milho Verde'];

  TypeofDrinks: string[] = ['N.R.G', 'Herbal Concentrade'];
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import {Menu} from "./home.model";
import {menu} from "./menu";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  menu: Menu[] = menu;
  constructor() { }

  ngOnInit(): void {
  }

}

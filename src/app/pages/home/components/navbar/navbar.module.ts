import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './navbar.component';
import {MatRippleModule} from "@angular/material/core";
import {RouterLink} from "@angular/router";


const MATERIAL_UI = [MatRippleModule]

@NgModule({
  declarations: [
    NavbarComponent
  ],
  exports: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MATERIAL_UI,
    RouterLink
  ]
})
export class NavbarModule {
}

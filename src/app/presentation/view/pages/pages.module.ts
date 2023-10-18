import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PoloListModule } from './polo-list/polo-list.module';
import { PoloDetailsModule } from './polo-details/polo-details.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMaskModule } from 'ngx-mask';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    PoloListModule,
    PoloDetailsModule,
    PagesRoutingModule,
    NgxMaskModule.forChild()
  ],
  exports: [PagesRoutingModule]
})
export class PagesModule { }

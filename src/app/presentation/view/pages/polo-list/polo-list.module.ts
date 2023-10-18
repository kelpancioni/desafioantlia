import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoloListComponent } from './polo-list.component';

import { PoloListRoutingModule } from './polo-list-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { PoloListTableComponent } from './polo-list-table/polo-list-table.component';


@NgModule({
  declarations: [
    PoloListComponent, 
    PoloListTableComponent
  ],
  imports: [
    CommonModule,
    PoloListRoutingModule,
    SharedModule
  ],
  exports: [
    PoloListComponent
  ]
})
export class PoloListModule { }

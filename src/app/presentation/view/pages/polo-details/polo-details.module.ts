import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoloDetailsComponent } from './polo-details.component';

import { PoloDetailsRoutingModule } from './polo-details-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AddressFormComponent } from './address-form/address-form.component';
import { BusinessFormComponent } from './business-form/business-form.component';

@NgModule({
  declarations: [
    PoloDetailsComponent,
    AddressFormComponent,
    BusinessFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PoloDetailsRoutingModule,
    SharedModule,
  ],
  exports: [],
})
export class PoloDetailsModule {}

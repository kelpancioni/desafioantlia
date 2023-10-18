import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewModule } from './view/view.module';
import { IBusinessController } from '../domain/interfaces/controllers/ibusiness-controller';
import { BusinessControllerService } from './controllers/business-controller.service';
import { ICepController } from '../domain/interfaces/controllers/icep-controller';
import { CepControllerService } from './controllers/cep-controller.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ViewModule
  ],
  exports: [ViewModule],
  providers: [
    { provide: IBusinessController, useClass: BusinessControllerService },
    { provide: ICepController, useClass: CepControllerService },
  ]
})
export class PresentationModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IBusinessUseCase } from './interfaces/usecases/ibusiness-use-case';
import { BusinessUseCase } from './usecases/business-use-case';
import { ICepUseCase } from './interfaces/usecases/icep-use-case';
import { CepUseCase } from './usecases/cep-use-case';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {provide: IBusinessUseCase, useClass: BusinessUseCase},
    {provide: ICepUseCase, useClass: CepUseCase}
  ]
})
export class DomainModule { }

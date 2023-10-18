import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { IBusinessRepository } from '../domain/interfaces/repository/ibusiness-repository';
import { BusinessRepository } from './repository/business-repository';
import { ICepRepository } from '../domain/interfaces/repository/icep-repository';
import { CepRepository } from './repository/cep-repository';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    { provide: IBusinessRepository, useClass: BusinessRepository },
    { provide: ICepRepository, useClass: CepRepository },
  ]
})
export class DataModule { }

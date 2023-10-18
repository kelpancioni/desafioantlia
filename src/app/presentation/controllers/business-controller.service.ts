import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BusinessEntity } from 'src/app/domain/entities/business-entity';
import { IBusinessController } from 'src/app/domain/interfaces/controllers/ibusiness-controller';
import { IBusinessUseCase } from 'src/app/domain/interfaces/usecases/ibusiness-use-case';

@Injectable({
  providedIn: 'root'
})
export class BusinessControllerService implements IBusinessController {

  constructor(
    private businessUseCase: IBusinessUseCase
  ) { }

  getList(): Observable<BusinessEntity[]> {
    return this.businessUseCase.getList();
  }

  getBusinessById(id: number): Observable<BusinessEntity> {
    return this.businessUseCase.getBusinessById(id);
  }
}

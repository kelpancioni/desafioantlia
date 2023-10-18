import { Injectable } from '@angular/core';
import { IBusinessUseCase } from '../interfaces/usecases/ibusiness-use-case';
import { BusinessEntity } from '../entities/business-entity';
import { Observable } from 'rxjs';
import { IBusinessRepository } from '../interfaces/repository/ibusiness-repository';

@Injectable({
  providedIn: 'root'
})
export class BusinessUseCase implements IBusinessUseCase {

  constructor(private businessRepository: IBusinessRepository) { }

  getList(): Observable<BusinessEntity[]> {
    return this.businessRepository.getList();
  }

  getBusinessById(id: number): Observable<BusinessEntity> {
    return this.businessRepository.getBusinessById(id);
  }
}

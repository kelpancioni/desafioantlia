import { Injectable } from '@angular/core';
import { ICepUseCase } from '../interfaces/usecases/icep-use-case';
import { CepEntity } from '../entities/cep-entity';
import { ICepRepository } from '../interfaces/repository/icep-repository';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CepUseCase implements ICepUseCase {

  constructor(
    private cepRepository: ICepRepository
  ) { }

  getCep(cep: string): Observable<CepEntity> {
    return this.cepRepository.getCep(cep)
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CepEntity } from 'src/app/domain/entities/cep-entity';
import { ICepController } from 'src/app/domain/interfaces/controllers/icep-controller';
import { ICepUseCase } from 'src/app/domain/interfaces/usecases/icep-use-case';

@Injectable({
  providedIn: 'root'
})
export class CepControllerService implements ICepController {

  constructor(
    private cepUsecase: ICepUseCase
  ) { }

  getCep(cep: string): Observable<CepEntity> {
    return this.cepUsecase.getCep(cep)
  }
}

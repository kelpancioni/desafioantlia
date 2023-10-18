import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CepEntity } from 'src/app/domain/entities/cep-entity';
import { ICepRepository } from 'src/app/domain/interfaces/repository/icep-repository';

@Injectable({
  providedIn: 'root'
})
export class CepRepository implements ICepRepository {

  constructor(
    private http: HttpClient
  ) { }

  getCep(cep: string): Observable<CepEntity> {
      return this.http.get('https://viacep.com.br/ws/' + cep + '/json/')
    }
}

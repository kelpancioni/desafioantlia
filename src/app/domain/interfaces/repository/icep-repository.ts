import { Observable } from "rxjs";
import { CepEntity } from "../../entities/cep-entity";

export abstract class ICepRepository {
   abstract getCep(cep: string): Observable<CepEntity>
}
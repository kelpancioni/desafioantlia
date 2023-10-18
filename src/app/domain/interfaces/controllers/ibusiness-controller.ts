import { Observable } from "rxjs";
import { BusinessEntity } from "../../entities/business-entity";

export abstract class IBusinessController {
   abstract getList(): Observable<BusinessEntity[]>
   abstract getBusinessById(id: number): Observable<BusinessEntity>
}
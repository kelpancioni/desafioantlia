import { Observable } from "rxjs";
import { BusinessEntity } from "../../entities/business-entity";

export abstract class IBusinessRepository {
   abstract getList(): Observable<BusinessEntity[]>
   abstract getBusinessById(id: number): Observable<BusinessEntity>
   abstract postBusiness(business: BusinessEntity): Observable<BusinessEntity>
}
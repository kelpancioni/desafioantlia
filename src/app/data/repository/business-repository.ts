import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { BusinessEntity } from "src/app/domain/entities/business-entity";
import { IBusinessRepository } from "src/app/domain/interfaces/repository/ibusiness-repository";
import { environment } from 'src/environments/environment';

@Injectable({
   providedIn: 'root'
 })
export class BusinessRepository implements IBusinessRepository {

   constructor(
      private http: HttpClient
   ) {

   }

   getList(): Observable<BusinessEntity[]> {
      return this.http
      .get<BusinessEntity[]>(environment.API + '/itau_teste')
   }

   getBusinessById(id: number): Observable<BusinessEntity> {
      return this.http
      .get<BusinessEntity>(environment.API + '/itau_teste/' + id)
   }

   postBusiness(business: BusinessEntity): Observable<BusinessEntity> {
      console.log('oi')
      return of<BusinessEntity>(business)
   }
}

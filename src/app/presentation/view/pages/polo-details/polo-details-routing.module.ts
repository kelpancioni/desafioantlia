import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { RouteService } from '../route.service';
import { PoloDetailsComponent } from './polo-details.component';


const routes: Routes = [
  RouteService.withShell([{
      path: 'polo-details/:id',
      component: PoloDetailsComponent,
    }]
  )
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoloDetailsRoutingModule {
}

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { RouteService } from '../route.service';
import { PoloListComponent } from './polo-list.component';


const routes: Routes = [
  RouteService.withShell([{
      path: '',
      component: PoloListComponent,
    }]
  )
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoloListRoutingModule {
}

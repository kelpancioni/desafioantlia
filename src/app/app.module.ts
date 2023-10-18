import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PresentationModule } from './presentation/presentation.module';
import { DomainModule } from './domain/domain.module';
import { InfraModule } from './infra/infra.module';
import { DataModule } from './data/data.module';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    PresentationModule,
    DomainModule,
    InfraModule,
    DataModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

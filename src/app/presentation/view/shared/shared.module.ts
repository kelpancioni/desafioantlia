import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { NgxMaskModule } from 'ngx-mask';

const components = [
  HeaderComponent, 
  ButtonComponent, 
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    RouterModule, 
    MaterialModule, 
    NgxMaskModule.forRoot()
  ],
  exports: [
    ...components,
    RouterModule, 
    MaterialModule,
    NgxMaskModule
  ],
  providers: [],
})
export class SharedModule {}

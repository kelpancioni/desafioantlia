import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { NgxMaskModule } from 'ngx-mask';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    BrowserAnimationsModule,
    NgxMaskModule.forRoot(),
    ToastrModule.forRoot(),
  ],
  exports: [
    ...components,
    RouterModule, 
    MaterialModule,
    BrowserAnimationsModule,
    NgxMaskModule,
    ToastrModule
  ],
  providers: [],
})
export class SharedModule {}

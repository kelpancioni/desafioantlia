import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';

const components = [
  HeaderComponent, 
  ButtonComponent, 
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [RouterModule, MaterialModule],
  exports: [
    ...components,
    RouterModule, 
    MaterialModule],
  providers: [],
})
export class SharedModule {}

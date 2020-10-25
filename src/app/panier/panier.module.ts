import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from'@angular/router';
import { PanierComponent } from './panier.component';

const routes: Routes = [
  {
    path: '',
    component: PanierComponent
  }
];

@NgModule({
  declarations: [
    PanierComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
  
})
export class PanierModule { }

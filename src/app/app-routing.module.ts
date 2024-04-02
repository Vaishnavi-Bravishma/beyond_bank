import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditCardPageComponent } from './credit-card-page/credit-card-page.component';
import { LoanPageComponent } from './loan-page/loan-page.component';

const routes: Routes = [
  {
    path: '',
    component: CreditCardPageComponent,

  },
  {
    path: 'loan',
    component:LoanPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

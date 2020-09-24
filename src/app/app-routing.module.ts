import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//views
import { HomeComponent } from './views/home/home.component';
import { InvoicingComponent } from './views/invoicing/invoicing.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'invoicing', component: InvoicingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

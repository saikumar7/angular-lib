import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestDropdownComponent } from './test-dropdown/test-dropdown.component';


const routes: Routes = [
  { path: 'dropdown', component: TestDropdownComponent },
  { path: '',   redirectTo: '/dropdown', pathMatch: 'full' },
  { path: '**', component: TestDropdownComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

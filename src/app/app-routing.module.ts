import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestDropdownComponent } from './test-dropdown/test-dropdown.component';


const routes: Routes = [
  { path: 'dropdown', component: TestDropdownComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BluestackComponent } from './bluestack/bluestack.component';
const routes: Routes = [
  { path: '', redirectTo: 'bluestack', pathMatch: 'full' },
  { path: 'bluestack',component: BluestackComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

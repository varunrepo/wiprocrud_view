import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateformComponent } from './components/createform/createform.component';
import { ViewformComponent } from './components/viewform/viewform.component';

const routes: Routes = [
  {
    path: '',
    component: CreateformComponent,
  },
  {
    path: 'view',
    component: ViewformComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DummyComponent } from './dummy/dummy.component';
import { Dummy2Component } from './dummy2/dummy2.component';

const routes: Routes = [
  { path: 'dummy', component: DummyComponent },
  { path: 'dummy2', component: Dummy2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

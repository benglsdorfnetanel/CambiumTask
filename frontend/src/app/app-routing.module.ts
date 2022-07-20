import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsReadyComponent } from './components/is-ready/is-ready.component';
import { SaveComponent } from './components/save/save.component';

const routes: Routes = [
  { path: '',   redirectTo: '', pathMatch: 'full',component: SaveComponent },
  { path: 'copypaste/:id', component: IsReadyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

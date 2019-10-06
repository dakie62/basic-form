import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: 'basic-form',
    loadChildren: () => import('./basic-form/basic-form/basic-form.module').then(m => m.BasicFormModule)
  },
  {path: '', redirectTo: 'basic-form', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

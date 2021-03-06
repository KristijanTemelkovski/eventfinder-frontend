import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module')
      .then(m => m.AuthModule), pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./event/event.module')
      .then(m => m.EventModule), pathMatch: 'full'
  },
  { path:'', redirectTo:'', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

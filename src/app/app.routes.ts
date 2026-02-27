import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login';
import { ProdutoListComponent } from './components/produto-list/produto-list';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'produtos', component: ProdutoListComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' } // Inicia sempre no login
];

import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login';
import { ProdutoListComponent } from './components/produto-list/produto-list';
import { ProdutoFormComponent } from './components/produto-form/produto-form';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'produtos', component: ProdutoListComponent },
  { path: 'produtos/novo', component: ProdutoFormComponent }, // Rota de Cadastro
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

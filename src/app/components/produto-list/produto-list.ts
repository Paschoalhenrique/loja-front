import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProdutoService } from '../../services/produto.service';
//import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-produto-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produto-list.html', // Verifique se o nome é produto-list.html ou produto-list.component.html
  styleUrl: './produto-list.css'
})
export class ProdutoListComponent implements OnInit {
  produtos: any[] = [];

  constructor(
    private service: ProdutoService, // O nome aqui é "service"
    private router: Router

  ) {}

  ngOnInit(): void {
    // CORREÇÃO AQUI: Use this.service em vez de this.login
    this.service.listar().subscribe({
      next: (res: any[]) => {
        this.produtos = res;
      },
      error: (err: any) => {
        console.error('Erro ao chamar a API do Java:', err);
      }
    });
  }

  deslogar() {
    this.router.navigate(['/login']);
  }
}

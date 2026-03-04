import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-produto-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produto-list.html',
  styleUrl: './produto-list.css'
})
export class ProdutoListComponent implements OnInit {

  produtos: any[] = [];

  constructor(
    private service: ProdutoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.service.listar().subscribe({
      next: (res: any[]) => {
        this.produtos = res;
      },
      error: (err: any) => {
        console.error('Erro ao chamar a API do Java:', err);
      }
    });
  }

  irParaCadastro(): void {
    // Removido o 'throw new Error' para permitir a navegação
    this.router.navigate(['/produtos/novo']);
  }

  deslogar(): void {
    this.router.navigate(['/login']);
  }
}

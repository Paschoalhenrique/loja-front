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

  constructor(private service: ProdutoService, private router: Router) {}

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.service.listar().subscribe({
      next: (res: any[]) => {
        this.produtos = res;
        console.log('Produtos carregados:', this.produtos); // Verifique no F12 se o 'id' aparece aqui
      },
      error: (err: any) => { console.error('Erro ao listar:', err); }
    });
  }

  irParaEditar(id: any): void {
    console.log('Tentando editar o produto com ID:', id);
    // Verificação robusta para IDs que venham nulos do banco
    if (id !== undefined && id !== null) {
      this.router.navigate(['/produtos/editar', id]);
    } else {
      alert('Erro: O ID do produto está indefinido no banco de dados!');
    }
  }

  deletar(id: any): void {
    if (id === undefined || id === null) {
      alert('Não é possível excluir um produto sem ID válido.');
      return;
    }

    if (confirm('Deseja realmente excluir este produto?')) {
      this.service.excluir(id).subscribe({
        next: () => {
          alert('Excluído com sucesso!');
          this.carregarProdutos();
        },
        error: (err: any) => {
          console.error('Erro ao deletar:', err);
          alert('Erro ao excluir produto. Verifique a conexão com o servidor.');
        }
      });
    }
  }

  irParaCadastro(): void {
    this.router.navigate(['/produtos/novo']);
  }

  deslogar(): void {
    this.router.navigate(['/login']);
  }
}

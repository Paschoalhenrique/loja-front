import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-produto-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produto-form.html',
  styleUrl: './produto-form.css'
})
export class ProdutoFormComponent {

  constructor(
    private service: ProdutoService,
    private router: Router
  ) {}

  // Função para salvar o produto no banco via Spring Boot
  salvar(nome: string, preco: string, descricao: string): void {
    // Criamos o objeto no formato que o seu Java espera
    const novoProduto = {
      nome: nome,
      preco: parseFloat(preco), // Converte o texto para número
      descricao: descricao
    };

    if (nome && preco) {
      this.service.salvar(novoProduto).subscribe({
        next: (res) => {
          console.log('Produto salvo com sucesso!', res);
          alert('Produto cadastrado!');
          this.voltar(); // Volta para a lista após salvar
        },
        error: (err) => {
          console.error('Erro ao salvar produto:', err);
          alert('Erro ao conectar com o servidor.');
        }
      });
    } else {
      alert('Por favor, preencha o nome e o preço.');
    }
  }

  // Função para o botão voltar
  voltar(): void {
    this.router.navigate(['/produtos']);
  }
}

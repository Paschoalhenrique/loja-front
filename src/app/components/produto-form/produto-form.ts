import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common'; // Importado Location para navegação simples
import { FormsModule } from '@angular/forms'; // OBRIGATÓRIO para o [(ngModel)]
import { Router, ActivatedRoute } from '@angular/router';
import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-produto-form',
  standalone: true,
  imports: [CommonModule, FormsModule], // Adicionado FormsModule aqui
  templateUrl: './produto-form.html',
  styleUrl: './produto-form.css'
})
export class ProdutoFormComponent implements OnInit {

  // Objeto que armazena os dados do formulário
  produto: any = {
    nome: '',
    preco: null,
    descricao: ''
  };

  idEdicao: number | null = null;

  constructor(
    private service: ProdutoService,
    private router: Router,
    private route: ActivatedRoute // Para ler o ID da URL
  ) {}

  ngOnInit(): void {
    // Verifica se existe um parâmetro 'id' na URL (ex: /produtos/editar/2)
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.idEdicao = +id;
      this.carregarProdutoParaEdicao(this.idEdicao);
    }
  }

  carregarProdutoParaEdicao(id: number): void {
    this.service.buscarPorId(id).subscribe({
      next: (res) => {
        this.produto = res; // Preenche o formulário com os dados vindos do Java
      },
      error: (err) => {
        console.error('Erro ao carregar produto:', err);
        alert('Não foi possível carregar os dados do produto.');
      }
    });
  }

  // Função unificada para Salvar ou Atualizar
  submit(): void {
    if (!this.produto.nome || !this.produto.preco) {
      alert('Por favor, preencha o nome e o preço.');
      return;
    }

    if (this.idEdicao) {
      // Se estamos editando, chama o PUT do Back-end
      this.service.atualizar(this.idEdicao, this.produto).subscribe({
        next: () => {
          alert('Produto atualizado com sucesso!');
          this.voltar();
        },
        error: (err) => console.error('Erro ao atualizar:', err)
      });
    } else {
      // Se é novo, chama o POST
      this.service.salvar(this.produto).subscribe({
        next: () => {
          alert('Produto cadastrado com sucesso!');
          this.voltar();
        },
        error: (err) => console.error('Erro ao salvar:', err)
      });
    }
  }

  voltar(): void {
    this.router.navigate(['/produtos']);
  }
}

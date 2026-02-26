import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
// Note que usamos ../../ para subir duas pastas e chegar em services
import { ProdutoServicoService } from '../../services/produto.service';

@Component({
  selector: 'app-produto-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produto-list.html',
  styleUrl: './produto-list.css'
})
export class ProdutoListComponent implements OnInit {
  produtos: any[] = [];

  // O nome do tipo aqui deve ser idêntico ao exportado no service
  constructor(private service: ProdutoServicoService) {}

  ngOnInit(): void {
    this.service.listar().subscribe({
      next: (res: any[]) => {
        this.produtos = res;
      },
      error: (err: any) => {
        console.error('Erro ao chamar a API do Java:', err);
      }
    });
  }
}

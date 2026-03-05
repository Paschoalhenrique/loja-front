import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private API = 'http://localhost:8080/api/produtos';

  constructor(private http: HttpClient) { }

  // Retorna a lista completa de produtos para a tabela
  listar(): Observable<any[]> {
    return this.http.get<any[]>(this.API);
  }

  // Busca um único produto pelo ID para preencher o formulário de edição
  buscarPorId(id: number): Observable<any> {
    return this.http.get<any>(`${this.API}/${id}`);
  }

  // Cria um novo produto no banco de dados
  salvar(produto: any): Observable<any> {
    return this.http.post<any>(this.API, produto);
  }

  // Atualiza um produto existente (Função de Edição)
  atualizar(id: number, produto: any): Observable<any> {
    return this.http.put<any>(`${this.API}/${id}`, produto);
  }

  // Remove o produto permanentemente do banco de dados
  excluir(id: number): Observable<any> {
    return this.http.delete(`${this.API}/${id}`);
  }
}

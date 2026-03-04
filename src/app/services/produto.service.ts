import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  // Padronizamos o nome para API conforme sua última versão
  private API = 'http://localhost:8080/api/produtos';

  constructor(private http: HttpClient) { }

  // Método para buscar a lista de produtos (GET)
  listar(): Observable<any[]> {
    return this.http.get<any[]>(this.API);
  }

  // Método para enviar um novo produto (POST)
  salvar(produto: any): Observable<any> {
    // Corrigido para usar this.API em vez de apiUrl
    return this.http.post<any>(this.API, produto);
  }
}

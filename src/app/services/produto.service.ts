import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private API = 'http://localhost:8080/api/produtos';

  constructor(private http: HttpClient) { }

  listar(): Observable<any[]> {
    return this.http.get<any[]>(this.API);
  }

  salvar(produto: any): Observable<any> {
    return this.http.post<any>(this.API, produto);
  }

  // O 'return' é obrigatório aqui para o .subscribe() funcionar no componente
  excluir(id: number): Observable<any> {
    return this.http.delete(`${this.API}/${id}`);
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Necessário para navegar entre telas

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {
  constructor(private router: Router) {} // Injeta o serviço de rotas

  logar(user: string, pass: string) {
    if (user === 'adm' && pass === '123') {
      this.router.navigate(['/produtos']); // Vai para a tabela se os dados baterem
    } else {
      alert('Usuário ou senha incorretos!');
    }
  }
}

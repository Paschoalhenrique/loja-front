import { Component } from '@angular/core';
import { ProdutoListComponent } from './components/produto-list/produto-list';

@Component({
  selector: 'app-root',
  standalone: true,
  // Remova o RouterOutlet daqui para sumir o Warning do terminal
  imports: [ProdutoListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'loja-front';
}

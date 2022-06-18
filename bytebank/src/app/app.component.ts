import { TransferenciaService } from './services/transferencia.service';
import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	// destino: number;
	// valor: number;
	// transferencias: any[] = [];

	constructor(private service: TransferenciaService) {}

	// transferir($event) {
	//   console.log('Evento: ', $event);
	//   // this.destino = $event.destno;
	//   // this.valor = $event.valor;
	//   this.service.adicionar($event);
	// }
	exibirModalErro(mensagem) {
		console.log('Mensagem: ', mensagem);
		// implementação da lógica para exibir o modal
	}
}

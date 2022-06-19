import { TransferenciaService } from '../services/transferencia.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';
import { Router } from '@angular/router';

@Component({
	selector: 'app-nova-transferencia',
	templateUrl: './nova-transferencia.component.html',
	styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {
	@Output() aoTransferir = new EventEmitter<any>();
	@Output() valoresComErro = new EventEmitter<string>();

	valor: number;
	destino: number;

	constructor(private service: TransferenciaService, private router: Router) {}

	transferir() {
		console.log('Solicitada transferencia!!!');
		// console.log('Valor:', this.valor);
		// console.log('Destino:', this.destino);
		if (this.ehValido()) {
			// this.aoTransferir.emit({ valor: this.valor, destino: this.destino });
			const valorEmitir: Transferencia = {
				valor: this.valor,
				destino: this.destino
			};
			this.service.adicionar(valorEmitir).subscribe(
				resultado => {
					console.log(resultado);
					this.limparCampor();
					this.router.navigateByUrl('extrato');
				},
				error => {
					console.log(error);
				}
			);
		}
	}

	private ehValido() {
		const valido = this.valor > 0;
		if (!valido) {
			this.valoresComErro.emit('Informe um valor válido');
		}
		return valido;
	}

	limparCampor() {
		this.valor = 0;
		this.destino = 0;
	}
}

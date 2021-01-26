/** @format */

import { from } from 'rxjs';
import { map, reduce, scan } from 'rxjs/operators';

const numeros = [1, 2, 3, 4, 5];

const totalAcumulador = (acc, cur) => acc + cur;

// Reduce
from(numeros).pipe(reduce(totalAcumulador, 0)).subscribe(console.log);

// Scan
from(numeros).pipe(scan(totalAcumulador, 0)).subscribe(console.log);

// Redux
interface Usuario {
	id?: string;
	autenticado?: boolean;
	token?: string;
	edad?: number;
}
const user: Usuario[] = [
	{ id: 'die', autenticado: false, token: null },
	{ id: 'die', autenticado: true, token: 'abc' },
	{ id: 'die', autenticado: true, token: 'ABC123' },
];

const state$ = from(user).pipe(
	scan<Usuario>(
		(acc, cur) => {
			return { ...acc, ...cur };
		},
		{ edad: 29 }
	)
);
state$.subscribe(console.log);

const id$ = state$.pipe(map((state) => state.id));
id$.subscribe(console.log);

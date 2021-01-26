/** @format */

import { interval } from 'rxjs';
import { reduce, take, tap } from 'rxjs/operators';

// Reduce en JS
const numbers = [1, 2, 3, 4, 5];

function totalReducer(acumulador: number, valorActual: number) {
	return acumulador + valorActual;
}

const total = numbers.reduce(totalReducer, 0);
console.log('total arr', total); // 15.

// Reduce con RxJS
interval(500)
	.pipe(take(5), tap(console.log), reduce(totalReducer))
	.subscribe({
		next: (val) => console.log('next:', val),
		complete: () => console.log('Complete'),
	});

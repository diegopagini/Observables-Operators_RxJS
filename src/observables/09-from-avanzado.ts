/** @format */

import { of, from } from 'rxjs';

// Of = toma argumentos y genera una secuencia de valores.
// From = array, promise, interable observale.

const observer = {
	next: (val) => console.log('next', val),
	complete: () => console.log('complete'),
};

const miGenerador = function* () {
	yield 1;
	yield 2;
	yield 3;
	yield 4;
	yield 5;
};

const miIterable = miGenerador();

for (let id of miIterable) {
	console.log(id);
}

// mismo resultado con From

from(miIterable).subscribe(observer);

// const source$ = from([1, 2, 3, 4, 5]);
// const source$ = of(...[1, 2, 3, 4, 5]); mismo resultado,

// const source$ = from('Diego'); 'Diego'
// const source$ = of('Diego'); 'D', 'i', 'e', 'g', 'o'

const source$ = from(fetch('https://api.github.com/users/klerith'));

source$.subscribe(async (resp) => {
	console.log(resp);

	const dataResp = await resp.json();
	console.log(dataResp);
});

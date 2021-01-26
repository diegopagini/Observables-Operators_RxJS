/** @format */

import { filter, map } from 'rxjs/operators';
import { from, fromEvent, range } from 'rxjs';

range(1, 10)
	.pipe(filter((value) => value % 2 === 1))
	.subscribe(console.log);
// 1, 3, 5, 7, 9

// Misma funcion con index
range(1, 10)
	.pipe(
		filter((value, index) => {
			console.log('index', index);
			return value % 2 === 1;
		})
	)
	.subscribe(console.log);
// 1, 3, 5, 7, 9

interface Personaje {
	tipo: string;
	nombre: string;
}
const personajes: Personaje[] = [
	{
		tipo: 'heroe',
		nombre: 'Batman',
	},
	{
		tipo: 'heroe',
		nombre: 'Robin',
	},
	{
		tipo: 'villano',
		nombre: 'Joker',
	},
];

from(personajes) // From transforma cualquier cosa en un observable.
	.pipe(filter((personaje) => personaje.tipo === 'heroe'))
	.subscribe(console.log);
// Batman, Robin.

// Cadena de strings
// El orden importa.
const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
	map((event) => event.code), // recibe keyboardevent, sale un string.
	filter((key) => key === 'Enter') // solo va a aparecer si la tecla precionada es "Enter"
);
keyup$.subscribe(console.log);

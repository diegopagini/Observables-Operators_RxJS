/** @format */

import { from, of } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

const numeros$ = of<number | string>(1, '1', 1, 5, 3, 3, 2, 2, 4, 4, 5, 3, 1); // Emite valores que sean diferentes al ultimo emitido

// Muestra unicamente los que no se repiten consecutivamente.
numeros$.pipe(distinctUntilChanged()).subscribe(console.log);

interface Personaje {
	nombre: string;
}

const personajes: Personaje[] = [
	{ nombre: 'Megaman' },
	{ nombre: 'Megaman' },
	{ nombre: 'X' },
	{ nombre: 'Zero' },
	{ nombre: 'Dr. Willy' },
	{ nombre: 'Megaman' },
	{ nombre: 'X' },
	{ nombre: 'X' },
	{ nombre: 'Zero' },
	{ nombre: 'Dr. Willy' },
];

from(personajes).subscribe(console.log); // De esta forma pasan todas las subscripciones}

from(personajes)
	.pipe(distinctUntilChanged((ant, act) => ant.nombre === act.nombre))
	.subscribe(console.log); // Si el anterior y el actual son iguales, no los deja pasar. Solo permite uno.

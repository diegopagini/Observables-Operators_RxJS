/** @format */

import { from, of } from 'rxjs';
import { distinct } from 'rxjs/operators';

const numeros$ = of<number | string>(1, '1', 1, 1, 3, 3, 2, 2, 4, 4, 5, 3, 1); // utiliza el === de Js

// Muestra unicamente los que no se repiten.
numeros$.pipe(distinct()).subscribe(console.log);

interface Personaje {
	nombre: string;
}

const personajes: Personaje[] = [
	{ nombre: 'Megaman' },
	{ nombre: 'X' },
	{ nombre: 'Zero' },
	{ nombre: 'Dr. Willy' },
	{ nombre: 'Megaman' },
	{ nombre: 'X' },
	{ nombre: 'Zero' },
	{ nombre: 'Dr. Willy' },
];

from(personajes).subscribe(console.log); // De esta forma pasan todas las subscripciones}

from(personajes)
	.pipe(distinct((personaje) => personaje.nombre))
	.subscribe(console.log); // De esta forma solo emite los nombres que no se repiten. Hay que usar argumentos

/** @format */

import { fromEvent } from 'rxjs';

// Eventos del DOM

const src1$ = fromEvent<MouseEvent>(document, 'click'); // al declarar el tipo me va a dar todos los atajos que podria mostar
const src2$ = fromEvent<KeyboardEvent>(document, 'keyup');

const observer = {
	next: (val) => console.log('next', val),
};

// src1$.subscribe( ({ x, y}) => { con desestructuracion.
src1$.subscribe((ev) => {
	// para saber en parque estoy haciendo "click"
	console.log('x', ev.x);
	console.log('y', ev.y);
});
src2$.subscribe((evento) => {
	console.log(evento.key); // para saber que tecla estoy presionando.
});

/** @format */

import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, pluck } from 'rxjs/operators';

const click$ = fromEvent(document, 'click');

click$.pipe(debounceTime(3000)).subscribe(console.log); // muestra datos unicamente una vez que pasan los 3 seg desde que se emitio el ultimo evento.

const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent(input, 'keyup');
input$
	.pipe(debounceTime(1000), pluck('target', 'value'), distinctUntilChanged()) // Solo va a emitir la emision un segundo despues.
	.subscribe(console.log);

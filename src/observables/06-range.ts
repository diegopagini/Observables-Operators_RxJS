/** @format */

import { range, of, asyncScheduler } from 'rxjs';

const src$ = of(1, 2, 3, 4, 5); // es sincrono
const src2$ = range(1, 5, asyncScheduler); // de esta manera para a aser asincrono, se ejecuta primero 'Inicio' y 'Fin' y luego el conteo

console.log('Inicio');
src$.subscribe(console.log);
console.log('Fin');

console.log('Inicio');
src2$.subscribe(console.log);
console.log('Fin');

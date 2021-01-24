/** @format */

import { interval, timer } from 'rxjs'; // si viene directo de rxjs es una funcion para crear observables o tipados

const observer = {
	next: (val) => console.log('next', val), // 'next' cuando se emite el siguiente valor.
	complete: () => console.log('complete'), // 'complete' cuando se completa
};

const hoyEn5 = new Date(); // ahora
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);

const interval$ = interval(1000); // asincrono
interval$.subscribe(observer);

// const timer$ = timer(2000);
// const timer$ = timer(2000, 1000);
const timer$ = timer(hoyEn5); // asincrono

timer$.subscribe(observer);

/** @format */

import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
	next: (value) => console.log('next', value),
	error: (error) => console.warn('error', error),
	complete: () => console.info('completado'),
};

const intervalo$ = new Observable<number>((subscriber) => {
	// Cada vez que se hace un next emite un numero.
	// Crear un contador: ej: 1, 2, 3, 4, 5...

	let count = 0;

	const interval = setInterval(() => {
		//cada segundo
		count++;
		subscriber.next(count);
	}, 1000); // cada 2.5 seg va a sumar 1 al count.

	setTimeout(() => {
		subscriber.complete();
	}, 2500);

	return () => {
		clearInterval(interval);
		console.log('Intervalo destruido');
	};
});

const subscription1 = intervalo$.subscribe(observer);
const subscription2 = intervalo$.subscribe(observer);
const subscription3 = intervalo$.subscribe(observer);

// Cancelar la subscripcion.

// El metodo "add" me permite concadenar elementos.
subscription1.add(subscription2).add(subscription3);

// Complete y unsubscribe no es lo mismo:

setTimeout(() => {
	subscription1.unsubscribe();
	// al estar concadenados con el "add" no hace falta utilizar el unsubscribe de la 2 y 3.

	// subscription2.unsubscribe();
	// subscription3.unsubscribe();

	console.log('Timeout completado');
}, 4000);

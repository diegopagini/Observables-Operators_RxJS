/** @format */

import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
	next: (value) => console.log('next', value),
	error: (error) => console.warn('error', error),
	complete: () => console.info('completado'),
};

const intervalo$ = new Observable<number>((subscriber) => {
	// Emitir un numero random cada 3 seg.

	const intervlID = setInterval(() => subscriber.next(Math.random()), 3000);

	return () => {
		clearInterval(intervlID);
		console.log('Intervalo destruido');
	};
});

// De esta forma recivo dos valor randoms diferentes. Porque son subscripciones diferentes.
const subs1 = intervalo$.subscribe((rnd) => {
	console.log('subs1', rnd);
});
const subs2 = intervalo$.subscribe((rnd) => {
	console.log('subs2', rnd);
});

// Subject
// 1- Casteo multiple
// 2- Tambien es un observer
// 3- Next, error y complete

const subject$ = new Subject();
const subscription = intervalo$.subscribe(subject$);

// De esta  forma los numeros random que me llegan serian iguales en la subs 3 y 4. No son subscripciones diferentes
const subs3 = subject$.subscribe(observer);
const subs4 = subject$.subscribe(observer);

setTimeout(() => {
	// De esta forma inserto informacion al flujo de dato que ya se estaba emitiendo. Es un "Hot Observable"
	subject$.next(10);

	// Se completa la subscripcion.
	subject$.complete();

	// Aca se limpia el intervalo.
	subscription.unsubscribe();
}, 3500);

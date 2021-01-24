/** @format */

import { Observable, Observer } from 'rxjs'; //todo viene desde esta libreria.

const observer: Observer<any> = {
	next: (value) => console.log('siguiente [next', value),
	error: (error) => console.warn('error [obs]', error),
	complete: () => console.info('completado [obs'),
};

// const obs$ = Observable.create(); esta es otra forma de crear.

const obs$ = new Observable<string>((subs) => {
	//subs es un subscriber.
	//Es importante indicar el tipo del observable.
	subs.next('Hola');
	subs.next('Mundo');

	// subs.next(1); Si quisiera enviar un numero no me dejaria, porque esta indicado como string el obsevable.

	subs.next('Como');
	subs.next('Estas?');

	// Forzar un error
	// const a = undefined;
	// a.nombre = 'Diego';

	subs.complete();
	// Luego del "complete" ya no continua escuchando el subscribe.
	subs.next('Todo');
	subs.next('Bien?');
});

obs$.subscribe((resp) => {
	// esta es la forma clasica de subscribirse. Es como utilizar el "next"
	console.log(resp);
});

obs$.subscribe(
	(valor) => console.log('next', valor),
	(error) => console.warn('error', error),
	() => console.info('complete')
);

// Otra forma:

//Mismo resultado utilizando el objeto creado en la linea 5.
obs$.subscribe(observer);

/** @format */

import { map, mapTo } from 'rxjs/operators';
import { fromEvent, range } from 'rxjs';

range(1, 5).subscribe(console.log); // 1, 2, 3, 4, 5

range(1, 5)
	.pipe(
		map<number, number>((value) => {
			return value * 10;
		})
	)
	.subscribe(console.log); // 10, 20, 30, 40, 50

// Mismo caso que:
range(1, 5)
	.pipe(map((value) => value * 10))
	.subscribe(console.log); // 10, 20, 30, 40, 50

// se le puede declarar la entrada y tambien salida.
range(1, 5)
	.pipe(
		map<number, string>((value) => (value * 10).toString())
	) // de esta forma estoy recibiendo numberos y retornado strings
	.subscribe(console.log); // 10, 20, 30, 40, 50

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

keyup$
	.pipe(
		map((event) => {
			return event.code;
		})
	)
	.subscribe((code) => console.log('map', code));

const keyupMapTo$ = keyup$.pipe(mapTo('Tecla presionada'));

keyupMapTo$.subscribe(console.log);

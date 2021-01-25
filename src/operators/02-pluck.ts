/** @format */

import { map, pluck } from 'rxjs/operators';
import { fromEvent } from 'rxjs';

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyupCode$ = keyup$.pipe(
	map((event) => {
		return event.code;
	})
);

const keyupPluck$ = keyup$.pipe(pluck('key'));
// const keyupPluck$ = keyup$.pipe(pluck('target', 'baseURI')); para prodiedades dentro de otras. En lugar de usar "." se usan "," con strings

keyupCode$.subscribe((code) => console.log('map', code));
keyupPluck$.subscribe((key) => console.log('pluck', key));

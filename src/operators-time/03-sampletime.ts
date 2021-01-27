/** @format */

import { fromEvent } from 'rxjs';
import { map, sampleTime } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>(document, 'click');

click$
	.pipe(
		sampleTime(2000), // a los 2 segundo obtengo el resultado. Solo emite el valor cada 2 segundos.
		map(({ x, y }) => ({ x: x, y: y }))
	)
	.subscribe(console.log);

/** @format */

import { fromEvent } from 'rxjs';
import { auditTime, map, tap } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>(document, 'click');

click$
	.pipe(
		map(({ x }) => ({ x: x })),
		tap((val) => console.log('tap', val)),
		auditTime(2000) // Despues de los 2 segundos emite el ultimo valor.
	)
	.subscribe(console.log);

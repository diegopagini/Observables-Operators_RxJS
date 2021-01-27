/** @format */

import { fromEvent, interval } from 'rxjs';
import { sample } from 'rxjs/operators';

const interval$ = interval(500);
const click$ = fromEvent<MouseEvent>(document, 'click');

interval$.pipe(sample(click$)).subscribe(console.log); // Obtengo la muestra que esta emitiendo el primer observable al hacer click unicamente. Si la muestra es la misma solo emite una.

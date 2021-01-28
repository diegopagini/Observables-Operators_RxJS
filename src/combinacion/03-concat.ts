/** @format */

import { concat, interval, of } from 'rxjs';
import { take } from 'rxjs/operators';

const interval$ = interval(1000);

concat(
	interval$.pipe(take(3)),
	interval$.pipe(take(2)),
	[1, 2, 3, 4],
	of(1)
).subscribe(console.log);

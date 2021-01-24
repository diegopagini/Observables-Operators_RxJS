/** @format */

import { async, asyncScheduler } from 'rxjs';

// setTimeout(() => {}, 3000);
// setInterval(() => {}, 3000);

const saludar = () => console.log('Hola Mundo');
const saludar2 = (nombre) => console.log(`Hola ${nombre}`);

// setTimeout
asyncScheduler.schedule(saludar, 2000);
asyncScheduler.schedule(saludar2, 2000, 'Diego');

// setInterval
const subs = asyncScheduler.schedule(
	function (state) {
		console.log('state', state);
		this.schedule(state + 1, 1000);
	},
	2000,
	0
);

setTimeout(() => {
	subs.unsubscribe();
}, 6000);

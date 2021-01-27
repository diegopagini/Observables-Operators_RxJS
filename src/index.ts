/** @format */

import { fromEvent } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { debounceTime, map, pluck } from 'rxjs/operators';

//Referencias
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append(textInput, orderList);

// Streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

input$
	.pipe(
		debounceTime(500),
		map((event) => {
			const texto = event.target['value'];

			return ajax.getJSON(`https://api.github.com/users/${texto}`);
		})
	)
	.subscribe((response) => {
		response.pipe(pluck('url')).subscribe(console.log);
	});

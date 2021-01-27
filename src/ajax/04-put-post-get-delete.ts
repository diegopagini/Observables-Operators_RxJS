/** @format */

import { ajax } from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';

ajax.get(url, {}).subscribe(console.log);

ajax
	.post(
		url,
		{
			id: 1,
			nombre: 'Diego',
		},
		{
			'mi-token': 'ABC123',
		}
	)
	.subscribe(console.log);

ajax
	.put(
		url,
		{
			id: 1,
			nombre: 'Diego',
		},
		{
			'mi-token': 'ABC123',
		}
	)
	.subscribe(console.log);

ajax
	.delete(url, {
		id: 1,
		nombre: 'Diego',
	})
	.subscribe(console.log);

ajax({
	url: url,
	method: 'GET',
	headers: {
		'mi-token': 'ABC123',
	},
	body: {
		id: 1,
		nombre: 'Diego',
	},
}).subscribe(console.log);

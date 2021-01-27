/** @format */
import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError, map, pluck } from 'rxjs/operators';

const url = 'https://api.github.com/users?per_page=5';

const manejaErrores = (response: Response) => {
	if (!response.ok) {
		throw new Error(response.statusText);
	}
	return response;
};

const fetchPromes = fetch(url);

// Fetch
// De esta forma no puedo manejar el error
fetchPromes
	.then((resp) => resp.json())
	.then((data) => console.log('data:', data))
	.catch((err) => console.warn('error:', err));

// De esta forma puedo manejar el error si la api falla.
fetchPromes
	.then(manejaErrores)
	.then((resp) => resp.json())
	.then((data) => console.log('data:', data))
	.catch((err) => console.warn('error:', err));

const atrapaError = (err: AjaxError) => {
	console.warn('error en:', err.message);
	return of([]);
};

// Con Ajax de RxJS
ajax(url)
	.pipe(
		pluck('response'),
		//Asi seria lo mismo que con map.
		catchError((err) => {
			console.warn('error en:', err);
			return of([]);
		})
		// map((resp) => resp.response)
		// asi es lo mismo que con pluck
	)
	.subscribe((users) => console.log('usuarios:', users));

// Mismo caso que usando una funcion:
ajax(url)
	.pipe(pluck('response'), catchError(atrapaError))
	.subscribe((users) => console.log('usuarios:', users));

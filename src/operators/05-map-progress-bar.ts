/** @format */

import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';

/** @format */
//Creo un div con un texto largo.
const texto = document.createElement('div');
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in vestibulum urna. Nunc eros est, commodo venenatis arcu id, lobortis tincidunt turpis. Vivamus sed justo ipsum. Aliquam erat volutpat. Nullam sed risus a metus venenatis consequat. Vivamus ornare ultrices rhoncus. Vestibulum gravida dictum ipsum nec porta. Suspendisse varius dolor lobortis risus consectetur ultricies.
<br/><br/>
Etiam sed augue odio. Ut vitae rhoncus arcu, vitae vehicula leo. Etiam convallis pretium ex vitae elementum. Curabitur sit amet diam tellus. Mauris non fringilla quam. Nam ac suscipit metus, non posuere leo. Suspendisse ante metus, congue a convallis a, condimentum ac neque. Morbi at porta massa, egestas bibendum neque. Interdum et malesuada fames ac ante ipsum primis in faucibus.
<br/><br/>
Maecenas congue vehicula augue vel lobortis. Cras a arcu dapibus elit varius mollis. Vivamus id leo nunc. Praesent fringilla nunc quis nulla fermentum dignissim. Nam pulvinar eget lectus nec imperdiet. Vivamus elementum est eget lacus pharetra molestie. Aliquam sagittis metus sed est porttitor tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus elementum commodo lectus ut pharetra. Maecenas odio metus, luctus quis sollicitudin eu, porta vitae orci.
<br/><br/>
Nulla rhoncus velit ipsum, a suscipit purus hendrerit vel. Phasellus malesuada nisl in elit laoreet vulputate. Phasellus vitae nibh at justo consequat dapibus vitae pretium nunc. Cras ac consequat justo. Maecenas ut felis nec justo hendrerit sagittis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam a vehicula nibh. Nam vel augue a lorem consectetur scelerisque sed quis nisi. Vestibulum porta nec augue non tincidunt.
<br/><br/>
Vestibulum nec facilisis risus, sed tincidunt purus. Nullam aliquet ac nibh sed aliquam. In hac habitasse platea dictumst. Cras elementum massa quis enim laoreet, at facilisis odio tristique. Nulla orci tortor, vulputate ut varius sed, faucibus id enim. Sed vehicula erat posuere interdum viverra. Aliquam erat volutpat. Donec ut nunc enim. Quisque varius vehicula enim quis sagittis.
<br/><br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in vestibulum urna. Nunc eros est, commodo venenatis arcu id, lobortis tincidunt turpis. Vivamus sed justo ipsum. Aliquam erat volutpat. Nullam sed risus a metus venenatis consequat. Vivamus ornare ultrices rhoncus. Vestibulum gravida dictum ipsum nec porta. Suspendisse varius dolor lobortis risus consectetur ultricies.
<br/><br/>
Etiam sed augue odio. Ut vitae rhoncus arcu, vitae vehicula leo. Etiam convallis pretium ex vitae elementum. Curabitur sit amet diam tellus. Mauris non fringilla quam. Nam ac suscipit metus, non posuere leo. Suspendisse ante metus, congue a convallis a, condimentum ac neque. Morbi at porta massa, egestas bibendum neque. Interdum et malesuada fames ac ante ipsum primis in faucibus.
<br/><br/>
Maecenas congue vehicula augue vel lobortis. Cras a arcu dapibus elit varius mollis. Vivamus id leo nunc. Praesent fringilla nunc quis nulla fermentum dignissim. Nam pulvinar eget lectus nec imperdiet. Vivamus elementum est eget lacus pharetra molestie. Aliquam sagittis metus sed est porttitor tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus elementum commodo lectus ut pharetra. Maecenas odio metus, luctus quis sollicitudin eu, porta vitae orci.
<br/><br/>
Nulla rhoncus velit ipsum, a suscipit purus hendrerit vel. Phasellus malesuada nisl in elit laoreet vulputate. Phasellus vitae nibh at justo consequat dapibus vitae pretium nunc. Cras ac consequat justo. Maecenas ut felis nec justo hendrerit sagittis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam a vehicula nibh. Nam vel augue a lorem consectetur scelerisque sed quis nisi. Vestibulum porta nec augue non tincidunt.
<br/><br/>
Vestibulum nec facilisis risus, sed tincidunt purus. Nullam aliquet ac nibh sed aliquam. In hac habitasse platea dictumst. Cras elementum massa quis enim laoreet, at facilisis odio tristique. Nulla orci tortor, vulputate ut varius sed, faucibus id enim. Sed vehicula erat posuere interdum viverra. Aliquam erat volutpat. Donec ut nunc enim. Quisque varius vehicula enim quis sagittis.
<br/><br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in vestibulum urna. Nunc eros est, commodo venenatis arcu id, lobortis tincidunt turpis. Vivamus sed justo ipsum. Aliquam erat volutpat. Nullam sed risus a metus venenatis consequat. Vivamus ornare ultrices rhoncus. Vestibulum gravida dictum ipsum nec porta. Suspendisse varius dolor lobortis risus consectetur ultricies.
<br/><br/>
Etiam sed augue odio. Ut vitae rhoncus arcu, vitae vehicula leo. Etiam convallis pretium ex vitae elementum. Curabitur sit amet diam tellus. Mauris non fringilla quam. Nam ac suscipit metus, non posuere leo. Suspendisse ante metus, congue a convallis a, condimentum ac neque. Morbi at porta massa, egestas bibendum neque. Interdum et malesuada fames ac ante ipsum primis in faucibus.
<br/><br/>
Maecenas congue vehicula augue vel lobortis. Cras a arcu dapibus elit varius mollis. Vivamus id leo nunc. Praesent fringilla nunc quis nulla fermentum dignissim. Nam pulvinar eget lectus nec imperdiet. Vivamus elementum est eget lacus pharetra molestie. Aliquam sagittis metus sed est porttitor tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus elementum commodo lectus ut pharetra. Maecenas odio metus, luctus quis sollicitudin eu, porta vitae orci.
<br/><br/>
Nulla rhoncus velit ipsum, a suscipit purus hendrerit vel. Phasellus malesuada nisl in elit laoreet vulputate. Phasellus vitae nibh at justo consequat dapibus vitae pretium nunc. Cras ac consequat justo. Maecenas ut felis nec justo hendrerit sagittis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam a vehicula nibh. Nam vel augue a lorem consectetur scelerisque sed quis nisi. Vestibulum porta nec augue non tincidunt.
<br/><br/>
Vestibulum nec facilisis risus, sed tincidunt purus. Nullam aliquet ac nibh sed aliquam. In hac habitasse platea dictumst. Cras elementum massa quis enim laoreet, at facilisis odio tristique. Nulla orci tortor, vulputate ut varius sed, faucibus id enim. Sed vehicula erat posuere interdum viverra. Aliquam erat volutpat. Donec ut nunc enim. Quisque varius vehicula enim quis sagittis.
<br/><br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in vestibulum urna. Nunc eros est, commodo venenatis arcu id, lobortis tincidunt turpis. Vivamus sed justo ipsum. Aliquam erat volutpat. Nullam sed risus a metus venenatis consequat. Vivamus ornare ultrices rhoncus. Vestibulum gravida dictum ipsum nec porta. Suspendisse varius dolor lobortis risus consectetur ultricies.
<br/><br/>
Etiam sed augue odio. Ut vitae rhoncus arcu, vitae vehicula leo. Etiam convallis pretium ex vitae elementum. Curabitur sit amet diam tellus. Mauris non fringilla quam. Nam ac suscipit metus, non posuere leo. Suspendisse ante metus, congue a convallis a, condimentum ac neque. Morbi at porta massa, egestas bibendum neque. Interdum et malesuada fames ac ante ipsum primis in faucibus.
<br/><br/>
Maecenas congue vehicula augue vel lobortis. Cras a arcu dapibus elit varius mollis. Vivamus id leo nunc. Praesent fringilla nunc quis nulla fermentum dignissim. Nam pulvinar eget lectus nec imperdiet. Vivamus elementum est eget lacus pharetra molestie. Aliquam sagittis metus sed est porttitor tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus elementum commodo lectus ut pharetra. Maecenas odio metus, luctus quis sollicitudin eu, porta vitae orci.
<br/><br/>
Nulla rhoncus velit ipsum, a suscipit purus hendrerit vel. Phasellus malesuada nisl in elit laoreet vulputate. Phasellus vitae nibh at justo consequat dapibus vitae pretium nunc. Cras ac consequat justo. Maecenas ut felis nec justo hendrerit sagittis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam a vehicula nibh. Nam vel augue a lorem consectetur scelerisque sed quis nisi. Vestibulum porta nec augue non tincidunt.
<br/><br/>
Vestibulum nec facilisis risus, sed tincidunt purus. Nullam aliquet ac nibh sed aliquam. In hac habitasse platea dictumst. Cras elementum massa quis enim laoreet, at facilisis odio tristique. Nulla orci tortor, vulputate ut varius sed, faucibus id enim. Sed vehicula erat posuere interdum viverra. Aliquam erat volutpat. Donec ut nunc enim. Quisque varius vehicula enim quis sagittis.
<br/><br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in vestibulum urna. Nunc eros est, commodo venenatis arcu id, lobortis tincidunt turpis. Vivamus sed justo ipsum. Aliquam erat volutpat. Nullam sed risus a metus venenatis consequat. Vivamus ornare ultrices rhoncus. Vestibulum gravida dictum ipsum nec porta. Suspendisse varius dolor lobortis risus consectetur ultricies.
<br/><br/>
Etiam sed augue odio. Ut vitae rhoncus arcu, vitae vehicula leo. Etiam convallis pretium ex vitae elementum. Curabitur sit amet diam tellus. Mauris non fringilla quam. Nam ac suscipit metus, non posuere leo. Suspendisse ante metus, congue a convallis a, condimentum ac neque. Morbi at porta massa, egestas bibendum neque. Interdum et malesuada fames ac ante ipsum primis in faucibus.
<br/><br/>
Maecenas congue vehicula augue vel lobortis. Cras a arcu dapibus elit varius mollis. Vivamus id leo nunc. Praesent fringilla nunc quis nulla fermentum dignissim. Nam pulvinar eget lectus nec imperdiet. Vivamus elementum est eget lacus pharetra molestie. Aliquam sagittis metus sed est porttitor tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus elementum commodo lectus ut pharetra. Maecenas odio metus, luctus quis sollicitudin eu, porta vitae orci.
<br/><br/>
Nulla rhoncus velit ipsum, a suscipit purus hendrerit vel. Phasellus malesuada nisl in elit laoreet vulputate. Phasellus vitae nibh at justo consequat dapibus vitae pretium nunc. Cras ac consequat justo. Maecenas ut felis nec justo hendrerit sagittis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam a vehicula nibh. Nam vel augue a lorem consectetur scelerisque sed quis nisi. Vestibulum porta nec augue non tincidunt.
<br/><br/>
Vestibulum nec facilisis risus, sed tincidunt purus. Nullam aliquet ac nibh sed aliquam. In hac habitasse platea dictumst. Cras elementum massa quis enim laoreet, at facilisis odio tristique. Nulla orci tortor, vulputate ut varius sed, faucibus id enim. Sed vehicula erat posuere interdum viverra. Aliquam erat volutpat. Donec ut nunc enim. Quisque varius vehicula enim quis sagittis.
<br/><br/>
`;

//selecciono el "body" y le agrego mi texto
const body = document.querySelector('body');
body.append(texto);

//creo el progressBar. Y le agrego la clase "progress-bar"
const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

// funcion que haga el calculo.
const calcularPorcentajeScroll = (event) => {
	const {
		scrollTop,
		scrollHeight,
		clientHeight,
	} = event.target.documentElement;

	// console.log({ scrollTop, scrollHeight, clientHeight });

	return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

// Streams
const scroll$ = fromEvent(document, 'scroll');

// scroll$.subscribe(console.log);

const progress$ = scroll$.pipe(
	// map((event) => {
	// 	calcularPorcentajeScroll(event);
	// })
	map(calcularPorcentajeScroll),
	tap(console.log)
);

progress$.subscribe((porcentaje) => {
	progressBar.style.width = `${porcentaje}%`;
});

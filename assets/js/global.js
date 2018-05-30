(function () {
	var majorNavigationList = document.querySelector('body > header > nav > ul'),
		majorNavigationButton = (function () {
			var button = document.createElement('button'),
				svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
				use = document.createElementNS('http://www.w3.org/2000/svg', 'use'),
				span = document.createElement('span'),
				svg2 = svg.cloneNode(),
				use2 = use.cloneNode();

			// Add attributes to the <button>
			button.setAttribute('type', 'button');
			button.setAttribute('aria-expanded', 'false');
			button.setAttribute('aria-label', 'Major Navigation, Menu button, collapsed');

			// Add href values to the <use> elements
			use.setAttribute('href', '#icon-major-navigation');
			use.setAttribute('xlink:href', '#icon-major-navigation');
			use2.setAttribute('href', '#icon-button-collapsed');
			use2.setAttribute('xlink:href', '#icon-button-collapsed');

			// Add attributes to the <svg>s and append the <use> elements to them
			svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
			svg.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
			svg.setAttribute('viewBox', '0 0 28 28');
			svg.setAttribute('width', '12');
			svg.setAttribute('height', '12');
			svg.appendChild(use);

			svg2.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
			svg2.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
			svg2.setAttribute('viewBox', '0 0 18.56 14.27');
			svg2.setAttribute('width', '9');
			svg2.setAttribute('height', '6.91971983');
			svg2.classList.add('visually-hidden');
			svg2.appendChild(use2);

			span.classList.add('visually-hidden');
			span.appendChild(document.createTextNode(' Menu '));

			button.appendChild(svg);
			button.appendChild(span);
			button.appendChild(svg2);

			button.addEventListener('click', toggleMajorNavigation);
 
			return button;
		}());

	function toggleMajorNavigation(evt) {
		var button = evt.currentTarget,
			use = button.querySelector('svg:last-of-type > use'),
			list = button.nextElementSibling;

		if (button.getAttribute('aria-expanded') === 'false') {
			list.hidden = false;

			use.setAttribute('href', '#icon-button-expanded');
			use.setAttribute('xlink:href', '#icon-button-expanded');

			button.setAttribute('aria-expanded', 'true');
			button.setAttribute('aria-label', 'Major Navigation, Menu button, expanded');
		} else if (button.getAttribute('aria-expanded') === 'true') {
			list.hidden = true;

			use.setAttribute('href', '#icon-button-collapsed');
			use.setAttribute('xlink:href', '#icon-button-collapsed');

			button.setAttribute('aria-expanded', 'false');
			button.setAttribute('aria-label', 'Major Navigation, Menu button, collapsed');
		}
	}

	// Append the Major Navigation menu button to the <nav> element and hide the adjacent <ul> 
	majorNavigationList.insertAdjacentElement('beforebegin', majorNavigationButton);
	majorNavigationList.hidden = true;

	document.querySelector('html').dataset.js = 'true';
}());
/* Use this script if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'font-jach\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-jlachiconmonstr-github-9-icon' : '&#x67;',
			'icon-jlachiconmonstr-last-fm-4-icon' : '&#x61;',
			'icon-jlachiconmonstr-twitter-4-icon' : '&#x74;',
			'icon-jlachiconmonstr-linkedin-4-icon' : '&#x6c;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; i < els.length; i += 1) {
		el = els[i];
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-jlach[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};
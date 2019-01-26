$(document).ready(function () {
	$('.headbandShowOnScroll').each(function (i, el) {
		scrollFireOptions.push(
			{selector: '#'+el.id, offset: 200, callback: function(el1) {
					$(el1).animate({'left' :'-=2000'}, 300, 'swing')
				} })
	})
})
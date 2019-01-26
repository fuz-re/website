(function ($) {
	$(function () {
		$('.button-collapse').sideNav();


		//effet smoothscroll
		$('#mainNav a[href^="#"]').click(function () {
			let the_id = $(this).attr("href");
			if (the_id === '#' || the_id === '#!') {
				return;
			}
			$('html, body').animate({
				scrollTop: $(the_id).offset().top
			});
			return false;
		});


	}); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function () {
	$('#goToParams-Unpublished').click(function () {
		$("a[href=#options-params]").click()
	})
	//htmlParser.unformatBySelector('.editable');
	$('.switchViewBtn').click(function (e) {
		e.preventDefault()
		let scrolled = document.documentElement.scrollTop
		let visibleSectionId = ""
		$('section').each(function () {
			if (this.offsetTop > scrolled - 200 && !visibleSectionId) {
				visibleSectionId = this.id

			}
		})
		let href = $(this).attr('href')

		window.location.href = href + '#' + visibleSectionId;
	})

	window.onscroll = function() {scrollFunction()};

	function scrollFunction() {
		if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
			document.getElementById("ScrollTopBtn").style.opacity = "1";
		} else {
			document.getElementById("ScrollTopBtn").style.opacity = "0";
		}
	}
$('.editable a').attr('target', '_blank')
// When the user clicks on the button, scroll to the top of the document
	$('#ScrollTopBtn').click(()=> {
		$('html, body').animate( { scrollTop: $('body').offset().top }, 500 ); // Go
		return false;
	})
})
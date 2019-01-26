$(document).ready(function () {
//pour l'édition du menu
	$('.editMenuLabel').click(function () {
		console.log('coucou')
		//on récupere toutes les infos stockées dans l'id du boutton
		let splittedId = this.id.split("-")
		//et on remplit le formulaire caché avec
		$('.addToMenuForm input[name = id]').val(splittedId[1])
		//on modifie le titre et le boutton de la fenetre modale "à la sauvage"
		$('#add-to-menu-modal h4').html("Modifier l'élement du menu");
		$('#add-to-menu-modal button').html("Editer");

		//gestion du pré-remplissage avec l'ancien nom
		$('#add-to-menu-modal input[name=label]').val(splittedId[2]);
		setTimeout(function () {
			Materialize.updateTextFields();
		},50)
		//et on ouvre la modale
		$('#add-to-menu-modal').modal('open');
	})
	$('.goToEditParams').click(function (event) {
		event.preventDefault()
		$("#siteOptionsModal").modal('open')
		$("a[href=#options-params]").click()
	})

	$(".button-collapse").sideNav();
	$('.navItems').click(()=>{
		$('.button-collapse').sideNav('hide');
	})

	// Hide Header on on scroll down
	var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
	var navbarHeight = $('#mainNav').outerHeight();

	$(window).scroll(function(event){
		didScroll = true;
	});

	setInterval(function() {
		if (didScroll) {
			hasScrolled();
			didScroll = false;
		}
	}, 250);

	function hasScrolled() {
		var st = $(this).scrollTop();

		// Make sure they scroll more than delta
		if(Math.abs(lastScrollTop - st) <= delta)
			return;

		// If they scrolled down and are past the navbar, add class .nav-up.
		// This is necessary so you never see what is "behind" the navbar.
		if (st > lastScrollTop && st > navbarHeight){
			// Scroll Down
			$('#mainNav').removeClass('nav-down').addClass('nav-up');
		} else {
			// Scroll Up
			if(st + $(window).height() < $(document).height()) {
				$('#mainNav').removeClass('nav-up').addClass('nav-down');
			}
		}

		lastScrollTop = st;
	}
})
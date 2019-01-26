mymaps = {}
mymarkers = {}
$(document).ready(function () {
	$('.OSMap').each(function (i, el) {
		let lon = $(el).attr('lon')
		let lat = $(el).attr('lat')
		let sectionId = el.id.split("-")[1]

		renderMap = function (i,lat, lon) {
			mymaps[sectionId] = L.map('mapid-'+sectionId).setView([lat, lon], 15);
			L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
				maxZoom: 19,
				attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>'
			}).addTo(mymaps[sectionId] );


			mymarkers[sectionId] = L.marker([lat, lon]).addTo(mymaps[sectionId] );
		}
		renderMap(i, lat, lon)
	})
})
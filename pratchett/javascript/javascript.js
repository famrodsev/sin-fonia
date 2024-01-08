$(document).ready(function() {
	var posibilidad = Math.floor((Math.random() * 4) + 1);
	if (posibilidad === 1){
		var alturaMax = $(window).height();
		var anchuraMax = $(window).width();
		var posx = Math.floor((Math.random() * (anchuraMax-164)) + 1);
		var posy = Math.floor((Math.random() * (alturaMax-166)) + 1);
		var equipaje = $("#equipaje");
		equipaje.attr("src", "imagenes/equipaje.gif");
		equipaje.css({top: posy, left: posx});
		equipaje.show();
		equipaje.click(function(){
			var posx = Math.floor((Math.random() * (anchuraMax-164)) + 1);
			var posy = Math.floor((Math.random() * (alturaMax-166)) + 1);
			var equipaje = $("#equipaje");
			equipaje.attr("src", "imagenes/equipaje.gif");
			equipaje.css({top: posy, left: posx});
		});
	}
});


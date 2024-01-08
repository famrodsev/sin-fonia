$(document).ready(function(){ //cuando se cargue el documento haces lo que hay dentro de esto
    $(".sig").click(function(){
		var mostrada = $(".mostrar");
		mostrada.removeClass("mostrar");
		mostrada.next().addClass("mostrar");
		if (mostrada.attr('id') === "fin"){
			$("#muerte").attr("src", "imagenes/muerte2.jpg");
		}
    });
});
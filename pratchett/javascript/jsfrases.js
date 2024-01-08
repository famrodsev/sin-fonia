$(document).ready(function(){ //cuando se cargue el documento haces lo que hay dentro de esto
    $(".flecha").click(function(){
        $(this).next().toggle();
        if ($(this).attr("src") === "imagenes/flechader.png"){
            $(this).attr("src", "imagenes/flechaizq.png");
        } else {
            $(this).attr("src", "imagenes/flechader.png");
        }
    });
});
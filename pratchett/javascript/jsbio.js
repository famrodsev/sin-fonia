$(document).ready(function(){ //cuando se cargue el documento haces lo que hay dentro de esto
    $(".boton2").click(function(){
        $(this).siblings().slideToggle();
    });
});
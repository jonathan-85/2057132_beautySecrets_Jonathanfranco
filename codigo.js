$(document).mousemove(function(e){
    var posX = e.clientX *0.6;
    var posY = e.clientY *0.6;

    console.log("Coordenada en x: " + posX);
    console.log("Coordenada en y: " + posY);

    // valores negativos
    $("#ima").css({
        "left": 0 -posX/10 + "px", 
        "top" : 0 -posY/10 + "px"
    });

});

$(document).ready(function(){
    $(window).scroll(function(){
    
        var posicionScroll = $(window).scrollTop();
        // controla la escala
        var movimiento = posicionScroll * 0.001;
        // controla la rotación
        var rotacion = posicionScroll * 0.02;
        // saber la posicion
        console.log(posicionScroll); 
    
        // animar image
        $("#sec1 img").css("transform","scale(" + (1+movimiento) + ") rotateZ(" + (rotacion) + "deg)");
    
    });
    });
var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var fondo = {
    url: "tile.png",
    cargaOK: false
};

var vaca = {
    url: "vaca.png",
    cargaOK: false
};

var cantidad = aleatorio(0, 10);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);


function cargarFondo()
{
    fondo.cargaOK = true;
    dibujar();
}

function cargarVacas()
{
    vaca.cargaOK = true;
    dibujar();
}

function dibujar()
{
    if(fondo.cargaOK)
    {
        papel.drawImage(fondo.imagen, 0, 0);
    }

    if(vaca.cargaOK)
    {

        for(var v = 0; v < cantidad; v++)
        {
            var x = aleatorio(0, 7) * 60;
            var y = aleatorio(0, 7) * 60;
    
            papel.drawImage(vaca.imagen, x, y);
        }

    }

}

function aleatorio(min, max)
{

    var resultado;
    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;

}
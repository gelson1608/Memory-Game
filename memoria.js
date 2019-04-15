var casillero = [];

var iniciarJuego = function(){
var pantalla=document.getElementById("primeraPantalla");
pantalla.className="noshow";
pantalla=document.getElementById("segundaPantalla");
pantalla.className="show";
pantalla=document.getElementById("terceraPantalla");
pantalla.className="noshow";
}

var mostrarPuntuacion = function(){
  var pantalla=document.getElementById("segundaPantalla");
  pantalla.className="noshow";
  pantalla=document.getElementById("segundaPantalla");
  pantalla.className="noshow";
  pantalla=document.getElementById("terceraPantalla");
  pantalla.className="show";
}
var regresar = function(){
  var pantalla=document.getElementById("terceraPantalla");
  pantalla.className="show";
  pantalla=document.getElementById("segundaPantalla");
  pantalla.className="noshow";
  pantalla=document.getElementById("terceraPantalla");
  pantalla.className="noshow";
}

  var i=-1;
  var turno = 0;
  var check= turno;
var cambioEstado = function(target){

  var validar=true;
  var posicion=target.id;

  if (i==-1){
    turno++;
    target.className="vivo";
    casillero[i+1]=posicion;
    setInterval(function(){target.className="muerto"},2000);

  }else if(i>=0){
    if (posicion!=casillero[i]){
      regresar();
    }/*else{
      if (turno==check){
      target.className="vivo";
      setInterval(function(){target.className="muerto"},2000);
      if(turno==i-1){
        turno++;
      }
      }
    }*/
  }
}

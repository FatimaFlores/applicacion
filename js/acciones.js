// JavaScript Document
$(document).ready(function(e){
//watchID se refiere a actual
var watchID=null;
document.addEventListener("deviceready",Dispositivo_listo,false);
//cuando esta listo el Dipositivo
function Dispositivo_listo(){
Comienza();
}
//Empieza la Observacion de la Aceleracion
function Comienza(){
	//Actualizar la Aceleracion cada 2 segundos //
var opciones={frequency:2000};
watchID=navigator.accelerometer.watchAcceleration(Correcto,Erros,opciones);
navigator.geolocation.getCurrentPosition(localiza ,ErrorLocalizacion);
}
//detiene la Observacion de la Aceleracion
function Detente(){
	if(watchID){
	navigator.accelerometer.clearWatch (watchID);
	watchID=null;
	}
}
//Corecto:toma una Captura de la aceleracion
function Correcto(acceleration){
	var element=document.getElementById('acelerometro');
element.innerHTML='Aceleracion en X:'+acceleration.x+'<br/>'+
'Aceleracion en Y:' +acceleration.y+'<br/>';
'intervalo:'+acceleration.timestamp+'<br/>';
}
//erros:Falla al Obtener la Aceleracion
function Error(){
	alert('Error!');
}
//Exito al localizar
function localiza(posicion){
	var element=document.getElementById('geolocalizacion');
	element.innerHTML='Latitud:' +posicion.coords.latitude +'<br/>' +
	'Longitud:' +posicion.coords.longitude + '<br/>' +
	'Precision:' +posicion.coords.accuracy +'<br/>' +
	'Intervalo:' +posicion.timestamp +'<br/>';
}
//Error en la Geolocalizacion
function ErrorLocalizacion(error){
	alert('codigo:' +error.code +'\n'+
	'mensaje:'+error.message+'\n');
}
});

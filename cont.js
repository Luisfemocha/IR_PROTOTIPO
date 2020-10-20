function modal(a,b){
    var modal= document.getElementById('modal');
    var cuerpo= document.getElementById('modalBody');
    /*while(cuerpo.firstChild){ //limpiar el cuerpo del modal
        cuerpo.removeChild(cuerpo.firstChild);
    }*/
    var tit= b;
    if (! b) {
        tit= a.replace(/\.png$/gi,'');
        var h= document.createElement("h1");
        h.innerHTML='CUERPO DEL CASO DE USO DE '+a.toUpperCase();
        cuerpo.appendChild(h);
        document.getElementById("imagen").src="media/"+a;
        var but= document.getElementById("aceptarModal");
        but.innerHTML ='ACEPTAR CASO DE USO';
        but.hidden="";
        but.onclick=function(){alert('Se acepta el caso de uso de '+tit)}
    }
    else cuerpo.innerHTML= document.getElementById('STUDENT').innerHTML;
    document.getElementById('titModal').innerHTML= 'CASO DE USO DE '+tit;

    modal.style.display = "block";
}
function guardar(tabla, objeto){

}
function modificar(tabla, objeto, mod){
}
function insertar(){
	var Da1 = document.getElementById("si1").value ;
	var Da2 = document.getElementById("si2").value ;
	var Da3 = document.getElementById("si3").value ;
	var Da4 = document.getElementById("si4").value ;

	var url = encodeURI('http://127.0.0.1/integradora2/insertar.php?nom=' + Da1 +'&apel=' + Da2 +'&corr=' + Da3 +'&cont=' + Da4);
	fetch(url, {method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      mode: "no-cors" 
    })
}

function actualizar(){
	var upd1 = document.getElementById("ol1").value ;
	var upd2 = document.getElementById("ol2").value ;
	
	var url = encodeURI('http://127.0.0.1/integradora2/actualizar.php?upd=' + upd1 +'&Act=' +upd2);
	fetch(url, {method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      mode: "no-cors" 
    })
}

function enter(){

  var dat1 = document.getElementById("lo1").value;
  var dat2 = document.getElementById("lo2").value;

	var url = encodeURI('http://127.0.0.1/Integradora2/inicio.php?u=' + dat1);

	fetch(url)
	.then((response) => response.json())
	.then((json) => {

	var V1 = json[0].Nombre
	var V2 = json[0].Contraseña

	/*console.log(json);
	var osen = document.getElementById("nose");
	var mue = document.createElement("h2");

	mue.innerHTML = json[0].Nombre
	osen.appendChild(mue) */

	if(V1 == dat1 && V2 == dat2){

		var us = document.getElementById('lo1').value;

		localStorage.setItem("usuario", us);

		location.href ='http://localhost/Integradora/sesiones.html';

			console.log(json);
			var osen = document.getElementById("nose");
			var mue = document.createElement("h2");

			mue.innerHTML = json[0].Nombre
			osen.appendChild(mue)

		}
	});
}
	
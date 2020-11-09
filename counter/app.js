var main = document.querySelector("body");

var height = window.innerHeight;
var width = window.innerWidth;

main.style.width = width+'px';
main.style.height = height+'px';
	
var start = 0;
var elem = document.querySelector("h1");
elem.textContent = start;

function neutral(){
	if (elem.textContent = '0'){
		elem.style.color = 'white'
	}
}

var addbtn = document.querySelector(".add");
var lowbtn = document.querySelector(".low");

addbtn.onclick = function(){
	var curr = document.querySelector("h1").textContent;
	var inc = Number(curr)+1
	elem.textContent = inc;
	if(inc>0){
		elem.style.color = 'green';
	}else{
		neutral();
	}
	
}

lowbtn.onclick = function(){
	var curr = document.querySelector("h1").textContent;
	var dec = Number(curr)-1;
	elem.textContent = dec;
	if (dec<0){
		elem.style.color = 'red';
	}else{
		neutral();
	}
}
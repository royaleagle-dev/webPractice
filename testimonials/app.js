(function(){

var image = document.querySelector("#img");
var text = document.querySelector("#testimony");
var next = document.querySelector("#next");
var prev = document.querySelector("#prev");
var start = 0;

function testimony(imgSource, text){
	this.img = imgSource;
	this.text = text;
}
			 
test1 = new testimony('../imageSlider/images/cateManip.jpg', 'This is a very nice website');
test2 = new testimony('../imageSlider/images/trendybg.jpg', "Infact, i'm loving this already");
test3 = new testimony('../imageSlider/images/colorGradingTut.jpg', 'I love your service guys, keep on doing the good work.');

testArray = [test1, test2, test3];
	 
var setFirst = function(){
	image.setAttribute('src', test1.img);
	text.textContent = test1.text;
}

window.addEventListener('load', setFirst);

function goNext(){
	start += 1;
	start = checkStart(start);
	image.setAttribute('src', testArray[start].img);
	text.textContent = testArray[start].text;
}

function goBack(){
	checkStart(start);
	start -= 1;
	start = checkStart(start);
	image.setAttribute('src', testArray[start].img);
	text.textContent = testArray[start].text;
}

function checkStart(start){
	if (start>=testArray.length){
		return 0;
	}
	else if(start < 0){
		return 0;
	}
	else{
		return start
	}
}

next.addEventListener('click', goNext);
prev.addEventListener('click', goBack);

})();
var image = document.querySelector("#img");
			var text = document.querySelector("#testimony");
			 function testimony(imgSource, text){
				this.img = imgSource;
				this.text = text;
			 }
			 
			 test1 = new testimony('../imageSlider/images/cateManip.jpg', 'This is a very nice website');
			 test2 = new testimony('../imageSlider/images/trendybg.jpg', "Infact, i'm loving this already");
			 
			 testArray = [test1, test2]
			 console.log(testArray[0].img)
			 
			 window.onload = function(){
				image.setAttribute('src', test1.img);
				text.textContent = test1.text;
			 }
var windowHeight = window.innerHeight;
			var windowWidth = window.innerWidth;
			var img = document.querySelector(".imageContainer");
			var next = document.querySelector("#next");
			var prev = document.querySelector("#prev");
			img.style.width = windowWidth+'px';
			img.style.height = windowHeight+'px';
			console.log(img);
			var image = document.querySelector("img");
			var start = 0;
			
			imgArray = ["cateManip.jpg", "colorGradingTut.jpg", "trendybg.jpg","Butterfly.jpg"];
			
			function autoRoll(){
				if (start >= imgArray.length){
					start = 0;
				}
				image.setAttribute ('src', `images/${imgArray[start]}`);
				console.log(image);
				start += 1;
				console.log(start);
			}
			
			setInterval(autoRoll, 5000);
			
			window.onload = function(){
				image.setAttribute('src', `images/${imgArray[start]}`);
			}
			
			next.onclick = function(){
				start += 1;
				endCheck(start);
				image.setAttribute('src', `images/${imgArray[start]}`);
				
			}
			
			prev.onclick = function(){
				start = start-1;
				endCheck(start);
				image.setAttribute('src', `images/${imgArray[start]}`);
				
			}
			
			function endCheck(index){
				if (index >= imgArray.length){
					start = 0;
				}else if(index < 0){
					start = 0
				}
			}
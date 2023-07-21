<!DOCTYPE html>
<html>
<head>
	<title>slajdsou</title>
	<style>
		/*fading animation in css3*/
		.fade{
			-webkit-animation-name: fade;
			-webkit-animation-duration: 1.5s;
			animation-name: fade;
			animation-duration: 1.5s;
		}

	    @-webkit-keyframes fade{
			from{opacity: .4}
			to{opacity: 1}
		}
		@keyframes fade{
			from{opacity: .4}
			to{opacity: 1}
		}
		/*this will be used if someone has a smaller screen*/
		@media only screen and (max-width: 300px){
			.text{font-size: 11px;}
		}
		*{
			box-sizing: border-box;
		}
		body{
			font-family: Vendana, sans-serif;
		}
		.mySLides{
			display: none;
		}
		img{vertical-align: middle;}
		/*container*/
		.slideshow-container{
			max-width: 100px;
			position: relative;
			margin:auto;
		}
		/*caption text*/
		.text{
			font-size:14px;
            padding:8px 12px;
            color: black;
            position: absolute;
            bottom:8px;
            width: 100%;
            text-align: center;
        }
        .dot{
            height: 15px;
            margin:0 2px;
            width: 15px;
            background-color: #bbb;
            border-radius: 50%;
            display: inline-block;
            transition: background-color 0.6 ease;
        }
        .numbertext{
        	color:#f2f2f2;
        	font-size: 12px;
        	padding: 8px 12px;
        	position: absolute;
        	top: 0;
        }


	</style>
</head>
<body>
	<div class="slideshow-container">
		<div class="mySlides fade">
			<div class="nubmertext">
				1/3
			</div>
			<img src="bman_en.jpg" style="width: 100%;">
			<div class="text">Caption</div>
		</div>
		<div class="mySlides fade">
			<div class="nubmertext">
				2/3
			</div>
			<img src="call_en.jpg" style="width: 100%;">
			<div class="text">Caption</div>
		</div>
		<div class="mySlides fade">
			<div class="nubmertext">
				3/3
			</div>
			<img src="website_en.jpg" style="width: 100%;">
			<div class="text">Caption</div>
		</div>
		
	</div>
	<div style="text-align: center;">
		<span class="dot"></span>
		<span class="dot"></span>
		<span class="dot"></span>
	</div>
<script>
	var slideIndex = 0;
	showSlides();
	function showSlides() {
		var i;
		var slides = document.getElementsByClassName("mySlides");
		var dots = document.getElementByClassName("dot");
		for(i = 0; i < slides.length; i++){
			slides[i].style.display = "none";
		}
		slideIndex++;
		if(slideIndex > slides.length) {slideIndex = 1}
			for(i = 0; i < dots.lenth; i++){
				dots[i].className = dots[i].className.replace("active", "");
				slides[slideIndex-1].style.display = "block";
				dots[slideIndex-1].className += "active"
				setTimeout(showSlides, 3000); //indicates how many seconds it will change so 3 seconds for this	}
	}
</script>
</body>
</html>
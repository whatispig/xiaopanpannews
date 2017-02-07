$("#page").on("pagecreate",function(){
	var time = $("#time");
		timeText = parseInt(time.text());
	var closeTime = setInterval(function(){
						timeText = timeText-1;
						time.text(timeText);
						if(timeText==0){
							time.text(0);
							clearInterval(closeTime);
							window.location.href="main.html";
						}
					},1000);
});

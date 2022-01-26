    var eyes = document.getElementsByClassName("eye")
    var balls = document.getElementsByClassName("ball");
    document.onmousemove = () => {
      var x = (event.clientX * 100) / window.innerWidth + "%";
      var y = (event.clientY * 100) / window.innerHeight + "%";

      for (let i = 0; i < 2; i++) {
        balls[i].style.left = x;
        balls[i].style.top = y;
        balls[i].transform = "translate(-" + x + ",-" + y + ")";
      }
    };

  async function blinkEyes(){
      var GrowthRate = 10; //Grow by 10px per iteration
      EyeHeight = 120;
      //close eyes
      while(EyeHeight >= 0)
      {
          EyeHeight = EyeHeight - GrowthRate;    
    for (let i = 0; i < 2; i++) {
        eyes[i].style.height = EyeHeight + "px";
    }
   await sleep(20);
}
// Open Eyes
while(EyeHeight <= 120)
{
    EyeHeight = EyeHeight + GrowthRate;    
for (let i = 0; i < 2; i++) {
  eyes[i].style.height = EyeHeight + "px";
}
await sleep(20);
}

	// timer for eye blink; randomly blink every 2 - 15 seconds
	setTimeout(blinkEyes, Math.random() * (8000 -500) + 500);  
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

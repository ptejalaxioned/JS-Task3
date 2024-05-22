var img=document.querySelector("img")
var loader=document.querySelector(".loader")
var span=document.querySelector("span")

function startBlur(){
    var count =parseInt(span.innerHTML)
    let b=8
  console.log(count)
    function incrementCount() {
        span.innerHTML=count
        b=b-0.08;
        img.style.filter=`blur(${b+"px"})`
      count--;
      if (count<1) {
        loader.style.visibility="hidden"
         img.style.filter="blur(0px)"
        clearInterval(intervalId);
      }
    } 
    var intervalId = setInterval(incrementCount, 10);
  }
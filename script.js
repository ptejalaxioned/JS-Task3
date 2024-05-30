var img=document.querySelector("img")
var loader=document.querySelector(".loader")
var span=document.querySelector("span")

function startBlur(){
    var count =parseInt(span.innerHTML)
    let b=100
  console.log(count)
    function incrementCount() {
        span.innerHTML=count
        b=b-1;
        img.style.filter=`blur(${b+"px"})`
      count++;
      if (count>100) {
        // loader.style.visibility="hidden"
        //  img.style.filter="blur(0px)"
        loader.classList.add("visibility")
        img.classList.add("imageBlur")
        clearInterval(intervalId);
      }
    } 
    var intervalId = setInterval(incrementCount, 50);
  }
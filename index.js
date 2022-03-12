var num = 0

window.onload = function() {
  var name = prompt('Gimme yo name');
  var space = document.getElementById("space");
  space.innerHTML = name +"'s Donuts"
}

var donut = document.getElementById("donut");

function donutClick() {
  num += 1;
  

  

  var numbers = document.getElementById("numbers");
  numbers.innerHTML = num;

  if(num >= 25){
    num += 2;

    if(num >= 50){
      setInterval(donutClick, 5000);
      
    }
    //first upgrade
  }
  if(num >= 500){
    num += 3;

    if(num >= 3000){
      setInterval(donutClick, 5000);
      
    }
    //2nd upgrade
  }
  if(num >= 5000){
    num += 5;

    if(num >= 5000){
      setInterval(donutClick, 5000);
      
    }
    //3rd upgrade
  }
  if(num >= 500000){
    num += 7;

    if(num >= 10000){
      setInterval(donutClick, 5000);
      
    }
    // 4th upgrade
  }
  
}

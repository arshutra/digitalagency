var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
var a = document.querySelectorAll('a');

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';
});

document.addEventListener('mousedown', function(){
  cursor.classList.add('click');
  cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function(){
  cursor.classList.remove('click')
  cursorinner.classList.remove('cursorinnerhover')
});

a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
})



// imge change

function enter1(){
  let enter1=document.querySelector("#img-change").src="img-chnge1.jpg";
   enter1=document.querySelector("#img-change").classList.toggle("hoveranimation")
}


function enter2(){
  let ho =document.getElementById("img-change")
  ho.src="imgchange2.png"
  document.querySelector("#img-change").classList.toggle("hoveranimation")
  
}

function enter3(){
  document.querySelector("#img-change").src="ic3.png"
  document.querySelector("#img-change").classList.toggle("hoveranimation")
}

function enter4(){
  document.querySelector("#img-change").src="ic4.png"
  document.querySelector("#img-change").classList.toggle("hoveranimation")
}




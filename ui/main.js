console.log('Loaded!');
var img=document.getElementById('madi');
var marginleft=0;
function moveright(){
    marginleft+='5px';
    img.style.marginleft=marginleft+'px';
}

img.onclick=function(){
    var intervel=setInterval(moveright,100);
  
    };

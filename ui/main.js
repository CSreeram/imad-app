console.log('Loaded!');
var img=document.getElementById('madi');
var marginleft=0;
function moveright(){
    marginleft+='10px';
    img.style.margineleft=marginleft+'px';
}

img.onclick=function(){
    var intervel=setIntervel(moveright,100);
  
    };

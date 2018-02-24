console.log('Loaded!');
var img=document.getElementById('madi');
var marginLeft=0;
function moveRight(){
    marginleft+='5px';
    img.style.marginLeft=marginLeft+'px';
}

img.onclick=function(){
    var interval=setInterval(moveRight,100);
  
    };

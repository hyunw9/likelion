
var resizeId = "";

window.addEventListener('resize',function() {
    clearTimeout(resizeId);
    resizeId = setTimeout(doneResizing, 250);});

    function doneResizing(){
        console.log('doneResizing Window Width: '+window.innerWidth);


    //화면크기 조정 
    }

var insta= document.getElementById("instagram");

insta.addEventListener('click', alert('@hyunw9'));

var kakaotalk = document.getElementsById("kakaotalk");
kakaotalk.addEventListener('click',alert("mykhu"));
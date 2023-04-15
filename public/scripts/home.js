window.addEventListener("resize",function(e){
    if(this.innerWidth<1368 && this.innerWidth>=1054){
        document.getElementById("title").style.fontSize="81px";
        document.getElementById("title").style.bottom="10%";
    }else if (this.innerWidth>=1368){
        document.getElementById("title").style.fontSize="105px";
        document.getElementById("title").style.bottom="4%";
    }else{
        document.getElementById("title").style.fontSize="60px";
        document.getElementById("title").style.bottom="12%";
    };
});

function alternate_exc(){
    document.getElementById("title").innerHTML="Hello World<span class='exc'>!<span>";
    setTimeout(()=>{document.getElementById("title").innerHTML="Hello World<span>!<span>"},500);
};

setInterval(alternate_exc,1000);
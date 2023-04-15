var after=100;
var before=0;


document.addEventListener("scroll",function(e){
    before=after;
    after=window.scrollY;
    if(after>=before){
        document.getElementById("navbar").style.top="calc("+document.getElementById("navbar").style.top+" + "+(-(after-before))*0.6+"px)";
    }else{
        document.getElementById("navbar").style.top="0px";
    };
});

document.getElementById("menu").addEventListener("click",function(e){
    
    
    document.getElementById("navbar").style.animationName="hide";
    setTimeout(clicked,400);
    function clicked(){
        document.getElementById("mobile-menu").style.display="block";
        document.getElementById("menu-content").style.display="flex";
        document.getElementById("close").style.display="block";
        document.getElementById("navbar").style.animationName="none";
        document.getElementById("navbar").style.display="none";
        document.getElementById("mobile-menu").style.animationName="show";
    }
    
    
});

document.getElementById("close").addEventListener("click",function(e){
    document.getElementById("mobile-menu").style.animationName="closing";
    setTimeout(closed,180);
    function closed(){
        document.getElementById("mobile-menu").style.display="none";
        document.getElementById("menu-content").style.display="none";
        document.getElementById("close").style.display="none";
        document.getElementById("navbar").style.display="flex";
        document.getElementById("navbar").style.animationName="appear";
    }
});



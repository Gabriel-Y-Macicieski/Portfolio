var seções = document.querySelectorAll(".section");

for (i=1;i<seções.length;i=i+2){
    var img = seções[i].childNodes[3];
    seções[i].insertBefore(img, seções[i].childNodes[0]);
    
}
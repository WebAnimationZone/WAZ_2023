const slider = document.getElementById("slider");
const slider2 = document.getElementById("slider2")
const root = document.documentElement;

slider.addEventListener("input", (e) =>{
    root.style.setProperty("--rotateSpeed", e.target.value+"s");
})

slider2.addEventListener("input", (e) =>{
    root.style.setProperty("--bounceSpeed", e.target.value+"s");
})

colorpicker.addEventListener("input", (e) =>{
    root.style.setProperty("--boxColor", e.target.value);
})

colorpicker2.addEventListener("input", (e) =>{
    root.style.setProperty("--ballColor", e.target.value);
})

colorpicker3.addEventListener("input", (e) =>{
    root.style.setProperty("--color1", e.target.value);
})

colorpicker4.addEventListener("input", (e) =>{
    root.style.setProperty("--color2", e.target.value);
})

colorpicker5.addEventListener("input", (e) =>{
    root.style.setProperty("--backgroundColor", e.target.value);
})

checke.addEventListener("input", (e) =>{
    let elementache = document.getElementById("checke").checked;
    if(elementache){
        root.style.setProperty("--rotatedirection", 360+"deg");
    }
    else{
        root.style.setProperty("--rotatedirection", -360+"deg");
    }
    elementache=!elementache;

})

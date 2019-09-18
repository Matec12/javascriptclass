var travelMode =document.getElementsByName("trip");

Array.from(travelMode).forEach(element=>{
    element.addEventListener("click",(ev)=>{
        if(ev.target.id=="one"){
            roundTrip.setAttribute("hidden",true)
               Array.from(document.getElementsByClassName("return")).forEach(element=>{
                   element.setAttribute("hidden",true)
               })
        }
        else{
            roundTrip.removeAttribute("hidden")
            Array.from(document.getElementsByClassName("return")).forEach(element=>{
                element.removeAttribute("hidden")
            })
        }
    })
})

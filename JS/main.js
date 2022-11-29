function activar(){
    let obt = document.getElementById("obt1")
    let obt2 = document.getElementById("obt2")


    obt.classList.remove("off")
    obt.classList.add("on")
    obt2.classList.remove("on")
    obt2.classList.add("off")
}

function activar2(){
    let obt = document.getElementById("obt1")
    let obt2 = document.getElementById("obt2")

    
    obt.classList.remove("on")
    obt.classList.add("off")
    obt2.classList.remove("off")
    obt2.classList.add("on")


}
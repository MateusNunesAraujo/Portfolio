
    let age = document.getElementById("age")
    const fecha = Date.now()
    const hoy = new Date(fecha)
    const year = hoy.getFullYear()
    let edad = year -2005
    age.innerHTML = edad


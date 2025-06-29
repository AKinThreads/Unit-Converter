let textNum = document.getElementById("textIn")
let convVal = document.getElementById("conv-btn")
let lenCon = document.getElementById("lenCon")
let volCon = document.getElementById("volCon")
let massCon = document.getElementById("massCon")
let meters
let feet
let liters
let gallons
let kilos
let pounds

function convert(){
    let inputVal = parseFloat(textNum.value)
    if (isNaN(inputVal) || textNum.value.trim() === "") {
        alert("Please enter a valid number.")
        return
    }
    lenCon.innerHTML = "" 
    volCon.innerHTML = ""
    massCon.innerHTML = ""
    render(inputVal)
}

function render(val) {
    meters = val / 3.281
    feet = val * 3.281
    liters = val / 0.264
    gallons = val * 0.264
    kilos = val / 2.204
    pounds = val * 2.204

    lenCon.innerText = `${val} meters = ${feet.toFixed(3)} feet | ${val} feet = ${meters.toFixed(3)} meters`
    volCon.innerText = `${val} liters = ${gallons.toFixed(3)} gallons | ${val} gallons = ${liters.toFixed(3)} liters`
    massCon.innerText = `${val} kilos = ${pounds.toFixed(3)} pounds | ${val} pounds = ${kilos.toFixed(3)} kilos`
}

const inputEl = document.getElementById("number-input")
const convertBtn = document.getElementById("convert-btn")
let numberInput = 0

const lengthEl = document.getElementById("length-p")
const volumeEl = document.getElementById("volume-p")
const massEl = document.getElementById("mass-p")

const conversionRates = {
    "meterToFeet": 3.281,
    "literToGallons": 0.264,
    "kiloToPounds": 2.204
}

function calculate() {
    let conversions = {}
    conversions['feet'] = (numberInput * conversionRates['meterToFeet']).toFixed(3)
    conversions['meters'] = (numberInput / conversionRates['meterToFeet']).toFixed(3)
    conversions['liters'] = (numberInput * conversionRates['literToGallons']).toFixed(3)
    conversions['gallons'] = (numberInput / conversionRates['literToGallons']).toFixed(3)
    conversions['kilos'] = (numberInput * conversionRates['kiloToPounds']).toFixed(3)
    conversions['pounds'] = (numberInput / conversionRates['kiloToPounds']).toFixed(3)
    return conversions
}

function render() {
    numberInput = Number(inputEl.value)
    conversions = calculate()
    length_string = `${numberInput} meters = ${conversions['feet']} feet | ${numberInput} feet = ${conversions['meters']} meters`
    lengthEl.textContent = length_string
    volume_string = `${numberInput} liters = ${conversions['gallons']} gallons | ${numberInput} gallons = ${conversions['liters']} liters`
    volumeEl.textContent = volume_string
    mass_string = `${numberInput} kilos = ${conversions['pounds']} pounds | ${numberInput} pounds = ${conversions['kilos']} kilos`
    massEl.textContent = mass_string
}

convertBtn.addEventListener("click", render)

render()
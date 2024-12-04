import { NameCityWeather } from "./weather.js"

window.addEventListener('load',() =>{
   let btn = document.getElementById('NameCityBtn')
   btn.addEventListener("click", () =>{
    NameCityWeather()

    }) 
   
})


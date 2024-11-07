
const apiKey = "9a5fc32ab7e00c582168da4c4fc1a975";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchCity = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city){
    const response = await fetch(apiUrl+ city + `&appid=${apiKey}`)
    if(response.status == 404){
        document.querySelector(".errorMsg").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    }
    else{
        var data = await response.json()
        console.log(data)
        document.querySelector(".class").innerHTML = data.name 
        document.querySelector(".temp").innerHTML = Math.round(data.name.temp)+"°c"
        document.querySelector(".humidity").innerHTML = data.name.humidity+"%"
        document.querySelector(".wind").innerHTML = data.wind.speed + "kmph"

        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "clouds.png"
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "clear.png"
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "rain.png"
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "drizzle.png"
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "mist.png"
        }
        document.querySelector(".weather").style.display = "block"
        document.querySelector(".errorMsg").style.display = "none"
    }
}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchCity.value)
})
checkWeather()
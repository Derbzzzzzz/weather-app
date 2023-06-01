import { getData } from "./API.js";
import appendImages from "./images.js"

async function searchData(event) {
  let search = document.getElementById("search");
  let error = document.querySelector(".error");
  let data = await getData(search.value);

  console.log(data);

  if (data == 1) {
    error.textContent = "Please Enter Valid City Name";
  } else{
    error.textContent = ""
    console.log(data)
    updateAll(data)
    // update Page with data
  }

  event.preventDefault();
}

function formListener() {
  let form = document.querySelector("form");

  form.addEventListener("submit", searchData);
}

function updateAll(info){
  updateCity(info.name)
  updateCountry(info.country)
  updateWeather(info.weather)
  updateTemp(info.FTemp)
  updateFeelsLike(info.FeelFTemp)
  updateHumidity(info.humidity)

}

function updateCity(newCity){
  let city = document.querySelector(".city")

  city.textContent = newCity
}

function updateCountry(newCountry){
  let country = document.querySelector(".country")

  country.textContent = newCountry
}

function updateWeather(newWeather){
  let weather = document.querySelector(".weather")

  weather.textContent = newWeather
}

function updateTemp(newTemp){
  let humidity = document.querySelector(".humidity")

  humidity.textContent = newTemp
}

function updateFeelsLike(newFeelsLike){
  let feelsLike = document.querySelector(".feels-like")

  console.log(newFeelsLike)

  feelsLike.textContent = newFeelsLike
}

function updateHumidity(newHumidity){
  let temp = document.querySelector(".temp")

  temp.textContent = newHumidity
}


function pageSetup() {
  appendImages();
  formListener();
}

export { pageSetup };

import { getData } from "./API.js";
import appendImages from "./images.js"

let currInfo = await(getData("Saint Louis"))

async function searchData(event) {
  let search = document.getElementById("search");
  let error = document.querySelector(".error");
  let data = await getData(search.value);

  console.log(data);

  if (data == 1) {
    error.textContent = "Please Enter Valid City Name";
  } else{
    error.textContent = ""
    currInfo = data
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
  updateTemps(info)
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

function updateHumidity(newHumidity){
  let humidity = document.querySelector(".humidity")

  humidity.textContent = newHumidity
}

// function updateFeelsLike(newFeelsLike){
//   let feelsLike = document.querySelector(".feels-like")

//   console.log(newFeelsLike)

//   feelsLike.textContent = newFeelsLike
// }

function updateTemps(info){
  let temp = document.querySelector(".temp")
  let feelsLike = document.querySelector(".feels-like")
  let mySwitch = document.querySelector(".checkbox")
  let abbrevs = document.querySelectorAll(".abbrev")

  if(mySwitch.checked == false){
    temp.textContent = info.FTemp
    feelsLike.textContent = info.FeelFTemp
    abbrevs.forEach(function(abbrev){
      abbrev.textContent = "F"
    })

  } else{
    temp.textContent = info.CTemp
    feelsLike.textContent = info.FeelCTemp
    abbrevs.forEach(function(abbrev){
      abbrev.textContent = "C"
    })
  }

  console.log(abbrevs)
}

function displayInfo(){
  let info = document.querySelector(".info")
  info.style.display = "flex"
}

function switchListener(){
  let mySwitch = document.querySelector(".checkbox")

  mySwitch.addEventListener("change", switchTemp)
}

function switchTemp(){
  updateTemps(currInfo)
}


async function pageSetup() {
  appendImages();
  formListener();
  switchListener();
  updateAll(await getData("Saint Louis"))
  displayInfo();
}

export { pageSetup };

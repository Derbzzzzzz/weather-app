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
    // update Page with data
  }

  event.preventDefault();
}

function formListener() {
  let form = document.querySelector("form");

  form.addEventListener("submit", searchData);
}

function pageSetup() {
  appendImages();
  formListener();
}

export { pageSetup };

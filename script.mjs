//appID = 39912805
//API Key: 80f32aa604cf4bdd9262044952631e68
// https://spoonacular.com/food-api
// https://api.spoonacular.com/food/products/search
// https://api.spoonacular.com/recipes/1003464/nutritionWidget.json

// "It didn’t work. I tried to create a nutrition table for fruits but had no success with any API out there."





const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "ba6f482929ef4cbaf04ebdb728809d58";


//adicionando o eventlistener para quando clicar no botao e o web interagir e responder
weatherForm.addEventListener("submit", async event => {
    event.preventDefault(); //prevent web to reset

    const city = cityInput.value;
    if(city){
        try{
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData)
        }
         catch(error){
           console.error(error);
             displayError(error);
        }
    }
    else{
        displayError("Please enter a city.")
    }
});

//
async function getWeatherData(city){
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    
    const response = await fetch(apiUrl);
    //console.log(response);
     if(!response.ok){
         throw new error("Could not fetch data");

    }
     return await response.json();
    
 }





function displayWeatherInfo(data){
    
    const {name: city, 
        main: {temp,humidity}, 
        weather: [{description, id}]} = data;

    card.textContent = "",
    card.style.display = "flex"
console.log(data)
    const cityDisplay = document.createElement("h1")
    const tempDisplay = document.createElement("p")
    const humidityDisplay = document.createElement("p")
    const descDisplay = document.createElement("p")

    cityDisplay.textContent = city;
    tempDisplay.textContent = `${((temp - 273.15) * (9/5) + 32).toFixed(1)} F`;
    humidityDisplay.textContent = `humidity: ${humidity}%`;
    descDisplay.textContent = description;


    cityDisplay.classList.add("cityDisplay");
    tempDisplay.classList.add("tempDisplay");
    humidityDisplay.classList.add("humidityDisplay");
    descDisplay.classList.add("descDisplay");


    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
    
}


//Error handler 
function displayError(message){
    const erroDisplay = document.createElement("p");
    erroDisplay.textContent = message;
    erroDisplay.classList.add("erroDisplay")

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(erroDisplay);

}
//appID = 39912805
//API Key: 80f32aa604cf4bdd9262044952631e68
// https://spoonacular.com/food-api
// https://api.spoonacular.com/food/products/search
// https://api.spoonacular.com/recipes/1003464/nutritionWidget.json

const fruitForm = document.querySelector(".fruitForm");
const fruitInput = document.querySelector(".fruitInput");
const card = document.querySelector(".card");
const apiKey = "80f32aa604cf4bdd9262044952631e68";

fruitForm.addEventListener("submit", async event => {
    event.preventDefault(); //prevent the page to reload when click on the btn
    
    const fruit = fruitInput.value;

    if(fruit){  //if there is fruit do this next ->>
        try{
            const fruitData = await getFruitData(fruit);
            displayFruitInfo(fruitData);
        }
        catch(error){
            console.error(error);
            errorDisplay(error);
        }
    }
    else{
        errorDisplay("Please type your fruit");
    }

});


async function getFruitData(fruit){
    const apiUrl = `https://api.spoonacular.com/food/products/search`
    const response = await fetch(apiUrl);
    console.log(response)
}

function displayFruitInfo(data){

}

function errorDisplay(message){
    const displayError = document.createElement("p");
    displayError.textContent = message;
    displayError.classList.add("displayError");

    card.textContent = "" ;
    card.style.display = "flex";
    card.appendChild(displayError);
}
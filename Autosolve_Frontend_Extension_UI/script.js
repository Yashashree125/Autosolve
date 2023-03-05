
    // Your JavaScript code here
    
const input = document.getElementById("api-key");
const displayApiKey = document.getElementById("display-api-key");

input.addEventListener("input", function() {
  displayApiKey.textContent = this.value;
});


function clearForm() {
    document.getElementById("api-key-input").value = "";
    //document.getElementById("current-api-key").innerHTML = "";
  }
  

const apiResponse = {
  remainingCredits: 42
};

// credits element
const credits = document.getElementById("credits");

// Update remaining credits
credits.textContent = `You have ${apiResponse.remainingCredits} remaining credits`;
 
function getRemainingCredits() {
  var apiKey = document.getElementById("api-key-input").value;
  // Store the API key in local storage
  localStorage.setItem("apiKey", apiKey);
  // Make the API request and display the remaining credits
  // ...
}
window.onload = function() {
  // Get the API key from local storage
  var apiKey = localStorage.getItem("apiKey");
  if (apiKey !== null) {
    // Set the input field value to the stored API key
    document.getElementById("api-key-input").value = apiKey;
    // Make the API request and display the remaining credits
    // ...
  }
};



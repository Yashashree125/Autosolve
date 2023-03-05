const input = document.getElementById("api-key");
const displayApiKey = document.getElementById("display-api-key");

input.addEventListener("input", function () {
  displayApiKey.textContent = this.value;
});

function clearForm() {
  document.getElementById("api-key-input").value = "";
  //document.getElementById("current-api-key").innerHTML = "";
}

const apiResponse = {
  remainingCredits: 42,
};

// credits
const credits = document.getElementById("credits");

// Update
credits.textContent = `You have ${apiResponse.remainingCredits} remaining credits`;

function getRemainingCredits() {
  var apiKey = document.getElementById("api-key-input").value;

  localStorage.setItem("apiKey", apiKey);
}
window.onload = function () {
  var apiKey = localStorage.getItem("apiKey");
  if (apiKey !== null) {
    document.getElementById("api-key-input").value = apiKey;
  }
};

let arrivalTime = document.getElementById("form-arrival-time");
let prepTime = document.getElementById("form-prep-time");
const startButton = document.getElementById("btn");
let customerNumber = 100;

//empty input field -> put in project lib js file.
const empty = (element) => {
  element.value = ""
}

//Initiates the customer arrival time and prep time
startButton.addEventListener("click", e => {
  e.preventDefault();
  
  if (isNaN(arrivalTime.value) || arrivalTime.value === "") {
    empty(arrivalTime)
    empty(prepTime)
    return alert(`You entered ${arrivalTime.value} and ${prepTime.value}, these should be numbers.`);
  }

  return setInterval(() => {
    console.log(`Customer: ${customerNumber++}`);
  }, arrivalTime.value * 1000);
});

let arrivalTime = document.getElementById("form-arrival-time");
let prepTime = document.getElementById("form-prep-time");
const startButton = document.getElementById("btn");
let customerNumber = 100;
let appStarted = false;
//empty input field -> put in project lib js file.
const empty = element => {
  element.value = "";
};

//Initiates the customer arrival time and prep time
startButton.addEventListener("click", e => {
  e.preventDefault();

  if (appStarted) {
    alert("App is already running!"); //Swtich this for a modal 
    return "";
  }

  appStarted = true;
  console.log(`Customer: ${customerNumber++}`); //Inital customer, Switch this for a api call to server
  return setInterval(() => {
    console.log(`Customer: ${customerNumber++}`); //Interval customer, Switch this for a api call to server
  }, arrivalTime.value * 1000);
});

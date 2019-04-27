let arrivalTime = document.getElementById('form-arrival-time');
let prepTime = document.getElementById('form-prep-time');
const startButton = document.getElementById('btn');

startButton.addEventListener('click', (e) => {
  e.preventDefault()
  arrivalTime = arrivalTime.value
  prepTime = prepTime.value
});

const intervalTime = (arrival) => {
  let customerNum = 100;
  return setInterval(() => {console.log(`Customer: ${customerNum++}`)}, arrival * 1000)
}




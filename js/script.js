const counter = document.getElementById('counter');
const sum = document.getElementById('add');
const subtract = document.getElementById('subtract');
const reset = document.getElementById('reset');
const setValue = document.getElementById('set-value');  
const prevCount = document.querySelector('.prev-count')

let count = 0;

function changeColor(){
  if (count < 0){
    counter.style.color = 'red'
  } else if (count > 0){
    counter.style.color = '#27C638'
  } else {
    counter.style.color = 'black'
  }
}

sum.addEventListener('click', function(){
  count ++;
  counter.textContent = count;
  changeColor();

})

subtract.addEventListener('click', function(){
  count --;
  counter.textContent = count;
  changeColor();
})

reset.addEventListener('click', function(){
  prevCount.textContent = count;
  count -= count;
  counter.textContent = count;
  changeColor();
})

setValue.addEventListener('click', function set (){
  value = prompt('Set your starting value', count);
  if (isNaN(value)){
    alert('Sorry this is not a number!');
    set();
  } else if (value === null){
    counter.textContent = count; //in case prompt is canceled by the user 
  } else {
    count = value;
    counter.textContent = count;
  }
  changeColor();
})


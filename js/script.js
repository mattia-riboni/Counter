//Creating all the elements inside the body
const h1 = createElement('h1', 'h1', 'COUNTER');
document.body.append(h1);

const container = createElement('div', 'container','');
document.body.append(container);

const counter = createElement('div', 'counter','0');
container.append(counter)

const subtract = createElement('button', 'subtract', '-');
container.append(subtract);

const add = createElement('button', 'add', '+');
container.append(add);

const prevCountContainer = createElement('div', 'prev-count-container', 'Previous count:');
container.append(prevCountContainer);

const prevCount = createElement('div', 'prev-count', '0');
container.append(prevCount);

const specialBtnContainer = createElement('div', 'special-btn-container','');
document.body.append(specialBtnContainer);

const reset = createElement('button', 'reset', 'RESET');
specialBtnContainer.append(reset);

const setValue = createElement('button', 'set-value', 'Set Value');
specialBtnContainer.append(setValue);

//------------------------------------

let count = 0;

//New element creation function
function createElement(tag, id, content){
  newElement = document.createElement(tag);
  newElement.id = id;
  newElement.innerHTML = content;
  return newElement;
}

//Change the count color faster
function changeColor(){
  if (count < 0){
    counter.style.color = 'red'
  } else if (count > 0){
    counter.style.color = '#27C638'
  } else {
    counter.style.color = 'black'
  }
}

// + and - wrapper for event delegation
container.addEventListener('click', (e) => {
  if (e.target.id === 'add') {
    count++;
  } else if (e.target.id === 'subtract') {
    count--;
  }
  counter.innerHTML = count;
  changeColor();
});

//reset and set value wrapper for event delegation
specialBtnContainer.addEventListener('click', (e) => { 
  if (e.target.id === 'reset'){
    prevCount.innerHTML = count;
    count -= count;
  } else if (e.target.id === 'set-value'){
     let value = prompt('Set your starting value', count);
      if (isNaN(value)){
        alert('Sorry this is not a number!');     //in case prompt contains letters alert this
      } else if (value === null){                 //in case prompt is canceled by the user do nothing
      } else {
        count = value;
        
      }
    } 
    counter.innerHTML = count;
    changeColor();
  }
)

  


// TODO(you): Write the JavaScript necessary to complete the homework.
const check_image = "images/checked.png";
const uncheck_image = "images/unchecked.png";
const checkboxes = document.querySelectorAll('.checkbox');
activateCheckboxes();


function check(event) {
  const clickedBox = event.currentTarget;
  const item = clickedBox.parentElement;
  unselectAll(item.dataset.questionId);
  selectItem(item);

}
function activateCheckboxes(){
  for (let checkbox of checkboxes){
    checkbox.addEventListener('click', check);
  }
}

function unselectAll(questionId){
  allItems = document.querySelectorAll('div[data-question-id=' + questionId + ']');
  for (let item of allItems){
    unselectItem(item);
  }
}

function unselectItem(item){
  const checkbox = item.querySelector('.checkbox');
  checkbox.src = uncheck_image;
  item.style.opacity = 0.6;
  item.style.backgroundColor = "#f4f4f4";
}

function selectItem(item){
  const checkbox = item.querySelector('.checkbox');
  checkbox.src = check_image;
  item.style.backgroundColor = "#cfe3ff";
  item.style.opacity = 1;
  selected[item.dataset.questionId] = item.dataset.choiceId;
}

function mouseover(event){
  const button = event.currentTarget;
  button.style.backgroundColor = "#e0e0e0";
}

function mouseout(event){
  const button = event.currentTarget;
  button.style.backgroundColor = "#cecece";
}
// You can access the RESULTS_MAP from "constants.js" in this file since
// "constants.js" has been included before "script.js" in index.html.


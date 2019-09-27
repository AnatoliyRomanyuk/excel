"use strict"
const showTable = () => {
  createTable();
  addEvent(); 
  inOutData(); 
}

const addEvent = () =>{ 
  addEventsForDblClick();
  addEventsForOneClick();
  addEventsForHitDelete();
  /* addEventsForMoveUp();
  addEventsForMoveDown();
  addEventsForMoveLeft();
  addEventsForMoveUpRight(); */
}

const inOutData = () =>{

}


const createTable = () => {
  let div = document.getElementsByTagName('div')[1];
  let tbl = document.createElement('table');    
  tbl.setAttribute('id', 'table');
  let tbdy = document.createElement('tbody');
  let rows = document.getElementById('columns').value;    
  let columns = document.getElementById('rows').value;
  for (let i = 0; i <= columns; i++) {
    let tr = document.createElement('tr');
      for (let j = 0; j <= rows; j++) {
        let td = document.createElement('td');
        tr.appendChild(td);
        if (i === 0 && j === 0) {
          td.width = 50;
        } else if (i === 0 && j > 0) {
          let alpha = " abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
          td.innerHTML = alpha.charAt(j);
          td.width = 50;
        } else if (i > 0 && j === 0) {
          td.innerHTML = i;
        } else {
          // td.appendChild(document.createElement('p'));
          td.innerHTML = '';
        }
      }
    tbdy.appendChild(tr);
  }
tbl.appendChild(tbdy);
div.appendChild(tbl)
}
 
const addEventsForDblClick = () => { 
document.querySelectorAll('td').forEach((element) => { 
element.ondblclick = function() {
  let val = this.innerHTML;  
  let input = document.createElement('input');  
  input.value = val;    
input.onblur = function() {
  let val = this.value;
  
  this.parentNode.innerHTML = val;     
}
	this.innerHTML = ' ';
	this.appendChild(input);
	input.focus();
}});  
}

const addEventsForHitDelete = () => {
  // let elem = document.getElementById('table')
    // (event.keyCode === 46)
  document.addEventListener('keydown', (function(event) {
    if (event.key === 'Delete') {
      let target = event.target;
      while (target !== this) {
        if (target.tagName === 'TD') {
          console.log(target.classList.contains("example"));
        }
        target = target.parentNode;
      }
    }
  }))
}

const addEventsForOneClick = () => {
  let table = document.getElementById('table');
  let selectedTd;
  table.onclick = function(event) {
    let target = event.target;
    console.log(event.target);
    while (target !== this) {
      if (target.tagName === 'TD') {
        highlight(target);
      }
      target = target.parentNode;      
    }
  }
  function highlight(node) {
    if (selectedTd) {
      selectedTd.classList.remove('highlight');
    }
    selectedTd = node;
    selectedTd.classList.add('highlight');
  }
}
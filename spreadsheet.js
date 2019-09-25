"use strict"

const showTable = () => {
  createTable();
  addEvent();
  console.log(document.getElementsByClassName('highlight'));
}

const addEvent = () =>{ 
  addEventsForDblClick();
  addEventsForOneClick();
  addEventsForHitDelete();
};



/* const createBodyTable = () => {
    let div = document.getElementsByTagName('div')[1];
    let tbl = document.createElement('table');    
    tbl.setAttribute('id', 'table');
    let tbdy = document.createElement('tbody');
    let rows = document.getElementById("columns").value;    
    let columns = document.getElementById("rows").value;
    for (let i = 0; i < columns; i++) {
      let tr = document.createElement('tr');
        for (let j = 0; j < rows; j++) {
          let td = document.createElement('td');
          //td.appendChild(document.createTextNode('&nbsp;'));            
            //td.className = "cellTD";                 
          tr.appendChild(td)
        }
      tbdy.appendChild(tr);
    }
  tbl.appendChild(tbdy);
  div.appendChild(tbl)
}; */

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

          const alpha = () => {return td.innerHTML = 'a'; }
                   alpha(); 
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
};

  


  // window.onload = function(){}

  
  //:nth-child(2n+3)
const addEventsForDblClick = () => { 
document.querySelectorAll('td').forEach((element) => { 
element.ondblclick = function() {
  let val = this.innerHTML;
  // console.log(val);
  let input = document.createElement('input');
  // console.log(input);
  input.value = val;    
input.onblur = function() {
  let val = this.value;
  //console.log('in'+ val);
  this.parentNode.innerHTML = val;     
}
	this.innerHTML = ' ';
	this.appendChild(input);
	input.focus();
}});  
};
/* const addEventsForOneClick = () => { 
  let table = document.querySelector('#table');
  console.log(table);
  let selectedCells = table.getElementsByClassName('selected');  
  table.addEventListener('click', function(e) {
    let td = e.target;
  console.log(e.target, 'fsdfasd');  
  if (selectedCells.length) {
    selectedCells[0].className = '';
  }
  td.className = 'selected';  
});
}; */

/* if (event.keyCode === 46) {
  console.log(true);      
} */
const addEventsForHitDelete = () => {
/*   let table = document.querySelector('#table');
  let selectedCells = table.getElementsByClassName('highlight');
  let selectedTd;  
  table.addEventListener('keydown', function(event) {
    let target = event.target;
    while (target != this) {
      if (event.keyCode === 46) {
        // if (target.tagName === 'TD') {
        console.log(selectedCells, 'delete');
      // }
      target = target.parentNode;
    }
    }
    
}); */
}

const addEventsForOneClick = () => {
  let table = document.getElementById('table');
  let selectedTd;
  table.onclick = function(event) {
    let target = event.target;    
    while (target !== this) {
      if (target.tagName === 'TD') {
        highlight(target);
        //return;
      }
      target = target.parentNode;
      //console.log(target.parentNode, 'target.parentNode');
    }
  }
  function highlight(node) {
    if (selectedTd) {
      selectedTd.classList.remove('highlight');
    }
    selectedTd = node;
    selectedTd.classList.add('highlight');
  }
};
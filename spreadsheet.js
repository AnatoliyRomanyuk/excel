"use strict"
const tableCreate = () => {
    //let body = document.getElementsByTagName('body')[0];
    let div = document.getElementsByTagName('div')[1];
    let tbl = document.createElement('table');    
    tbl.setAttribute('class', 'table');
    let tbdy = document.createElement('tbody');
    let rows = document.getElementById("rows").value;    
    let columns = document.getElementById("columns").value;
    for (let i = 0; i < columns; i++) {
      let tr = document.createElement('tr');
        for (let j = 0; j < rows; j++) {
            let td = document.createElement('td');            
            td.appendChild(document.createTextNode('&nbsp;'));
            td.setAttribute('class', ' ');
            td.setAttribute('id', 'table');
            //  td.setAttribute('ondblclick', 'f()');
            td.className = "td";                 
            tr.appendChild(td)
        }
      tbdy.appendChild(tr);
    }
    tbl.appendChild(tbdy);
    div.appendChild(tbl)
  } 

  
  /* const conEl = () => {
    let val = this.innerHTML;
    console.log(val);
  }    */

  window.onload = function(){
   document.querySelectorAll("td").forEach((element) => { 
    element.ondblclick = function() {
    let val = this.innerHTML;
    console.log(val);
    let input = document.createElement("input");
    console.log(input);
    input.value = val;    
		input.onblur = function() {
      let val = this.value;
      console.log('in'+ val);
      this.parentNode.innerHTML = val;     
		}
		this.innerHTML = " ";
		this.appendChild(input);
		input.focus();
  }});  
  /*  */
  // let table = document.querySelector('#table');
  let table = document.querySelector('#table');
  console.log(table);
  let selectedCells = table.getElementsByClassName('selected');  
  table.addEventListener('click', function(e) {
  let td = e.target;
  console.log(selectedCells);  
  if (selectedCells.length) {
    selectedCells[0].className = '';
  }
  td.className = 'selected';
  
});

};




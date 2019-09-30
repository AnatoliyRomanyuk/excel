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

const inOutData = () => {

}

const setAttributes = (el, attrs) => { //нескольких атрибутов для элемента
    for(let key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}

const validate = (el) => {
    if (el >= 2 && el < 10) {
        return el;
    }
    return alert("alarm");
}

const createTable = () => {
  let div = document.getElementsByTagName("div")[3];
  let tbl = document.createElement("table");
  let button = document.createElement("button");
  button.textContent = "EXPORT";
  setAttributes(button, {"type": "button", "onclick": "exportJ()"});
  tbl.setAttribute("class", "table");
    tbl.setAttribute("id", "table");
  let tbdy = document.createElement("tbody");
  let elrows = document.getElementById("columns").value;
  let elcolumns = document.getElementById("rows").value;
    let rows = validate(elrows);
    let columns = validate(elcolumns);
  for (let i = 0; i <= columns; i++) {
    let tr = document.createElement("tr");
      for (let j = 0; j <= rows; j++) {
        let td = document.createElement("td");
        tr.appendChild(td);
        if (i === 0 && j === 0) {
            td.width = 50;
        } else if (i === 0 && j > 0) {
          let alpha = " abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
          td.innerHTML = alpha.charAt(j); //charAt() возвращает указанный символ из строки
          td.width = 50;
        } else if (i > 0 && j === 0) {
          td.innerHTML = i;
        } else {
          // td.appendChild(document.createElement('p'));
          td.innerHTML = "";
        }
      }
    tbdy.appendChild(tr);
  }
tbl.appendChild(tbdy);
tbl.appendChild(button);
div.appendChild(tbl)
}

const addEventsForDblClick = () => {
    document.querySelectorAll("td").forEach((element) => {
    element.ondblclick = function() {
      let val = this.innerHTML;
      let input = document.createElement("input");
      input.value = val;
    input.onblur = function() {
      let val = this.value;
      this.parentNode.innerHTML = val;
    }
        this.innerHTML = "";
        this.appendChild(input);
        input.focus();
    }});
}

const addEventsForHitDelete = () => {
    // (event.keyCode === 46)
    document.addEventListener("keydown", (function(event) {
        if (event.key === "Delete") {
          const el = document.getElementsByClassName("highlight")[0]
          console.log("elemnt:", el)
            el.innerHTML = "";
            console.log(event.target.classList.contains("highlight"));
        }
    }))
}

const addEventsForOneClick = () => {
  //let table = document.getElementById("table"); //делегирование событий
    let table = document.getElementsByClassName("table")[0];
    console.log("table:", table)
    let selectedTd;
  table.onclick = function(event) {
    let target = event.target;
    while (target !== this) {
      if (target.tagName === "TD") {
        highlight(target);
      }
      target = target.parentNode;
    }
  }
  function highlight(node) {
    if (selectedTd) {
      selectedTd.classList.remove("highlight");
    }
    selectedTd = node;
    selectedTd.classList.add("highlight");
  }
}


const exportJ = () => {
    let table = document.getElementById("table");

    let colmn = table.rows[0].cells;
    console.log("colm:", colmn)
    let message = {
        "data": [],
    };

    for (let i = 0, row; row = table.rows[i]; i++) {
        colmn = row.cells;
            console.log("colmn2:", colmn);
        message.data.push(
            [colmn[0].innerHTML,
            colmn[1].innerHTML,
            colmn[2].innerHTML,
            colmn[3].innerHTML],
        );
    }
    // console.log(message);
    let myString = JSON.stringify(message);
    document.getElementById("t").value = myString;
}

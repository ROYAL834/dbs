import { Component, OnInit } from '@angular/core';
import {TabulatorFull as Tabulator} from 'tabulator-tables';
var Tasks=[]
var tabledata
@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})
export class TaskPage implements OnInit {

  constructor() { }

  ngOnInit() {this.tabulator()
  }
  tabulator(){
    var minMaxFilterEditor = function(cell, onRendered, success, cancel, editorParams){
      var end; 
      var container = document.createElement("span");
      //create and style inputs
      var start = document.createElement("input");
      start.setAttribute("type", "number");
      start.setAttribute("placeholder", "Min");
      start.setAttribute("min", "0");
      start.setAttribute("max", "100");
      start.style.padding = "4px";
      start.style.width = "50%";
      start.style.boxSizing = "border-box";
      
      start.value = cell.getValue();
      function buildValues(){
        success({
            start:start.value,
            end:end.value,
        });
    }
  
    function keypress(e){
        if(e.keyCode == 13){
            buildValues();
        }
  
        if(e.keyCode == 27){
            cancel();
        }
    }
    end = start.cloneNode();
    end.setAttribute("placeholder", "Max");
    start.addEventListener("change", buildValues);
    start.addEventListener("blur", buildValues);
    start.addEventListener("keydown", keypress);
  
    end.addEventListener("change", buildValues);
    end.addEventListener("blur", buildValues);
    end.addEventListener("keydown", keypress);
  
  
    container.appendChild(start);
    container.appendChild(end);
  
    return container;
  }
   //custom max min filter function
   function minMaxFilterFunction(headerValue, rowValue, rowData, filterParams){
    
    if(rowValue){
        if(headerValue.start != ""){
            if(headerValue.end != ""){
                return rowValue >= headerValue.start && rowValue <= headerValue.end;
            }else{
                return rowValue >= headerValue.start;
            }
        }else{
            if(headerValue.end != ""){
                return rowValue <= headerValue.end;
            }
        }
    }

return true; //must return a boolean, true if it passes the filter.
}    
      
var table = new Tabulator("#table", {
  rowFormatter:function(row){
},
colFormatter:function(col){

},
  height:"311px",
  data: Tasks, 
  layout:"fitColumns",
  columns:[

    {title:"Task Name", field:"task-name",headerFilter:"input",width:130},

    {title:"Priority", field:"task-priority", headerFilter:"input",width:130},
    
      {title:"Status", field:"task-status", headerFilter:"input",width:130},

      {title:"Created On", field:"task-created-on", headerFilter:"input",width:130},

     ]

});
}
}

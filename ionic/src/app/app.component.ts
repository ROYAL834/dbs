import { Component } from '@angular/core';
// import { SplashScreen } from '@ionic-native/splash-screen/ngx';
// import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import {TabulatorFull as Tabulator} from 'tabulator-tables';
var Tasks=[]
var tabledata

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  Task: any;
  Fly: any;
  Project: any;
  Report: any;

  theme : boolean=false;
  constructor(
    private platform: Platform,
    // private splashScreen: SplashScreen,
    // private statusBar: StatusBar,
    private translate: TranslateService,
    public router:Router  
  ) {
    this.initializeApp();
    this.sideMenu();
  }
   
  

  initializeApp() {
    this.platform.ready().then(() => {
      // this.statusBar.styleLightContent();
      // this.splashScreen.hide();
      // this.router.navigateByUrl('splash');
    });
    this.initTranslate();
  }

  initTranslate() {
    const enLang = 'en';

    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang(enLang);

    if (this.translate.getBrowserLang() !== undefined) {
      this.translate.use(this.translate.getBrowserLang());
    } else {
      this.translate.use(enLang); // Set your language here
    }

    // this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
    //   this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    // });
  }
  // public isDarkmode: boolean = false;
  
  changeTheme($event) {
    // document.body.classList.add('dark');
    // console.log(this.theme)
    if (this.theme){
      
      document.body.classList.remove('dark');
      this.theme=false
    }
    else {
      
      document.body.classList.add('dark');
      this.theme=true
    }
    
  };

  sideMenu() {
    this.Task =
    [
        {
        title : 'Task',
        url   : '/task',
        icon  : 'square'
        },
      
    ];
    this.Fly =
    [
        {
        title : 'Fly',
        url   : '/fly',
        icon  : 'airplane'
        },
    ];
    this.Project =
    [
        {
        title : 'Project',
        url   : '/project',
        icon  : 'flower'
        },
      
    ];
    this.Report =
    [
      {
        title : 'Report',
        url   : '/report',
        icon  : 'reader-outline'
        
      },
      
    ];

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
      
var table = new Tabulator("#example-table-theme", {
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
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = 'recipe';
  onNavigate(feature: string){
    this.loadedFeature = feature;
  }
  // selectedTheme: string = 'light';
  constructor(){

  }


  // changeTheme(themeName: string) {
  //   this.selectedTheme = themeName;
  //   // get html body element
  //   const bodyElement = document.body;

  //   if (bodyElement) {
  //     switch(this.selectedTheme){

  //       case 'dark': {

  //         if(bodyElement.className == 'light'){
  //           bodyElement.classList.remove('light');
  //         }
  //         else if(bodyElement.className == 'colorful'){
  //           bodyElement.classList.remove('colorful');
  //         }

  //         bodyElement.classList.add(this.selectedTheme);
  //         break;
  //       }

  //       case 'light': {

  //         if(bodyElement.className == 'dark'){
  //           bodyElement.classList.remove('dark');
  //         }
  //         else if(bodyElement.className == 'colorful'){
  //           bodyElement.classList.remove('colorful');
  //         }

  //         bodyElement.classList.add(this.selectedTheme);
  //         break;
  //       }

  //       case 'colorful': {

  //         if(bodyElement.className == 'dark'){
  //           bodyElement.classList.remove('dark');
  //         }
  //         else if(bodyElement.className == 'light'){
  //           bodyElement.classList.remove('light');
  //         }

  //         bodyElement.classList.add(this.selectedTheme);
  //         break;
  //       }
  //     }
  //   }
  // }


}

import { Component} from '@angular/core';
  
@Component({
    selector: 'swapi-app',
    template: `<div>
                    <router-outlet></router-outlet>
               </div>`
})
export class AppComponent {}
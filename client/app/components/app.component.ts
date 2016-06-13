import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template: ` <h1>My First Angular 2 App</h1>
                <p>Dodo je tu traallalala!! {{title}}</p>
    `
})
export class AppComponent { 
    title: string;

    constructor() {
        this.title = "ovo je naslov";
        
    }
}

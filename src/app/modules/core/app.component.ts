import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'richard-coding-challenge';
  
  ngOnInit(): void {
    console.log('%c RICHARD FREY U. REYES', 'color: #bada55; font-size: 32px;');
    console.log('%c https://richardfreyes.github.io/', 'color: red; font-size: 32px;');
    console.log('%c CODE CHALLENGE', 'color: green; font-size: 32px;');
  }

  
}

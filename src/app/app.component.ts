import { Component } from '@angular/core';
import { Router ,NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
  constructor( private router:Router){}
  selectedTabIndex = 0; 

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url.includes('/forecast')) {
          this.selectedTabIndex = 1;
        } else {
          this.selectedTabIndex = 0;
        }
      }
    });
  }

    onTabChange(event: any) {
      if (event.index === 0) {
        this.router.navigate(['/current-weather']);
      } else if (event.index === 1) {
        this.router.navigate(['/forecast']);
      }
    }
  
}

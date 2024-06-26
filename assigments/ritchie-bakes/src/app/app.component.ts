import { Component } from '@angular/core';

import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ritchie-bakes';
  constructor(private router:Router ) {
      // @ts-ignore: Object is possibly 'null'.
  }
  ngOnInit() {
    this.router.navigate([`/view`, 'top-level']).then( (e) => {});
  }
}

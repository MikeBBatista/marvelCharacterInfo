import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-back-page',
  templateUrl: './back-page.component.html',
  styleUrls: ['./back-page.component.scss']
})
export class BackPageComponent {

  @Input() title: string = '';
  @Input() page: string = '/';
  constructor(private router: Router,) { }

  backPage() {
    this.router.navigate([this.page]);
  }

}

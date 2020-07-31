import { Component } from '@angular/core';


@Component({
  selector: 'app-bwm',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public counter = 0;

  public increment(event: any, incrementor: number): void {
    this.counter += incrementor;
  }
}

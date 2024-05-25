import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
  <h1>This is my first app in angular</h1>
  <p>My name is {{user}} </p>

  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular Journey'
  user = 'Nixarkye'
}
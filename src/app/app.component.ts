import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div>
      <h1>React in Angular Demo</h1>
    </div>
  `
})
export class AppComponent {
  title = 'react-in-angular18-demo';
}

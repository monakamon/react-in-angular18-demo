import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppReactFlowComponent } from './components/app-react-flow.component';
import { AppReactSelectComponent } from './components/app-react-select.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppReactFlowComponent, AppReactSelectComponent],
  template: `
    <div>
      <h1>React in Angular Demo</h1>
      <app-react-flow></app-react-flow>
      <app-react-select></app-react-select>
    </div>
  `
})
export class AppComponent {
  title = 'react-in-angular18-demo';
}

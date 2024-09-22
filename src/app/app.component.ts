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
      <h2>React Select Demo</h2>
      <app-react-select></app-react-select>
      <h2>React Flow Demo</h2>
      <app-react-flow></app-react-flow>
    </div>
  `
})
export class AppComponent {
  title = 'react-in-angular18-demo';
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppReactFlowComponent } from './components/app-react-flow.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppReactFlowComponent],
  template: `
    <div>
      <h1>React in Angular Demo</h1>
      <h2>React Flow Demo</h2>
      <app-react-flow></app-react-flow>
    </div>
  `
})
export class AppComponent {}

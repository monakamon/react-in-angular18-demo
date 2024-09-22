import {
  afterNextRender,
  afterRender,
  Component,
  ElementRef,
  input,
  viewChild
} from '@angular/core';
import ReactDOM, { Root } from 'react-dom/client';
import React from 'react';
import { ReactFlowView } from './ReactFlowView';
import { Node, Edge } from '@xyflow/react';

const containerElementName = 'react_container_element_name';

@Component({
  selector: 'app-react-flow',
  standalone: true,
  imports: [],
  template: `<div #${containerElementName}></div>`
})
export class AppReactFlowComponent {
  public $nodes = input<Node[]>([]);

  public $edges = input<Edge[]>([]);

  private root: Root | null = null;

  private $rootDiv =
    viewChild.required<ElementRef<HTMLDivElement>>(containerElementName);

  private render(): void {
    if (this.root === null) {
      return;
    }
    this.root.render(
      <React.StrictMode>
        <ReactFlowView
          nodes={this.$nodes()}
          edges={this.$edges()}
        ></ReactFlowView>
      </React.StrictMode>
    );
  }

  constructor() {
    afterNextRender(() => {
      this.root = ReactDOM.createRoot(this.$rootDiv().nativeElement);
      this.render();
    });
    afterRender(() => {
      this.render();
    });
  }
}

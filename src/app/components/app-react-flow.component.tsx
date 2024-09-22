import {
  afterNextRender,
  afterRender,
  Component,
  DestroyRef,
  ElementRef,
  inject,
  input,
  viewChild
} from '@angular/core';
import { Edge, Node } from '@xyflow/react';
import React from 'react';
import ReactDOM, { Root } from 'react-dom/client';
import { ReactFlowView } from './ReactFlowView';

const containerElementName = 'react_container_element_name';

@Component({
  selector: 'app-react-flow',
  standalone: true,
  imports: [],
  template: `<div class="size-full" #${containerElementName}></div>`
})
export class AppReactFlowComponent {
  public $nodes = input<Node[]>([], { alias: 'nodes' });

  public $edges = input<Edge[]>([], { alias: 'edges' });

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
  private destroy = inject(DestroyRef).onDestroy(() => {
    this.root?.unmount();
  });
}

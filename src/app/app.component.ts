import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Edge, Node } from '@xyflow/react';
import { AppReactFlowComponent } from './components/app-react-flow.component';

const initialNodes: Node[] = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } }
];
const initialEdges: Edge[] = [{ id: 'e1-2', source: '1', target: '2' }];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppReactFlowComponent],
  template: `
    <div>
      <h1>React in Angular Demo</h1>
      <h2>React Flow Demo</h2>
      <button (click)="goRight()">Go Right</button>
      <div class="h-[400px] w-full">
        <app-react-flow
          [nodes]="$passNode()"
          [edges]="$edges()"
        ></app-react-flow>
      </div>
    </div>
  `
})
export class AppComponent {
  public $nodes = signal<Node[]>(initialNodes);
  public $edges = signal<Edge[]>(initialEdges);
  public $testNode = signal<Node>({
    id: '3',
    position: { x: 0, y: 200 },
    data: {
      label: 'test'
    }
  });
  public $passNode = computed(() => {
    return [...this.$nodes(), this.$testNode()];
  });
  public goRight() {
    this.$testNode.update((node) => {
      return {
        ...node,
        position: { x: node.position.x + 30, y: node.position.y }
      };
    });
  }
}

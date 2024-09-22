import {
  Background,
  BackgroundVariant,
  Controls,
  Edge,
  MiniMap,
  Node,
  ReactFlow,
  useEdgesState,
  useNodesState
} from '@xyflow/react';

export const ReactFlowView = (param: { nodes: Node[]; edges: Edge[] }) => {
  const [nodes] = useNodesState(param.nodes);
  const [edges] = useEdgesState(param.edges);

  return (
    <ReactFlow fitView nodes={nodes} edges={edges}>
      <Controls />
      <MiniMap />
      <Background variant={BackgroundVariant.Lines} gap={10} size={5} />
    </ReactFlow>
  );
};

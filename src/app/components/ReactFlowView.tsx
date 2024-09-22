import {
  Node,
  Edge,
  ReactFlow,
  useEdgesState,
  useNodesState
} from '@xyflow/react';
import React from 'react';

export const ReactFlowView = (param: { nodes: Node[]; edges: Edge[] }) => {
  const [nodes] = useNodesState(param.nodes);
  const [edges] = useEdgesState(param.edges);

  return <ReactFlow fitView nodes={nodes} edges={edges}></ReactFlow>;
};

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
import {useEffect} from "react";

export const ReactFlowView = (param: { nodes: Node[]; edges: Edge[] }) => {
  const [nodes, setNodes] = useNodesState(param.nodes);
  const [edges, setEdges] = useEdgesState(param.edges);

  useEffect(() => {
    setNodes(param.nodes);
    setEdges(param.edges);
  }, [
    param.nodes,
    param.edges,
  ]);

  return (
    <ReactFlow fitView nodes={nodes} edges={edges}>
      <Controls />
      <MiniMap />
      <Background variant={BackgroundVariant.Lines} gap={10} size={5} />
    </ReactFlow>
  );
};

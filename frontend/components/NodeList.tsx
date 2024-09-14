interface Node {
  id: string;
  ip: string;
  bandwidth: number;
  successRate: number;
}

export default function NodeList({ nodes }: { nodes: Node[] }) {
  return (
    <div>
      <h2>Provider Nodes</h2>
      <ul>
        {nodes.map((node) => (
          <li key={node.id}>
            {node.ip} - Bandwidth: {node.bandwidth} - Success Rate: {node.successRate}%
          </li>
        ))}
      </ul>
    </div>
  );
}
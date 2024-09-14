export default function NodeList({ nodes }) {
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
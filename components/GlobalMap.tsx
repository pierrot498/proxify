// Import statements...

// Define the type for a node
interface Node {
  type: 'client' | 'validator' | 'provider';
  // Add other properties as needed, e.g.:
  // lat: number;
  // lng: number;
}

// ... existing code ...

export default function GlobalMap() {
  useEffect(() => {
    // Assuming mockNodes is defined somewhere
    const mockNodes: Node[] = [
      // ... your mock data ...
    ];

    const globe = Globe()
      // ... existing globe configuration ...
      .pointsData(mockNodes)
      .pointColor((d: Node) => d.type === 'client' ? '#39FF14' : d.type === 'validator' ? '#FF3939' : '#3939FF')
      .pointAltitude((d: Node) => d.type === 'validator' ? 0.1 : 0.05)
      .pointRadius((d: Node) => d.type === 'validator' ? 0.05 : 0.03)
      // ... rest of the configuration ...

    // ... rest of the component ...
  }, []);

  // ... rest of the component ...
}
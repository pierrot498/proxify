import { useEffect, useRef, useState } from 'react';
import Globe from 'globe.gl';
import { geoInterpolate } from 'd3-geo';

interface Node {
  id: string;
  lat: number;
  lng: number;
  type: 'client' | 'validator' | 'relay';
  bandwidth?: number;
  successRate?: number;
  uptime?: number;
}

interface Arc {
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  color: string;
}

const mockNodes: Node[] = [
  { id: '1', lat: 40.7128, lng: -74.0060, type: 'client', bandwidth: 100, successRate: 98, uptime: 99.9 },
  { id: '2', lat: 34.0522, lng: -118.2437, type: 'client', bandwidth: 75, successRate: 95, uptime: 99.5 },
  { id: '3', lat: 51.5074, lng: -0.1278, type: 'validator', bandwidth: 200, successRate: 99, uptime: 100 },
  { id: '4', lat: 48.8566, lng: 2.3522, type: 'client', bandwidth: 90, successRate: 97, uptime: 99.7 },
  { id: '5', lat: 35.6762, lng: 139.6503, type: 'validator', bandwidth: 180, successRate: 98, uptime: 99.8 },
  { id: '6', lat: -33.8688, lng: 151.2093, type: 'relay', bandwidth: 150, successRate: 96, uptime: 99.6 },
  { id: '7', lat: 55.7558, lng: 37.6173, type: 'client', bandwidth: 80, successRate: 94, uptime: 99.3 },
  { id: '8', lat: 1.3521, lng: 103.8198, type: 'validator', bandwidth: 190, successRate: 99, uptime: 99.9 },
  { id: '9', lat: -22.9068, lng: -43.1729, type: 'relay', bandwidth: 130, successRate: 95, uptime: 99.5 },
  { id: '10', lat: 25.2048, lng: 55.2708, type: 'client', bandwidth: 85, successRate: 96, uptime: 99.4 },
];

export default function GlobalMap() {
  const globeEl = useRef<HTMLDivElement>(null);
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);

  useEffect(() => {
    if (!globeEl.current) return;

    const globe = Globe()(globeEl.current)
      .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
      .backgroundColor('#000000')
      .pointsData(mockNodes)
      .pointColor((d) => {
        const node = d as Node;
        return node.type === 'client' ? '#39FF14' : node.type === 'validator' ? '#FF3939' : '#3939FF';
      })
      .pointAltitude((d) => {
        const node = d as Node;
        return node.type === 'validator' ? 0.1 : 0.05;
      })
      .pointRadius((d) => {
        const node = d as Node;
        return node.type === 'validator' ? 0.05 : 0.03;
      })
      .pointsMerge(true)
      .pointsTransitionDuration(1000)
      .onPointClick((node) => setSelectedNode(node as Node));

    // Add arcs between nodes
    const arcs = mockNodes
      .filter(node => node.type === 'client')
      .flatMap(client => {
        const validator = mockNodes.find(node => node.type === 'validator');
        const relay = mockNodes.find(node => node.type === 'relay');
        if (validator && relay) {
          return [
            {
              startLat: client.lat,
              startLng: client.lng,
              endLat: relay.lat,
              endLng: relay.lng,
              color: '#3939FF'
            },
            {
              startLat: relay.lat,
              startLng: relay.lng,
              endLat: validator.lat,
              endLng: validator.lng,
              color: '#FF3939'
            }
          ];
        }
        return [];
      });

    globe
      .arcsData(arcs)
      .arcColor('color')
      .arcDashLength(0.4)
      .arcDashGap(0.2)
      .arcDashAnimateTime(1500)
      .arcStroke(0.5);

    // Auto-rotate
    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = 0.5;

    // Adjust globe size and position
    const canvasContainer = globeEl.current;
    globe
      .width(canvasContainer.clientWidth)
      .height(canvasContainer.clientHeight);

    return () => {
      globe.pauseAnimation();
      (globe as any)._destructor();
    };
  }, []);

  return (
    <div className="globe-container">
      <div ref={globeEl} className="globe" />
      {selectedNode && (
        <div className="node-info">
          <h3>{selectedNode.type.charAt(0).toUpperCase() + selectedNode.type.slice(1)} Node</h3>
          <p>ID: {selectedNode.id}</p>
          <p>Latitude: {selectedNode.lat.toFixed(2)}</p>
          <p>Longitude: {selectedNode.lng.toFixed(2)}</p>
          {selectedNode.bandwidth && <p>Bandwidth: {selectedNode.bandwidth} Mbps</p>}
          {selectedNode.successRate && <p>Success Rate: {selectedNode.successRate}%</p>}
          {selectedNode.uptime && <p>Uptime: {selectedNode.uptime}%</p>}
        </div>
      )}
    </div>
  );
}
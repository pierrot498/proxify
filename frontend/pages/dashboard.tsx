import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Layout from '../components/Layout';
import NodeList from '../components/NodeList';
import BandwidthUsage from '../components/BandwidthUsage';
import LiveStats from '../components/LiveStats';

const GlobalMap = dynamic(() => import('../components/GlobalMap'), { ssr: false });

// Mock data
const mockNodes = [
  { id: '1', ip: '192.168.1.1', lat: 40.7128, lng: -74.0060, type: 'client', bandwidth: 100, successRate: 98 },
  { id: '2', ip: '192.168.1.2', lat: 34.0522, lng: -118.2437, type: 'client', bandwidth: 75, successRate: 95 },
  { id: '3', ip: '192.168.1.3', lat: 51.5074, lng: -0.1278, type: 'validator', bandwidth: 200, successRate: 99 },
  { id: '4', ip: '192.168.1.4', lat: 48.8566, lng: 2.3522, type: 'client', bandwidth: 90, successRate: 97 },
  { id: '5', ip: '192.168.1.5', lat: 35.6762, lng: 139.6503, type: 'validator', bandwidth: 180, successRate: 98 },
];

const mockStats = {
  totalUsers: 10000,
  activeUsers: 5000,
  validators: 100,
  totalBandwidth: 5000,
};

export default function Dashboard() {
  const [nodes, setNodes] = useState(mockNodes);
  const [bandwidthUsage, setBandwidthUsage] = useState(0);
  const [stats, setStats] = useState(mockStats);

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      setBandwidthUsage(prev => prev + Math.random() * 10);
      setStats(prev => ({
        ...prev,
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 10),
        totalBandwidth: prev.totalBandwidth + Math.floor(Math.random() * 100),
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      <h1 className="dashboard-title">Proxy/VPN Blockchain Dashboard</h1>
      <LiveStats {...stats} />
      <GlobalMap />
      <div className="dashboard-stats">
        <NodeList nodes={nodes} />
        <BandwidthUsage usage={bandwidthUsage} />
      </div>
    </Layout>
  );
}
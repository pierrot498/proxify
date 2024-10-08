import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import PrivateKeyInput from '../components/PrivateKeyInput';
import BandwidthUsage from '../components/BandwidthUsage';

export default function Provider() {
  const [privateKey, setPrivateKey] = useState('');
  const [nodeStats, setNodeStats] = useState<{ bandwidthUsage: number } | null>(null);

  useEffect(() => {
    // Fetch node stats if privateKey is available
  }, [privateKey]);

  const handleJoinNetwork = () => {
    // Implement logic to join the network as a provider
  };

  return (
    <Layout>
      <h1>Provider Dashboard</h1>
      <PrivateKeyInput value={privateKey} onChange={setPrivateKey} />
      <button onClick={handleJoinNetwork}>Join Network</button>
      {nodeStats && (
        <div>
          <h2>Node Statistics</h2>
          <BandwidthUsage usage={nodeStats.bandwidthUsage} />
        </div>
      )}
    </Layout>
  );
}
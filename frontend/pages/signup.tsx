import { useState } from 'react';
import Layout from '../components/Layout';
import PrivateKeyInput from '../components/PrivateKeyInput';

export default function Signup() {
  const [privateKey, setPrivateKey] = useState('');

  const handleSignup = () => {
    // Implement signup logic
  };

  return (
    <Layout>
      <h1>Sign Up</h1>
      <PrivateKeyInput value={privateKey} onChange={setPrivateKey} />
      <button onClick={handleSignup}>Sign Up</button>
    </Layout>
  );
}
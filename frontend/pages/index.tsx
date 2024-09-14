import { useState, useEffect } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

const cliLines = [
  { prompt: '> Initializing Proxy/VPN Blockchain...', output: 'System online.' },
  { prompt: '> Fetching network statistics...', output: 'Active nodes: 1,337 | Total bandwidth: 42.0 TB/s' },
  { prompt: '> Checking global distribution...', output: 'Nodes present in 195 countries' },
  { prompt: '> Analyzing network security...', output: 'Encryption: AES-256 | Protocol: WireGuard' },
  { prompt: '> Verifying blockchain integrity...', output: 'Last block: #1,234,567 | Hash rate: 1.21 GH/s' },
  { prompt: '> System status:', output: 'All systems operational. Ready for secure connections.' },
];

export default function Home() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [currentLine, setCurrentLine] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (visibleLines < cliLines.length) {
      const line = cliLines[visibleLines].prompt + '\n' + cliLines[visibleLines].output;
      let charIndex = 0;

      const typingInterval = setInterval(() => {
        if (charIndex < line.length) {
          setCurrentLine(prev => prev + line[charIndex]);
          charIndex++;
        } else {
          clearInterval(typingInterval);
          setIsTyping(false);
          setTimeout(() => {
            setVisibleLines(prev => prev + 1);
            setCurrentLine('');
            setIsTyping(true);
          }, 500);
        }
      }, 30);

      return () => clearInterval(typingInterval);
    }
  }, [visibleLines]);

  return (
    <Layout>
      <div className="matrix-bg"></div>
      <div className="content-container">
        <div className="header-container">
          <h1 className="main-title">Welcome to Proxy/VPN Blockchain</h1>
          <p className="subtitle">A decentralized network for secure and private internet access.</p>
        </div>
        
        <div className="cli-container">
          {cliLines.slice(0, visibleLines).map((line, index) => (
            <div key={index} className="cli-line">
              <div className="cli-prompt">{line.prompt}</div>
              <div className="cli-output">{line.output}</div>
            </div>
          ))}
          <div className="cli-line">
            <pre className="cli-current-line">
              {currentLine}
              <span className={`cli-cursor ${isTyping ? 'blink' : ''}`}>█</span>
            </pre>
          </div>
        </div>

        <div className="features-container">
          <h2>Key Features</h2>
          <ul>
            <li>Global map visualization of validator nodes and bandwidth-sharing clients</li>
            <li>User signup and private key management</li>
            <li>Provider node dashboard for joining the network and monitoring performance</li>
            <li>Real-time bandwidth usage tracking</li>
            <li>Node ranking system based on IP address, bandwidth, and successful requests</li>
            <li>Random IP pool selection for users</li>
          </ul>
        </div>

        <div className="button-container">
          <Link href="/dashboard">
            <a className="cta-button">View Dashboard</a>
          </Link>
          <Link href="/signup">
            <a className="cta-button">Sign Up</a>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
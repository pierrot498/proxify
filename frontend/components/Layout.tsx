import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="matrix-background">
      <Head>
        <title>Proxy/VPN Blockchain</title>
        <meta name="description" content="Decentralized Proxy/VPN network" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="matrix-bg"></div>

      <nav>
        <div className="container">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/dashboard">
            <a>Dashboard</a>
          </Link>
          <Link href="/signup">
            <a>Sign Up</a>
          </Link>
          <Link href="/provider">
            <a>Become a Provider</a>
          </Link>
        </div>
      </nav>

      <main className="container">{children}</main>

      <footer>
        <p>&copy; 2023 Proxy/VPN Blockchain. All rights reserved.</p>
      </footer>
    </div>
  );
}
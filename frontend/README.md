# Proxy/VPN Blockchain Dashboard

This is the front-end dashboard for our decentralized proxy/VPN blockchain project. It provides a user interface for both clients and provider nodes to interact with the network.

## Features

- Global map visualization of validator nodes and bandwidth-sharing clients
- User signup and private key management
- Provider node dashboard for joining the network and monitoring performance
- Real-time bandwidth usage tracking
- Node ranking system based on IP address, bandwidth, and successful requests
- Random IP pool selection for users

## Getting Started

1. Install dependencies:
   ```
   npm install
   ```

2. Run the development server:
   ```
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Pages

- `/`: Home page with project information
- `/dashboard`: Main dashboard with global map and network statistics
- `/signup`: User signup and private key input
- `/provider`: Provider node dashboard for joining the network

## Technologies Used

- Next.js
- React
- Three.js (for 3D globe visualization)
- Web3.js (for blockchain interactions)

## Contributing

Please read our CONTRIBUTING.md file for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
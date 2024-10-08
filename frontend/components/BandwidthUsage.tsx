interface BandwidthUsageProps {
  usage: number;
}

export default function BandwidthUsage({ usage }: BandwidthUsageProps) {
  return (
    <div>
      <h2>Bandwidth Usage</h2>
      <p>{usage} GB</p>
    </div>
  );
}
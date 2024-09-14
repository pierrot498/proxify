interface BandwidthUsageProps {
  usage: number;
}

export default function BandwidthUsage({ usage }: BandwidthUsageProps) {
  return (
    <div>
      <h2>Bandwidth Usage</h2>
      <p>Current usage: {usage} MB</p>
    </div>
  );
}
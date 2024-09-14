import React from 'react';

interface LiveStatsProps {
  totalUsers: number;
  activeUsers: number;
  validators: number;
  totalBandwidth: number;
}

export default function LiveStats({ totalUsers, activeUsers, validators, totalBandwidth }: LiveStatsProps) {
  return (
    <div className="live-stats">
      <div className="stat-item">
        <h3>Total Users</h3>
        <p>{totalUsers}</p>
      </div>
      <div className="stat-item">
        <h3>Active Users</h3>
        <p>{activeUsers}</p>
      </div>
      <div className="stat-item">
        <h3>Validators</h3>
        <p>{validators}</p>
      </div>
      <div className="stat-item">
        <h3>Total Bandwidth</h3>
        <p>{totalBandwidth} GB</p>
      </div>
    </div>
  );
}
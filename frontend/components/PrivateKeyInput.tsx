export default function PrivateKeyInput({ value, onChange }) {
  return (
    <div>
      <label htmlFor="privateKey">Private Key:</label>
      <input
        type="password"
        id="privateKey"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter your private key"
      />
    </div>
  );
}
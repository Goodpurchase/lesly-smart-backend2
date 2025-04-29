
import { useEffect, useState } from 'react';

export default function Players() {
  const [players, setPlayers] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => setPlayers(data));
  }, []);

  const filtered = players.filter(p =>
    p.user_id.toLowerCase().includes(filter.toLowerCase()) ||
    p.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div style={{ padding: 20 }}>
      <h1>Player List</h1>
      <input
        placeholder="Search by ID or name"
        value={filter}
        onChange={e => setFilter(e.target.value)}
        style={{ marginBottom: 20, padding: 8, width: 300 }}
      />
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>User ID</th><th>Name</th><th>Deposit</th><th>VIP</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(p => (
            <tr key={p.user_id}>
              <td>{p.user_id}</td>
              <td>{p.name}</td>
              <td>{p.deposit}</td>
              <td>{p.vip}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

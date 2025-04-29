
export default function handler(req, res) {
  const { id } = req.query;
  const users = {
    u123: { name: "Jason", deposit: 3000, vip: "BRONZE" },
    u456: { name: "Lim", deposit: 10500, vip: "SILVER" },
    u789: { name: "Tan", deposit: 28000, vip: "GOLD" }
  };
  const user = users[id];
  if (!user) return res.status(404).json({ error: "User not found" });
  res.status(200).json({ id, ...user });
}

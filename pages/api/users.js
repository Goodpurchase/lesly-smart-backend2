
export default function handler(req, res) {
  const users = [
    { user_id: "u123", name: "Jason", deposit: 3000, vip: "BRONZE" },
    { user_id: "u456", name: "Lim", deposit: 10500, vip: "SILVER" },
    { user_id: "u789", name: "Tan", deposit: 28000, vip: "GOLD" }
  ];
  res.status(200).json(users);
}

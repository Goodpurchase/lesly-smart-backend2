
export default function handler(req, res) {
  const { id } = req.query;
  const vips = {
    u123: "BRONZE",
    u456: "SILVER",
    u789: "GOLD"
  };
  res.status(200).json({ id, vip: vips[id] || "LOYALTY" });
}

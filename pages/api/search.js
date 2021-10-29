
export default function handler(req, res) {
    res.status(200).json(req.query.q);
  }

  // https://rawg.io/api/games?key=${process.env.NEXT_PUBLIC_KEY}&search=${query}&page_size=5
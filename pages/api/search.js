export default function handler(req, res) {
  if (req.query.q.length < 1) {
    res.end();
  } else {
    fetch(
      `https://rawg.io/api/games?key=${process.env.KEY}&search=${req.query.q}&page_size=10`
    )
      .then((response) => response.json())
      .then((data) => {
        res.status(200).json({ results: data.results });
        res.end();
      });
  }

  //res.status(200).json({test: process.env.KEY);
}

// https://rawg.io/api/games?key=${process.env.NEXT_PUBLIC_KEY}&search=${query}&page_size=5

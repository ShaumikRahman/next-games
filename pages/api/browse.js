export default function handler(req, res) {

  let fetchString = `https://rawg.io/api/games?key=${process.env.KEY}`;

  if (req.query.q.length) {
    fetchString += `&search=${req.query.q}`;
  }

  fetchString += '&page_size=15&platforms=1';

  fetch(fetchString)
      .then((response) => response.json())
      .then((data) => {
        res.status(200).json({ results: data.results });
        res.end();
      });

  //res.status(200).json({test: process.env.KEY);
}

// https://rawg.io/api/games?key=${process.env.NEXT_PUBLIC_KEY}&search=${query}&page_size=5

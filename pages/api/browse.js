export default function handler(req, res) {
  console.log(req);

  let fetchString = `https://rawg.io/api/games?key=${process.env.KEY}`;

  if (req.query.q.length) {
    fetchString += `&search=${req.query.q}`;
  }

  if (req.query.parent_platforms) {
    fetchString += `&parent_platforms=${req.query.parent_platforms}`;
  }

  if (req.query.genres) {
    fetchString += `&genres=${req.query.genres}`;
  }

  fetchString += '&page_size=15&ordering=-metacritic&search_exact=true';

  console.log(fetchString);

  fetch(fetchString)
      .then((response) => response.json())
      .then((data) => {
        res.status(200).json({ results: data.results });
        res.end();
      });

  //res.status(200).json({test: process.env.KEY);
}

// https://rawg.io/api/games?key=${process.env.NEXT_PUBLIC_KEY}&search=${query}&page_size=5

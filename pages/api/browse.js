export default function handler(req, res) {
  console.log(req);

  let fetchString = `https://rawg.io/api/games?key=${process.env.KEY}`;

  if (req.query.q.length) {
    fetchString += `&search=${req.query.q}`;
  }

  if (req.query.parent_platforms) {
    fetchString += `&parent_platforms=${req.query.parent_platforms}`;
  }

  if (req.query.platforms) {
    fetchString += `&platforms=${req.query.platforms}`;
  }

  if (req.query.genres) {
    fetchString += `&genres=${req.query.genres}`;
  }

  if (req.query.tags) {
    fetchString += `&tags=${req.query.tags}`;
  }

  fetchString += '&page_size=30'; // &ordering=-metacritic&search_precise=true

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

export const config = {
  api: {
    externalResolver: true,
  },
}
const url = 'https://car-data.p.rapidapi.com/cars?limit=20&page=0';
// https://car-data.p.rapidapi.com/cars?limit=10&page=0&year=2000&make=Honda&model=Civic';
// https://car-data.p.rapidapi.com/cars?limit=10&page=0&year=2019&make=Volkswagen'
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': process.env.HOST,
    'X-RapidAPI-Key': process.env.KEY,
  }
};

export default async function handler(req, res) {
    let paramsUrl = url+'&year='+req.query.year+'&make='+req.query.make;
    try {
        const d = await fetch(paramsUrl, options)
        const response = await d.json()
        res.status(200).json(response);
       } catch(e) {
        console.log(e);
        res.status(500).json({error: e});
    }
}

import Make from "../../Models/Make";
const url = 'https://vpic.nhtsa.dot.gov/api/vehicles/';
import dbConnect from '../../lib/db'

// const url = 'https://car-data.p.rapidapi.com/cars?limit=20&page=0';
// /vehicles/GetVehicleTypesForMakeId/450?format=json
// /vehicles/GetModelsForMakeId/440?format=json
// https://car-data.p.rapidapi.com/cars?limit=10&page=0&year=2000&make=Honda&model=Civic';
// https://car-data.p.rapidapi.com/cars?limit=10&page=0&year=2019&make=Volkswagen'

const options = {
  method: 'GET',
  // headers: {
  //   'X-RapidAPI-Host': process.env.HOST,
  //   'X-RapidAPI-Key': process.env.KEY,
  // }
};

export default async function handler(req, res) {
    
    await dbConnect();

    // console.log(req.query.make);
    const makeObj = await Make.findOne({Make_Name: req.query.make.toUpperCase()})
    await makeObj;

    console.log(makeObj);
    console.log(req.query);
    // GetModelsForMakeIdYear/makeId/474/modelyear/2015/vehicleType/truck?format=json
    //                  GetModelsForMakeIdYear/makeId/474/modelyear/2015/vehicleType/truck?format=json
    let makeUrl = url + 'GetModelsForMakeIdYear/makeId/' + makeObj.Make_ID + '/modelyear/' + req.query.year + '/vehicleType/' + req.query.type + '?format=json';
    // let typeUrl = url + 'GetVehicleTypesForMakeId/' + makeObj.Make_ID + '?format=json'
    // console.log(makeUrl);
    try {
      const makeFetch = await fetch(makeUrl, options);
      const makeRes = await makeFetch.json();
      // const typeFetch = await fetch(typeUrl, options);
      // const typesRes = await typeFetch.json();

      console.log(makeRes);
      // console.log(typesRes);
      
      res.status(200).json(makeRes);
    } catch(e) {
    // console.log(req.query);
    // let paramsUrl = url+'&year='+req.query.year+'&make='+req.query.make;
    // try {
    //   const d = await fetch(paramsUrl, options)
    //   const response = await d.json()
    //   res.status(200).json(response);
    // } catch(e) {
      console.log(e);
      res.status(500).json({error: e});
    }
}

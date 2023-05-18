const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = "http://api.thecatapi.com/v1/breeds/search?q=" + breedName;
  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
    }
    const data = JSON.parse(body);
    const info = data[0];
    if (info) {
      callback(null, info.description);
    } else {
      callback(`ERROR: ${breedName} can't be found`, null);
    }
  });
};
    


module.exports = { fetchBreedDescription };

/*
const fetchBreedDescription = function(breedName, callback) {
  request(url+breedName, (error, response, body) => {
    if (error) {
      console.log(error);
    } else {
      const data = JSON.parse(body);
      const info = data[0];
      if (info === undefined) {
      console.log(`ERROR: ${breedName} can't be found`);
    } else {
      const desc = info.description;
      console.log(desc);
    }
  }
})}; */
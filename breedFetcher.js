const request = require('request');

const breed = process.argv[2];
const url = "http://api.thecatapi.com/v1/breeds/search?q=" + breed;

request(url, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    const data = JSON.parse(body);
    const info = data[0];
    if (info === undefined) {
      console.log(`ERROR: ${breed} can't be found`);
    } else {
      const description = info.description;
      console.log(description);
    }
  }
});
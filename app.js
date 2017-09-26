const request = require('request');

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=633%20Folsom%20St%20San%20Francisco',
  json: true
},
(error, response, body) => {
  console.log(JSON.stringify(body, undefined, 2));
});

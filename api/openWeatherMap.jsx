var axios = require('axios');

const OPEN_WEATHER_MAP = 'http://api.openweathermap.org/data/2.5/weather?&appid=260e97fbe2929c83a549a7d5ef096f5f&units=imperial';

module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestURL = `${OPEN_WEATHER_MAP}&q=${encodedLocation}`;

    return axios.get(requestURL).then(function(res){
      if(res.data.cod && res.data.message){
        throw new Error(res.data.message);
      }else{
        return res.data.main.temp;
      }
    }, function(res){
      throw new Error(res.data.message);
    });

  }
}

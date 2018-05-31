var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'api.openweathermap.org/data/2.5/forecast?id=524901?appid=bb7a1436b1382913ef22ac44008c8a76&units=imperial';



module.exports = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function (res) {
            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        }, function (res) {
            throw new Error(res.data.message);
        });
    }
}
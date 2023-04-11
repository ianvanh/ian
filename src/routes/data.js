const axios = require('axios');

module.exports = class restFull {
   baseUrl = 'https://api.lolhuman.xyz/api/'
   apiKey = null

   constructor(apiKey) {
      this.apiKey = apiKey || ''
   }
   
   ytPlay = async (query) => {
      let json = await fetchJson(this.baseUrl + '/ytplay?apikey=' + this.apiKey + '&query=' + query)
      return json.result
   }
}

async function fetchJson (url, options) {
  try {
    options ? options : {};
    const res = await axios({
      method: "GET",
      url: url,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36",
      },
      ...options,
    });
    return res.data;
  } catch (err) {
    return err;
  }
};
const axios = require('axios');
const app = require('./app');

setInterval(() => {
  axios.get(`${Config.DOMINIO}/ping`).then(response => {
    if (response.ok) {
      console.log('Ping enviado para mantener la actividad.');
    } else {
      console.error('Error al enviar el ping.');
    }
  });
}, 4 * 60 * 1000);

async function main() {
    await app.listen(app.get('port'));
    console.log('Server on port', app.get('port'));
}

main();
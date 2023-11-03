__path = process.cwd()
const log = console.log;

const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.sendFile(__path + '/public/index.html')
});
/*router.get('/test', (req, res) => {
    res.sendFile(__path + '/src/public/test.html')
});*/

router.get('/config', (req, res) => {
    config = {
        status: true,
        result: {
            prefix : '/',
            namebot: 'DrkBot',
            urlbot: 'http://wa.me/573046793853?text=alive',
            nameowner: 'ianvanh',
            instagram: 'iand_tv'
        }
    }
    res.json(config)
});
router.get('/ping', (req, res) => {
  res.send('Pong');
});

module.exports = router

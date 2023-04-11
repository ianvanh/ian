__path = process.cwd()
const log = console.log;

const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.sendFile(__path + '/public/index.html')
});

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

/*router.post('/contact', (req, res) => {
  res.redirect('https://formsubmit.co/bdaaf03dea2104c473355676ebeb346d');
  //res.redirect(`https://wa.me/573046793853?text=*Name:* ${fullname}\n*Phone:* ${phone}\n*Email:* ${email}\n*Message:* ${message}`)
});*/

module.exports = router

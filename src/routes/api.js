const { Router} = require("express");
const router = Router();
const log = console.log;

const dbot = require("dbot-api");

const creator = "@Ian";
const restKey = "IanVanH";

const Api = new (require('./data.js'))(restKey);

loghandler = {
  notKey: {
    status: false,
    creator: `${creator}`,
    code: 406,
    message: 'not key!',
    getApikey: 'Apikey? Contact Me On WhatsApp. http://wa.me/573508770421?text=key'
  },
  invalidKey: {
    status: false,
    creator: `${creator}`,
    code: 406,
    message: 'key invalid!',
    getApikey: 'Apikey? Contact Me On WhatsApp. http://wa.me/573508770421?text=key'
  },
  query: {
    status: false,
    creator: `${creator}`,
    code: 406,
    message: 'enter your search'
  }
};

router.get('/api', (req, res) => {
    config = {
        status: true,
        result: {
            message: creator
        }
    }
    res.json(config)
});

router.get('/api/ytplay', async (req, res) => {
  var apikeyInput = req.query.apikey,
  query = req.query.query

  if(!apikeyInput) return res.json(loghandler.notKey)
  if(apikeyInput != 'DarBox') return res.json(loghandler.invalidKey)
  if (!query) return res.json(loghandler.query)

  try {
    let ytPlayAudio = await Api.ytPlay(query)
    if(!ytPlayAudio) return res.json(loghandler.invalidKey)
    let { id, title, uploader, duration, view, thumbnail, video, audio } = ytPlayAudio
    let url = 'https://www.youtube.com/watch?v=' + id
    let ajax = await dbot.youtube(url)
    res.json({
      status: true,
      creator: `${creator}`,
      result: {
        id, title, uploader, duration, view, thumbnail,
        audio: {
          size: ajax.size_mp3,
          link: ajax.mp3
        },
        video: {
          size: ajax.size,
          link: ajax.link
        }
      }
    })
  } catch (e) {
    res.json({
      status: false,
      creator: `${creator}`,
      message: "error, parece que tenemos un error."
    })
  }
});

module.exports = router;
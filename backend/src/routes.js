const express = require("express")
const routes = express.Router()
const DevController = require('./Controllers/DevController')
const LikesController = require('./Controllers/Like')
const DeslikesController = require('./Controllers/Deslike')


routes.get('/', (req, res) => {

    return res.json({ message: `Olá ${req.query.name}` })
})

routes.get('/devs', DevController.index)
routes.post('/devs', DevController.store)
routes.post('/devs/:devId/likes', LikesController.store)
routes.post('/devs/:devId/dislikes', DeslikesController.store)
module.exports=routes;

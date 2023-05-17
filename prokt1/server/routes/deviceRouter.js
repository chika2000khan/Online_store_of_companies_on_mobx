const Router = require('express')
const router = new Router()
const deviceController = require('../controllers/deviceController')

router.post('/', deviceController.create)
router.post('/', deviceController.getAll)
router.post('/:id', deviceController.getOne)


module.exports = router
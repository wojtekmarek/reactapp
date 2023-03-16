const router = require('express').Router()
const { gettitle, getstate,getprocent,getfile} = require('../controllers/datastate_controller')


  router.route('/datastate')
  .get(getstate)

  router.route('/datatitle')
  .get(gettitle)
  router.route('/dataproces')
  .get(getprocent)
  router.route('/download')
  .post(getfile)
 

module.exports = router
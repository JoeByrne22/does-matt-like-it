const router = require('express').Router();
const thingController = require('../controllers/thingController');
const authController = require('../controllers/authController');

router.route('/things')
  .get(thingController.indexRoute);

router.route('/things/:id')
  .get(thingController.showRoute);

router.route('/things')
  .post(thingController.createRoute);

router.route('/things/:id')
  .delete(thingController.deleteRoute);

router.route('/things/:id')
  .post(thingController.updateRoute);

router.route('/login')
  .post(authController.loginRoute);

router.route('/register')
  .post(authController.registerRoute);


module.exports = router;

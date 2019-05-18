const Thing = require('../models/thing');


function indexRoute(req, res, next) {
  console.log('index route running');
  Thing.find().then(things => res.json(things))
    .catch(next);
}

function showRoute(req, res, next) {
  console.log('Show route is running');
  Thing.findById(req.params.id)
    .then(thing => res.json(thing))
    .catch(next);
}

function createRoute(req, res, next) {
  console.log('Create route is running');
  Thing.create(req.body)
    .then(thing => res.json(thing))
    .catch(next);
}

function deleteRoute(req, res, next) {
  console.log('delete route is running');
  Thing.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(204))
    .catch(next);
}

function updateRoute(req, res, next) {
  console.log('UPDATE route is running');
  Thing.findById(req.params.id)
    .then(thing => thing.set(req.body))
    .then(thing => thing.save())
    .then(thing => res.json(thing))
    .catch(next);
}



module.exports = {
  indexRoute: indexRoute,
  showRoute: showRoute,
  createRoute: createRoute,
  deleteRoute: deleteRoute,
  updateRoute: updateRoute
};

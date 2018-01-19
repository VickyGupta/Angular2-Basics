import Feature from '../models/feature.model';
import { request } from 'https';


function load(req, res, next, id) {
    feature.get(id)
    .then((feature) => {
      req.feature = feature; // eslint-disable-line no-param-reassign
      return next();
    })
    .catch(e => next(e));
}


function get(req, res) {
  return res.json(req.feature);
}

function create(req, res, next) {
  const feature = new Feature(req.body);
  feature.save()
    .then(savedFeature => res.json(savedFeature))
    .catch(e => next(e));
}


function update(req, res, next) {
  const feature = req.feature;
  feature.save()
    .then(savedFeature => res.json(savedFeature))
    .catch(e => next(e));
}


function list(req, res, next) {
  const { limit = 50, skip = 0 } = req.query;
  Feature.list({ limit, skip })
    .then(features => res.json(features))
    .catch(e => next(e));
}


function remove(req, res, next) {
  const feature = req.feature;
  feature.remove()
    .then(deletedfeature => res.json(deletedfeature))
    .catch(e => next(e));
}

export default { load, get, create, update, list, remove };

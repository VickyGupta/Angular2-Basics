import State from '../models/state.model';
import { request } from 'https';

/**
 * Load state and append to req.
 */
function load(req, res, next, id) {
   State.get(id)
    .then((state) => {
      req.state = state; // eslint-disable-line no-param-reassign
      return next();
    })
    .catch(e => next(e));
}


function get(req, res) {
  console.log("affsa")
  return res.json(req.state);
}


function create(req, res, next) {
  const state = new State(req.body);
  console.log("sdfdsf");
  state.save()
    .then(savedState => res.json(savedState))
    .catch(e => next(e));
}


function update(req, res, next) {
  const state = req.state;
  console.log("state");
  //console.log(req);
  console.log(state);
  state.name = req.body.name  ? req.body.name : state.name;
  state.save()
    .then(savedState => res.json(savedState))
    .catch(e => next(e));
}


function list(req, res, next) {
  const { limit = 50, skip = 0 } = req.query;
  console.log("gdfgdf");
  console.log(req.query);
  State.list({ limit, skip })
    .then(states => res.json(states))
    .catch(e => next(e));
}


function remove(req, res, next) {
  const state = req.state;
  state.remove()
    .then(deletedState=> res.json(deletedState))
    .catch(e => next(e));
}

export default { load, get, create, update, list, remove };

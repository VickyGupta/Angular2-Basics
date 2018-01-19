import Role from '../models/role.model';
import { request } from 'https';


function load(req, res, next, id) {
    role.get(id)
    .then((role) => {
      req.role = role; // eslint-disable-line no-param-reassign
      return next();
    })
    .catch(e => next(e));
}


function get(req, res) {
  return res.json(req.role);
}

function create(req, res, next) {
  const role = new Role(req.body);
  role.save()
    .then(savedRole => res.json(savedRole))
    .catch(e => next(e));
}


function update(req, res, next) {
  const role = req.role;
  role.save()
    .then(savedRole => res.json(savedRole))
    .catch(e => next(e));
}


function list(req, res, next) {
  const { limit = 50, skip = 0 } = req.query;
  Role.list({ limit, skip })
    .then(roles => res.json(roles))
    .catch(e => next(e));
}


function remove(req, res, next) {
  const role = req.role;
  role.remove()
    .then(deletedRole => res.json(deletedRole))
    .catch(e => next(e));
}

export default { load, get, create, update, list, remove };

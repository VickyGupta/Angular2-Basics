import userType from '../models/userType.model';
import { request } from 'https';

/**
 * Load user and append to req.
 */
function load(req, res, next, id) {
  userType.get(id)
    .then((usertype) => {
      req.usertype = usertype; // eslint-disable-line no-param-reassign
      return next();
    })
    .catch(e => next(e));
}

/**
 * Get user
 * @returns {User}
 */
function get(req, res) {
  return res.json(req.usertype);
}

function create(req, res, next) {
  const userType = new UserType(req.body);

  userType.save()
    .then(savedUserType => res.json(savedUserType))
    .catch(e => next(e));
}


function update(req, res, next) {
  const userType = req.userType;
  userType.save()
    .then(savedUserType => res.json(savedUserType))
    .catch(e => next(e));
}


function list(req, res, next) {
  const { limit = 50, skip = 0 } = req.query;
  UserType.list({ limit, skip })
    .then(userTypes => res.json(userTypes))
    .catch(e => next(e));
}


function remove(req, res, next) {
  const userTypes = req.userTypes;
  userTypes.remove()
    .then(deletedUserTypes => res.json(deletedUserTypes))
    .catch(e => next(e));
}

export default { load, get, create, update, list, remove };

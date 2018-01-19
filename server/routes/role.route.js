import express from 'express';
import validate from 'express-validation';
import paramValidation from '../config/param-validation';
import roleCtrl from '../controllers/role.controller';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  /** GET /api/role - Get list of role */
  .get(roleCtrl.list)

  /** POST /api/role - Create new role */
  .post(validate(paramValidation.createRole), roleCtrl.create)

router.route('/:roleId')
  /** GET /api/role/:roleId - Get role */
  .get(roleCtrl.get)

  /** PUT /api/role/:roleId - Update role */
  //.put(validate(paramValidation.updaterole), roleCtrl.update)

  /** DELETE /api/role/:roleId - Delete role */
  .delete(roleCtrl.remove);

/** Load role when API with roleId route parameter is hit */
router.param('roleId', roleCtrl.load);

export default router;

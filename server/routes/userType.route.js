import express from 'express';
import validate from 'express-validation';
import paramValidation from '../config/param-validation';
import userTypeCtrl from '../controllers/userType.controller';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  /** GET /api/users - Get list of users */
  .get(userTypeCtrl.list)

  /** POST /api/users - Create new user */
  .post(validate(paramValidation.createUser), userTypeCtrl.create);

router.route('/:userId')
  /** GET /api/users/:userId - Get user */
  .get(userTypeCtrl.get)

  /** PUT /api/users/:userId - Update user */
  .put(validate(paramValidation.updateUser), userTypeCtrl.update)

  /** DELETE /api/users/:userId - Delete user */
  .delete(userTypeCtrl.remove);

/** Load user when API with userId route parameter is hit */
router.param('userId', userTypeCtrl.load);

export default router;

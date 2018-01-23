import express from 'express';
import validate from 'express-validation';
import paramValidation from '../config/param-validation';
import userTypeCtrl from '../controllers/userType.controller';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  /** GET /api/userType - Get list of userType */
  .get(userTypeCtrl.list)

  /** POST /api/userType - Create new userType */
  .post(validate(paramValidation.createUserType), userTypeCtrl.create);

router.route('/:userTypeId')
  /** GET /api/userType/:userTypeId - Get userType */
  .get(userTypeCtrl.get)

  /** PUT /api/userType/:userTypeId - Update userType */
  .put(validate(paramValidation.updateUserType), userTypeCtrl.update)

  /** DELETE /api/userType/:userTypeId - Delete userType */
  .delete(userTypeCtrl.remove);

/** Load user when API with userTypeId route parameter is hit */
router.param('userTypeId', userTypeCtrl.load);

export default router;

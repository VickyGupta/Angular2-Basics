import express from 'express';
import validate from 'express-validation';
import paramValidation from '../config/param-validation';
import stateCtrl from '../controllers/state.controller';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  /** GET /api/state - Get list of state */
  .get(stateCtrl.list)

  /** POST /api/state - Create new user */
  .post(validate(paramValidation.createState), stateCtrl.create);

router.route('/:stateId')
  /** GET /api/state/:userId - Get user */
  .get(stateCtrl.get)

  /** PUT /api/state/:userId - Update user */
  .put(validate(paramValidation.updateState), stateCtrl.update)

  /** DELETE /api/state/:userId - Delete user */
  .delete(stateCtrl.remove);

/** Load user when API with userId route parameter is hit */
router.param('stateId', stateCtrl.load);

export default router;

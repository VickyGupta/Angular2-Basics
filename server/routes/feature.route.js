import express from 'express';
import validate from 'express-validation';
import paramValidation from '../config/param-validation';
import featureCtrl from '../controllers/feature.controller';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  /** GET /api/feature - Get list of feature */
  .get(featureCtrl.list)

  /** POST /api/feature - Create new feature */
  .post( validate(paramValidation.createFeature),featureCtrl.create);

router.route('/:featureId')
  /** GET /api/feature/:featureId - Get feature */
  .get(featureCtrl.get)

  /** PUT /api/feature/:featureId - Update feature */
  //.put(validate(paramValidation.updatefeature), featureCtrl.update)

  /** DELETE /api/feature/:featureId - Delete feature */
  .delete(featureCtrl.remove);

/** Load feature when API with featureId route parameter is hit */
router.param('featureId', featureCtrl.load);

export default router;

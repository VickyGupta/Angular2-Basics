import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';

import role from '../models/role.model';
import feature from '../models/feature.model';

const RoleFeatureMappingSchema = new mongoose.Schema({
    featureId: {
        type: Schema.Types.ObjectId,
        ref: feature
      },
      roleId: {
        type: Schema.Types.ObjectId,
          ref: role
      }
});

RoleFeatureMappingSchema.statics = {

    get(id) {
      return this.findById(id)
        .exec()
        .then((rolefeature) => {
          if (rolefeature) {
            return rolefeature;
          }
          const err = new APIError('No such role-feature exists!', httpStatus.NOT_FOUND);
          return Promise.reject(err);
        });
    },
  

    list({ skip = 0, limit = 50 } = {}) {
      return this.find()
        //.sort({ createdAt: -1 })
        .skip(+skip)
        .limit(+limit)
        .exec();
    }
  };
  
  export default mongoose.model('RoleFeatureMapping', RoleFeatureMappingSchema);
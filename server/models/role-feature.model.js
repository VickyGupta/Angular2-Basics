import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';

import role from '../models/role.model';
import feature from '../models/feature.model';

// This is a transaction table which maps Role to Feature
const RoleFeatureSchema = new mongoose.Schema({
      role: {
        type: mongoose.Schema.Types.ObjectId,
          ref: 'Role'
      },
      feature: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Feature'
      }
});

RoleFeatureSchema.statics = {

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
  
  export default mongoose.model('RoleFeature', RoleFeatureSchema);
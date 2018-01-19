import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';


const FeatureSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

FeatureSchema.statics = {

    get(id) {
      return this.findById(id)
        .exec()
        .then((feature) => {
          if (feature) {
            return feature;
          }
          const err = new APIError('No such feature exists!', httpStatus.NOT_FOUND);
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
  
  export default mongoose.model('Feature', FeatureSchema);
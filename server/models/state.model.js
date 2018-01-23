import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';

const StateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

/**
 * Statics
 */
StateSchema.statics = {

  get(id) {
    return this.findById(id)
      .exec()
      .then((state) => {
        if (state) {
          return state;
        }
        const err = new APIError('No such State exists!', httpStatus.NOT_FOUND);
        return Promise.reject(err);
      });
  }, 


  list({ skip = 0, limit = 50 } = {}) {
    return this.find()
      .skip(+skip)
      .limit(+limit)
      .exec();
  }
};

export default mongoose.model('State', StateSchema);
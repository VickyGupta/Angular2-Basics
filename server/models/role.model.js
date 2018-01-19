import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';


const RoleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

RoleSchema.statics = {

    get(id) {
      return this.findById(id)
        .exec()
        .then((role) => {
          if (role) {
            return role;
          }
          const err = new APIError('No such role exists!', httpStatus.NOT_FOUND);
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
  
  export default mongoose.model('Role', RoleSchema);
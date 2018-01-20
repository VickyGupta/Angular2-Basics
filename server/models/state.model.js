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

StateSchema.statics = {    
};
  
export default mongoose.model('State', StateSchema);
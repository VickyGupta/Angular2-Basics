import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';


const PaymenOptiontSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

PaymenOptiontSchema.statics = {    
};
  
export default mongoose.model('PaymenOption', PaymenOptiontSchema);
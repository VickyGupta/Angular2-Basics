import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';


const CitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

CitySchema.statics = {    
};
  
export default mongoose.model('City', CitySchema);
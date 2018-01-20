import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';


const HotelTypeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

HotelTypeSchema.statics = {    
};
  
export default mongoose.model('HotelType', HotelTypeSchema);
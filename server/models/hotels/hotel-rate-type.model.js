
import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';

// To be decide later
const HotelRateTypeSchema = new mongoose.Schema({
   name :{
      type: String
   }
});

HotelRateTypeSchema.statics = {    
};
  
export default mongoose.model('HotelRateType', HotelRateTypeSchema);
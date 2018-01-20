import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';


const CountrySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  countryCode:{
    type: String,
    required: true
  }
});

CountrySchema.statics = {    
};
  
export default mongoose.model('Country', CountrySchema);
import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';

// Requied by customer after travel start date Train , Flight 
const PackageExtraFeaturesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

PackageExtraFeaturesSchema.statics = {    
};
  
export default mongoose.model('PackageExtraFeatures', PackageExtraFeaturesSchema);

import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';

const StateCountrySchema = new mongoose.Schema({
   state :{
      type: mongoose.Schema.Types.ObjectId, 
  	  ref: 'State' 
   },
   country :{
      type: mongoose.Schema.Types.ObjectId, 
  	  ref: 'Country' 
   }
});

StateCountrySchema.statics = {    
};
  
export default mongoose.model('StateCountry', StateCountrySchema);
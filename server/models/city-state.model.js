
import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';


const CityStateSchema = new mongoose.Schema({
   state :{
      type: mongoose.Schema.Types.ObjectId, 
  	  ref: 'State' 
   },
   city :{
      type: Schema.Types.ObjectId, 
  	  ref: 'City' 
   }
});

CityStateSchema.statics = {    
};
  
export default mongoose.model('CityState', CityStateSchema);
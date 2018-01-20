import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';

// Hotel Master having entry of hotels only.
const HotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address:{
    type: string
  },
  type:{
     type: mongoose.Schema.Types.ObjectId, 
  	 ref: 'HotelType'  
  }
  city:{
    type: mongoose.Schema.Types.ObjectId, 
  	ref: 'City' 
  },
  state:{
    type: mongoose.Schema.Types.ObjectId, 
  	ref: 'State' 
  },
  country{
    type: mongoose.Schema.Types.ObjectId, 
  	ref: 'Country' 
  }
});

HotelSchema.statics = {    
};
  
export default mongoose.model('Hotel', HotelSchema);
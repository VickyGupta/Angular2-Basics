
import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';


const HotelSeasonTypeSchema = new mongoose.Schema({
   hotel :{
      type: mongoose.Schema.Types.ObjectId, 
  	  ref: 'Hotel' 
   },
   seasonType :{
      type: mongoose.Schema.Types.ObjectId, 
  	  ref: 'SeasonType' 
   }
});

HotelSeasonTypeSchema.statics = {    
};
  
export default mongoose.model('HotelSeason', HotelSeasonTypeSchema);
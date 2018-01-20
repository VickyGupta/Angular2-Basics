
import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';

// One Hotel with multiple room type
const HotelRoomTypeSchema = new mongoose.Schema({
   hotel :{
      type: mongoose.Schema.Types.ObjectId, 
  	  ref: 'Hotel' 
   },
   roomType :{
      type: mongoose.Schema.Types.ObjectId, 
  	  ref: 'RoomType' 
   }
});

HotelRoomTypeSchema.statics = {    
};
  
export default mongoose.model('HotelRoomType', HotelRoomTypeSchema);
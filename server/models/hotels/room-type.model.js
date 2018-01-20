import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';

// Eg Deluxe , Super Deluxe
const RoomTypeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

RoomTypeSchema.statics = {    
};
  
export default mongoose.model('RoomType', RoomTypeSchema);
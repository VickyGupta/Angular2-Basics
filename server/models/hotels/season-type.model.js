import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';


const SeasonTypeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  startDate :{
      type: Date
  },
  endDate :{
      type: Date
  }
});

SeasonTypeSchema.statics = {    
};
  
export default mongoose.model('SeasonType', SeasonTypeSchema);
import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';


const RemarkLogSchema = new mongoose.Schema({
  remark: {
    type: String,
    required: true
  },
  user : {
      type: mongoose.Schema.Types.ObjectId, 
  	  ref: 'User'
  },
  remarkDate : {
      type : Date
  }
});

RemarkLogSchema.statics = {    
};
  
export default mongoose.model('RemarkLog', RemarkLogSchema);
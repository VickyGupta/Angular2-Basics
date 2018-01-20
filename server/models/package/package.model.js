import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';


const PackageSchema = new mongoose.Schema({
  travelStartDate: {
    type: Date,
    required: true
  },
  travelEndDate: {
    type: Date,
    required: true
  }
  trip: [{
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Trip'
  }],
  advanceAmount: {
    type : Number
  },
  paymentDetail :{
    type : String
  },
  paymentOption:{
    type: mongoose.Schema.Types.ObjectId, 
  	ref: 'PaymentOption' 
  },
  salesPerson:{
    type: mongoose.Schema.Types.ObjectId, 
  	ref: 'User'
  },
  // isApprovalRequired :{
  //   type : Boolean
  // },
  isApproved :{
      type : Boolean
  },
  approvers :[{
    type: mongoose.Schema.Types.ObjectId, 
  	ref: 'User'
  }],
  numberOfPax: {
    type: Number,
    required: true
  },
  numberOfChild: {
    type: Number,
    required: true
  },
  matureDate :{
    type : Date
  },
  pickupCity: {
    type: mongoose.Schema.Types.ObjectId, 
  	ref: 'City' 
  },
  dropCity: {
    type: mongoose.Schema.Types.ObjectId, 
  	ref: 'City' 
  },
  remark :[{
      type: mongoose.Schema.Types.ObjectId, 
  	  ref: 'RemarkLog'
  }]
});

PackageSchema.statics = {    
};
  
export default mongoose.model('Package', PackageSchema);
import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';


const MealPlanSchema = new mongoose.Schema({
  EPI: {
    type: String
  },
   CPI: {
    type: String
  },
   MAPI: {
    type: String
  }
});

MealPlanSchema.statics = {    
};
  
export default mongoose.model('MealPlan', MealPlanSchema);
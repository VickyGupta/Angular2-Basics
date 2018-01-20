
import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';


const HotelRateSchema = new mongoose.Schema({
   rate :{
     type: String,
   },
   seasonType :{
      type: mongoose.Schema.Types.ObjectId, 
  	  ref: 'SeasonType' 
   },
   hotelRoomType :{
       type: mongoose.Schema.Types.ObjectId, 
  	    ref: 'HotelRoomType' 
   }
   mealPlan:{
        type: mongoose.Schema.Types.ObjectId, 
  	    ref: 'MealPlan'
   },
    extraBed :{
        type : String
    },
    extraBedChild :{
        type : String
    },
    extraLunch :{
        type : String
    },
    extraLunchChild :{
        type : String
    },
    extraDinner :{
        type : String
    },
    extraDinnerChild :{
        type : String
    },
    B2BMarkup :{
        type : String // business to business hotel rate percentage
    },
    B2CMarkup :{
        type : String //  business to customer hotel rate percentage
    }
});

HotelRateSchema.statics = {    
};
  
export default mongoose.model('HotelRate', HotelRateSchema);
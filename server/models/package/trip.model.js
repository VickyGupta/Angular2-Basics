import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';


const TripSchema = new mongoose.Schema({
  
    city :{
      type: mongoose.Schema.Types.ObjectId, 
  	  ref: 'City' 
    },
    hotel :{
      type: mongoose.Schema.Types.ObjectId, 
  	  ref: 'Hotel' 
    },
    roomType :{
      type: mongoose.Schema.Types.ObjectId, 
  	  ref: 'RoomType' 
    },
//    SeasonType :{
//       type: mongoose.Schema.Types.ObjectId, 
//   	  ref: 'SeasonType' 
//    },
    checkInDate :{
       type: Date
    },
    checkOutDate :{
       type : Date
    },
    extraBed :{
        type : Boolean
    },
    extraBedChild :{
        type : Boolean
    },
    extraLunch :{
        type : Boolean
    },
    extraLunchChild :{
        type : Boolean
    },
    extraDinner :{
        type : Boolean
    },
    extraDinnerChild :{
        type : Boolean
    },
    numberOfpax:{
        type : String
    },
    numberOfpaxChild:{
        type : String
    },
    mealPlan:{
        type: mongoose.Schema.Types.ObjectId, 
  	    ref: 'MealPlan'
    },
    numberOfRooms:{
        type : Number
    }
  // pickupCity: {
  //   type: mongoose.Schema.Types.ObjectId, 
  // 	ref: 'City' 
  // },
  // dropCity: {
  //   type: mongoose.Schema.Types.ObjectId, 
  // 	ref: 'City' 
  // },
  
  // packageDestination :[{
  //   type: Schema.Types.ObjectId, 
  // 	ref: 'PackageDestination' 
  // }],
  cabType : {
    type: mongoose.Schema.Types.ObjectId, 
  	ref: 'CabType' 
  },
  // cabAmount :{
  //   type : Number
  // },
 
  packageExtraFeatures:[{
    type: mongoose.Schema.Types.ObjectId, 
  	ref: 'PackageExtraFeatures'
  }],
  remark :[{
     type: mongoose.Schema.Types.ObjectId, 
  	 ref: 'RemarkLog'
  }]
});

TripSchema.statics = {    
};
  
export default mongoose.model('Trip', TripSchema);
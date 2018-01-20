
import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';


const UserRoleSchema = new mongoose.Schema({
   user :{
      type: mongoose.Schema.Types.ObjectId, 
  	  ref: 'User' 
   },
   role :{
      type: mongoose.Schema.Types.ObjectId, 
  	  ref: 'Role' 
   }
});

UserRoleSchema.statics = {    
};
  
export default mongoose.model('UserRole', UserRoleSchema);
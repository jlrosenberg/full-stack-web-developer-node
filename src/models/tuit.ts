import mongoose from 'mongoose';
import tuitsSchema from '../db/tuitsSchema'
const tuitsModel = mongoose
              .model('TuitModel', tuitsSchema);
export default tuitsModel;
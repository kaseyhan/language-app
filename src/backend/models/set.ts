import { ISet } from '../types/set';
import { model, Schema } from 'mongoose';

const setSchema = new Schema({
    name: { type: String, required: true },
    userId: { type: String, required: true },
    terms: [String]
},
{ timestamps: true }
)
export default model('Set', setSchema);
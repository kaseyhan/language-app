import { ITerm } from '../types/term';
import { model, Schema } from 'mongoose';

const termSchema = new Schema({
    kana: { type: String, required: true },
    kanji: { type: String },
    meaning: { type: String, required: true },
    pos: { type: String, required: true },
    notes: { type: String }
},
{ timestamps: true }
)
export default model('Term', termSchema);
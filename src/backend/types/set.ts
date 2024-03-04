import { Document } from 'mongoose';

export interface ISet extends Document {
    name: string,
    userId: string,
    terms: [String]
}
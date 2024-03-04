import { Document } from 'mongoose';

export interface ITerm extends Document {
    kana: string,
    kanji: string | null,
    meaning: string,
    pos: string,
    notes: string | null
}
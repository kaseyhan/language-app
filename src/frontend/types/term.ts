import { Document } from 'mongoose';

export interface ITerm extends Document {
    kana: string,
    kanji?: string | undefined,
    meaning: string,
    pos: string,
    notes?: string | undefined,
    setId: string,
}
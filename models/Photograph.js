import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const photoSchema = new Schema(
    {
        title: String,
        src: String,
        alt: String,
        owner: String
    }
)

export const Photo = mongoose.model('Photo', photoSchema);



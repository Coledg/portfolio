import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const photoSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, "Title is a required field"]
        },
        src: {
            type: String,
            required: [true, "Img src is a required field"]
        },
        alt: String,
        photographer: String
    }
)

export const Photo = mongoose.model('Photo', photoSchema);



import mongoose from 'mongoose'
mongoose.connect('mongodb://127.0.0.1:27017/portfolio');

import { Photo } from '../models/Photograph.mjs';

export const getAllPhotos = async () => {
    const photos = await Photo.find({});
    return photos
}
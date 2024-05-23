import {format} from 'date-fns'
import { storage } from './config';

const BUCKET_URL = "https://console.firebase.google.com/u/0/project/doreceipt-3d5b6/storage/doreceipt-3d5b6.appspot.com/files"

export async function uploadImage(image, uid) {
    const formattedDate = format(new Date(), "yyyy-MM-dd'T'HH:mm:ss'Z'");
    const bucket = `${BUCKET_URL}/${uid}/${formattedDate}.jpg`;
    await uploadBytes(ref(storage, bucket), image);
    return bucket;
}



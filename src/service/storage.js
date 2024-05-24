import {format} from 'date-fns'
import { storage } from './config';
import { ref, uploadBytes } from 'firebase/storage';

const BUCKET_URL = "gs://doreceipt-3d5b6.appspot.com/"

export async function uploadImage(image, uid) {
    const formattedDate = format(new Date(), "yyyy-MM-dd'T'HH:mm:ss'Z'");
    const bucket = `/${uid}/${formattedDate}.jpg`;
    await uploadBytes(ref(storage, bucket), image);
    return bucket;
}



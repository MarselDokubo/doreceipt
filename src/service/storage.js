import {format} from 'date-fns'
import { storage } from './config';
import { ref, uploadBytes } from 'firebase/storage';

export async function uploadImage(image, uid) {
    const formattedDate = format(new Date(), "yyyy-MM-dd'T'HH:mm:ss'Z'");
    const bucketUrl = `/${uid}/${formattedDate}.jpg`;
    let {metadata: {bucket, fullPath}} = await uploadBytes(ref(storage, bucketUrl), image);
    return `${bucket}/${fullPath}`
}



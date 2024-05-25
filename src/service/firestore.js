import { db } from "./config";
import { addDoc, collection } from "firebase/firestore"
 
const RECEIPT_COLLECTION = 'receipt' 
export async function addReceipt(receipt) {
  await addDoc(collection(db, RECEIPT_COLLECTION), {...receipt});
}
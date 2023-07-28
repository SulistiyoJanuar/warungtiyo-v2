import { collection, doc, getDoc, getDocs, orderBy, query, setDoc } from "firebase/firestore";
import { firestore } from "../firebase.config";

// Saving new item
export const saveItem = async (data) => {
  await setDoc(doc(firestore, "products", `${Date.now()}`), data, {
    merge: true,
  });
};

// getall product
export const getAllProduct = async () => {
  const items = await getDocs(query(collection(firestore, "products"), orderBy("id", "desc")));

  return items.docs.map((doc) => doc.data());
};

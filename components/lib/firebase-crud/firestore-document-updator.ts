import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { FormDataTypes } from "../../../hooks/useDashboardFormHandler";

interface UpdateFirestoreDataProps {
  category: string;
  docId: string;
  data: FormDataTypes;
}

const updateFirestoreDocument = async ({
  category,
  docId,
  data,
}: UpdateFirestoreDataProps) => {
  try {
    const docRef = doc(db, category, docId);
    await updateDoc(docRef, Object.fromEntries(Object.entries(data)));
    alert(`${category} document updated successfully`);
  } catch (e) {
    console.error("Error while creating data:", e);
  }
};

export default updateFirestoreDocument;

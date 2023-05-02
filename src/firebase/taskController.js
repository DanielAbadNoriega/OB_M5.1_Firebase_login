// LOGIC TASKS: CRUD
import { db } from "./index";
import { collection, addDoc, getDocs, setDoc, doc, deleteDoc } from "firebase/firestore";

export const addNewTask = async (task) => {
  const docRef = await addDoc(collection(db, "tasks"), task);
  console.log("[TASKS CONTROLER - ADD ] New document created: ", docRef);
};

export const getTasks = async () => {
  const querySnapshot = await getDocs(collection(db, "tasks"));
  console.log("[TASKS CONTROLER - GET] Tasks: ", querySnapshot);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });

  return querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};

export const updateTask = async (task) => {
  await setDoc(doc(db, "tasks", task.id), {
    title: task.title,
    description: task.description,
  });
};

export const removeTask = async (id) => {
  await deleteDoc(doc(db, "tasks", id));
}
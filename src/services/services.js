// connection firebase whith react
import { db } from "../firebase-config";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const courseCollectionRef = collection(db, "courses");
class CourseDataService {
  addCourses = (newCourse) => {
    return addDoc(courseCollectionRef, newCourse);
  };

  updateBook = (id, updatedCourse) => {
    const courseDoc = doc(db, "courses", id);
    return updateDoc(courseDoc, updatedCourse);
  };

  deleteBook = (id) => {
    const courseDoc = doc(db, "courses", id);
    return deleteDoc(courseDoc);
  };

  getAllBooks = () => {
    return getDocs(courseCollectionRef);
  };

  getBook = (id) => {
    const courseDoc = doc(db, "courses", id);
    return getDoc(courseDoc);
  };
}

export default new CourseDataService();
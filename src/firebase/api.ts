import { FirebaseApp } from "@firebase/app-types";
import { getDatabase, ref as databaseRef, set } from "firebase/database";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./config";

class FirebaseApi {
  constructor() {
    const app = initializeApp(firebaseConfig) as FirebaseApp;
  }

  public async createDocument(id: string) {
    const database = getDatabase();
    await set(databaseRef(database, `testFolder/${id}`), {
      text: "Hello, world!",
    });
  }
}

export const firebaseApi = new FirebaseApi();

import admin from "firebase-admin";
import { initializeApp, getApps } from "firebase-admin/app";
import { serviceKey } from "@/config/serviceKey";

if (!getApps().length) {
  initializeApp({
    credential: admin.credential.cert(serviceKey),
    databaseURL: "https://robotics-inc-default-rtdb.firebaseio.com",
    databaseAuthVariableOverride: {
      uid: "robotics",
    },
  });
}

// app/api/test/route.js
const db = admin.database();

export { db };

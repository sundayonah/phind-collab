// // Import the functions you need from the SDKs you need
// import { initializeApp, getApps, getApp, App, cert } from 'firebase-admin/app';
// import { getFirestore } from 'firebase-admin/firestore';

// // const serviceAccount = require('@/service_key.json');
// import serviceKey from "@/service_key.json"

// let app: App;

// if (getApps().length === 0) {
//    app = initializeApp({
//       credential: cert(serviceKey),
//    });
// } else {
//    app = getApp();
// }

// const adminDb = getFirestore(app);

// export { app as adminApp, adminDb };

import {
   initializeApp,
   getApps,
   getApp,
   App,
   cert,
   ServiceAccount,
} from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import serviceKey from '@/service_key.json';

let app: App;

if (getApps().length === 0) {
   // Assuming serviceKey is correctly structured as a ServiceAccount object
   const serviceAccount: ServiceAccount = serviceKey as ServiceAccount;
   app = initializeApp({
      credential: cert(serviceAccount),
   });
} else {
   app = getApp();
}

const adminDb = getFirestore(app);

export { app as adminApp, adminDb };

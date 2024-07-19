'use server';

import { adminDb } from '@/firebase-admin';
import { auth } from '@clerk/nextjs/server';

export async function createNewDocument() {
   auth().protect();
   const { sessionClaims } = auth();
   const docCollentionRef = adminDb.collection('documents');
   const docRef = await docCollentionRef.add({
      title: 'New Doc',
   });
   await adminDb
      .collection('users')
      .doc(sessionClaims?.email!)
      .collection('rooms')
      .doc(docRef.id)
      .set({
         userId: sessionClaims?.email!,
         role: 'owner',
         createdAt: new Date(),
         roomId: docRef.id,
      });

   return { docId: docRef.id };
}

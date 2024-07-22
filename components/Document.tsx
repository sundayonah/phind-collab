'use client';

import { useState, useTransition, FormEvent, useEffect } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '@/firebase';
import { useDocumentData } from 'react-firebase-hooks/firestore';
import Editor from './Editor';
import useOwner from '@/lib/useOwner';
import DeleteDocument from './DeleteDocument';

const Document = ({ id }: { id: string }) => {
   const [input, setInput] = useState('');
   const [isUpdating, startTransition] = useTransition();
   const [data, loading, error] = useDocumentData(doc(db, 'documents', id));
   const isOwner = useOwner();

   // console.log(isOwner);

   useEffect(() => {
      if (data) {
         setInput(data.title);
      }
   }, [data]);

   const UpdateTitle = (e: FormEvent) => {
      e.preventDefault();

      if (input.trim()) {
         startTransition(async () => {
            await updateDoc(doc(db, 'documents', id), {
               title: input,
            });
         });
      }
   };

   return (
      <div className="flex-1 h-full bg-white p-5">
         <div className="flex max-w-6xl mx-auto justify-between pb-5">
            <form onSubmit={UpdateTitle} className="flex flex-1 space-x-2">
               {/* update title */}
               <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
               />
               <Button disabled={isUpdating} type="submit">
                  {isUpdating ? 'Updating...' : 'Update'}
               </Button>

               {/* IF */}
               {isOwner && (
                  <>
                     {/* invite user */}
                     {/* Delete Document */}
                     <DeleteDocument />
                  </>
               )}
            </form>
         </div>
         <div>
            {/* ManageUsers */}
            {/* Avatar */}
         </div>
         {/* collaborative editor */}
         <hr className="pb-10" />
         <Editor />
      </div>
   );
};
export default Document;

'use client';

import { useTransition } from 'react';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';
import { createNewDocument } from '@/actions/actions';

const NewDocumentButton = () => {
   const [isPending, startTransition] = useTransition();
   const router = useRouter();

   const handleCreateNewDocument = () => {
      startTransition(async () => {
         // create a new document
         const { docId } = await createNewDocument();
         // console.log(docId);
         router.push(`/doc/${docId}`);
      });
   };

   return (
      <Button onClick={handleCreateNewDocument} disabled={isPending}>
         {isPending ? 'creating...' : 'New Document'}
      </Button>
   );
};
export default NewDocumentButton;

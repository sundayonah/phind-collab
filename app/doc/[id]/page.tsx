// File: /doc/[id]/page.tsx

'use client';

import Document from '@/components/Document';

interface DocumentPageProps {
   params: {
      id: string;
   };
}

const DocumentPage: React.FC<DocumentPageProps> = ({ params: { id } }) => {
   return (
      <div className="flex flex-col flex-1 min-h-screen">
         <Document id={id} />
      </div>
   );
};

export default DocumentPage;

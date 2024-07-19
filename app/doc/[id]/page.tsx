'use client';

const DocumentPage = ({
   params: { id },
}: {
   params: {
      id: string;
   };
}) => {
   return <div>DocumentPage: {id}</div>;
};
export default DocumentPage;

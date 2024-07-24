// pages/[...slug]/doc.tsx
import React from 'react';

// Step 1: Define a type for the props
interface DocPageProps {
   slug: string[];
}

const DocPage: React.FC<DocPageProps> = ({ slug }) => {
   console.log(slug);
   return (
      <div>
         <h1>Doc Page</h1>
         <p>Slug: {slug}</p>
      </div>
   );
};

export default DocPage;

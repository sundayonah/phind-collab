'use client';

import { usePathname } from 'next/navigation';
import {
   Breadcrumb,
   BreadcrumbItem,
   BreadcrumbLink,
   BreadcrumbList,
   BreadcrumbPage,
   BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Fragment } from 'react';

const Breadcrumbs = () => {
   const pathName = usePathname();

   const segments = pathName.split('/');

   console.log(segments);

   return (
      <Breadcrumb>
         <BreadcrumbList>
            <BreadcrumbItem>
               <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>

            {segments.map((seg, index) => {
               if (!seg) return null;

               const href = `/${segments.slice(0, index + 1).join('/')}`;
               const isLast = index === segments.length - 1;

               return (
                  <Fragment key={seg}>
                     <BreadcrumbSeparator />
                     <BreadcrumbItem>
                        {isLast ? (
                           <BreadcrumbPage>{seg}</BreadcrumbPage>
                        ) : (
                           <BreadcrumbLink href={href}>{seg}</BreadcrumbLink>
                        )}
                     </BreadcrumbItem>
                  </Fragment>
               );
            })}
         </BreadcrumbList>
      </Breadcrumb>
   );
};
export default Breadcrumbs;

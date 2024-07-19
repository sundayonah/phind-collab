'use client';

import {
   SignedIn,
   SignedOut,
   SignInButton,
   UserButton,
   useUser,
} from '@clerk/nextjs';
import { Button } from './ui/button';

const Header = () => {
   const { user } = useUser();

   return (
      <div className="flex items-center justify-between p-5">
         {user && (
            <h1 className="text-2xl font-bold">
               {user?.firstName}
               {`'s`} Space
            </h1>
         )}

         {/* BREADCRUMBS */}
         <div>
            <h1>Home</h1>
         </div>
         <div>
            <SignedOut>
               <SignInButton />
            </SignedOut>
            <SignedIn>
               <UserButton />
            </SignedIn>
         </div>
      </div>
   );
};

export default Header;

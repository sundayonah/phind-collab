'use client';

import {
   RoomProvider as RoomProviderWrapper,
   ClientSideSuspense,
} from '@liveblocks/react/suspense';
import LiveCursorProvider from './LiveCursorProvider';
import LoadingSpinner from './LoadingSpinner';

const RoomProvider = ({
   roomId,
   children,
}: {
   roomId: string;
   children: React.ReactNode;
}) => {
   return (
      <RoomProviderWrapper id={roomId} initialPresence={{ cursor: null }}>
         <ClientSideSuspense fallback={<LoadingSpinner />}>
            <LiveCursorProvider>{children}</LiveCursorProvider>
         </ClientSideSuspense>
      </RoomProviderWrapper>
   );
};
export default RoomProvider;

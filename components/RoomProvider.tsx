'use clienr';

import {
   RoomProvider as RoomProviderWrapper,
   ClientSideSuspense,
} from '@liveblocks/react/suspense';
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
            {children}
         </ClientSideSuspense>
      </RoomProviderWrapper>
   );
};
export default RoomProvider;

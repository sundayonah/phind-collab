import { LiveblocksProvider } from '@liveblocks/react/suspense';
const LiveBlockdProvider = ({ children }: { children: React.ReactNode }) => {
   if (!process.env.NEXT_PUBLIC_LIVEBLOCKS_KEY) {
      throw new Error('NEXT_PUBLIC_LIVEBLOCKS_KEY is not define');
   }
   return (
      <LiveblocksProvider throttle={16} authEndpoint={'/auth-endpoint'}>
         {children}
      </LiveblocksProvider>
   );
};
export default LiveBlockdProvider;

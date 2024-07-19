import LiveBlockdProvider from '@/components/liveBlockdProvider';

const PageLayout = ({ children }: { children: React.ReactNode }) => {
   return <LiveBlockdProvider>{children}</LiveBlockdProvider>;
};
export default PageLayout;

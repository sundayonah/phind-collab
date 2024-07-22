'use client';
import { motion, AnimatePresence, useMotionValue } from 'framer-motion';

const FollowPointer = ({
   x,
   y,
   info,
}: {
   x: number;
   y: number;
   info: {
      name: string;
      email: string;
      avatar: string;
   };
}) => {
   return <motion.div>FollowPointer</motion.div>;
};
export default FollowPointer;
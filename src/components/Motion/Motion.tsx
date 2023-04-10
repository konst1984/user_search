import React, {FC} from 'react';
import {motion} from "framer-motion"

interface IMotionProp{
  children : React.ReactNode
}

const Motion: FC<IMotionProp> = ({children}) => {
  return (
    <motion.main
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1 , scale:1}}
      exit={{ opacity: 0, scale: 0 }}
    >
      {children}
    </motion.main>
  );
};

export default Motion;
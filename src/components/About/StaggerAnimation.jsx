
import React, {Children, useEffect, useState} from 'react'
import {motion, useInView, useAnimations} from "framer-motion";



export const StaggerAnimation = () => {



  return (
    <div>
        <motion.div
        variants={{
            hidden:{opacity:0, y:75},
            visible:{opacity:1, Y:0},

        }}
        initial="hidden"
        animate="visible"
        transition={{duration:0.5, delay:0.25}}>
        
        </motion.div>
      
    </div>
  )
}

export default StaggerAnimation

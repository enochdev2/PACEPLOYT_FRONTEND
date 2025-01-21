"use client";
import React from 'react'
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
const Animate = ({ element, visible, hidden }) => {

    const boxVariant = {
        visible,
        hidden
    };
    const ref = useRef(null)
    const isInview = useInView(ref, { amount: "all" })
    const control = useAnimation();
    useEffect(() => {
        if (isInview) {
            control.start("visible")
        } else {
            control.start("hidden")
        }
    }, [isInview])
    return (
        <motion.div ref={ref} variants={boxVariant} initial={"hidden"} animate={control}>
            {element}
        </motion.div>
    )
}

export default Animate
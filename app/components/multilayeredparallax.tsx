import topdivider from "../../public/img/top-divider.png";
import bottomdivider from "../../public/img/bottom-divider.png";
import midground from "../../public/img/mid-ground.png";
import background from "../../public/img/background.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export default function MultiLayeredParallax() {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start start", "end start"],
    });
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
    

    return (
        <div className="w-full h-screen relative grid place-items-center">
            <h1 className="font-bold text-white md:text-4xl relative z-10">Cuphead Verse!</h1>
            <motion.div className="absolute inset-0 z-20">
                <Image src={topdivider} alt="tdfgd" width={400} height={400} className="w-full" />
            </motion.div>
            <div className="absolute inset-0 z-20">
                <Image src={bottomdivider} alt="tdfgd" width={400} height={400} className="w-full"/>
            </div>
            <div className="absolute inset-0 z-10">
                <Image src={midground} alt="tdfgd" width={400} height={400} className="w-full"/>
            </div>
            <div className="absolute inset-0 z-0">
                <Image src={background} alt="tdfgd" width={400} height={400} className="w-full"/>
            </div>
            
        </div>
    );
}

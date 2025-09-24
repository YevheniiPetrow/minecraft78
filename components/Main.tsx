import React from 'react';
import {motion} from "framer-motion";
import Image from "next/image";

export const dynamic = 'auto'
const Main = () => {
    return (
        <section id='first'
                 className=" flex justify-between items-center flex-wrap md:flex-nowrap">
            <div className='pr-[4rem]'></div>
            <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.5}}
                className="container mx-auto md:px-10 text-white"
            >
                <h1 className="text-6xl md:text-8xl font-extrabold mb-6"> forge EVENGREEN</h1>
                <p className="text-2xl md:text-2xl max-w-2xl">Сети по лоупрайсу</p>
            </motion.div>
            <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.5}}
                className="container md:py -40 md:pl-[500px] text-white"
            >
                <Image src="/незер бронь сайт.png" alt="cleaning" width={200} height={300} loading="lazy" decoding="async"/>

            </motion.div>
        </section>


);
};

export default Main;
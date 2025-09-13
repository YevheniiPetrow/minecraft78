'use client'
import {motion} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {Separator} from "@radix-ui/react-context-menu";

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1,
        },
    },
}
const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
}
 const Footer: React.FC = () => {
    return (
        <footer className=" rounded-t-2xl bg-gradient-to-r
                 text-white border-black">
            <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="container px-5 py-5"
            >
                <div className="grid md:grid-cols-5 gap-8 my-2">
                    {/* Текст, який займає всю ширину */}
                    <motion.div
                        variants={fadeIn}
                        className="md:col-span-5 w-full text-center text-white font-medium"
                    >
                        Після того як замовили через ~10 хвилин менеджер напише вам у Discord де можна забрати сет
                    </motion.div>
                </div>
            </motion.div>
        </footer>

    );
}
export default Footer
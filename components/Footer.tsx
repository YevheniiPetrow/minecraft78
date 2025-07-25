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
        <footer className="bg-gradient-to-r from-gray-750 to-gray-760dark:from-gray-800">

            <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{once: true}}
                variants={staggerContainer}
                className="container mx-auto px-5 py-4"
            >
                <div className="grid md:grid-cols-4 gap-8">

                    {/*<motion.div variants={fadeIn} className="md:col-span-2">*/}
                    {/*  <h3 className="font-semibold mb-4">УСЛУГИ</h3>*/}
                    {/*  <div className="grid md:grid-cols-2 gap-2">*/}
                    {/*    {services.map((service) => (*/}
                    {/*      <Link key={service.title} href="#" className="hover:opacity-80 transition-opacity">*/}
                    {/*        {service.title}*/}
                    {/*      </Link>*/}
                    {/*    ))}*/}
                    {/*  </div>*/}
                    {/*</motion.div>*/}
                </div>
            </motion.div>

        </footer>
    );
}
export default Footer
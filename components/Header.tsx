"use client"
import { Menu } from 'lucide-react'
import Link from "next/link"
import {useRef, useState} from "react"
import {motion, useScroll, useTransform} from "framer-motion";
import Image from "next/image";
import {FaTelegramPlane, FaVk} from "react-icons/fa";
import {FaPhone} from "react-icons/fa6";
import {Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";
import { FaDiscord } from "react-icons/fa"; // <-- імпорт іконки Discord


export const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)
    const headerRef = useRef<HTMLElement>(null)
    const { scrollY } = useScroll()
    const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.8])

    return (
        <motion.header
            ref={headerRef}
            className=""
            style={{opacity: headerOpacity}}
        >
            <nav className="container mx-auto px-4 py-4 flex items-center justify-between
                rounded-b-2xl bg-gradient-to-r
                from-[rgba(20,20,20,0.7)] to-[rgba(30,30,30,0.7)] ">

                <div className="flex items-center gap-4 md:gap-8">
                    <motion.div
                        initial={{opacity: 0, scale: 0.8}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{duration: 0.5}}
                        className="flex items-center gap-3"
                    >
                        <Link
                            href={`#first`}
                            className="hover:opacity-80 transition-opacity flex items-center gap-3"
                            aria-label='homeLogo'
                        >
                            <Image
                                src="/лого сайта.jpg"
                                alt="Logo"
                                width={70}
                                height={70}
                                className="w-14 h-14 md:w-12 md:h-12"
                            />
                            <span
                                className="
    text-white text-sm md:text-base font-medium leading-snug
    line-clamp-2 break-words
  "
                            >
  Після того як замовили через ~10 хвилин менеджер напише вам у Discord, де можна забрати сет
</span>

                        </Link>
                    </motion.div>
                </div>

            </nav>
        </motion.header>
    );
}


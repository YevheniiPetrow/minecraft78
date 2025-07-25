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
            <nav className="container mx-auto px-4 py-4 flex items-center justify-between text-black">
                <div className="flex items-center gap-4 md:gap-8">
                    <motion.div
                        initial={{opacity: 0, scale: 0.8}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{duration: 0.5}}
                    >
                        <Link
                            href={`#first`}
                            className="hover:opacity-80 transition-opacity text-lg md:text-lg font-bold"
                            aria-label='homeLogo'
                        >
                            <Image
                                src="/лого сайта.jpg"
                                alt="Logo"
                                width={70}
                                height={70}
                                className="w-14 h-14 md:w-12 md:h-12"
                            />
                        </Link>

                    </motion.div>

                </div>

                <div className="flex items-center gap-2 md:gap-4">


                    {/*<ThemeToggle />*/}

                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" className="md:hidden text-black">
                                <Menu className="h-30 w-50"/>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-[300px]">
                            <SheetHeader>
                                <SheetTitle>Меню</SheetTitle>
                            </SheetHeader>

                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </motion.header>
    );
}
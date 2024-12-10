'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { navlinks } from '@/utils/navlinks';
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";
import clsx from 'clsx';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from '@/lib/utils';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { HiOutlineChevronDown, HiOutlineMagnifyingGlass } from 'react-icons/hi2';

function BigScreenNavigationItemDropdown({ title, sublinks }) {
    return (
        <HoverCard className="bg-[--primary]" openDelay={100} closeDelay={100} >
            <HoverCardTrigger className='flex gap-1 place-items-center text-sm' >
                <span className="block cursor-pointer">{title}</span>
                <HiOutlineChevronDown className="size-4" />

            </HoverCardTrigger>
            <HoverCardContent className="bg-[--primary] text-white border-none rounded-none" >
                <ul>
                    {sublinks.map((child, index) => (
                        <li key={index} className='hover:text-[--link] p-2'>
                            <Link href={child.href}>
                                <span className="block cursor-pointer">{child.title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </HoverCardContent>
        </HoverCard>
    )
}


const MobileMenuBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    return (
        <div className='w-full flex-col md:hidden text-white'>
            <div className='flex justify-start bg-[--primary]'>
                <button className="flex items-center" onClick={toggleMobileMenu} aria-label="Toggle menu">
                    {isMobileMenuOpen ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                        : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    }
                    <span className='ml-2'>MENU</span>
                </button>
                <SearchBar className="p-2" />
            </div>
            <div className={`pt-4 ${clsx(isMobileMenuOpen ? "flex-col align-middle bg-[--primary]" : "hidden")}`}>
                <Accordion type="single" collapsible className="">
                    {
                        navlinks.map((navlink, index) => {
                            if (navlink.children.length > 0) {
                                return (
                                    <AccordionItem value={`item-${index + 1}`} key={index} className="border-none">
                                        <AccordionTrigger className="">{navlink.title}</AccordionTrigger>
                                        <AccordionContent className="flex-col">
                                            <ul>
                                                {
                                                    navlink.children.map((child, index) => (
                                                        <li key={index}>
                                                            <Link href={child.href}>
                                                                <span className="block py-2">{child.title}</span>
                                                            </Link>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </AccordionContent>
                                    </AccordionItem>
                                );
                            } else {
                                return (
                                    <div key={index} className="font-medium py-4">
                                        <Link href={navlink.href}>
                                            <span className="block">{navlink.title}</span>
                                        </Link>
                                    </div>
                                );
                            }
                        })
                    }
                </Accordion>
            </div>
        </div>
    )
}

const BigScreenMenuBar = () => {
    return (
        <div className="hidden md:flex md:justify-between md:items-center text-white">
            <ul className="flex">
                {navlinks.map((navlink, index) => (
                    <li key={index} className='p-4 hover:text-[--link]'>
                        {navlink.children.length > 0 ? (
                            <BigScreenNavigationItemDropdown title={navlink.title} sublinks={navlink.children} />
                        ) : (
                            <div className='text-sm'>
                                <Link href={navlink.href}>
                                    <span className="cursor-pointer">{navlink.title}</span>
                                </Link>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
            <SearchBar />
        </div>
    )
}

const SearchBar = ({ className }) => {
    return (
        <div className={cn("p-4 bg-[--link] hover:bg-[--hover] ml-auto grid place-items-center", className)}>
            <Dialog>
                <DialogTrigger>
                    <HiOutlineMagnifyingGlass className="size-6" />
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Type for search</DialogTitle>
                        <form className="flex items-center justify-center py-4">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[--link]"
                                required
                            />
                            <button
                                type="submit"
                                className="ml-2 p-2 bg-[--link] text-white rounded-md hover:bg-inherit hover:border hover:border-[--link] hover:text-[--link] focus:outline-none focus:ring-2 focus:ring-[--link]"
                            >
                                Search
                            </button>
                        </form>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

        </div>
    )
}

const NavigationBar = () => {
    return (
        <nav className='bg-[--primary] p-4 md:p-0 sticky top-0 z-50'>
            <MobileMenuBar />
            <BigScreenMenuBar />
        </nav>
    );
};

export default NavigationBar;
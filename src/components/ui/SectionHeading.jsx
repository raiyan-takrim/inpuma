import { cn } from '@/lib/utils'
import React from 'react'

export default function SectionHeading({ children = "Section Heading", className }) {
    return (
        <h1 className={cn("uppercase relative inline-block after:rounded-full text-3xl font-bold after:absolute after:-bottom-2 after:left-0 after:w-full after:h-1 after:bg-[--link] mb-10", className)}>{children}</h1>
    )
}

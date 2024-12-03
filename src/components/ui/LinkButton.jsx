import { cn } from '@/lib/utils'
import Link from 'next/link'

export default function LinkButton({ children, href, className }) {
    return (
        <Link href={href} className={cn("text-[--dark] font-medium tracking-wide hover:text-white uppercase text-sm inline-block bg-[--link] rounded-full px-6 py-3 hover:bg-[--hover] transition-all ease-in-out delay-75 duration-300", className)}>
            {children}
        </Link>
    )
}

import React from 'react';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Image from 'next/image';

function HorizontalNewsCard({ src, alt, height, width, data }) {
    return (
        <Card className="flex flex-row items-center space-x-4 mb-4 p-2">
            <div className="flex-shrink-0">
                <Image src={src} alt={alt} className="object-cover rounded-s-lg" height={height} width={width} />
            </div>
            <CardContent className="flex-grow p-0 ">
                <CardTitle className="line-clamp-3 text-xl font-semibold">{data.title}</CardTitle>
                <p className="flex place-items-center gap-2 text-gray-500"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                </svg>
                    {data.date}</p>
            </CardContent>
        </Card>
    );
}
function VerticalNewsCard({ src, alt, height, width, data }) {
    return (
        <Card className="flex flex-col mb-4">
            <div>
                <Image src={src} alt={alt} className="object-cover rounded-t-lg" height={height} width={width} />
            </div>
            <CardContent className="p-4">
                <CardTitle className="line-clamp-3 text-xl font-semibold">{data.title}</CardTitle>
                <p className="flex place-items-center gap-2 text-gray-500"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                </svg>
                    {data.date}</p>
            </CardContent>
        </Card>
    );
}
export { HorizontalNewsCard, VerticalNewsCard };

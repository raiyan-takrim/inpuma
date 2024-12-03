import Image from 'next/image';
import React from 'react';
import { HorizontalNewsCard, VerticalNewsCard } from './ui/NewsCard';
import SectionHeading from './ui/SectionHeading';

const newsData = [
    {
        id: 1,
        title: 'INPUMA Hosts Lecture by High Commissioner of Singapore',
        date: '2023-10-01',
        image: 'https://picsum.photos/600/400',
        width: 600,
        height: 400,
    },
    {
        id: 2,
        title: 'INPUMA Hosts Delegation from Beijing Administration Institute for Collaborative Opportunities',
        date: '2023-09-25',
        image: 'https://picsum.photos/150/100',
        width: 150,
        height: 100,
    },
    {
        id: 3,
        title: 'Datuk Dr Anis Yusal Yusoff Appointed as Fellow of MINDA UKM',
        date: '2023-09-20',
        image: 'https://picsum.photos/150/100',
        width: 150,
        height: 100,
    },
    ,
    {
        id: 4,
        title: 'INPUMA Hosts Road Safety Roundtable Discussion',
        date: '2023-09-19',
        image: 'https://picsum.photos/150/100',
        content: 'This is backdated news content 3.',
        width: 150,
        height: 100,
    }
];

const NewsUpdates = () => {
    const latestNews = newsData[0];
    const backdatedNews = newsData.slice(1);

    return (
        <div className="pb-20">
            <SectionHeading>News Updates</SectionHeading>
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 md:mr-4">
                    <VerticalNewsCard src={latestNews.image} alt={latestNews.title} height={latestNews.height} width={latestNews.width} data={latestNews} />
                </div>
                <div className="md:w-1/2">
                    {backdatedNews.map((news) => (
                        // <div key={news.id} className="bg-white shadow-lg rounded-lg overflow-hidden mb-4">
                        //     <Image src={news.image} alt={news.title} className="w-full h-32 object-cover" height={latestNews.height} width={latestNews.width} />
                        //     <div className="p-4">
                        //         <h3 className="text-xl font-bold mb-2">{news.title}</h3>
                        //         <p className="text-gray-600 mb-2">{news.date}</p>
                        //         <p className="text-gray-800">{news.content}</p>
                        //     </div>
                        // </div>
                        <HorizontalNewsCard key={news.id} src={news.image} alt={news.title} height={news.height} width={news.width} data={news} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NewsUpdates;
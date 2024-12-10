import Image from 'next/image';
import React from 'react';
import { HorizontalNewsCard, VerticalNewsCard } from './ui/NewsCard';
import SectionHeading from './ui/SectionHeading';
import Link from 'next/link';
import { HiChevronDoubleRight } from 'react-icons/hi';

const newsData = [
  {
    id: 1,
    title: 'INPUMA Hosts Lecture by High Commissioner of Singapore',
    date: '2023-10-01',
    image: 'https://picsum.photos/600/400?random=1&blur=2',
    width: 600,
    height: 400,
  },
  {
    id: 2,
    title:
      'INPUMA Hosts Delegation from Beijing Administration Institute for Collaborative Opportunities',
    date: '2023-09-25',
    image: 'https://picsum.photos/150/100?random=2&blur=2',
    width: 150,
    height: 100,
  },
  {
    id: 3,
    title: 'Datuk Dr Anis Yusal Yusoff Appointed as Fellow of MINDA UKM',
    date: '2023-09-20',
    image: 'https://picsum.photos/150/100?random=3&blur=2',
    width: 150,
    height: 100,
  },
  ,
  {
    id: 4,
    title: 'INPUMA Hosts Road Safety Roundtable Discussion',
    date: '2023-09-19',
    image: 'https://picsum.photos/150/100?random=4&blur=2',
    content: 'This is backdated news content 3.',
    width: 150,
    height: 100,
  },
];

const NewsUpdates = () => {
  const latestNews = newsData[0];
  const backdatedNews = newsData.slice(1);

  return (
    <div className="pb-20">
      <div className="flex justify-between">
        <SectionHeading>News Updates</SectionHeading>
        <Link
          href="/news"
          className="flex items-center font-bold text-[--primary] hover:text-[--hover]"
        >
          View All News
          <HiChevronDoubleRight className="ml-2 inline-block size-6" />
        </Link>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="md:mr-4 md:w-1/2">
          <VerticalNewsCard
            src={latestNews.image}
            alt={latestNews.title}
            height={latestNews.height}
            width={latestNews.width}
            data={latestNews}
          />
        </div>
        <div className="md:w-1/2">
          {backdatedNews.map((news) => (
            <HorizontalNewsCard
              key={news.id}
              src={news.image}
              alt={news.title}
              height={news.height}
              width={news.width}
              data={news}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsUpdates;

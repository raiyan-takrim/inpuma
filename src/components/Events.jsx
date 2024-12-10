'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '@/components/styles/Events.css'; // Ensure this path is correct
import '@/components/styles/swiper-custom.css';
import SectionHeading from './ui/SectionHeading';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import {
  HiOutlineCalendar,
  HiOutlineChevronDoubleRight,
  HiOutlineClock,
  HiOutlineMapPin,
} from 'react-icons/hi2';
import Link from 'next/link';
import { HiChevronDoubleRight } from 'react-icons/hi';

const events = [
  {
    image: 'https://picsum.photos/200/150?random=1',
    date: 'Oct 23, 2024',
    time: '09.00 AM - 01.00 PM',
    location: 'Wyndham Grand Hotel, Bangsar',
    heading:
      'Courtesy Visit from Institut Pemerintahan Dalam Negeri (IPDN), Bandung, Indonesia',
    link: '#',
  },
  {
    image: 'https://picsum.photos/200/150?random=2',
    date: ' Sep 06, 2024',
    time: '09.30 AM - 11.30 PM',
    location: 'Movenpick Hotel & Convention Centre KLIA.',
    heading: 'INPUMA and the Preparation of the 13th Malaysian Plan (RMK-13)',
    link: '#',
  },
  {
    image: 'https://picsum.photos/200/150?random=3',
    date: 'Aug 10, 2024',
    time: '09.00 AM - 01.00 PM',
    location: 'Wyndham Grand Hotel, Bangsar',
    heading: 'Workshop on the Preparation',
    link: '#',
  },
  {
    image: 'https://picsum.photos/200/150?random=4',
    date: 'Oct 23, 2024',
    time: '09.00 AM - 01.00 PM',
    location: 'Wyndham Grand Hotel, Bangsar',
    heading:
      'Courtesy Visit from Institut Pemerintahan Dalam Negeri (IPDN), Bandung, Indonesia',
    link: '#',
  },
  {
    image: 'https://picsum.photos/200/150?random=5',
    date: ' Sep 06, 2024',
    time: '09.30 AM - 11.30 PM',
    location: 'Movenpick Hotel & Convention Centre KLIA.',
    heading: 'INPUMA and the Preparation of the 13th Malaysian Plan (RMK-13)',
    link: '#',
  },
];

const Events = () => {
  return (
    <div className="py-10">
      <div className="flex justify-between">
        <SectionHeading>Events</SectionHeading>
        <Link
          href="/news"
          className="flex items-center font-bold text-[--primary] hover:text-[--hover]"
        >
          View All Events
          <HiChevronDoubleRight className="ml-2 inline-block size-6" />
        </Link>
      </div>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        breakpoints={{
          1024: {
            slidesPerView: 3,
          },
          600: {
            slidesPerView: 2,
          },
          320: {
            slidesPerView: 1,
          },
        }}
      >
        {events.map((event, index) => (
          <SwiperSlide key={index}>
            <Card className="overflow-hidden rounded-lg border border-gray-200 bg-white p-4">
              <CardHeader className="p-0">
                <Image
                  height={100}
                  width={200}
                  src={event.image}
                  alt={event.heading}
                  className="h-auto w-full rounded-sm"
                />
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="mb-2 line-clamp-2 text-xl font-semibold">
                  {event.heading}
                </CardTitle>
                <CardDescription>
                  <div className="mb-1 flex place-items-center gap-2">
                    <HiOutlineCalendar className="size-4 text-[--link]" />
                    <p>{event.date}</p>
                  </div>
                  <div className="mb-1 flex place-items-center gap-2">
                    <HiOutlineClock className="size-4 text-[--link]" />
                    <p>{event.time}</p>
                  </div>
                  <div className="mb-1 flex place-items-start gap-2">
                    <HiOutlineMapPin className="mt-1 size-4 text-[--link]" />
                    <p>{event.location}</p>
                  </div>
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Link
                  href={event.link}
                  className="text-[--primary] hover:underline"
                >
                  Read More
                  <HiOutlineChevronDoubleRight className="inline-block size-4" />
                </Link>
              </CardFooter>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Events;

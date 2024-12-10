'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { HiChevronUp } from 'react-icons/hi';

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer
      className="relative bg-cover bg-fixed bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/bgfooter-um.jpg')" }}
    >
      <div className="container mx-auto bg-opacity-50 px-4 pt-16 md:px-16">
        <div className="text-white">
          {/* First Row */}
          <div className="grid grid-cols-1 place-items-center gap-8 md:grid-cols-3">
            {/* First Column */}
            <div className="text-center">
              <h3 className="mb-4 text-xl font-semibold">About UM</h3>
              <ul>
                <li>
                  <Link href="#" className="hover:text-[--link]">
                    Vision & Mission
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[--link]">
                    Our History
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[--link]">
                    UM Fact Sheet
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[--link]">
                    Career
                  </Link>
                </li>
              </ul>
            </div>
            {/* Second Column */}
            <div className="text-center">
              <Image
                src="/Logo-UM-08.png"
                alt="UM Logo"
                width={200}
                height={200}
                className="mx-auto h-auto max-w-full"
              />
              <p>50603 Kuala Lumpur, Malaysia</p>
            </div>
            {/* Third Column */}
            <div className="text-center">
              <h3 className="mb-4 text-xl font-semibold">Quick Links</h3>
              <ul>
                <li>
                  <Link href="#" className="hover:text-[--link]">
                    Academic
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[--link]">
                    Giving@UM
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[--link]">
                    Library
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[--link]">
                    Research
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[--link]">
                    Services
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Second Row */}
          <div className="mt-10 border-t py-4 text-center">
            <p className="text-sm">
              © 2021{' '}
              <FooterLink href="https://www.um.edu.my">
                Universiti Malaya
              </FooterLink>
              . All Rights Reserved |
              <FooterLink href="https://um.edu.my/privacy-policy.html">
                {' '}
                Privacy Policy{' '}
              </FooterLink>{' '}
              |
              <FooterLink href="https://um.edu.my/site-credits">
                {' '}
                Site Credits{' '}
              </FooterLink>{' '}
              |
              <FooterLink href="https://um.edu.my/disclaimer">
                {' '}
                Disclaimer{' '}
              </FooterLink>{' '}
              |
              <FooterLink href="https://um.edu.my/security-policy">
                {' '}
                Security Policy{' '}
              </FooterLink>{' '}
              |<FooterLink href="/sitemap"> Sitemap </FooterLink>
            </p>
          </div>
        </div>
      </div>
      {/* Go to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-[--link] p-2 text-white shadow-lg hover:bg-[--hover] focus:outline-none"
        >
          <HiChevronUp className="size-6" />
        </button>
      )}
    </footer>
  );
};

const FooterLink = ({ href, children, className }) => {
  return (
    <Link
      href={href}
      target="_blank"
      className={`${cn('text-[--link] hover:text-[--hover]', className)}`}
    >
      {children}
    </Link>
  );
};

export default Footer;

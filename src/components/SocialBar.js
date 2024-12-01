import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaEnvelope, FaTrademark, FaPhone } from 'react-icons/fa';

const SocialBar = () => {
    return (
        <div className="bg-[--primary]">
            <div className="container mx-auto p-4 md:px-16 hidden md:flex justify-between items-center">
                <span className="text-white hidden md:block">International Institute of Public Policy and Management (INPUMA)</span>
                <div className="flex place-items-center text-white">
                    <a href='tel:+60379673600' className="mx-2 flex align-middle place-items-center" aria-label="Phone">
                        <FaPhone />
                        <span className='ml-2 hidden lg:block'>+603-7967 3711</span>
                    </a>
                    <a href="mailto:inpuma@um.edu.my" className="mx-2 flex place-items-center" aria-label="Email">
                        <FaEnvelope />
                        <span className='ml-2 hidden lg:block'>inpuma@um.edu.my</span>
                    </a>
                    <a href="https://twitter.com" className="mx-2" aria-label="Twitter">
                        <FaTwitter />
                    </a>
                    <a href="https://facebook.com" className="mx-2" aria-label="Facebook">
                        <FaFacebook />
                    </a>
                    <a href="https://instagram.com" className="mx-2" aria-label="Instagram">
                        <FaInstagram />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SocialBar;
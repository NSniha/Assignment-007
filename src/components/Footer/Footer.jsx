import React from 'react';
import twitterImg from "../../assets/twitter.png";
import linkedinImg from "../../assets/linkedin.png";
import facebookImg from "../../assets/facebook.png";
import emailImg from "../../assets/email.png";

const Footer = () => {
    return (
    <>
        <div className="bg-black font-inter">
            <div className="md:max-w-[1280px] mx-auto w-full px-4 pt-12 pb-8">
            <div className="md:flex columns-1 gap-18 border-b border-gray-700 md:pb-14 pb-4">
                <div className="md:w-[30%] w-[100%] md:mb-0 mb-10">
                    <h2 className="text-white text-2xl font-semibold mb-3">CS — Ticket System</h2>
                    <p className="text-[15px] font-normal leading-6 text-[#A1A1AA] mt-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt consequuntur beatae doloribus nisi enim omnis molestiae exercitationem ullam atque voluptatem?</p>
                </div>

                <div className="md:w-[70%] w-[100%] grid md:grid-cols-4 grid-cols-2 md:gap-8 gap:4">
                    <div className="md:mb-0 mb-10">
                        <h3 className="text-white text-lg font-semibold mb-3">Company</h3>
                        <ul className="space-y-2">
                        <li>
                            <a href="#" className="text-[15px] font-normal leading-6 text-[#A1A1AA]">About Us</a>
                        </li>
                        <li>
                            <a href="#" className="text-[15px] font-normal leading-6 text-[#A1A1AA]">Our Mission</a>
                        </li>
                        <li>
                            <a href="#" className="text-[15px] font-normal leading-6 text-[#A1A1AA]">Contact Saled</a>
                        </li>
                        </ul>
                    </div>

                    <div className="md:mb-0 mb-10">
                        <h3 className="text-white text-lg font-semibold mb-3">Services</h3>
                        <ul className="space-y-2">
                        <li>
                            <a href="#" className="text-[15px] font-normal leading-6 text-[#A1A1AA]">Products & Services</a>
                        </li>
                        <li>
                            <a href="#" className="text-[15px] font-normal leading-6 text-[#A1A1AA]">Customer Stories</a>
                        </li>
                        <li>
                            <a href="#" className="text-[15px] font-normal leading-6 text-[#A1A1AA]">Download Apps</a>
                        </li>
                        </ul>
                    </div>

                    <div className="md:mb-0 mb-10">
                        <h3 className="text-white text-lg font-semibold mb-3">Information</h3>
                        <ul className="space-y-2">
                        <li>
                            <a href="#" className="text-[15px] font-normal leading-6 text-[#A1A1AA]">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="text-[15px] font-normal leading-6 text-[#A1A1AA]">Terms & Conditions</a>
                        </li>
                        <li>
                            <a href="#" className="text-[15px]font-normal leading-6 text-[#A1A1AA]">Join Us</a>
                        </li>
                        </ul>
                    </div>

                    <div className="md:mb-0 mb-10">
                        <h3 className="text-white text-lg font-semibold mb-3">Social Links</h3>
                        <ul className="space-y-2">
                        <li>
                            <a href="https://x.com/" target="_blank" className="text-[15px] font-normal leading-7 text-[#A1A1AA] flex items-center gap-2"> <img src={twitterImg} />www.x.com/csticket</a>
                        </li>
                        <li>
                            <a href="https://x.com/" target="_blank" className="text-[15px] font-normal leading-7 text-[#A1A1AA] flex items-center gap-2"> <img src={linkedinImg} />www.x.com/csticket</a>
                        </li>
                        <li>
                            <a href="https://x.com/" target="_blank" className="text-[15px] font-normal leading-7 text-[#A1A1AA] flex items-center gap-2"> <img src={facebookImg} />www.x.com/csticket</a>
                        </li>
                        <li>
                            <a href="https://x.com/" target="_blank" className="text-[15px] font-normal leading-7 text-[#A1A1AA] flex items-center gap-2"> <img src={emailImg} />www.x.com/csticket</a>
                        </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="text-center text-sm text-gray-400 mt-6">
                © 2025 CS — Ticket System. All rights reserved.
            </div>
            </div>
        </div>
    </>
    )
}

export default Footer;
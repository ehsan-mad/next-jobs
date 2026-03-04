import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="w-full bg-[#202430] text-white pt-16 pb-8">
            <div className="max-w-[1192px] mx-auto px-6 lg:px-0 relative">
                
                {/* 
                    Grid System for Responsive Layout
                    Mobile: 2 cols (Branding & Newsletter full width, Links half width)
                    Desktop: 12 cols (4 - 2 - 2 - 4 distribution)
                */}
                <div className="grid grid-cols-2 lg:grid-cols-12 gap-y-12 gap-x-8 lg:gap-x-0 mb-16">

                    {/* Branding: Full width on mobile, 4 cols on desktop */}
                    <div className="col-span-2 lg:col-span-4">
                        {/* Logo */}
                        <div className="flex items-center gap-2.5 mb-6">
                             <div className="relative w-8 h-8 flex items-center justify-center">
                                <div className="absolute inset-0 bg-[#4640DE] rounded-full"></div>
                                <svg 
                                    width="20" 
                                    height="20" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="relative z-10 text-white transform -rotate-90"
                                >
                                     <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2.5" />
                                     <path d="M20 20L17 17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                                </svg>
                            </div>
                            <span className="font-clash font-bold text-2xl tracking-tight text-white leading-none">QuickHire</span>
                        </div>
                        
                        <p className="text-[#D6DDEB] text-base leading-[1.6] max-w-[376px]">
                            Great platform for the job seeker that passionate about startups. Find your dream job easier.
                        </p>
                    </div>

                    {/* About Column: Half width on mobile, 2 cols on desktop */}
                    <div className="col-span-1 lg:col-span-2 lg:pl-8">
                        <h4 className="font-semibold text-lg text-white mb-4">About</h4>
                        <div className="flex flex-col gap-4">
                            <Link href="#" className="text-[#D6DDEB] hover:text-white transition-colors">Companies</Link>
                            <Link href="#" className="text-[#D6DDEB] hover:text-white transition-colors">Pricing</Link>
                            <Link href="#" className="text-[#D6DDEB] hover:text-white transition-colors">Terms</Link>
                            <Link href="#" className="text-[#D6DDEB] hover:text-white transition-colors">Advice</Link>
                            <Link href="#" className="text-[#D6DDEB] hover:text-white transition-colors">Privacy Policy</Link>
                            <Link href="/admin" className="text-[#D6DDEB] hover:text-white transition-colors opacity-50 text-sm mt-4">Admin Dashboard</Link>
                        </div>
                    </div>

                    {/* Resources Column: Half width on mobile, 2 cols on desktop */}
                    <div className="col-span-1 lg:col-span-2">
                        <h4 className="font-semibold text-lg text-white mb-4">Resources</h4>
                        <div className="flex flex-col gap-4">
                            <Link href="#" className="text-[#D6DDEB] hover:text-white transition-colors">Help Docs</Link>
                            <Link href="#" className="text-[#D6DDEB] hover:text-white transition-colors">Guide</Link>
                            <Link href="#" className="text-[#D6DDEB] hover:text-white transition-colors">Updates</Link>
                            <Link href="#" className="text-[#D6DDEB] hover:text-white transition-colors">Contact Us</Link>
                        </div>
                    </div>

                    {/* Newsletter: Full width on mobile, 4 cols on desktop */}
                    <div className="col-span-2 lg:col-span-4">
                        <h4 className="font-semibold text-lg text-white mb-4">Get job notifications</h4>
                        <p className="text-[#D6DDEB] text-base leading-[1.6] mb-6 max-w-[362px]">
                            The latest job news, articles, sent to your inbox weekly.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-2 max-w-[362px]">
                            <input 
                                type="email" 
                                placeholder="Email Address" 
                                className="flex-1 bg-white border border-[#D6DDEB] px-4 py-3 text-[#202430] placeholder-[#A8ADB7] focus:outline-none focus:border-[#4640DE]"
                            />
                            <button className="bg-[#4640DE] text-white font-bold px-6 py-3 hover:bg-[#3b36b5] transition-colors cursor-pointer w-full sm:w-auto">
                                Subscribe
                            </button>
                        </div>
                    </div>

                </div>

                {/* Divider Line */}
                <div className="w-full h-px bg-white opacity-10 mb-8"></div>

                {/* Bottom Section: Copyright & Socials */}
                <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6 md:gap-0">
                    
                    {/* Copyright */}
                    <p className="font-medium text-[#D6DDEB] opacity-50 text-base">
                        2021 @ QuickHire. All rights reserved.
                    </p>

                    {/* Social Icons */}
                    <div className="flex items-center gap-6">
                         {/* Facebook */}
                         <Link href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#4640DE] transition-colors group">
                            <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-white">
                                <path d="M7.5 5.625V3.75C7.5 2.715 8.34 1.875 9.375 1.875H10V-0.003L7.5 0C5.43 0 3.75 1.68 3.75 3.75V5.625H1.875V9.375H3.75V18H7.5V9.375H9.375L10 5.625H7.5Z"/>
                            </svg>
                        </Link>

                        {/* Instagram */}
                         <Link href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#4640DE] transition-colors group">
                           <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-white">
                               <rect x="0.5" y="0.5" width="17" height="17" rx="4.5" strokeWidth="1.5"/>
                               <circle cx="9" cy="9" r="4.25" strokeWidth="1.5"/>
                               <circle cx="14" cy="4" r="1.5" fill="white"/>
                           </svg>
                        </Link>

                        {/* Dribbble */}
                        <Link href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#4640DE] transition-colors group">
                             <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-white">
                                <circle cx="9" cy="9" r="8.25" strokeWidth="1.5"/>
                                <path d="M16.92 7.5C14.07 8.355 10.965 8.52 7.965 7.98" strokeWidth="1.5" strokeLinecap="round"/>
                                <path d="M5.4 16.275C6.39 12.855 9.15 10.155 12.63 8.76" strokeWidth="1.5" strokeLinecap="round"/>
                                <path d="M1.26 7.005C3.99 7.62 6.81 7.29 9.3 6.075" strokeWidth="1.5" strokeLinecap="round"/>
                                <path d="M9.3 6.07501C9.64501 3.49501 8.85001 0.779999 7.00501 1.25999" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                        </Link>

                        {/* LinkedIn */}
                        <Link href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#4640DE] transition-colors group">
                           <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-white">
                                <path d="M14.8571 0H1.14286C0.514286 0 0 0.514286 0 1.14286V14.8571C0 15.4857 0.514286 16 1.14286 16H14.8571C15.4857 16 16 15.4857 16 14.8571V1.14286C16 0.514286 15.4857 0 14.8571 0ZM4.85714 13.7143H2.57143V6.28571H4.85714V13.7143ZM3.71429 5.37143C2.97143 5.37143 2.28571 4.74286 2.28571 3.88571C2.28571 3.02857 2.97143 2.4 3.71429 2.4C4.45714 2.4 5.14286 3.02857 5.14286 3.88571C5.14286 4.74286 4.45714 5.37143 3.71429 5.37143ZM13.7143 13.7143H11.4286V9.88571C11.4286 8.91429 11 8.28571 10.2286 8.28571C9.65714 8.28571 9.31429 8.68571 9.17143 9.05714C9.11429 9.2 9.11429 9.4 9.11429 9.57143V13.7143H6.82857C6.82857 13.7143 6.85714 6.85714 6.82857 6.28571H9.11429V7.25714C9.42857 6.77143 10 6.08571 11.2286 6.08571C12.8571 6.08571 13.7143 7.14286 13.7143 9.4V13.7143Z"/>
                           </svg>
                        </Link>

                        {/* Twitter/X */}
                         <Link href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#4640DE] transition-colors group">
                            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-white">
                                <path d="M16 1.53906C15.4113 1.80006 14.7787 1.97606 14.1147 2.05506C14.7924 1.64906 15.3121 1.00606 15.5573 0.240062C14.9227 0.616063 14.22 0.889063 13.4733 1.03606C12.8742 0.398063 12.0207 0 11.0847 0C9.28733 0 7.82933 1.458 7.82933 3.256C7.82933 3.511 7.858 3.76 7.91467 4.001C5.20933 3.865 2.76333 2.57 1.126 0.561063C0.846667 1.04006 0.686667 1.59706 0.686667 2.19306C0.686667 3.32306 1.262 4.31806 2.13467 4.90106C1.6 4.88406 1.09667 4.73706 0.66 4.49406V4.53506C0.66 6.11306 1.78267 7.42906 3.27133 7.72806C2.998 7.80206 2.71067 7.84206 2.414 7.84206C2.20467 7.84206 2.00067 7.82106 1.80267 7.78306C2.218 9.07706 3.42067 10.0181 4.842 10.0441C3.72733 10.9181 2.32267 11.4391 0.796667 11.4391C0.534 11.4391 0.275333 11.4231 0.02 11.3931C1.46267 12.3181 3.176 12.8571 5.01533 12.8571C11.01 12.8571 14.288 7.89006 14.288 3.58506C14.288 3.44406 14.2853 3.30306 14.28 3.16306C14.9167 2.70306 15.4747 2.14806 15.9173 1.51106L16 1.53906Z"/>
                            </svg>
                        </Link>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;

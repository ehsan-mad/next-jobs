import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-white px-4 pt-16 pb-24 md:px-16 lg:px-32">
            {/* Background Geometric Pattern */}
            <div
                className="pointer-events-none absolute top-[-100px] right-[-300px] z-10 transition-all duration-500 sm:right-[-200px] lg:top-0 lg:right-[-200px] xl:right-[-100px] 2xl:right-0 scale-50 sm:scale-75 lg:scale-100"
                style={{ width: '860px', height: '794px' }}
            >
                {/* Rect 2733 */}
                <div
                    className="absolute border-[4px] border-[#CCCCF5]"
                    style={{
                        width: '283.38px',
                        height: '716.25px',
                        top: '617px',
                        left: '-261px',
                        transform: 'rotate(64deg)',
                        opacity: 0.7
                    }}
                />
                {/* Rect 2730 */}
                <div
                    className="absolute border-[4px] border-[#CCCCF5]"
                    style={{
                        width: '319.78px',
                        height: '778.51px',
                        top: '240px',
                        left: '-17.95px',
                        transform: 'rotate(64deg)',
                        opacity: 0.7
                    }}
                />
                {/* Rect 2729 */}
                <div
                    className="absolute border-[4px] border-[#CCCCF5]"
                    style={{
                        width: '328.32px',
                        height: '796.20px',
                        top: '21.56px',
                        left: '146.3px',
                        transform: 'rotate(64deg)',
                        opacity: 0.7
                    }}
                />
                {/* Rect 2734 */}
                <div
                    className="absolute border-[4px] border-[#CCCCF5]"
                    style={{
                        width: '192.20px',
                        height: '416.47px',
                        top: '51.75px',
                        left: '106.43px',
                        transform: 'rotate(64deg)',
                        opacity: 0.6
                    }}
                />
            </div>

            <div className="relative z-10 flex flex-col items-center justify-between gap-12 lg:flex-row lg:items-start">
                {/* Left Content */}
                <div className="relative z-30 w-full lg:max-w-[650px]">
                    <div className="relative">
                        <h1 className="font-epilogue text-[56px] font-bold leading-[1.1] text-navy md:text-[72px]">
                            Discover <br />
                            more than <br />
                            <span className="relative inline-block text-secondary-blue">
                                5000+ Jobs
                                <svg
                                    className="absolute -bottom-4 left-0 w-full"
                                    width="455"
                                    height="18"
                                    viewBox="0 0 455 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M3.5 14.5C108.833 7.16667 319.5 -3.3 452.5 6.5M5 16.5C110.333 9.16667 321 -1.3 454 8.5"
                                        stroke="#26A4FF"
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                        opacity="0.8"
                                    />
                                </svg>
                            </span>
                        </h1>
                    </div>

                    <p className="mt-8 font-epilogue text-xl leading-[1.6] text-grey">
                        Great platform for the job seeker that searching for new career heights and passionate about startups.
                    </p>

                    {/* Search Bar */}
                    <div className="shadow-search mt-10 flex h-auto flex-col rounded-none bg-white p-4 md:h-[89px] md:flex-row md:items-center">
                        {/* Keyword Input */}
                        <div className="flex flex-1 items-center gap-3 border-b border-[#D6DDEB] px-4 py-3 md:border-b-0 md:border-r">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#202430" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M21 21L16.65 16.65" stroke="#202430" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <input
                                type="text"
                                placeholder="Job title or keyword"
                                className="w-full font-epilogue text-base text-navy outline-none placeholder:text-[#A8ADB7]"
                            />
                        </div>

                        {/* Location Input */}
                        <div className="flex flex-1 items-center gap-3 px-4 py-3">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#202430" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#202430" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <input
                                type="text"
                                placeholder="Florence, Italy"
                                className="w-full font-epilogue text-base text-navy outline-none placeholder:text-[#A8ADB7]"
                            />
                        </div>

                        {/* Search Button */}
                        <button className="h-[50px] w-full bg-primary px-8 font-epilogue text-base font-bold text-white transition-opacity hover:opacity-90 md:w-auto cursor-pointer">
                            Search my job
                        </button>
                    </div>

                    <p className="mt-4 font-epilogue text-base text-navy">
                        Popular : <span className="font-medium text-grey">UI Designer, UX Researcher, Android, Admin</span>
                    </p>
                </div>

                {/* Right Content - Hero Image */}
                <div className="relative z-20 w-full lg:w-[540px]">
                    <Image
                        src="/image.png"
                        alt="Hero Man"
                        width={540}
                        height={600}
                        className="h-auto w-full object-contain"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}



import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const JOB_DATA = [
    {
        id: 1,
        title: 'Social Media Assistant',
        company: 'Nomad',
        location: 'Paris, France',
        logo: (
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_12304_2979)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8 17.4941V45.939L32.4321 60.6287L32.9992 59.7155L32.4321 32.1088L8.84006 17.511L8 17.4941Z" fill="#449B82" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M56.6001 17.3604V46.206L32.4323 60.6287V32.1086L55.7149 17.382L56.6001 17.3604Z" fill="#9BDB9C" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M32.3 3.2041L56.6 17.3598L32.4321 32.584L8 17.4934L32.3 3.2041Z" fill="#56CDAD" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M44.5054 14.5488L36.2866 19.4135V29.2324L28.052 24.2878L20.1338 28.9748V49.4975L28.3525 44.4009V33.354L37.1307 38.9576L44.5054 34.3845V14.5488Z" fill="white" />
                </g>
                <defs>
                    <clipPath id="clip0_12304_2979">
                        <rect width="48.6" height="57.6" fill="white" transform="translate(8 3.2002)" />
                    </clipPath>
                </defs>
            </svg>
        ),
        tags: [
            { label: 'Full-Time', type: 'filled', color: '#56CDAD', bg: 'rgba(86, 205, 173, 0.1)' },
            { label: 'Marketing', type: 'outline', color: '#FFB836', borderColor: '#FFB836' },
            { label: 'Design', type: 'outline', color: '#4640DE', borderColor: '#4640DE' }
        ]
    },
    {
        id: 2,
        title: 'Brand Designer',
        company: 'Dropbox',
        location: 'San Francisco, USA',
        logo: (
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_12304_3040)">
                    <path d="M19.2002 10.0654L6.40027 18.3287L19.2002 26.4705L32.0002 18.3287L19.2002 10.0654ZM44.8001 10.0654L32.0002 18.3287L44.8001 26.4705L57.6001 18.3287L44.8001 10.0654ZM6.40027 34.7338L19.2002 42.9971L32.0002 34.7338L19.2002 26.4705L6.40027 34.7338ZM44.8001 26.4705L32.0002 34.7338L44.8001 42.9971L57.6001 34.7338L44.8001 26.4705ZM19.2002 45.6706L32.0002 53.9339L44.8001 45.6706L32.0002 37.5288L19.2002 45.6706Z" fill="#0062FF" />
                </g>
                <defs>
                    <clipPath id="clip0_12304_3040">
                        <rect width="51.2" height="48" fill="white" transform="translate(6.40002 8)" />
                    </clipPath>
                </defs>
            </svg>
        ),
        tags: [
            { label: 'Full-Time', type: 'filled', color: '#56CDAD', bg: 'rgba(86, 205, 173, 0.1)' },
            { label: 'Marketing', type: 'outline', color: '#FFB836', borderColor: '#FFB836' },
            { label: 'Design', type: 'outline', color: '#4640DE', borderColor: '#4640DE' }
        ]
    },
    {
        id: 3,
        title: 'Interactive Developer',
        company: 'Terraform',
        location: 'Hamburg, Germany',
        logo: (
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_12304_3081)">
                    <path d="M25.6874 15.4619L39.239 23.3193V38.9709L25.6874 31.1134V15.4619Z" fill="#21D4EF" />
                    <path d="M41.6456 23.3193L55.1973 15.4619V31.1134L41.6456 38.9709V23.3193Z" fill="#21D4EF" />
                    <path d="M9.60278 6.40039L23.1545 14.2578V29.9093L9.60278 22.0519V6.40039Z" fill="#21D4EF" />
                    <path d="M25.6874 34.0918L39.239 41.8859V57.6008L25.6874 49.7433V34.0918Z" fill="#21D4EF" />
                </g>
                <defs>
                    <clipPath id="clip0_12304_3081">
                        <rect width="45.6" height="51.2" fill="white" transform="translate(9.59998 6.40039)" />
                    </clipPath>
                </defs>
            </svg>
        ),
        tags: [
            { label: 'Full-Time', type: 'filled', color: '#56CDAD', bg: 'rgba(86, 205, 173, 0.1)' },
            { label: 'Marketing', type: 'outline', color: '#FFB836', borderColor: '#FFB836' },
            { label: 'Design', type: 'outline', color: '#4640DE', borderColor: '#4640DE' }
        ]
    },
    {
        id: 4,
        title: 'HR Manager',
        company: 'Packer',
        location: 'Lucern, Switzerland',
        logo: (
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_12304_3130)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M15.2 52.9211L32.393 57.6008L32.4132 18.9141L15.2201 14.2344L15.2 52.9211Z" fill="#FF6550" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M43.6703 11.7252L24.1089 6.40039V13.4455L35.4265 16.5278L35.4164 43.3361L43.6602 45.5786C46.4921 46.3466 48.7899 44.2065 48.7999 40.7965L48.81 19.313C48.7999 15.8929 46.5022 12.5034 43.6703 11.7252Z" fill="#FF6550" />
                </g>
                <defs>
                    <clipPath id="clip0_12304_3130">
                        <rect width="33.6" height="51.2" fill="white" transform="translate(15.2 6.40039)" />
                    </clipPath>
                </defs>
            </svg>
        ),
        tags: [
            { label: 'Full-Time', type: 'filled', color: '#56CDAD', bg: 'rgba(86, 205, 173, 0.1)' },
            { label: 'Marketing', type: 'outline', color: '#FFB836', borderColor: '#FFB836' },
            { label: 'Design', type: 'outline', color: '#4640DE', borderColor: '#4640DE' }
        ]
    },
    {
        id: 5,
        title: 'Social Media Assistant',
        company: 'Netlify',
        location: 'Paris, France',
        logo: (
            <div className="relative w-12 h-12">
                 <Image src="/image copy.png" alt="Netlify" fill className="object-contain" />
            </div>
        ),
        tags: [
            { label: 'Full-Time', type: 'filled', color: '#56CDAD', bg: 'rgba(86, 205, 173, 0.1)' },
            { label: 'Marketing', type: 'outline', color: '#FFB836', borderColor: '#FFB836' },
            { label: 'Design', type: 'outline', color: '#4640DE', borderColor: '#4640DE' }
        ]
    },
    {
        id: 6,
        title: 'Brand Designer',
        company: 'Maze',
        location: 'San Francisco, USA',
        logo: (
            <div className="relative w-12 h-12">
                 <Image src="/image copy 2.png" alt="Maze" fill className="object-contain" />
            </div>
        ),
        tags: [
            { label: 'Full-Time', type: 'filled', color: '#56CDAD', bg: 'rgba(86, 205, 173, 0.1)' },
            { label: 'Marketing', type: 'outline', color: '#FFB836', borderColor: '#FFB836' },
            { label: 'Design', type: 'outline', color: '#4640DE', borderColor: '#4640DE' }
        ]
    },
    {
        id: 7,
        title: 'Interactive Developer',
        company: 'Udacity',
        location: 'Hamburg, Germany',
        logo: (
            <div className="relative w-12 h-12">
                 <Image src="/image copy 3.png" alt="Udacity" fill className="object-contain" />
            </div>
        ),
        tags: [
            { label: 'Full-Time', type: 'filled', color: '#56CDAD', bg: 'rgba(86, 205, 173, 0.1)' },
            { label: 'Marketing', type: 'outline', color: '#FFB836', borderColor: '#FFB836' },
            { label: 'Design', type: 'outline', color: '#4640DE', borderColor: '#4640DE' }
        ]
    },
    {
        id: 8,
        title: 'HR Manager',
        company: 'Webflow',
        location: 'Lucern, Switzerland',
        logo: (
            <div className="relative w-12 h-12">
                 <Image src="/image copy 4.png" alt="Webflow" fill className="object-contain" />
            </div>
        ),
        tags: [
            { label: 'Full-Time', type: 'filled', color: '#56CDAD', bg: 'rgba(86, 205, 173, 0.1)' },
            { label: 'Marketing', type: 'outline', color: '#FFB836', borderColor: '#FFB836' },
            { label: 'Design', type: 'outline', color: '#4640DE', borderColor: '#4640DE' }

        ]
    }
];

const JobCard = ({ job }: { job: any }) => (
    <Link 
        href={`/jobs/${job.id}`}
        className="w-full bg-white flex flex-col md:flex-row items-start md:items-center gap-6 px-[40px] py-[24px] transition-transform hover:-translate-y-1 hover:shadow-lg hover:border-[#4640DE] border border-transparent duration-300 group cursor-pointer block"
    >
        <div className="w-16 h-16 flex-shrink-0 relative flex items-center justify-center">
            {job.logo}
        </div>

        <div className="flex-1 flex flex-col items-start justify-center gap-[8px]">
            <h3 className="font-epilogue font-semibold text-[20px] leading-[1.2] text-[#25324B] group-hover:text-[#4640DE] transition-colors">
                {job.title}
            </h3>
            <div className="flex items-center gap-2 text-[#515B6F]">
                <span className="font-epilogue font-normal text-[16px] leading-[1.6]">
                    {job.company}
                </span>
                <span className="w-1 h-1 rounded-full bg-[#515B6F]"></span>
                <span className="font-epilogue font-normal text-[16px] leading-[1.6]">
                    {job.location}
                </span>
            </div>

            <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
                {job.tags.map((tag: any, index: number) => (
                    <div
                        key={index}
                        className={`flex items-center justify-center px-4 py-1 rounded-full h-[34px] ${tag.type === 'outline' ? 'border' : ''}`}
                        style={{
                            backgroundColor: tag.bg || 'transparent',
                            borderColor: tag.borderColor || 'transparent'
                        }}
                    >
                        <span
                            className="font-epilogue font-semibold text-[14px] leading-[1.6]"
                            style={{ color: tag.color }}
                        >
                            {tag.label}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    </Link>
);

const LatestJobs = () => {
    return (
        <section className="relative w-full bg-white py-16 md:py-[72px] overflow-hidden">
            {/* Background Layer with clipPath */}
            <div 
                className="absolute inset-0 bg-[#F8F8FD]"
                style={{
                    clipPath: 'polygon(120px 0, 100% 0, 100% 100%, 0 100%, 0 120px)'
                }}
            />

            {/* Background Patterns */}
            <div className="absolute top-[83px] left-[780px] w-[860px] h-[794px] pointer-events-none">
                <div
                    className="absolute w-[192.2px] h-[416.47px] left-[106.44px] top-[-298.25px] bg-[#F8F8FD] opacity-60 border-[4px] border-[#CCCCF5]"
                    style={{ transform: 'rotate(64deg)' }}
                />
                <div
                    className="absolute w-[319.78px] h-[778.51px] left-[-17.95px] top-[220px] bg-[#F8F8FD] border-[4px] border-[#CCCCF5]"
                    style={{ transform: 'rotate(64deg)' }}
                />
                <div
                    className="absolute w-[283.38px] h-[716.25px] left-[-261px] top-[617px] bg-[#F8F8FD] border-[4px] border-[#CCCCF5]"
                    style={{ transform: 'rotate(64deg)' }}
                />
            </div>

            <div className="relative max-w-[1192px] mx-auto px-4 md:px-6 lg:px-0 z-10">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-0 mb-12">
                    <h2 className="font-clash font-semibold text-3xl md:text-4xl lg:text-[48px] leading-[1.1] text-[#25324B]">
                        Latest <span className="text-[#26A4FF]">jobs open</span>
                    </h2>

                    <Link href="/find-jobs" className="flex items-center gap-4 group">
                        <span className="font-epilogue font-semibold text-[16px] leading-[1.6] text-[#4640DE]">
                            Show all jobs
                        </span>
                        <div className="relative w-6 h-6">
                            {/* Arrow Right Icon */}
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12H19" stroke="#4640DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 5L19 12L12 19" stroke="#4640DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </Link>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-[32px]">
                    {JOB_DATA.map((job) => (
                        <JobCard key={job.id} job={job} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LatestJobs;

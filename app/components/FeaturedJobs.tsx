import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Use available public images as stand-ins for company logos
const LOGOS = {
  f1: '/f1.jpg',
  f2: '/f2.jpg',
  f3: '/f3.jpg',
  f4: '/f4.jpg',
  f5: '/f5.jpg',
  f6: '/f6.jpg',
  f7: '/f7.jpg',
  f8: '/f8.jpg',
};

const JOB_DATA = [
  {
    id: 1,
    title: 'Email Marketing',
    company: 'Revolut',
    location: 'Madrid, Spain',
    description: 'Revolut is looking for Email Marketing to help team ma ...',
    logo: LOGOS.f1,
    tags: [
      { label: 'Marketing', color: '#FFB836', bg: 'rgba(235, 133, 51, 0.1)' },
      { label: 'Design', color: '#56CDAD', bg: 'rgba(86, 205, 173, 0.1)' }
    ]
  },
  {
    id: 2,
    title: 'Brand Designer',
    company: 'Dropbox',
    location: 'San Francisco, US',
    description: 'Dropbox is looking for Brand Designer to help the team d ...',
    logo: LOGOS.f2,
    tags: [
      { label: 'Design', color: '#56CDAD', bg: 'rgba(86, 205, 173, 0.1)' },
      { label: 'Business', color: '#4640DE', bg: 'rgba(70, 64, 222, 0.1)' }
    ]
  },
  {
    id: 3,
    title: 'Email Marketing',
    company: 'Revolut',
    location: 'Madrid, Spain',
    description: 'Revolut is looking for Email Marketing to help team ma ...',
    logo: LOGOS.f3,
    tags: [
      { label: 'Marketing', color: '#FFB836', bg: 'rgba(235, 133, 51, 0.1)' },
      { label: 'Design', color: '#56CDAD', bg: 'rgba(86, 205, 173, 0.1)' }
    ]
  },
  {
    id: 4,
    title: 'Visual Designer',
    company: 'Twitter',
    location: 'Paris, France',
    description: 'Twitter is looking for Visual Designer to help team ma ...',
    logo: LOGOS.f4,
    tags: [
      { label: 'Design', color: '#56CDAD', bg: 'rgba(86, 205, 173, 0.1)' }
    ]
  },
   {
    id: 5,
    title: 'Email Marketing',
    company: 'Revolut',
    location: 'Madrid, Spain',
    description: 'Revolut is looking for Email Marketing to help team ma ...',
    logo: LOGOS.f5,
    tags: [
      { label: 'Marketing', color: '#FFB836', bg: 'rgba(235, 133, 51, 0.1)' },
      { label: 'Design', color: '#56CDAD', bg: 'rgba(86, 205, 173, 0.1)' }
    ]
  },
  {
    id: 6,
    title: 'Brand Designer',
    company: 'Dropbox',
    location: 'San Francisco, US',
    description: 'Dropbox is looking for Brand Designer to help the team d ...',
    logo: LOGOS.f6,
    tags: [
      { label: 'Design', color: '#56CDAD', bg: 'rgba(86, 205, 173, 0.1)' },
      { label: 'Business', color: '#4640DE', bg: 'rgba(70, 64, 222, 0.1)' }
    ]
  },
  {
    id: 7,
    title: 'Email Marketing',
    company: 'Revolut',
    location: 'Madrid, Spain',
    description: 'Revolut is looking for Email Marketing to help team ma ...',
    logo: LOGOS.f7,
    tags: [
      { label: 'Marketing', color: '#FFB836', bg: 'rgba(235, 133, 51, 0.1)' },
      { label: 'Design', color: '#56CDAD', bg: 'rgba(86, 205, 173, 0.1)' }
    ]
  },
  {
    id: 8,
    title: 'Visual Designer',
    company: 'Twitter',
    location: 'Paris, France',
    description: 'Twitter is looking for Visual Designer to help team ma ...',
    logo: LOGOS.f8,
    tags: [
      { label: 'Design', color: '#56CDAD', bg: 'rgba(86, 205, 173, 0.1)' }
    ]
  },
];


const JobCard = ({ job, isMobile }: { job: any, isMobile?: boolean }) => (
    <Link 
        href={`/jobs/${job.id}`}
        className={`${
            isMobile 
            ? "flex-shrink-0 w-[85%] sm:w-[300px] snap-center mr-4" 
            : "w-full"
        } h-auto min-h-[283px] bg-white border border-[#D6DDEB] p-6 flex flex-col items-start gap-4 hover:shadow-lg transition-shadow cursor-pointer group block`}
    >
        {/* Card Header: Logo + Badge */}
        <div className="w-full flex justify-between items-start mb-2">
            <div className="w-12 h-12 relative">
                <Image 
                    src={job.logo} 
                    alt={`${job.company} logo`} 
                    fill
                    className="object-contain"
                />
            </div>
            <div className="flex items-center justify-center px-3 py-1 border border-[#4640DE] h-[34px]">
                <span className="font-epilogue font-normal text-[16px] leading-[1.6] text-[#4640DE] text-center">
                    Full Time
                </span>
            </div>
        </div>

        {/* Job Title */}
        <h3 className="font-epilogue font-semibold text-[18px] leading-[1.6] text-[#25324B] group-hover:text-[#4640DE] transition-colors">
            {job.title}
        </h3>

        {/* Meta Info: Company + Location */}
        <div className="flex items-center gap-2 text-[#515B6F]">
            <span className="font-epilogue font-normal text-[16px] leading-[1.6]">
                {job.company}
            </span>
            <span className="w-1 h-1 rounded-full bg-[#515B6F] opacity-30"></span>
            <span className="font-epilogue font-normal text-[16px] leading-[1.6] text-[#7C8493]">
                {job.location}
            </span>
        </div>

        {/* Description */}
        <p className="font-inter font-normal text-[16px] leading-[1.6] text-[#7C8493] line-clamp-2">
            {job.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-auto pt-4">
            {job.tags.map((tag: any, index: number) => (
                <div 
                    key={index}
                    className="flex items-center justify-center px-4 py-1 rounded-full h-[30px]"
                    style={{ backgroundColor: tag.bg }}
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
    </Link>
);

const FeaturedJobs = () => {
    return (
        <section className="w-full bg-white py-12 md:py-16 lg:py-[72px]">
            <div className="max-w-[1192px] mx-auto px-4 md:px-6 lg:px-0">
                
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-0 mb-8 md:mb-12">
                     <h2 className="font-clash font-semibold text-3xl md:text-4xl lg:text-[48px] leading-[1.1] text-[#25324B]">
                        Featured <span className="text-[#26A4FF]">jobs</span>
                    </h2>
                    
                    <Link href="/find-jobs" className="flex items-center gap-4 group">
                        <span className="font-epilogue font-semibold text-[16px] leading-[1.6] text-[#4640DE]">
                            Show all jobs
                        </span>
                        <div className="relative w-6 h-6">
                             {/* Arrow Right Icon */}
                             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12H19" stroke="#4640DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M12 5L19 12L12 19" stroke="#4640DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                             </svg>
                        </div>
                    </Link>
                </div>

                {/* Mobile View: Horizontal Scroll */}
                <div className="flex md:hidden overflow-x-auto snap-x snap-mandatory pb-6 -mx-4 px-4 scrollbar-hide">
                    {JOB_DATA.map((job) => (
                        <JobCard key={job.id} job={job} isMobile={true} />
                    ))}
                </div>

                {/* Tablet/Desktop View: Grid */}
                <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {JOB_DATA.map((job) => (
                        <JobCard key={job.id} job={job} isMobile={false} />
                    ))}
                </div>

            </div>
        </section>
    );
};


export default FeaturedJobs;

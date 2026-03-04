"use client";

import React, { useState, useMemo } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { useJobs } from '../context/JobContext';


export default function FindJobsPage() {
    const { jobs: JOB_DATA } = useJobs();

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedLocation, setSelectedLocation] = useState('All');

    // Extract unique categories and locations
    const categories = ['All', ...Array.from(new Set(JOB_DATA.map(job => job.category)))];
    const locations = ['All', ...Array.from(new Set(JOB_DATA.map(job => job.location)))];

    // Filter jobs
    const filteredJobs = useMemo(() => {
        return JOB_DATA.filter((job) => {
            const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                                  job.company.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = selectedCategory === 'All' || job.category === selectedCategory;
            const matchesLocation = selectedLocation === 'All' || job.location === selectedLocation;

            return matchesSearch && matchesCategory && matchesLocation;
        });
    }, [searchTerm, selectedCategory, selectedLocation]);

    return (
        <div className="min-h-screen bg-[#F8F8FD] font-epilogue flex flex-col">
            <Header />

            <main className="flex-grow pt-10 pb-20">
                <div className="max-w-[1192px] mx-auto px-4 md:px-6 lg:px-0">
                    
                    {/* Header Title */}
                    <div className="text-center mb-12">
                        <h1 className="font-clash font-semibold text-4xl md:text-5xl text-[#25324B] mb-4">
                            Find your <span className="text-[#26A4FF]">dream job</span>
                        </h1>
                        <p className="text-[#515B6F] text-lg max-w-2xl mx-auto">
                            Browse through thousands of job openings and find the perfect match for your skills and career goals.
                        </p>
                    </div>

                    {/* Search & Filter Section */}
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-10 flex flex-col md:flex-row gap-4 items-center">
                        
                        {/* Search Input */}
                        <div className="flex-1 w-full relative">
                            <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            <input 
                                type="text"
                                placeholder="Job title or company..."
                                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-[#4640DE] transition-colors"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>

                        {/* Category Filter */}
                        <div className="w-full md:w-48">
                            <select 
                                className="w-full p-3 border border-gray-200 rounded bg-white focus:outline-none focus:border-[#4640DE] cursor-pointer appearance-none text-gray-700"
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                            >
                                {categories.map(cat => (
                                    <option key={cat} value={cat}>{cat} Category</option>
                                ))}
                            </select>
                        </div>

                        {/* Location Filter */}
                        <div className="w-full md:w-48">
                            <select 
                                className="w-full p-3 border border-gray-200 rounded bg-white focus:outline-none focus:border-[#4640DE] cursor-pointer appearance-none text-gray-700"
                                value={selectedLocation}
                                onChange={(e) => setSelectedLocation(e.target.value)}
                            >
                                {locations.map(loc => (
                                    <option key={loc} value={loc}>{loc === 'All' ? 'All Locations' : loc}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Results count */}
                    <div className="mb-6 text-[#515B6F] font-medium">
                        Showing {filteredJobs.length} {filteredJobs.length === 1 ? 'job' : 'jobs'}
                    </div>

                    {/* Job Listings Grid */}
                    {filteredJobs.length > 0 ? (
                        <div className="grid grid-cols-1 gap-4">
                            {filteredJobs.map((job) => (
                                <Link 
                                    href={`/jobs/${job.id}`}
                                    key={job.id} 
                                    className="w-full bg-white flex flex-col md:flex-row items-start md:items-center gap-6 px-6 py-6 transition-transform hover:-translate-y-1 hover:shadow-md hover:border-[#4640DE] border border-transparent duration-300 group cursor-pointer block"
                                >
                                    <div className="w-16 h-16 flex-shrink-0 relative flex items-center justify-center border border-gray-100 rounded p-2">
                                        <div className="relative w-12 h-12">
                                            <Image src={job.logo} alt={job.company} fill className="object-contain" />
                                        </div>
                                    </div>

                                    <div className="flex-1 flex flex-col items-start justify-center gap-2">
                                        <h3 className="font-epilogue font-semibold text-[20px] leading-[1.2] text-[#25324B] group-hover:text-[#4640DE] transition-colors">
                                            {job.title}
                                        </h3>
                                        <div className="flex items-center gap-2 text-[#515B6F]">
                                            <span className="font-epilogue font-normal text-[16px]">
                                                {job.company}
                                            </span>
                                            <span className="w-1 h-1 rounded-full bg-[#515B6F]"></span>
                                            <span className="font-epilogue font-normal text-[16px]">
                                                {job.location}
                                            </span>
                                        </div>

                                        <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
                                            {job.tags.map((tag: any, index: number) => (
                                                <div
                                                    key={index}
                                                    className={`flex items-center justify-center px-3 py-1 rounded-full text-[14px] font-semibold ${tag.type === 'outline' ? 'border' : ''}`}
                                                    style={{
                                                        backgroundColor: tag.bg || 'transparent',
                                                        borderColor: tag.borderColor || 'transparent',
                                                        color: tag.color
                                                    }}
                                                >
                                                    {tag.label}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="hidden md:flex flex-col items-end justify-center self-stretch">
                                        <div className="bg-[#4640DE] text-white px-6 py-2.5 font-bold group-hover:bg-[#3b36b5] transition-colors mt-auto text-center">
                                            Apply
                                        </div>
                                    </div>
                                    <div className="flex md:hidden w-full mt-4">
                                        <div className="w-full bg-[#4640DE] text-white px-6 py-2.5 font-bold group-hover:bg-[#3b36b5] transition-colors text-center">
                                            Apply Now
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-white rounded-lg border border-gray-100">
                            <h3 className="text-2xl font-bold text-[#25324B] mb-2">No jobs found</h3>
                            <p className="text-[#515B6F]">Try adjusting your search or filters to find what you're looking for.</p>
                            <button 
                                onClick={() => {
                                    setSearchTerm('');
                                    setSelectedCategory('All');
                                    setSelectedLocation('All');
                                }}
                                className="mt-6 text-[#4640DE] font-semibold hover:underline"
                            >
                                Clear all filters
                            </button>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}
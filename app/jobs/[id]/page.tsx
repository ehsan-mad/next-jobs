"use client";

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';
import { useJobs } from '../../context/JobContext';

export default function JobDetailPage() {
    const { getJob } = useJobs();
    const params = useParams();
    const router = useRouter();
    const id = params.id as string;

    const job = getJob(id);

    if (!job) {
        return (
            <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-grow flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold mb-4">Job not found</h1>
                        <button 
                            onClick={() => router.push('/find-jobs')}
                            className="bg-[#4640DE] text-white px-6 py-2 rounded"
                        >
                            Browse Jobs
                        </button>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    // Form State
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        resume: '',
        coverNote: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send data to an API
        console.log('Application submitted:', formData);
        setIsSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-white font-epilogue flex flex-col">
            <Header />

            {/* Page Header Area */}
            <div className="bg-[#F8F8FD] py-12 md:py-20 border-b border-gray-200 mt-2">
                <div className="max-w-[1192px] mx-auto px-4 md:px-6 lg:px-0">
                    <button 
                        onClick={() => router.back()} 
                        className="flex items-center text-[#515B6F] hover:text-[#4640DE] mb-6 transition-colors font-medium"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                        Back
                    </button>

                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6 bg-white p-6 md:p-8 border border-gray-100 shadow-sm relative overflow-hidden">
                        <div className="w-20 h-20 relative flex-shrink-0 bg-white border border-gray-100 p-2 flex items-center justify-center">
                             <div className="relative w-full h-full">
                                <Image src={job.logo} alt={job.company} fill className="object-contain" />
                            </div>
                        </div>

                        <div className="flex-1">
                            <h1 className="font-clash font-semibold text-3xl text-[#25324B] mb-2">{job.title}</h1>
                            <div className="flex flex-wrap items-center gap-3 text-[#515B6F] text-base">
                                <span className="font-medium text-[#4640DE]">{job.company}</span>
                                <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                                <span>{job.location}</span>
                                <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                                <span className="px-3 py-1 bg-green-50 text-green-600 text-sm font-semibold rounded-full">
                                    {job.type}
                                </span>
                            </div>
                        </div>
                        
                        <div className="mt-4 md:mt-0 md:ml-auto w-full md:w-auto">
                            <button 
                                onClick={() => document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' })}
                                className="w-full md:w-auto bg-[#4640DE] text-white font-bold px-8 py-4 hover:bg-[#3b36b5] transition-colors"
                            >
                                Apply Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <main className="flex-grow py-12 md:py-16">
                <div className="max-w-[1192px] mx-auto px-4 md:px-6 lg:px-0 flex flex-col lg:flex-row gap-12 lg:gap-16 relative">
                    
                    {/* Left Column: Job Description */}
                    <div className="flex-1">
                        <section className="mb-10">
                            <h2 className="font-clash font-semibold text-2xl text-[#25324B] mb-4">Description</h2>
                            <p className="text-[#515B6F] text-[16px] leading-[1.8]">
                                {job.description}
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="font-clash font-semibold text-2xl text-[#25324B] mb-4">Responsibilities</h2>
                            <ul className="space-y-3">
                                {(job.responsibilities || []).map((req, i) => (
                                    <li key={i} className="flex items-start text-[#515B6F] text-[16px] leading-[1.8]">
                                        <svg className="w-6 h-6 text-[#56CDAD] mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                        <span>{req}</span>
                                    </li>
                                ))}
                                {(!job.responsibilities || job.responsibilities.length === 0) && (
                                    <p className="text-[#515B6F] text-[16px] leading-[1.8] italic">No specific responsibilities listed for this role.</p>
                                )}
                            </ul>
                        </section>

                        <section>
                            <h2 className="font-clash font-semibold text-2xl text-[#25324B] mb-4">Requirements</h2>
                            <ul className="space-y-3">
                                {(job.requirements || []).map((req, i) => (
                                    <li key={i} className="flex items-start text-[#515B6F] text-[16px] leading-[1.8]">
                                        <span className="w-2 h-2 rounded-full bg-[#4640DE] mt-2 mr-4 flex-shrink-0"></span>
                                        <span>{req}</span>
                                    </li>
                                ))}
                                {(!job.requirements || job.requirements.length === 0) && (
                                    <p className="text-[#515B6F] text-[16px] leading-[1.8] italic">No specific requirements listed for this role.</p>
                                )}
                            </ul>
                        </section>
                    </div>

                    {/* Right Column: Apply Form */}
                    <div className="w-full lg:w-[450px]" id="apply-form">
                        <div className="bg-white border border-gray-200 p-8 shadow-sm">
                            <h3 className="font-clash font-semibold text-2xl text-[#25324B] mb-6">Apply for this job</h3>
                            
                            {isSubmitted ? (
                                <div className="bg-green-50 border border-green-200 text-green-700 p-6 text-center">
                                    <svg className="w-12 h-12 mx-auto mb-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    <h4 className="font-bold text-lg mb-2">Application Submitted!</h4>
                                    <p className="text-sm">Thank you for applying. We will get back to you soon.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-semibold text-[#25324B] mb-2">Full Name <span className="text-red-500">*</span></label>
                                        <input 
                                            type="text" 
                                            id="name" 
                                            name="name" 
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full p-3 border border-gray-300 focus:outline-none focus:border-[#4640DE] transition-colors bg-[#F8F8FD]"
                                            placeholder="Enter your full name" 
                                        />
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-[#25324B] mb-2">Email Address <span className="text-red-500">*</span></label>
                                        <input 
                                            type="email" 
                                            id="email" 
                                            name="email" 
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full p-3 border border-gray-300 focus:outline-none focus:border-[#4640DE] transition-colors bg-[#F8F8FD]"
                                            placeholder="Enter your email" 
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="resume" className="block text-sm font-semibold text-[#25324B] mb-2">Portfolio / Resume URL <span className="text-red-500">*</span></label>
                                        <input 
                                            type="url" 
                                            id="resume" 
                                            name="resume" 
                                            required
                                            value={formData.resume}
                                            onChange={handleChange}
                                            className="w-full p-3 border border-gray-300 focus:outline-none focus:border-[#4640DE] transition-colors bg-[#F8F8FD]"
                                            placeholder="Link to your portfolio or resume" 
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="coverNote" className="block text-sm font-semibold text-[#25324B] mb-2">Cover Note</label>
                                        <textarea 
                                            id="coverNote" 
                                            name="coverNote" 
                                            rows={4}
                                            value={formData.coverNote}
                                            onChange={handleChange}
                                            className="w-full p-3 border border-gray-300 focus:outline-none focus:border-[#4640DE] transition-colors bg-[#F8F8FD] resize-none"
                                            placeholder="Tell us why you're a great fit for this role..." 
                                        />
                                    </div>

                                    <button 
                                        type="submit"
                                        className="w-full bg-[#4640DE] text-white font-bold py-4 hover:bg-[#3b36b5] transition-colors mt-2"
                                    >
                                        Submit Application
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                    
                </div>
            </main>

            <Footer />
        </div>
    );
}
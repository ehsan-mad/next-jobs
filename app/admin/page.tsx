"use client";

import React, { useState } from 'react';
import { useJobs, Job } from '../context/JobContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function AdminPage() {
    const { jobs, addJob, deleteJob } = useJobs();
    
    // Form State
    const [title, setTitle] = useState('');
    const [company, setCompany] = useState('');
    const [location, setLocation] = useState('');
    const [category, setCategory] = useState('Engineering');
    const [type, setType] = useState('Full-Time');
    const [description, setDescription] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        const newJob: Job = {
            id: Date.now(), // Simple ID generation
            title,
            company,
            location,
            category,
            type,
            logo: '/image copy.png', // Default logo for now
            description,
            tags: [
                { label: type, type: 'filled', color: '#56CDAD', bg: 'rgba(86, 205, 173, 0.1)' },
                { label: category, type: 'outline', color: '#4640DE', borderColor: '#4640DE' }
            ]
        };

        addJob(newJob);

        // Reset Form
        setTitle('');
        setCompany('');
        setLocation('');
        setDescription('');
        alert('Job added successfully!');
    };

    return (
        <div className="min-h-screen bg-[#F8F8FD] font-epilogue flex flex-col">
            <Header />
            
            <main className="flex-grow py-10 px-4 md:px-16 lg:px-32">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-center mb-8">
                        <h1 className="text-3xl font-bold font-clash text-[#25324B]">Admin Dashboard</h1>
                        <Link href="/find-jobs" className="text-[#4640DE] font-semibold hover:underline">
                            View Live Site
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        
                        {/* Add Job Form */}
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 h-fit">
                            <h2 className="text-xl font-bold mb-6 text-[#25324B]">Add New Job</h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-semibold text-[#515B6F] mb-1">Job Title</label>
                                    <input 
                                        required
                                        type="text" 
                                        className="w-full p-2 border border-gray-200 rounded focus:border-[#4640DE] focus:outline-none"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        placeholder="e.g. Senior React Developer"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-[#515B6F] mb-1">Company</label>
                                    <input 
                                        required
                                        type="text" 
                                        className="w-full p-2 border border-gray-200 rounded focus:border-[#4640DE] focus:outline-none"
                                        value={company}
                                        onChange={(e) => setCompany(e.target.value)}
                                        placeholder="e.g. Acme Corp"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-[#515B6F] mb-1">Location</label>
                                    <input 
                                        required
                                        type="text" 
                                        className="w-full p-2 border border-gray-200 rounded focus:border-[#4640DE] focus:outline-none"
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
                                        placeholder="e.g. Remote, NY"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-[#515B6F] mb-1">Category</label>
                                        <select 
                                            className="w-full p-2 border border-gray-200 rounded focus:border-[#4640DE] focus:outline-none"
                                            value={category}
                                            onChange={(e) => setCategory(e.target.value)}
                                        >
                                            <option value="Engineering">Engineering</option>
                                            <option value="Design">Design</option>
                                            <option value="Marketing">Marketing</option>
                                            <option value="HR">HR</option>
                                            <option value="Business">Business</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-[#515B6F] mb-1">Type</label>
                                        <select 
                                            className="w-full p-2 border border-gray-200 rounded focus:border-[#4640DE] focus:outline-none"
                                            value={type}
                                            onChange={(e) => setType(e.target.value)}
                                        >
                                            <option value="Full-Time">Full-Time</option>
                                            <option value="Part-Time">Part-Time</option>
                                            <option value="Contract">Contract</option>
                                            <option value="Freelance">Freelance</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-[#515B6F] mb-1">Description</label>
                                    <textarea 
                                        className="w-full p-2 border border-gray-200 rounded focus:border-[#4640DE] focus:outline-none min-h-[100px]"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        placeholder="Brief job description..."
                                    />
                                </div>
                                <button 
                                    type="submit" 
                                    className="w-full bg-[#4640DE] text-white font-bold py-3 rounded hover:bg-[#3b36b5] transition-colors"
                                >
                                    Add Job Listing
                                </button>
                            </form>
                        </div>

                        {/* Job List */}
                        <div className="lg:col-span-2">
                             <h2 className="text-xl font-bold mb-6 text-[#25324B]">Current Listings ({jobs.length})</h2>
                             <div className="space-y-4">
                                {jobs.map((job) => (
                                    <div key={job.id} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <h3 className="font-bold text-[#25324B] text-lg">{job.title}</h3>
                                                <span className={`text-xs px-2 py-0.5 rounded-full ${job.type === 'Full-Time' ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-orange-600'}`}>
                                                    {job.type}
                                                </span>
                                            </div>
                                            <p className="text-[#515B6F] text-sm">{job.company} • {job.location}</p>
                                        </div>
                                        <button 
                                            onClick={() => {
                                                if(confirm('Are you sure you want to delete this job?')) {
                                                    deleteJob(job.id);
                                                }
                                            }}
                                            className="text-red-500 hover:text-red-700 font-medium text-sm px-4 py-2 hover:bg-red-50 rounded transition-colors"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                ))}
                             </div>
                        </div>

                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

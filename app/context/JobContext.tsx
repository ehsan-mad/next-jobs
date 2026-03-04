"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the Job type
export interface Job {
    id: number | string;
    title: string;
    company: string;
    location: string;
    category: string;
    type: string;
    logo: string;
    tags: Array<{
        label: string;
        type: string; // 'filled' | 'outline'
        color: string;
        bg?: string;
        borderColor?: string;
    }>;
    description?: string;
    responsibilities?: string[];
    requirements?: string[];
}

// Initial Data
const INITIAL_JOBS: Job[] = [
    {
        id: 1,
        title: 'Social Media Assistant',
        company: 'Nomad',
        location: 'Paris, France',
        category: 'Marketing',
        type: 'Full-Time',
        logo: '/image copy.png',
        tags: [
            { label: 'Full-Time', type: 'filled', color: '#56CDAD', bg: 'rgba(86, 205, 173, 0.1)' },
            { label: 'Marketing', type: 'outline', color: '#FFB836', borderColor: '#FFB836' },
            { label: 'Design', type: 'outline', color: '#4640DE', borderColor: '#4640DE' }
        ],
        description: 'We are looking for a Social Media Assistant to join our team. You will be responsible for creating social media campaigns and the day-to-day management of the company’s social media properties.',
        responsibilities: [
            'Create engaging social media content',
            'Assist in the daily aspects of promoting the business campaigns',
            'Interact with followers and potential customers by communicating and answering questions through the company\'s social pages'
        ],
        requirements: [
            '1-2 years of social media management experience',
            'Excellent communication skills',
            'Creative thinker with an eye for design'
        ]
    },
    {
        id: 2,
        title: 'Brand Designer',
        company: 'Dropbox',
        location: 'San Francisco, USA',
        category: 'Design',
        type: 'Full-Time',
        logo: '/image copy 2.png',
        tags: [
            { label: 'Full-Time', type: 'filled', color: '#56CDAD', bg: 'rgba(86, 205, 173, 0.1)' },
            { label: 'Design', type: 'outline', color: '#4640DE', borderColor: '#4640DE' },
            { label: 'Business', type: 'outline', color: '#FF6550', borderColor: '#FF6550' }
        ],
        description: 'Dropbox is looking for a Brand Designer to help the team design and shape the brand identity.',
        responsibilities: [
            'Collaborate with cross-functional teams to define, design, and ship new features',
            'Create visual designs that effectively communicate product function and brand identity'
        ],
        requirements: [
            'BS/MS in Human-Computer Interaction, Interaction Design, or related',
            'Experience with Sketch, Figma, or similar tools'
        ]
    },
    {
        id: 3,
        title: 'Interactive Developer',
        company: 'Terraform',
        location: 'Hamburg, Germany',
        category: 'Engineering',
        type: 'Full-Time',
        logo: '/image copy 3.png',
        tags: [
            { label: 'Full-Time', type: 'filled', color: '#56CDAD', bg: 'rgba(86, 205, 173, 0.1)' },
            { label: 'Engineering', type: 'outline', color: '#26A4FF', borderColor: '#26A4FF' },
            { label: 'Development', type: 'outline', color: '#4640DE', borderColor: '#4640DE' }
        ],
        description: 'Terraform is seeking an Interactive Developer to join our engineering team.',
        responsibilities: [
            'Develop interactive web experiences using modern web technologies',
            'Optimize applications for maximum speed and scalability'
        ],
        requirements: [
            'Proficient in JavaScript, HTML, CSS',
            'Experience with React or Vue.js'
        ]
    },
    {
        id: 4,
        title: 'HR Manager',
        company: 'Packer',
        location: 'Lucern, Switzerland',
        category: 'HR',
        type: 'Part-Time',
        logo: '/image copy 4.png',
        tags: [
            { label: 'Part-Time', type: 'filled', color: '#FFB836', bg: 'rgba(255, 184, 54, 0.1)' },
            { label: 'HR', type: 'outline', color: '#FF6550', borderColor: '#FF6550' },
            { label: 'Management', type: 'outline', color: '#4640DE', borderColor: '#4640DE' }
        ],
        description: 'Packer is looking for an HR Manager to oversee our human resources practices.',
        responsibilities: [
            'Manage the recruitment and selection process',
            'Develop and monitor overall HR strategies, systems, tactics and procedures across the organization'
        ],
        requirements: [
            'Proven working experience as HR Manager or other HR Executive',
            'People oriented and results driven'
        ]
    },
    {
        id: 5,
        title: 'Lead Product Designer',
        company: 'Figma',
        location: 'Remote',
        category: 'Design',
        type: 'Full-Time',
        logo: '/image copy 2.png',
        tags: [
            { label: 'Full-Time', type: 'filled', color: '#56CDAD', bg: 'rgba(86, 205, 173, 0.1)' },
            { label: 'Design', type: 'outline', color: '#4640DE', borderColor: '#4640DE' },
            { label: 'Remote', type: 'outline', color: '#26A4FF', borderColor: '#26A4FF' }
        ],
        description: 'Figma is hiring a Lead Product Designer to lead design initiatives.',
        responsibilities: [
            'Lead design projects from concept to completion',
            'Mentor junior designers'
        ],
        requirements: [
            '5+ years of product design experience',
            'Strong portfolio showcasing design process and outcomes'
        ]
    },
     {
        id: 6,
        title: 'Frontend Engineer',
        company: 'Vercel',
        location: 'New York, USA',
        category: 'Engineering',
        type: 'Contract',
        logo: '/image copy 3.png',
        tags: [
            { label: 'Contract', type: 'filled', color: '#FF6550', bg: 'rgba(255, 101, 80, 0.1)' },
            { label: 'Engineering', type: 'outline', color: '#26A4FF', borderColor: '#26A4FF' },
             { label: 'Frontend', type: 'outline', color: '#4640DE', borderColor: '#4640DE' }
        ],
        description: 'Vercel is looking for a Frontend Engineer to help us build the next generation of web tools.',
        responsibilities: [
            'Build and maintain frontend components',
            'Ensure high performance and responsiveness'
        ],
        requirements: [
            'Strong understanding of JavaScript and React',
            'Experience with Next.js is a plus'
        ]
    },
];

interface JobContextType {
    jobs: Job[];
    addJob: (job: Job) => void;
    deleteJob: (id: number | string) => void;
    getJob: (id: number | string) => Job | undefined;
}

const JobContext = createContext<JobContextType | undefined>(undefined);

export function JobProvider({ children }: { children: ReactNode }) {
    const [jobs, setJobs] = useState<Job[]>(INITIAL_JOBS);

    const addJob = (job: Job) => {
        setJobs((prev) => [...prev, job]);
    };

    const deleteJob = (id: number | string) => {
        setJobs((prev) => prev.filter((job) => job.id !== id));
    };

    const getJob = (id: number | string) => {
        return jobs.find((job) => String(job.id) === String(id));
    }

    return (
        <JobContext.Provider value={{ jobs, addJob, deleteJob, getJob }}>
            {children}
        </JobContext.Provider>
    );
}

export function useJobs() {
    const context = useContext(JobContext);
    if (context === undefined) {
        throw new Error('useJobs must be used within a JobProvider');
    }
    return context;
}

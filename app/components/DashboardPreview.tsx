// exact clone of the dashboard UI shown in the png
import React from 'react';

const icons = {
  dashboard: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <polyline points="9 22 9 12 15 12 15 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  messages: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  company: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 21h18M5 21V7l8-4 8 4v14M8 21v-2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  applicants: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  jobs: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  schedule: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  settings: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  help: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="12" y1="17" x2="12.01" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  logo: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="16" fill="#4640DE"/>
      <path d="M16 8C11.5817 8 8 11.5817 8 16C8 20.4183 11.5817 24 16 24C20.4183 24 24 20.4183 24 16C24 11.5817 20.4183 8 16 8ZM16 21.3333C13.0545 21.3333 10.6667 18.9455 10.6667 16C10.6667 13.0545 13.0545 10.6667 16 10.6667C18.9455 10.6667 21.3333 13.0545 21.3333 16C21.3333 18.9455 18.9455 21.3333 16 21.3333Z" fill="white"/>
      <path d="M18.6667 13.3333L14.6667 17.3333M14.6667 13.3333L18.6667 17.3333" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
};

export default function DashboardPreview() {
  return (
    <div className="w-[1000px] h-auto bg-white rounded-lg shadow-xl overflow-hidden font-epilogue border border-gray-200">
      <div className="flex h-full min-h-[600px]">
        {/* Sidebar */}
        <div className="w-[240px] border-r border-gray-200 bg-white flex flex-col py-6">
          {/* Logo */}
          <div className="px-8 mb-8 flex items-center gap-3">
             {icons.logo}
             <span className="font-clash font-bold text-xl text-[#25324B]">QuickHire</span>
          </div>

          {/* Menu Items */}
          <div className="flex flex-col gap-1 px-4">
            <div className="flex items-center gap-3 px-4 py-3 bg-[#E9EBFD] text-[#4640DE] rounded-sm cursor-pointer">
              {icons.dashboard}
              <span className="font-medium">Dashboard</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 text-[#7C8493] hover:bg-gray-50 rounded-sm cursor-pointer justify-between group">
              <div className="flex items-center gap-3">
                {icons.messages}
                <span className="font-medium group-hover:text-[#25324B]">Messages</span>
              </div>
              <span className="bg-[#4640DE] text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">1</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 text-[#7C8493] hover:bg-gray-50 rounded-sm cursor-pointer">
              {icons.company}
              <span className="font-medium hover:text-[#25324B]">Company Profile</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 text-[#7C8493] hover:bg-gray-50 rounded-sm cursor-pointer">
              {icons.applicants}
              <span className="font-medium hover:text-[#25324B]">All Applicants</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 text-[#7C8493] hover:bg-gray-50 rounded-sm cursor-pointer">
              {icons.jobs}
              <span className="font-medium hover:text-[#25324B]">Job Listing</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 text-[#7C8493] hover:bg-gray-50 rounded-sm cursor-pointer">
              {icons.schedule}
              <span className="font-medium hover:text-[#25324B]">My Schedule</span>
            </div>
          </div>

          <div className="mt-8 px-8 mb-2 text-[#202430]/50 text-xs font-semibold tracking-wider">SETTINGS</div>
          
          <div className="flex flex-col gap-1 px-4">
             <div className="flex items-center gap-3 px-4 py-3 text-[#7C8493] hover:bg-gray-50 rounded-sm cursor-pointer">
              {icons.settings}
              <span className="font-medium hover:text-[#25324B]">Settings</span>
            </div>
             <div className="flex items-center gap-3 px-4 py-3 text-[#7C8493] hover:bg-gray-50 rounded-sm cursor-pointer">
              {icons.help}
              <span className="font-medium hover:text-[#25324B]">Help Center</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-white">
            {/* Header */}
            <div className="h-20 border-b border-gray-200 px-8 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">N</div>
                    <div className="flex flex-col">
                        <span className="text-xs text-gray-500 font-medium">Company</span>
                        <div className="flex items-center gap-2 cursor-pointer">
                            <span className="text-[#25324B] font-semibold">Nomad</span>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <svg className="text-gray-500 cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                    <button className="bg-[#4640DE] text-white px-4 py-2.5 rounded hover:bg-blue-700 transition font-bold flex items-center gap-2">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                        Post a job
                    </button>
                </div>
            </div>

            {/* Dashboard Body */}
            <div className="p-8 bg-gray-50 h-full">
                <div className="flex justify-between items-end mb-8">
                     <div>
                        <h1 className="font-clash font-semibold text-2xl text-[#25324B] mb-1">Good morning, Maria</h1>
                        <p className="text-gray-500 text-sm">Here is your job listings statistic report from July 19 - July 25.</p>
                     </div>
                     <div className="bg-white border border-gray-200 rounded px-4 py-2 text-sm font-medium text-[#25324B] flex items-center gap-2">
                        Jul 19 - Jul 25
                        <svg className="text-gray-400" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                     </div>
                </div>

                {/* Stats Cards Row */}
                <div className="grid grid-cols-3 gap-6 mb-6">
                    {/* Card 1 */}
                    <div className="bg-[#4640DE] p-6 rounded text-white flex justify-between items-center cursor-pointer hover:bg-blue-700 transition">
                        <div>
                            <div className="text-5xl font-semibold mb-1 font-clash">76</div>
                            <div className="text-blue-100 text-base leading-tight">New candidates to<br/>review</div>
                        </div>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </div>
                     {/* Card 2 */}
                    <div className="bg-[#56CDAD] p-6 rounded text-white flex justify-between items-center cursor-pointer hover:bg-green-500 transition">
                        <div>
                            <div className="text-5xl font-semibold mb-1 font-clash">3</div>
                            <div className="text-green-50 text-base leading-tight">Schedule for today</div>
                        </div>
                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </div>
                     {/* Card 3 */}
                    <div className="bg-[#26A4FF] p-6 rounded text-white flex justify-between items-center cursor-pointer hover:bg-blue-400 transition">
                        <div>
                            <div className="text-5xl font-semibold mb-1 font-clash">24</div>
                            <div className="text-blue-50 text-base leading-tight">Messages received</div>
                        </div>
                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </div>
                </div>

                {/* Charts Area */}
                <div className="grid grid-cols-3 gap-6">
                    {/* Job Statistics (Left - 2/3 width) */}
                    <div className="col-span-2 bg-white border border-gray-200 p-6 rounded">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h3 className="font-clash font-semibold text-lg text-[#25324B]">Job statistics</h3>
                                <p className="text-xs text-gray-500">Showing Jobstatistic Jul 19-25</p>
                            </div>
                            <div className="flex bg-gray-50 rounded p-1">
                                <button className="px-3 py-1 text-sm font-medium bg-white shadow-sm rounded text-[#4640DE]">Week</button>
                                <button className="px-3 py-1 text-sm font-medium text-gray-500 hover:bg-gray-200 rounded">Month</button>
                                <button className="px-3 py-1 text-sm font-medium text-gray-500 hover:bg-gray-200 rounded">Year</button>
                            </div>
                        </div>
                        
                        <div className="flex gap-6 border-b border-gray-100 pb-0 mb-6">
                            <button className="pb-3 border-b-2 border-[#4640DE] text-[#4640DE] font-medium text-sm">Overview</button>
                            <button className="pb-3 border-b-2 border-transparent text-gray-500 hover:text-gray-700 font-medium text-sm">Jobs View</button>
                            <button className="pb-3 border-b-2 border-transparent text-gray-500 hover:text-gray-700 font-medium text-sm">Jobs Applied</button>
                        </div>

                        {/* Bar Chart Visualization */}
                        <div className="flex items-end justify-between h-[200px] px-2 pt-6">
                            {/* Mon */}
                            <div className="flex flex-col items-center gap-2 group relative">
                                <div className="w-12 bg-[#F8C07F] h-[80px] rounded-t-sm"></div>
                                <div className="w-12 bg-[#7B5CFA] h-[100px] rounded-b-sm -mt-2"></div>
                                <span className="text-xs text-gray-500 font-medium mt-2">Mon</span>
                            </div>
                             {/* Tue */}
                             <div className="flex flex-col items-center gap-2 group relative">
                                <div className="w-12 bg-[#F8C07F] h-[40px] rounded-t-sm"></div>
                                <div className="w-12 bg-[#7B5CFA] h-[120px] rounded-b-sm -mt-2"></div>
                                <span className="text-xs text-gray-500 font-medium mt-2">Tue</span>
                            </div>
                             {/* Wed - Tooltip trigger */}
                             <div className="flex flex-col items-center gap-2 group relative">
                                {/* Tooltip */}
                                <div className="absolute -top-16 bg-[#202430] text-white p-2 rounded text-xs shadow-lg z-10 flex flex-col gap-1 w-24">
                                     <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-[#F8C07F] rounded-full"></div> 122
                                     </div>
                                      <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-[#7B5CFA] rounded-full"></div> 34
                                     </div>
                                     <div className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#202430] rotate-45"></div>
                                </div>
                                <div className="w-12 bg-[#F8C07F] h-[60px] rounded-t-sm"></div>
                                <div className="w-12 bg-[#7B5CFA] h-[60px] rounded-b-sm -mt-2"></div>
                                <span className="text-xs text-gray-500 font-medium mt-2">Wed</span>
                            </div>
                             {/* Thu */}
                             <div className="flex flex-col items-center gap-2 group relative">
                                <div className="w-12 bg-[#F8C07F] h-[30px] rounded-t-sm"></div>
                                <div className="w-12 bg-[#7B5CFA] h-[140px] rounded-b-sm -mt-2"></div>
                                <span className="text-xs text-gray-500 font-medium mt-2">Thu</span>
                            </div>
                             {/* Fri */}
                             <div className="flex flex-col items-center gap-2 group relative">
                                <div className="w-12 bg-[#F8C07F] h-[100px] rounded-t-sm"></div>
                                <div className="w-12 bg-[#7B5CFA] h-[60px] rounded-b-sm -mt-2"></div>
                                <span className="text-xs text-gray-500 font-medium mt-2">Fri</span>
                            </div>
                             {/* Sat */}
                             <div className="flex flex-col items-center gap-2 group relative">
                                <div className="w-12 bg-[#F8C07F] h-[40px] rounded-t-sm"></div>
                                <div className="w-12 bg-[#7B5CFA] h-[40px] rounded-b-sm -mt-2"></div>
                                <span className="text-xs text-gray-500 font-medium mt-2">Sat</span>
                            </div>
                             {/* Sun */}
                             <div className="flex flex-col items-center gap-2 group relative">
                                <div className="w-12 bg-[#F8C07F] h-[20px] rounded-t-sm"></div>
                                <div className="w-12 bg-[#7B5CFA] h-[80px] rounded-b-sm -mt-2"></div>
                                <span className="text-xs text-gray-500 font-medium mt-2">Sun</span>
                            </div>
                        </div>

                        <div className="flex justify-center gap-6 mt-6">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-[#F8C07F] rounded-sm"></div>
                                <span className="text-sm text-gray-600">Job View</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-[#7B5CFA] rounded-sm"></div>
                                <span className="text-sm text-gray-600">Job Applied</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column Cards */}
                    <div className="space-y-6">
                         {/* Job Open Card */}
                         <div className="bg-white border border-gray-200 p-6 rounded h-[140px] flex flex-col justify-center">
                            <h3 className="font-clash font-semibold text-lg text-[#25324B] mb-2">Job Open</h3>
                            <div className="flex items-center gap-3">
                                <span className="text-6xl font-semibold text-[#25324B] font-clash">12</span>
                                <span className="text-gray-500 text-lg">Jobs Opened</span>
                            </div>
                         </div>

                         {/* Applicants Summary Card */}
                         <div className="bg-white border border-gray-200 p-6 rounded h-[280px]">
                            <h3 className="font-clash font-semibold text-lg text-[#25324B] mb-4">Applicants Summary</h3>
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-5xl font-semibold text-[#25324B] font-clash">67</span>
                                <span className="text-gray-500 text-base">Applicants</span>
                            </div>
                            
                            {/* Colored Bar */}
                            <div className="flex w-full h-2 rounded-full overflow-hidden mb-6">
                                <div className="w-[45%] bg-[#7B5CFA]"></div>
                                <div className="w-[24%] bg-[#56CDAD]"></div>
                                <div className="w-[22%] bg-[#26A4FF]"></div>
                                <div className="w-[32%] bg-[#F8C07F]"></div>
                                <div className="w-[30%] bg-[#FF6550]"></div>
                            </div>

                            {/* Legend */}
                            <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-sm">
                                <div className="flex items-center gap-2 text-gray-600"><span className="w-3 h-3 bg-[#7B5CFA] rounded-sm"></span> Full Time : <span className="font-bold text-gray-800">45</span></div>
                                <div className="flex items-center gap-2 text-gray-600"><span className="w-3 h-3 bg-[#56CDAD] rounded-sm"></span> Part-Time : <span className="font-bold text-gray-800">24</span></div>
                                <div className="flex items-center gap-2 text-gray-600"><span className="w-3 h-3 bg-[#26A4FF] rounded-sm"></span> Remote : <span className="font-bold text-gray-800">22</span></div>
                                <div className="flex items-center gap-2 text-gray-600"><span className="w-3 h-3 bg-[#F8C07F] rounded-sm"></span> Internship : <span className="font-bold text-gray-800">32</span></div>
                                <div className="flex items-center gap-2 text-gray-600"><span className="w-3 h-3 bg-[#FF6550] rounded-sm"></span> Contract : <span className="font-bold text-gray-800">30</span></div>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

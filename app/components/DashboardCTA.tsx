import Link from "next/link";
import DashboardPreview from "./DashboardPreview";

const DashboardCTA = () => {
    return (
        <section className="w-full py-16 lg:py-20 flex justify-center bg-white">
            <div className="relative w-full max-w-[1192px] mx-auto px-4 lg:px-0">
                
                {/* 
                    Blue Card Container
                    Mobile: Flex column, auto height
                    Desktop: Fixed height 414px (as per design), block layout for absolute positioning
                    Added a clip-path to create the "cutting edge" at the upper left and bottom right sides.
                */}
                <div 
                    className="relative w-full bg-[#4640DE] overflow-hidden flex flex-col lg:block lg:h-[414px]"
                    style={{
                        clipPath: 'polygon(64px 0, 100% 0, 100% calc(100% - 64px), calc(100% - 64px) 100%, 0 100%, 0 64px)'
                    }}
                >
                    
                    {/* 
                        Left Content Group 
                        Mobile: Relative positioning with padding
                        Desktop: Absolute positioning matching design
                    */}
                    <div className="relative z-20 flex flex-col justify-center p-8 lg:p-0 w-full lg:w-auto lg:absolute"
                         style={{
                             // Apply absolute positioning only on desktop logic via class override or simple inline conditionally
                             // Using Tailwind classes for lg styling is cleaner if combined with @media query or just let styling handle it
                         }}>
                         
                         {/* We can use Tailwind arbitrary values for the desktop positioning to avoid inline styles if preferred, 
                             but inline styles for specific pixel values from Figma are fine if wrapped in lg: */}
                         <div className="lg:absolute lg:left-[70px] lg:top-[93px] lg:w-[364px] flex flex-col gap-6">
                            <h2 className="font-clash font-semibold text-white text-[32px] md:text-[48px] leading-[1.1] text-left">
                                Start posting <br />
                                jobs today
                            </h2>
                            
                            <p className="font-epilogue font-medium text-white text-base leading-[1.6] text-left">
                                Start posting jobs for only $10.
                            </p>
                            
                            <Link 
                                href="/post-job"
                                className="bg-white text-[#4640DE] font-epilogue font-bold text-base px-6 py-3 w-full sm:w-auto h-[50px] inline-flex items-center justify-center hover:bg-gray-100 transition-colors"
                            >
                                Sign Up For Free
                            </Link>
                        </div>
                    </div>

                    {/* 
                        Right Dashboard Group
                        Mobile: Relative, scaled to fit width
                        Desktop: Absolute positioned
                    */}
                    <div className="relative w-full h-[240px] xs:h-[300px] sm:h-[400px] lg:h-full lg:absolute lg:top-0 lg:left-0 lg:w-full pointer-events-none">
                        
                        {/* Desktop View: Scaled and positioned as per original design */}
                        <div className="hidden lg:block absolute bottom-0 left-[558px] origin-bottom-left transform scale-[0.45]">
                            <DashboardPreview />
                        </div>

                        {/* Mobile/Tablet View: Centered and scaled down */}
                        <div className="block lg:hidden absolute top-0 left-1/2 -translate-x-1/2 transform scale-[0.35] xs:scale-[0.45] sm:scale-[0.6] origin-top">
                             <DashboardPreview />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default DashboardCTA;

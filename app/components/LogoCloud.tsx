import Image from "next/image";

export default function LogoCloud() {
    const logos = [
        { name: "vodafone", src: "/vodafone.png", width: 153.5, height: 40 },
        { name: "intel", src: "/intel.png", width: 82.1, height: 32 },
        { name: "tesla", src: "/tesla.png", width: 182.7, height: 24 },
        { name: "amd", src: "/amd.png", width: 116.5, height: 28 },
        { name: "talkit", src: "/talkit.png", width: 108.2, height: 32 },
    ];

    return (
        <section className="bg-white px-4 py-12 md:px-16 lg:px-32">
            <div className="mx-auto max-w-[1194px]">
                <p className="font-epilogue text-lg font-medium text-navy opacity-50 mb-8 text-center md:text-left">
                    Companies we helped grow
                </p>
                <div className="grid grid-cols-2 items-center justify-items-center gap-8 sm:grid-cols-3 lg:flex lg:justify-between lg:gap-4">
                    {logos.map((logo) => (
                        <div key={logo.name} className="opacity-30 grayscale transition-all hover:opacity-100 hover:grayscale-0">
                            <Image
                                src={logo.src}
                                alt={`${logo.name} logo`}
                                width={logo.width}
                                height={logo.height}
                                className="h-auto object-contain max-w-[120px] md:max-w-none"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

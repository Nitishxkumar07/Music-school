"use client";
import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border";

const Hero = () => {
    return (
        <div
            className="h-auto md:h-160 relative w-full rounded-md flex flex-col items-center justify-center overflow-hidden mx-auto py-10 md:py-0"
        >
            <Spotlight
                className="-top-40 left-0 md:-top-20 md:left-60"
                fill="silver"
            />
            <div className="p-4 relative z-10 w-full text-center">
                <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-linear-to-b from-neutral-50 to-neutral-400">Master the art of music</h1>
                <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">Dive into our comprehensive music courses and transform your musical journey today. Whether you're a beginner or looking to refine your skills, join us to unlock your true potential.</p>
                <div className="mt-4 text-neutral-200">
                    <Button
                        borderRadius="1.75rem"
                        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                        <Link href={"/courses"}>
                            Explore Courses
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Hero

"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import Musicdata from "../data/music_courses.json"
import Link from "next/link";
import { p } from "framer-motion/client";

interface Course {
  id: number,
  title: string,
  slug: string,
  description: string,
  price: number,
  instructor: string,
  isFeatured: boolean,
}

const FeaturedCourses = () => {
  const Featuredcourses = Musicdata.courses.filter((course: Course) => course.isFeatured)
  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h1 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED COURSES</h1>
          <h2 className="mt-2 tracking-tight text-3xl leading-8 font-extrabold text-white sm:text-4xl">Learn with the best</h2>
        </div>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-8 ">
          {Featuredcourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div  className="p-4 sm:p-6 flex flex-col items-center text-center grow">
                  <p className="text-lg font-bold sm:text-xl text-black mt-4 mb-2 dark:text-cyan-200">{course.title}</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 grow">{course.description}</p>
                  <Link href={`/courses/${course.slug}`} className="text-cyan-200 px-4 py-2 border border-transparent bg-neutral-500 rounded-2xl mt-2 hover:font-semibold
                  ">
                  Learn More
                  </Link>
                </div>

              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-20">
        <Link href={'/courses'}
          className="px-4 py-2 text-blue-200 rounded-2xl border border-neutral-600 shadow-2xl bg-gray-600 hover:font-bold transition duration-200"
        >
          View All Courses
        </Link>
      </div>
    </div>
  )
}

export default FeaturedCourses

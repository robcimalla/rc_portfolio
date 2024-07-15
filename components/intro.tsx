"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";

export default function Intro() {
	const { ref } = useSectionInView("Home", 0.5);
	const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

	return (
		<section id="home" ref={ref} className="text-center mb-28 max-w-[50rem] sm:mb-0 scroll-mt-[100rem]">
			<div className="flex items-center justify-center">
				<div className="relative">
					<motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "tween", duration: 0.2 }}>
						<Image src="/rc1.png" alt="Robert Cimalla" width="192" height="192" quality="95" priority={true} className="h-24 w-24 rounded-full border-[0.2rem] border-white object-cover shadow-xl"></Image>
						<motion.span initial={{ opacity: 0, scale: 1 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", stiffness: 125, delay: 0.1, duration: 0.7 }} className="absolute bottom-0 right-0 text-4xl opacity-1">
							👋
						</motion.span>
					</motion.div>
				</div>
			</div>
			<motion.p initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl">
				<span className="font-bold">{`Hello, I'm Robert.`}</span> Im a <span className="font-bold">Software Developer</span> with <span className="font-bold">5 years</span> of experience. My focus is on building <span className="font-bold">modern, robust and scalable</span> web applications for startups and enterprise companies.
			</motion.p>
			<motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium">
				<Link
					className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
					href="#contact"
					onClick={() => {
						setActiveSection("Contact");
						setTimeOfLastClick(Date.now());
					}}
				>
					Contact me here <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
				</Link>
				{/* <a href="/CV.pdf" download className="group bg-white text-gray-700 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border-black/10">
					Download CV
					<HiDownload className="group-hover:translate-y-1 transition" />
				</a> */}
				<a href="https://www.linkedin.com/in/robert-cimalla-2756a8175/" target="_blank" className="bg-white text-gray-700 p4 flex items-center gap-2 text-[1.5rem] rounded-full focus:scale-110 hover:text-gray-950 hover:scale-110 active:scale-105 transition cursor-pointer border-black/10">
					<BsLinkedin />
				</a>
				<a href="https://github.com/robcimalla" target="_blank" className="bg-white text-gray-700 p4 flex items-center gap-2 text-[1.5rem] rounded-full focus:scale-110 hover:text-gray-950 hover:scale-110 active:scale-105 transition cursor-pointer border-black/10">
					<BsGithub />
				</a>
			</motion.div>
		</section>
	);
}

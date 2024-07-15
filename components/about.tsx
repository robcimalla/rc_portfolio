"use client";

import React, { useEffect, useRef } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
	const { ref } = useSectionInView("About");

	return (
		<motion.section ref={ref} initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.175 }} id="about" className="mb-28 max-w-[45rem] text-center leading-8 scroll-mt-28">
			<SectionHeading>About me</SectionHeading>
			<p className="mb-3">
				After graduating with a master degree in <span className="font-medium">Business Economics</span>, I embarked on a journey as a Software Engineer based in Hannover, Germany. At E.ON, I have been able to professionalize my skills and gain hands-on experience as a <span className="font-medium">software engineer</span>, building modern and scalable web applications. Specializing in backend development, platform monitoring, and creating custom web applications using technologies like Typescript, React, Azure, C#, .NET, and MySQL, I thrive on solving problems and overcoming challenges. My core stack is <span className="font-medium">React, Next.js, Node.js, MongoDB and MySql</span>. While beginning with no prior experience, my passion and drive for technology have helped me grow into a proficient software developer. Always eager to learn and improve, I believe in the mantra: <span className="font-medium">{`it's simple but not easy.`}</span>
			</p>

			<p>
				<span className="italic">When Im not coding</span>, I enjoy going to the gym, being with my dog, and cooking the most delicious food I can get my hands on. While this is just a small glimpse into my personal and professional life, I hope it provides a meaningful insight into who you will hopefully be working with.
			</p>
		</motion.section>
	);
}

"use client";

import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type ProjectProps = (typeof projectsData)[number];

export default function Project({ title, description, tags, imageUrl }: ProjectProps) {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["0 1", "1.33 1"],
	});
	const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
	const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

	return (
		<motion.div className="group mb-3 sm:mb-8 last:mb-0" ref={ref} style={{ scale: scaleProgress, opacity: opacityProgress }}>
			<section className="bg-gray-100 max-w-[42rem] borderBlack overflow-hidden relative sm:pr-8 sm:h-[20rem] hover:bg-gray-200 transition group-even:pl-8 rounded-lg">
				<div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[26rem]">
					<h3 className="text-2xl font-semibold text-gray-950">{title}</h3>
					<p className="mt-2 leading-relaxed text-gray-700">{description}</p>
					<ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
						{tags.map((tag, index) => (
							<li className="bg-black/[0.7] py-1 text-[0.7rem] uppercase tracking-wider rounded-full" key={index}>
								{tag}
							</li>
						))}
					</ul>
				</div>

				<Image
					className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.04] transition group-even:-right-[initial] group-even:-left-40
            group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2"
					src={imageUrl}
					alt="Projects I worked on"
					quality={95}
				/>
			</section>
		</motion.div>
	);
}

"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import { useFormStatus } from "react-dom";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
	const { ref } = useSectionInView("Contact");

	return (
		<motion.section ref={ref} id="contact" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center">
			<SectionHeading>Contact me</SectionHeading>
			<p className="text-gray-700 -mt-6">
				Please contact me directly at{" "}
				<a className="underline" href="mailto:robert.cimalla@gmail.com">
					robert.cimalla@gmail.com
				</a>
			</p>
			<form
				className="mt-10 flex flex-col"
				action={async (formData) => {
					const { data, error } = await sendEmail(formData);
					if (error) {
						toast.error(error);
						return;
					}
					toast.success("Email sent successfully");
				}}
			>
				<input className="h-14 px-4 rounded-lg borderBlack" type="email" name="email" placeholder="Your email" required maxLength={500} />
				<textarea className="h-52 my-3 rounded-lg borderBlack p-4" placeholder="Your message" name="message" required maxLength={5000} />
				<SubmitBtn />
			</form>
		</motion.section>
	);
}

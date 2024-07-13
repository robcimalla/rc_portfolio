import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaCode, FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/project1.jpeg";
import rmtdevImg from "@/public/project2.png";
import wordanalyticsImg from "@/public/project4.png";

export const links = [
	{
		name: "Home",
		hash: "#home",
	},
	{
		name: "About",
		hash: "#about",
	},
	{
		name: "Projects",
		hash: "#projects",
	},
	{
		name: "Skills",
		hash: "#skills",
	},
	{
		name: "Experience",
		hash: "#experience",
	},
	{
		name: "Contact",
		hash: "#contact",
	},
] as const;

export const experiencesData = [
	{
		title: "Graduated master degree",
		location: "Magdeburg, DE",
		description: "I graduated with a Master's degree in Business Economics while working as a working student in IT.",
		icon: React.createElement(LuGraduationCap),
		date: "2016-2019",
	},
	{
		title: "IT Trainee",
		location: "Hannover, DE",
		description: "As an IT Trainee @ E.ON, I worked within different teams, such as Public Cloud, API Management and Customer Experience.",
		icon: React.createElement(CgWorkAlt),
		date: "2019 - 2021",
	},
	{
		title: "Software Engineer",
		location: "Hannover, DE",
		description: "I'm now a software engineer working on the central customer communication platform within E.ON developing custom features, tools and apps for our customers.",
		icon: React.createElement(FaCode),
		date: "2021 - present",
	},
] as const;

export const projectsData = [
	{
		title: "Customer Feedback",
		description: "Developed Azure cloud-based, white-label landing pages for clients to collect and analyze customer feedback",
		tags: ["Azure", "C#", "Angular", "Azure Functions", "Azure Blob Storage"],
		imageUrl: corpcommentImg,
	},
	{
		title: "Role-based File Management System",
		description: "Developed a secure, role-based file management system for controlled access to server files.",
		tags: ["Javascript", "C#", ".NET", "MySQL"],
		imageUrl: rmtdevImg,
	},
	{
		title: "Personal Websites for Rentals, Portfolios, and Bookings",
		description: "Designed personalized client websites to facilitate apartment rentals, showcase portfolios, and enable service bookings.",
		tags: ["React", "Next.js", "TypeScript", "Tailwind", "Framer"],
		imageUrl: wordanalyticsImg,
	},
] as const;

export const skillsData = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Git", "Tailwind", "Prisma", "MongoDB", "MySQL", "Express", "PostgreSQL", "C#", ".NET", "Azure", "Azure Functions", "Azure Blob Storage"] as const;

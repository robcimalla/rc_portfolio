import React from "react";

export default function Footer() {
	return (
		<footer className="mb-10 mt-10 px-4 text-center text-gray-500">
			<small className="mb-2 block text-xs">&copy; 2024 Robert Cimalla. All rights reserved</small>
			<p className="text-xs">
				<span className="font-semibold">About this website:</span> built with React & Next.js
			</p>
			<ul className="text-xs flex flex-row gap-2 justify-center">
				<li>
					<a href="/">Home</a>
				</li>
				<li>
					<a href="/imprint">Imprint</a>
				</li>
				<li>
					<a href="/privacy-policy">Privacy Policy</a>
				</li>
			</ul>
		</footer>
	);
}

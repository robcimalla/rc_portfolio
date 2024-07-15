"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/header";

const HeaderWrapper = () => {
	const pathname = usePathname();
	const showHeader = pathname === "/";

	return showHeader ? <Header /> : null;
};

export default HeaderWrapper;

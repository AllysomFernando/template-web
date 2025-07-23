"use client";

import { GlobalStyles } from "@/style/global";
import { theme } from "@/style/theme";
import { ThemeProvider } from "styled-components";
import { Inter } from "next/font/google";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<html lang="en" className={inter.className}>
				<body>{children}</body>
			</html>
		</ThemeProvider>
	);
}
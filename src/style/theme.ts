import { colors } from "./colors";

export const theme = {
	main: {
		colors: {
			primary: colors.black,
			secondary: colors.black,
			lightGray: colors.black,
			lightTextColor: colors.black,
			textColor: colors.black,
			backgroundColor: colors.black,
		},
		font: {
			family: {
				primary: "Inter, sans-serif",
			},
			weight: {
				base: 400,
				md: 500,
				semiBold: 700,
				bold: 800,
			},
			size: {
				sm: "0.875rem",
				base: "1rem",
				lg: "1.25rem",
				xl: "1.75rem",
				xxl: "2.5rem",
			},
		},
		spacing: {
			y: {
				sm: "0.5rem",
				base: "1rem",
				lg: "1.5rem",
				xl: "3rem",
			},
			x: {
				lg: "1.5rem",
				xl: "3rem",
			},
		},
	},
	responsive: {
		fontSize: {
			lg: "2rem",
			xl: "2.625rem",
			xxl: "4rem",
		},
		padding: {
			sm: "1rem",
			base: "1.5rem",
			lg: "2.5rem",
			xl: "5rem",
		},
		gap: {
			base: "1rem",
			lg: "2rem",
		},
	},
	device: {
		md: "768px",
		lg: "1280px",
	},
};
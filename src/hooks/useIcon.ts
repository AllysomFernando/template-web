import { EyeClosed } from "lucide";


export type IconsNames = keyof typeof icons;

const icons = {
	eyeClosed: EyeClosed,
};

export const useIcon = () => {
	const getIconByKeyword = (name: IconsNames) => {
		return icons[name];
	};

	return {
		getIconByKeyword,
		icons: icons,
	};
};
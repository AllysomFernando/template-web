import * as LucideIcons from "lucide";

export type IconsNames = keyof typeof LucideIcons;


export const useIcon = () => {
	const getIconByKeyword = (name: IconsNames) => {
		return LucideIcons[name];
	};

	return {
		getIconByKeyword,
		icons: LucideIcons,
	};
};
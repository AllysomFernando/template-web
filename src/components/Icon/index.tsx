import { IconsNames, useIcon } from "@/hooks/useIcon";
import { ImgHTMLAttributes } from "react";

interface IconProps extends ImgHTMLAttributes<SVGAElement> {
	name: IconsNames;
	size?: number
}

export const Icon = ({ name, size = 24, ...rest }: IconProps) => {
	const { getIconByKeyword } = useIcon();
	const LucideIcon = getIconByKeyword(name) as React.ComponentType<ImgHTMLAttributes<SVGElement>>;

	if (!LucideIcon) {
		console.error(`Icon '${name}' not found.`);
		return null;
	}

	return <LucideIcon width={size} height={size} {...rest} />
	
};
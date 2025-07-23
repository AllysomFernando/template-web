import { IconsNames } from "@/hooks/useIcon";

export interface InputProps {
	title?: string;
    variant: InputsVariants;
    icon?: IconsNames,
    placeholder?: string;
    disabled?: boolean
}

export type InputsVariants = "Main" | "Outline" | "Filled" | "Flushed" | "Unstyled";
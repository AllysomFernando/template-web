import { useMemo } from "react";
import { ButtonVariants } from "@/components/Button/types";
import { S } from "@/components/Button/styles";
export const useButtonStyles = (variant: ButtonVariants) => {
	return useMemo(() => {
		switch (variant) {
			case "Main":
				return S.Main;
			case "Outline":
				return S.Outline;
			case "Danger":
				return S.Danger;
			case "Ghost":
				return S.Ghost;

			default:
				return S.Main;
		}
	}, [variant]);
};
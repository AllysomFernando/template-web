import { useMemo } from "react";
import { InputsVariants } from "@/components/Input/type";
import { S } from "@/components/Input/styles";



export const useInputStyles = (variant: InputsVariants) => {
    return useMemo(() => {
        switch (variant) {
            case "Main":
                return S.Main;
            case "Outline":
                return S.Outline;
            case "Filled":
                return S.Filled;
            case "Flushed":
                return S.Flushed;
            case "Unstyled":
                return S.Unstyled;
            default:
                return S.Main;
        }
    }, [variant]);
};
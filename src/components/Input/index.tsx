import { useInputStyles } from "@/hooks/useInputStyles";
import { InputProps } from "./type";
import { S } from "./styles";
import { Icon } from "../Icon";

export const Input = ({
	title,
	variant,
	icon,
	placeholder,
	disabled,
}: InputProps) => {
	const InputComponent = useInputStyles(variant);

	return (
		<S.Wrapper>
			{title && <S.Label>{title}</S.Label>}
			<S.InputWrapper>
				{icon && (
					<S.IconWrapper>
						<Icon name={icon} color="white" width={20} height={20} />
					</S.IconWrapper>
				)}
				<InputComponent
					placeholder={placeholder}
					disabled={disabled}
					hasIcon={!!Icon}
				/>
			</S.InputWrapper>
		</S.Wrapper>
	);
};

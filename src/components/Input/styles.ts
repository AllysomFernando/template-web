import styled from "styled-components";
import { colors } from "@/style/colors";
import { theme } from "@/style/theme";

export const S = {
	Wrapper: styled.div`
		display: flex;
		flex-direction: column;
		width: 100%;
		gap: 4px;
	`,
	Label: styled.label`
		font-size: ${theme.main.font.size.base};
		color: ${colors.white[900]};
		font-weight: ${theme.main.font.weight.semiBold};
	`,
	InputWrapper: styled.div`
		position: relative;
		width: 100%;
		display: flex;
		align-items: center;
	`,
	IconWrapper: styled.div`
		position: absolute;
		left: 12px;
		pointer-events: none;
		display: flex;
		align-items: center;
		justify-content: center;
	`,
	Main: styled.input<{ hasIcon?: boolean }>`
		background-color: ${({ disabled }) =>
			disabled ? colors.grafiti[600] : colors.purple[600]};
		color: ${({ disabled }) =>
			disabled ? colors.grafiti[200] : colors.white[900]};
		width: 100%;
		border-radius: 5px;
		padding: ${({ hasIcon }) => (hasIcon ? "12px 16px 12px 40px" : "12px 16px")};
		border: none;
		font-family: ${theme.main.font.family.primary};
		font-weight: ${theme.main.font.weight.semiBold};
		height: 40px;
		transition: background-color 0.3s ease, transform 0.2s ease;

		&:hover {
			background-color: ${colors.charcoal[900]};
			cursor: pointer;
			transform: scale(1.05);
		}
	`,
	Outline: styled.input<{ hasIcon?: boolean }>`
		background-color: ${({ disabled }) =>
			disabled ? colors.grafiti[300] : theme.main.colors.backgroundColor};
		border: 2px solid
			${({ disabled }) =>
				disabled ? colors.grafiti[300] : colors.charcoal[600]};
		color: ${({ disabled }) =>
			disabled ? colors.grafiti[300] : colors.charcoal[900]};
		width: 100%;
		border-radius: 5px;
		padding: ${({ hasIcon }) => (hasIcon ? "12px 16px 12px 40px" : "12px 16px")};
		font-weight: ${theme.main.font.weight.semiBold};
		height: 40px;
		transition: 0.3s ease;

		&:hover {
			border-color: ${colors.purple[900]};
			transform: scale(1.05);
		}
	`,
	Filled: styled.input<{ hasIcon?: boolean }>`
		background-color: ${colors.red[400]};
		color: white;
		width: 100%;
		border-radius: 5px;
		padding: ${({ hasIcon }) => (hasIcon ? "12px 16px 12px 40px" : "12px 16px")};
		height: 40px;
		border: none;

		&:hover {
			background-color: darkred;
			transform: scale(1.05);
		}
	`,
	Flushed: styled.input<{ hasIcon?: boolean }>`
		border: none;
		border-bottom: 1px solid ${colors.white[900]};
		background: transparent;
		color: ${colors.white[900]};
		padding: ${({ hasIcon }) => (hasIcon ? "12px 16px 12px 40px" : "12px 16px")};
		height: 40px;

		&:focus {
			outline: none;
			border-color: ${colors.purple[600]};
		}
	`,
	Unstyled: styled.input`
		all: unset;
		color: ${colors.purple[200]};
		width: 100%;
		padding: 4px;
	`,
};

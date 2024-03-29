import styled, { css, keyframes } from "styled-components";

import theme from "../../theme";

export const animationLength = 300;

export const fadeIn = keyframes`
	from {
		opacity: 0;
		transform: scale(0.5);
	}
	75% {
		transform: scale(1.02);
	}
	to {
		opacity: 1;
		transform: scale(1);
	}
`;

export const Item = styled.li`
	transform-origin: left;
	font-weight: bold;
	padding-left: ${theme.gutter * 2}px;
	background-repeat: no-repeat;
	background-position: left center;
	background-size: auto 60%;

	${({ icon }) => `background-image: url("${icon}");`}

	&,
	p {
		margin: 0 0 8px;
	}
`;

export const Wrapper = styled.ul`
	padding-left: ${theme.gutter}px;

	${({ icon }) =>
		icon &&
		`
		list-style-type: none; 

		li {
			background-image: url("${icon}")
		}
	`}

	${({ stagger }) =>
		stagger &&
		css`
			${Item} {
				opacity: 0;
				animation: ${fadeIn} ${animationLength}ms ease forwards;
			}
		`}
`;

import { Container as DefaultContainer, Grid as DefaultGrid } from "..";

import { Badge as DefaultBadge } from "../Badge/Badge";
import styled from "styled-components";
import theme from "../../theme";

export const Container = styled(DefaultContainer)`
	${theme.breakpoint("lg")`${({ sticky }) =>
		sticky &&
		`
		position: relative`}`}
`;

export const Grid = styled(DefaultGrid)`
	${theme.breakpoint("lg")`
	${({ sticky }) =>
		sticky &&
		`
			width: 100%;
			position: absolute;
			margin: 0 auto;
			left: 0;
			right: 0;
		`}`}
`;

export const Wrapper = styled.div.attrs({
	// className: "lax",
	// "data-lax-opacity": "200 1, 100 1, 0 0",
	// "data-lax-anchor": "self",
})`
	position: relative;
	z-index: 2;
	display: flex;
	justify-content: center;
	padding: 50px 0 0;
	box-sizing: border-box;
	min-height: 600px;

	${theme.breakpoint("md")`
		padding: 75px 0 0;
		`}

	${({ standalone }) =>
		standalone
			? `margin-bottom: 50px !important`
			: theme.map(
					{ xs: 100, sm: 125, md: 150, lg: 175, xl: 200 },
					(marginBottom) => `margin-bottom: ${marginBottom}px;`
			  )}  
			  
	${theme.breakpoint("lg")`
		${({ sticky }) =>
			sticky &&
			`
			position: sticky;
			top: calc(50vh - 300px);

			margin: 0;

			&:not(:first-child) {
				// margin-top: 50vh;
			}
		`}
	`}
`;

export const Background = styled.div`
	position: absolute;
	z-index: -1;
	left: 0;
	top: 0;
	width: 100%;
	height: 600px;
	transform: skewY(-20deg);

	height: ${({ expands }) => (expands ? `100%` : `600px`)};
	${theme.breakpoint("lg")`${({ expandsAll }) =>
		expandsAll ? `` : `min-height: none; height: 600px`}`}

	background: url("/assets/images/noise.png") repeat, ${({ color }) => color};

	${theme.breakpoint("md")`
        transform: skewY(-10deg);
    `}
`;

export const BadgeWrapper = styled.div`
	grid-column: 1 / -1;
	margin-bottom: ${theme.gutter * 2}px;

	${theme.breakpoint("sm")`grid-column: 2 / -2;`}
	${theme.breakpoint("md")`grid-column: 4 / -4`}
	${theme.breakpoint("lg")`grid-column: 5 / -5`}
`;

export const Caption = styled.div`
	grid-column: 1 / -1;
	margin-bottom: ${theme.gutter}px;

	${theme.breakpoint("md")`
		grid-column: ${({ center }) => (center ? `4 / -4` : `1 / 7`)}; 
		margin-bottom: 0`}
	${theme.breakpoint("lg")`grid-column: ${({ center }) =>
		center ? `5 / -5` : `2 / 6`}`};
`;

export const FigureGrid = styled(DefaultGrid)`
	grid-column: 1 / -1;
	grid-row: 3;
	column-gap: ${theme.gutter}px;
	row-gap: ${theme.gutter}px;
`;

export const Figure = styled.div`
	grid-column: 1 / -1;
	margin-bottom: ${theme.gutter}px;
	position: relative;

	img {
		max-width: 100%;
		display: block;
	}

	${theme.breakpoint("md")`grid-column: 7 / -1; margin-bottom: 0`}
`;

import { Container, Dot, DotWrapper, Frame, Overlay, Wrapper } from "./styles";

import { Grid } from "..";
import React from "react";

const intervalLength = 3000;

export const Carousel = ({ children, gridProps, frames, ...props }) => {
	const [activeIndex, setActiveIndex] = React.useState(0);

	const increment = () => {
		setActiveIndex((activeIndex) => (activeIndex + 1) % frames.length);
	};

	React.useEffect(() => {
		const interval = setInterval(increment, intervalLength);

		return () => clearInterval(interval);
	}, []);

	return (
		<Wrapper {...props}>
			{frames.map((src, index) => {
				return (
					<Frame
						src={src}
						key={`carousel-frame-${index}`}
						delta={index - activeIndex}
					/>
				);
			})}

			{/* <Overlay /> */}
			<Container>
				<Grid {...gridProps}>
					{children}
					<DotWrapper>
						{frames.map((src, index) => {
							return (
								<Dot
									key={`carousel-dot-${index}`}
									onClick={() => setActiveIndex(index)}
									active={index === activeIndex}
								/>
							);
						})}
					</DotWrapper>
				</Grid>
			</Container>
		</Wrapper>
	);
};

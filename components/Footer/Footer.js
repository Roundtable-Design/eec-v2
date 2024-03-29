import { Icon, Row, Wrapper } from "./styles";

import { Paragraph } from "..";
import React from "react";
import Stripe from "../Stripe";
import contact from "./data/contact";
import theme from "../../theme";

export const Footer = () => {
	return (
		<Wrapper>
			<Stripe
				noLax
				color={theme.color.grey}
				bgProps={{ style: { height: "1000px" } }}
				gridProps={{ style: { rowGap: `8px` } }}
			>
				{contact.map(({ icon, content, link }, index) => (
					<Row key={`footer-row-${index}`}>
						<Icon src={icon} />

						<Paragraph>
							<a href={link}>{content}</a>
						</Paragraph>
					</Row>
				))}
				<Row style={{ marginTop: `${theme.gutter * 3}px` }}>
					<Paragraph>Charity number: 1146201</Paragraph>
				</Row>
				<Row style={{ marginBottom: `${theme.gutter * 3}px` }}>
					<Paragraph>Privacy Policy</Paragraph>
				</Row>
				<Row>
					<img
						src="/assets/icons/newground.svg"
						width="80px"
						style={{ marginRight: theme.gutter * 2 + "px" }}
					/>
					<img src="/assets/icons/newfrontiers.svg" width="120px" />
				</Row>
			</Stripe>
		</Wrapper>
	);
};

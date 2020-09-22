import { Caption, Heading } from "../components";

import { Banner } from "../components/Banner";
import Layout from "../components/Layout";
import Pin from "../public/assets/icons/pin.svg";
import Stripe from "../components/Stripe";
import styled from "styled-components";
import theme from "../theme";

const Icon = styled.div`
	background-size: 24px 24px;
	background-repeat: no-repeat;
	background-position: center;
	background-image: url(${({ src }) => src});

	grid-column: 1;

	${theme.breakpoint("md")`
        grid-column: 4;
    `}
`;

const Label = styled(Heading)`
	grid-column: 2 / -1;
	color: white;
	font-size: 24px;

	${theme.breakpoint("md")`
		grid-column: 5 / -5;
		font-size: 32px;
    `}
`;

export default function Contact() {
	return (
		<Layout.Default title="Contact">
			<Banner
				src="/assets/images/contact.png"
				gridProps={{ style: { rowGap: "5px" } }}
			>
				<Banner.Badge
					borderColor={theme.color.orange}
					starColor="white"
					textColor="white"
				>
					Contact
				</Banner.Badge>
				<div
					style={{
						height: theme.gutter * 3 + "px",
						gridColumn: "1 / -1",
					}}
				/>
				<Icon src="/assets/icons/phone.svg" />
				<Label>0208 616 9199</Label>
				<Icon src="/assets/icons/email.svg" />
				<Label>info@eastendchurch.co.uk</Label>
			</Banner>
			<Stripe
				color={theme.color.orange}
				style={{ color: "white", marginBottom: "100px" }}
			>
				<Stripe.Badge
					borderColor="white"
					textColor="white"
					starColor={theme.color.orange}
				>
					Find Us
				</Stripe.Badge>
				<div style={{ textAlign: "center", gridColumn: "1 / 2" }}>
					<Pin fill="white" />
				</div>
				<div style={{ gridColumn: "2 / -1" }}>
					<Heading>Raine's Foundation School</Heading>
					<Caption>London, E2 9LY</Caption>
				</div>
				<div
					style={{
						gridColumn: "1 / -1",
						boxShadow: "0 3px 5px #00000030",
					}}
				>
					<iframe
						width="100%"
						height="450px"
						id="mapcanvas"
						src="https://maps.google.com/maps?q=E2%209LY&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
						frameBorder="0"
						scrolling="no"
						marginHeight="0"
						marginWidth="0"
					>
						<div className="zxos8_gm">
							<a href="https://www.twinstiarasandtantrums.com/2020/06/buying-a-mattress-is-a-nightmare/">
								according to this review
							</a>
						</div>
						<div style={{ overflow: "hidden" }}>
							<div
								id="gmap_canvas"
								style={{ height: "100%", width: "100%" }}
							></div>
						</div>
						<div>
							<small>
								Powered by{" "}
								<a href="https://www.embedgooglemap.co.uk">
									Embed Google Map
								</a>
							</small>
						</div>
					</iframe>
				</div>
			</Stripe>
		</Layout.Default>
	);
}
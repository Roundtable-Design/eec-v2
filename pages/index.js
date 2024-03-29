import { Banner, Carousel } from "../components/Banner";
import { Caption, Group, Heading, Paragraph } from "../components";
import { fetchHighlightedEvent, fetchMeetingInfo } from "../scripts/home";

import ActivityIndicator from "../components/ActivityIndicator";
import Layout from "../components/Layout";
import List from "../components/List";
import Pin from "../public/assets/icons/pin.svg";
import Player from "../components/Player";
import { RichText } from "prismic-reactjs";
import React from "react";
import {render} from "react-dom";
import Stripe from "../components/Stripe";
import { Tagline } from "../styles/index";
import { animationLength } from "../components/List/styles";
import { fetchEvents } from "../scripts/events";
import { fetchPodcastEpisodes } from "../scripts/sermons";
import initLax from "../scripts/initLax";
import moment from "moment";
import theme from "../theme";


export default function Home() {
	const [latestEpisode, setLatestEpisode] = React.useState();
	const [highlightedEvent, setHighlightedEvent] = React.useState();
	const [meetingInfo, setMeetingInfo] = React.useState();

	const [loading, setLoading] = React.useState(true);

	React.useEffect(() => {
		(async function () {
			const meetingInfo = await fetchMeetingInfo();
			setMeetingInfo(meetingInfo);

			const episodes = await fetchPodcastEpisodes();
			setLatestEpisode(episodes[0]);

			const highlightedEvent = await fetchHighlightedEvent();

			if (highlightedEvent) setHighlightedEvent(highlightedEvent);
			else {
				const events = await fetchEvents();

				if (events.length) setHighlightedEvent(events[0]);
			}

			console.log({ meetingInfo, highlightedEvent });

			setLoading(false);

			initLax();
		})();
	}, []);

	return (
		<Layout.Default
			title="Home"
			style={{ color: "white" }}
			loading={loading}
		>
			<Carousel
				src="/assets/images/banner.png"
				gridProps={{ style: { rowGap: theme.gutter + "px" } }}
				frames={[
					// "/assets/images/church.jpg",
					"/assets/images/homepage1.jpg",
					"/assets/images/homepage2.jpg",
					"/assets/images/homepage3.jpg",
				]}
			>
				<Banner.Badge
					borderColor={theme.color.mustard}
					starColor="white"
					textColor="white"
				>
					We don't care
				</Banner.Badge>
				<Banner.Body center>
					{/* Needs to be stuttered */}
					<List
						icon="/assets/icons/star.svg"
						stagger
						style={{
							marginBottom: `${theme.gutter * 3}px`,
						}}
					>
						<List.Item>
							<Paragraph>what you wear</Paragraph>
						</List.Item>
						<List.Item>
							<Paragraph>how old you are</Paragraph>
						</List.Item>
						<List.Item>
							<Paragraph>where you're from</Paragraph>
						</List.Item>
						<List.Item>
							<Paragraph>about your criminal record</Paragraph>
						</List.Item>
						<List.Item>
							<Paragraph>about your bank balance</Paragraph>
						</List.Item>
						<List.Item>
							<Paragraph>who or what you vote for</Paragraph>
						</List.Item>
					</List>

					{/* NONE OF US ARE PERFECT */}
					<Tagline animationLength={animationLength} />
					<Paragraph
						style={{
							textAlign: "center",
							fontWeight: "bold",
						}}
					>
						East End Church is a place where
						<br />
						Jesus meets normal people
					</Paragraph>
				</Banner.Body>
			</Carousel>

			<Stripe color={theme.color.swampGreen} style={{ color: "white" }}>
				<Stripe.Badge
					borderColor="white"
					textColor="white"
					starColor={theme.color.swampGreen}
				>
					This Sunday
				</Stripe.Badge>
				<Stripe.Body>
					<Group>
						<Heading>Join us online</Heading>
					</Group>

					<Group>
						<Paragraph>
							We normally meet together at the{" "}
							<a
								style={{ fontWeight: "bold" }}
								href="javascript:void(0)"
								onClick={() => {
									document
										.getElementById("find-us")
										.scrollIntoView({
											behavior: "smooth",
										});
								}}
							>
								Henry Raine Building
							</a>
							, but check social media for up-to-date information.
							<br />
							{RichText.render(meetingInfo)}
						</Paragraph>
					</Group>

					<Caption>
						<a href="https://www.youtube.com/channel/UCMaP8Yi3cu1uSQklAeZewOQ/featured">
							Find us on YouTube
							<img
								style={{ marginLeft: "4px" }}
								src="/assets/icons/chevron-right.svg"
							/>
						</a>
					</Caption>
				</Stripe.Body>
				<Stripe.Figure>
					<img src="/assets/images/this-sunday.jpg" />
				</Stripe.Figure>
			</Stripe>

			{highlightedEvent ? (
				<Stripe color={theme.color.orange} style={{ color: "white" }}>
					<Stripe.Badge
						borderColor="white"
						textColor="white"
						starColor={theme.color.orange}
					>
						Coming up
					</Stripe.Badge>
					<Stripe.Body>
						<Group>
							<Heading>{highlightedEvent.title}</Heading>
							<List style={{ listStyleType: "none" }}>
								<List.Item icon="/assets/icons/pin.svg">
									<Caption>
										{highlightedEvent.location}
									</Caption>
								</List.Item>
								<List.Item icon="/assets/icons/calendar.svg">
									<Caption>
										{moment(highlightedEvent.date).format(
											"MMMM Do YYYY"
										)}
									</Caption>
								</List.Item>
							</List>
						</Group>

						<Group>
							<Paragraph>
								{highlightedEvent.description}
							</Paragraph>
						</Group>

						<Caption>
							<a href="/events">
								See what's on
								<img
									style={{ marginLeft: "4px" }}
									src="/assets/icons/chevron-right.svg"
								/>
							</a>
						</Caption>
					</Stripe.Body>
					<Stripe.Figure>
						<img src={highlightedEvent.image.url} />
					</Stripe.Figure>
				</Stripe>
			) : (
				""
			)}

			<Stripe color={theme.color.blue} style={{ color: "white" }}>
				<Stripe.Badge
					borderColor="white"
					textColor="white"
					starColor={theme.color.blue}
				>
					Last Sunday
				</Stripe.Badge>
				{latestEpisode ? (
					<React.Fragment>
						<Stripe.Body>
							<Group>
								<Heading style={{ marginBottom: 0 }}>
									{latestEpisode.title}
								</Heading>
								<Caption>{latestEpisode.author}</Caption>
							</Group>
							<Group>
								<Player inverted src={latestEpisode.url} />
							</Group>
							<Caption>
								<a href="/sermons">
									See other sermons
									<img
										style={{ marginLeft: "4px" }}
										src="/assets/icons/chevron-right.svg"
									/>
								</a>
							</Caption>
						</Stripe.Body>
						<Stripe.Figure>
							<img src={latestEpisode.image} />
						</Stripe.Figure>
					</React.Fragment>
				) : (
					<ActivityIndicator inverted>
						Loading episode information...
					</ActivityIndicator>
				)}
			</Stripe>
			<Stripe
				id="find-us"
				color={theme.color.purple}
				style={{ marginBottom: "100px" }}
			>
				<Stripe.Badge
					borderColor="white"
					textColor="white"
					starColor={theme.color.purple}
				>
					Find Us
				</Stripe.Badge>
				<div style={{ textAlign: "center", gridColumn: "1 / 2" }}>
					<Pin fill="white" />
				</div>
				<div style={{ gridColumn: "2 / -1" }}>
					<Heading>The Henry Raine Building</Heading>
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

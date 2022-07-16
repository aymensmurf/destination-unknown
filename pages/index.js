import { useEffect, useRef } from "react";
import Head from "next/head";
import { gsap } from "gsap";

const Index = () => {
	const timeline1 = useRef(null);
	const timeline2 = useRef(null);

	useEffect(() => {
		timeline1.current && timeline1.current.progress(0).kill();

		timeline1.current = gsap
			.timeline()
			.from(".title", {
				duration: 1.5,
				y: 200,
				ease: "Power3.easInOut",
			})
			.from(
				"nav",
				{
					duration: 1,
					y: 30,
					autoAlpha: 0,
					ease: "Power3.easeInOut",
				},
				"-=1"
			)
			.from(".sub-title", {
				duration: 1,
				y: 30,
				autoAlpha: 0,
				ease: "Power3.easeInOut",
			})
			.from(
				".bottom-nav",
				{
					duration: 2,
					width: "0%",
					autoAlpha: 0,
					ease: "Power3.easeInOut",
				},
				"-=2"
			);
	}, []);

	const handleBtnDestinationClick = () => {
		timeline2.current && timeline2.current.progress(0).kill();

		timeline2.current = gsap
			.timeline()
			.set(".grid", {
				display: "grid",
			})
			.to(".forest img", {
				duration: 3,
				y: -400,
				scale: 1.1,
				ease: "Expo.easeInOut",
			})
			.to(
				".bg-image",
				{
					duration: 3,
					y: -600,
					ease: "Expo.easeInOut",
				},
				"-=3"
			)
			.to(
				".sub-title",
				{
					duration: 3,
					autoAlpha: 0,
					y: -100,
					ease: "Expo.easeInOut",
				},
				"-=3"
			)
			.to(
				".bottom-nav",
				{
					duration: 3,
					width: "0%",
					ease: "Expo.easeInOut",
				},
				"-=3"
			)
			.to(
				"nav",
				{
					duration: 3,
					color: "#fff",
				},
				"-=3"
			)
			.to(
				".imgs",
				{
					duration: 2,
					height: "100%",
					ease: "Expo.easeInOut",
				},
				"-=2"
			)
			.to(
				".imgs-2",
				{
					duration: 2,
					height: "100%",
					ease: "Expo.easeInOut",
				},
				"-=1.8"
			)
			.to(
				".imgs-3",
				{
					duration: 2,
					height: "100%",
					ease: "Expo.easeInOut",
				},
				"-=1.7"
			)
			.to(
				".imgs-4",
				{
					duration: 2,
					height: "100%",
					ease: "Expo.easeInOut",
				},
				"-=1.6"
			)
			.to(
				".destination",
				{
					duration: 2,
					autoAlpha: 1,
					y: -20,
					ease: "Expo.easeInOut",
				},
				"-=1.6"
			);
	};

	const handleBtnHomeClick = () => {
		timeline2.current.reversed(true);
	};

	return (
		<>
			<Head>
				<title>Destination</title>
			</Head>

			<section>
				<nav>
					<div className='left'>
						<ul>
							<li id='home' onClick={handleBtnHomeClick}>
								<i className='fa fa-home'></i> Home
							</li>
						</ul>
					</div>
					<div className='middle'>
						<h4>
							WEBSITE
							<br />
							DESIGN
							<br />
							COMPANY
						</h4>
					</div>
					<div className='right'>
						<ul>
							<li>
								<i className='fa fa-twitter'></i>
							</li>
							<li>
								<i className='fa fa-facebook-f'></i>
							</li>
							<li>
								<i className='fa fa-instagram'></i>
							</li>
						</ul>
					</div>
				</nav>

				<div className='container'>
					<div className='title'>
						<h1>
							<span className='black'>DESTINATION</span> <span className='outlined'>UNKNOWN</span>
						</h1>
					</div>
					<div className='forest'>
						<img src='img/forest.png' alt='Forest' />
					</div>
					<div className='desc'>
						<p className='sub-title'>
							We challenged our friends around the globe to show us their destination unknowns. Share yours for a chance
							of winning your dream destination unknown trip.
						</p>
						<div className='bottom-nav' onClick={handleBtnDestinationClick}>
							<h4>EXPLORE DESTINATION</h4>
							<div className='circle'></div>
						</div>
					</div>
					<div className='grid'>
						<h1 className='destination'>
							OESCHINEN LAKE
							<br />
							<span className='outlined white_outline'>SWITZERLAND</span>
						</h1>
						<div className='imgs'>
							<div className='img-wrapper first-img'></div>
						</div>
						<div className='imgs-2'>
							<div className='img-wrapper second-img'></div>
						</div>
						<div className='imgs-3'>
							<div className='img-wrapper third-img'></div>
						</div>
						<div className='imgs-4'>
							<div className='img-wrapper forth-img'></div>
						</div>
					</div>
					<div className='bg-image'></div>
				</div>
			</section>
		</>
	);
};

export default Index;

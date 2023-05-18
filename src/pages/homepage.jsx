import React, { useState, useEffect } from "react";

import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub, faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";

import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import Works from "../components/homepage/works";
import AllProjects from "../components/projects/allProjects";
import About from "../pages/about"
import Contact from "../pages/contact"



import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

import INFO from "../data/user";
import "./styles/about.css";
import "./styles/homepage.css";

const FloatingImage = styled(animated.img)`
  position: relative;
  animation: floatAnimation 5s ease-in-out infinite;
  @keyframes floatAnimation {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
    100% {
      transform: translateY(0);
    }
  }

  border-radius: 50%;
  overflow: hidden;
`;

const Homepage = () => {
	const [stayLogo, setStayLogo] = useState(false);
	const [logoSize, setLogoSize] = useState(80);
	const [oldLogoSize, setOldLogoSize] = useState(80);

	const floatAnimation = useSpring({
		to: { transform: 'translateY(-10px)' },
		from: { transform: 'translateY(0)' },
		config: { duration: 2000 },
		loop: true,
	});


	useEffect(() => {
		document.title = INFO.main.title;
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			let scroll = Math.round(window.pageYOffset, 2);

			let newLogoSize = 80 - (scroll * 4) / 10;

			if (newLogoSize < oldLogoSize) {
				if (newLogoSize > 40) {
					setLogoSize(newLogoSize);
					setOldLogoSize(newLogoSize);
					setStayLogo(false);
				} else {
					setStayLogo(true);
				}
			} else {
				setLogoSize(newLogoSize);
				setStayLogo(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [logoSize, oldLogoSize]);

	return (
		<React.Fragment>
			<div className="page-content">
				<NavBar active="home" />
				<div className="content-wrapper">
					<div className="homepage-logo-container">
					</div>

					<div className="homepage-container" id="home">
						<div className="homepage-first-area">
							<div className="homepage-first-area-left-side">
								<div className="title homepage-title">
									{INFO.homepage.title}
								</div>

								<div className="subtitle homepage-subtitle">
									{INFO.homepage.description}
								</div>
							</div>

							<div className="homepage-first-area-right-side">
								<div className="homepage-image-container">
									<div className="homepage-image-wrapper">
										<FloatingImage
											src="pedro-tresmondi.jpg"
											alt="about"
											style={floatAnimation}
										/>
									</div>
								</div>

							</div>

						</div>
						<div className="homepage-socials">
							<a
								href={INFO.socials.github}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faGithub}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.linkedin}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faLinkedinIn}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={`mailto:${INFO.main.email}`}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faMailBulk}
									className="homepage-social-icon"
								/>
							</a>
						</div>

						<div className="stack-title">
							<div className="skills">
								<p>Stacks</p>
								<div className="logos">
									<ul className="stack-list">
										<li>
											<img className="icon" src="\assets\icons\html5.svg" title="HTML5" alt="program_img" />
										</li>
										<li>
											<img className="icon" src="\assets\icons\css.svg" title="CSS3" alt="program_img" />
										</li>
										<li>
											<img className="icon" src="\assets\icons\js.svg" title="Javascript" alt="program_img" />
										</li>
										<li>
											<img className="icon" src="\assets\icons\reactjs.svg" title="React JS" alt="program_img" />
										</li>
										<li>
											<img className="icon" src="\assets\icons\ps.svg" title="Photoshop" alt="program_img" />
										</li>
										<li>
											<img className="icon" src="\assets\icons\figma.svg" title="Figma" alt="program_img" />
										</li>
									</ul>
								</div>
							</div>
						</div>

						<div className="about" id="about">
							<About />
						</div>

						<div className="homepage-after-title">
							<div className="homepage-works">
								<Works />
							</div>
						</div>
						<div className="homepage-projects" id="projects">
							<AllProjects />
						</div>

						<div className="homepage-contact" id="contact">
							<Contact />
						</div>
						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment >
	);
};

export default Homepage;

import React from "react";
import { faBriefcase, faPaperPlane} from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">

			<Card
				icon={faBriefcase}
				title="Experiência"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./accenture-logo.png"
								alt="Accenture"
								className="work-image"
							/>
							<div className="work-title">Accenture Brasil</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">2021 - Present</div>
						</div>

						<div className="work">
							<img
								src="./freelancer-icon.png"
								alt="Freelancer"
								className="work-image"
							/>
							<div className="work-title">Designer gráfico freelancer</div>
							<div className="work-subtitle">
								Freelancer
							</div>
							<div className="work-duration">2021 - 2023 </div>
						</div>
					</div>
				}
			/>

			<Card
				icon={faPaperPlane}
				title="Educação"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./sptech-icon.jpg"
								alt="SPTech"
								className="work-image"
							/>
							<div className="work-title">São Paulo Tech School - SPTech</div>
							<div className="work-subtitle">
								Análise de Sistemas de Computação
							</div>
							<div className="work-duration">2021 - 2023</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;

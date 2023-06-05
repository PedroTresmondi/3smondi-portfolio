import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = (props) => {
	const { logo, title, description, linkText, link, stackUsed1, stackUsed2, stackUsed3 } = props;

	return (
		<React.Fragment>
			<div className="project">
				<Link to={link}>
					<div className="project-container">
						{logo && (
							<div className="project-info">
								<div className="project-logo">
									<img src={logo} alt="logo" />
								</div>
								<div className="project-stacks">
									<img src={stackUsed1} alt="stack1" />
									<img src={stackUsed2} alt="stack2" />
									<img src={stackUsed3} alt="stack3" />
								</div>
							</div>
						)}
						<div className="project-title">{title}</div>
						<div className="project-description">{description}</div>
						{link && (
							<div className="project-link">
								<div className="project-link-icon">
									<FontAwesomeIcon icon={faLink} />
								</div>
								<div className="project-link-text">{linkText}</div>
							</div>
						)}
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Project;

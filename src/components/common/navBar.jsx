import React, { useState } from "react";

import "./styles/navBar.css";

const NavBar = (props) => {
	const { active } = props;
	const [currentActive, setCurrentActive] = useState(active);

	const handleClick = (item) => {
		setCurrentActive(item);
	};

	return (
		<React.Fragment>
			<div className="nav-container">
				<nav className="navbar">
					<div className="nav-background">
						<ul className="nav-list">
							<li
								className={
									currentActive === "home"
										? "nav-item active"
										: "nav-item"
								}
							>
								<a
									href="#home"
									onClick={() => handleClick("home")}
								>
									Home
								</a>
							</li>
							<li
								className={
									currentActive === "about"
										? "nav-item active"
										: "nav-item"
								}
							>
								<a
									href="#about"
									onClick={() => handleClick("about")}
								>
									Sobre
								</a>
							</li>
							<li
								className={
									currentActive === "projects"
										? "nav-item active"
										: "nav-item"
								}
							>
								<a
									href="#projects"
									onClick={() => handleClick("projects")}
								>
									Projetos
								</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</React.Fragment>
	);
};

export default NavBar;

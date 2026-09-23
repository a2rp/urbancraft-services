import {
    FiCodepen,
    FiCoffee,
    FiFacebook,
    FiGithub,
    FiGlobe,
    FiHeart,
    FiLinkedin,
    FiMail,
    FiYoutube,
} from "react-icons/fi";

import { FaPatreon } from "react-icons/fa";

import logo from "../../assets/images/branding/logo.png";

import { FOOTER_LINKS, SUPPORT_LINKS } from "../../data/footerLinks";

import { Styled } from "./styled";

const iconMap = {
    portfolio: <FiGlobe aria-hidden="true" />,
    github: <FiGithub aria-hidden="true" />,
    codepen: <FiCodepen aria-hidden="true" />,
    linkedin: <FiLinkedin aria-hidden="true" />,
    facebook: <FiFacebook aria-hidden="true" />,
    youtube: <FiYoutube aria-hidden="true" />,
    email: <FiMail aria-hidden="true" />,
    support: <FiHeart aria-hidden="true" />,
    "buy-me-a-coffee": <FiCoffee aria-hidden="true" />,
    patreon: <FaPatreon aria-hidden="true" />,
};

const allLinks = [...FOOTER_LINKS, ...SUPPORT_LINKS];

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Styled.Wrapper>
            <div className="container">
                <div className="top">
                    <div className="brand">
                        <img
                            className="logo"
                            src={logo}
                            alt=""
                            aria-hidden="true"
                        />

                        <div>
                            <strong className="title">
                                UrbanCraft Services
                            </strong>

                            <p className="text">
                                Thoughtful local services designed for modern
                                urban living.
                            </p>
                        </div>
                    </div>

                    <nav className="links" aria-label="External links">
                        {allLinks.map((item) => (
                            <a
                                key={item.id}
                                href={item.href}
                                target={item.newTab ? "_blank" : undefined}
                                rel={
                                    item.newTab
                                        ? "noopener noreferrer"
                                        : undefined
                                }
                                aria-label={item.label}
                                title={item.label}
                            >
                                {iconMap[item.id]}
                            </a>
                        ))}
                    </nav>
                </div>

                <div className="bottom">
                    <p>
                        Copyright &copy; {currentYear}{" "}
                        <a
                            href="https://www.ashishranjan.net/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Ashish Ranjan
                        </a>
                    </p>

                    <p className="note">UrbanCraft Services</p>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default Footer;

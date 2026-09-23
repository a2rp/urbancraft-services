import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

import { FiMenu, FiMoon, FiSun } from "react-icons/fi";

import logo from "../../assets/images/branding/logo.png";

import { Styled } from "./styled";

const THEME_KEY = "urbancraft-ui-theme";

const navigationLinks = [
    {
        label: "Home",
        path: "/",
    },
    {
        label: "About",
        path: "/about",
    },
    {
        label: "Services",
        path: "/services",
    },
    {
        label: "Gallery",
        path: "/gallery",
    },
    {
        label: "Contact",
        path: "/contact",
    },
];

const Header = ({ isMenuOpen = false, onMenuToggle }) => {
    const previousScrollRef = useRef(0);

    const [isHidden, setIsHidden] = useState(false);

    const [isLight, setIsLight] = useState(() => {
        try {
            return window.localStorage.getItem(THEME_KEY) === "light";
        } catch {
            return false;
        }
    });

    useEffect(() => {
        const root = document.documentElement;

        if (isLight) {
            root.setAttribute("data-theme", "light");
        } else {
            root.removeAttribute("data-theme");
        }

        try {
            window.localStorage.setItem(THEME_KEY, isLight ? "light" : "dark");
        } catch {
            // Storage can be unavailable in some browser modes.
        }
    }, [isLight]);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;

            if (currentScroll <= 20 || isMenuOpen) {
                setIsHidden(false);
            } else if (
                currentScroll > previousScrollRef.current &&
                currentScroll > 120
            ) {
                setIsHidden(true);
            } else if (currentScroll < previousScrollRef.current) {
                setIsHidden(false);
            }

            previousScrollRef.current = Math.max(currentScroll, 0);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isMenuOpen]);

    const handleThemeToggle = () => {
        setIsLight((current) => !current);
    };

    return (
        <Styled.Wrapper className={isHidden ? "headerHidden" : ""}>
            <div className="container">
                <NavLink
                    to="/"
                    className="brand"
                    aria-label="UrbanCraft Services home"
                >
                    <img
                        className="brandLogo"
                        src={logo}
                        alt=""
                        aria-hidden="true"
                    />

                    <span className="brandContent">
                        <strong className="brandName">UrbanCraft</strong>

                        <span className="brandText">Services</span>
                    </span>
                </NavLink>

                <nav className="navigation" aria-label="Main navigation">
                    {navigationLinks.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            end={item.path === "/"}
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </nav>

                <div className="actions">
                    <button
                        className="themeButton"
                        type="button"
                        onClick={handleThemeToggle}
                        aria-label={
                            isLight ? "Use dark theme" : "Use light theme"
                        }
                        title={isLight ? "Dark theme" : "Light theme"}
                    >
                        {isLight ? (
                            <FiMoon aria-hidden="true" />
                        ) : (
                            <FiSun aria-hidden="true" />
                        )}
                    </button>

                    <button
                        className="menuButton"
                        type="button"
                        onClick={onMenuToggle}
                        aria-label={
                            isMenuOpen
                                ? "Close navigation menu"
                                : "Open navigation menu"
                        }
                        aria-expanded={isMenuOpen}
                        aria-controls="site-drawer"
                        title={isMenuOpen ? "Close menu" : "Open menu"}
                    >
                        <FiMenu aria-hidden="true" />
                    </button>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default Header;

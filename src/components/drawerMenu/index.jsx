import { useEffect, useRef } from "react";

import { NavLink, useLocation } from "react-router-dom";

import {
    FiHome,
    FiImage,
    FiInfo,
    FiMail,
    FiSettings,
    FiX,
} from "react-icons/fi";

import { NAVIGATION_LINKS } from "../../data/navigationLinks";

import { Styled } from "./styled";

const iconMap = {
    home: <FiHome aria-hidden="true" />,
    about: <FiInfo aria-hidden="true" />,
    services: <FiSettings aria-hidden="true" />,
    gallery: <FiImage aria-hidden="true" />,
    contact: <FiMail aria-hidden="true" />,
};

const DrawerMenu = ({ isOpen, onClose }) => {
    const location = useLocation();

    const closeButtonRef = useRef(null);
    const previousFocusedRef = useRef(null);

    useEffect(() => {
        if (!isOpen) {
            return undefined;
        }

        previousFocusedRef.current = document.activeElement;

        const previousOverflow = document.body.style.overflow;

        document.body.style.overflow = "hidden";

        window.requestAnimationFrame(() => {
            closeButtonRef.current?.focus();
        });

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;

            document.removeEventListener("keydown", handleKeyDown);

            previousFocusedRef.current?.focus?.();
        };
    }, [isOpen, onClose]);

    useEffect(() => {
        onClose();
    }, [location.pathname, onClose]);

    if (!isOpen) {
        return null;
    }

    return (
        <Styled.Wrapper id="site-drawer">
            <button
                className="backdrop"
                type="button"
                onClick={onClose}
                aria-label="Close navigation menu"
            />

            <aside
                className="panel"
                role="dialog"
                aria-modal="true"
                aria-label="Site navigation"
            >
                <div className="header">
                    <div>
                        <span className="label">Navigation</span>

                        <strong className="title">UrbanCraft</strong>
                    </div>

                    <button
                        ref={closeButtonRef}
                        className="closeButton"
                        type="button"
                        onClick={onClose}
                        aria-label="Close navigation menu"
                        title="Close menu"
                    >
                        <FiX aria-hidden="true" />
                    </button>
                </div>

                <nav className="navigation" aria-label="Mobile navigation">
                    {NAVIGATION_LINKS.map((item) => (
                        <NavLink
                            key={item.id}
                            to={item.path}
                            end={item.path === "/"}
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                            onClick={onClose}
                        >
                            <span className="icon">{iconMap[item.id]}</span>

                            <span className="text">{item.label}</span>
                        </NavLink>
                    ))}
                </nav>

                <div className="bottom">
                    <p>Thoughtful local services for modern urban living.</p>
                </div>
            </aside>
        </Styled.Wrapper>
    );
};

export default DrawerMenu;

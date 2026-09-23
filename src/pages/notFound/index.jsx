import { NavLink } from "react-router-dom";

import { FiArrowLeft, FiHome, FiMail } from "react-icons/fi";

import { Styled } from "./styled";

const NotFound = () => {
    return (
        <Styled.Wrapper>
            <div className="container">
                <span className="code">404</span>

                <p className="label">Page Not Found</p>

                <h1>This page is not part of the UrbanCraft neighbourhood.</h1>

                <p className="text">
                    The address may have changed, the page may have moved, or
                    the link may be incorrect.
                </p>

                <div className="actions">
                    <NavLink className="primaryButton" to="/">
                        <FiHome aria-hidden="true" />
                        Back to Home
                    </NavLink>

                    <NavLink className="secondaryButton" to="/contact">
                        <FiMail aria-hidden="true" />
                        Contact
                    </NavLink>
                </div>

                <div className="hint">
                    <FiArrowLeft aria-hidden="true" />
                    Use the navigation above to continue exploring.
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default NotFound;

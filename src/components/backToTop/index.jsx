import { useEffect, useState } from "react";

import { FiArrowUp } from "react-icons/fi";

import { Styled } from "./styled";

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 500);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    };

    return (
        <Styled.Wrapper
            className={isVisible ? "visible" : ""}
            type="button"
            onClick={handleClick}
            aria-label="Back to top"
            title="Back to top"
        >
            <FiArrowUp aria-hidden="true" />
        </Styled.Wrapper>
    );
};

export default BackToTop;

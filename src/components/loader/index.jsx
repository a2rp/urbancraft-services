import { Styled } from "./styled";

const Loader = ({ compact = false }) => {
    return (
        <Styled.Wrapper
            className={compact ? "compact" : ""}
            role="status"
            aria-label="Loading"
        >
            <span className="spinner" aria-hidden="true" />
        </Styled.Wrapper>
    );
};

export default Loader;

import { useEffect, useState } from "react";
import { FiImage } from "react-icons/fi";

import Loader from "../loader";

import { Styled } from "./styled";

const ImageWithLoader = ({
    src,
    alt,
    className = "",
    loading = "lazy",
    fetchPriority = "auto",
    onLoad,
    onError,
}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        setIsLoaded(false);
        setHasError(false);
    }, [src]);

    const handleLoad = (event) => {
        setIsLoaded(true);
        setHasError(false);

        onLoad?.(event);
    };

    const handleError = (event) => {
        setIsLoaded(false);
        setHasError(true);

        onError?.(event);
    };

    return (
        <Styled.Wrapper className={className}>
            {!isLoaded && !hasError && (
                <div className="loaderWrapper">
                    <Loader compact />
                </div>
            )}

            {hasError && (
                <div
                    className="errorState"
                    role="img"
                    aria-label={`Unable to display ${alt}`}
                >
                    <FiImage aria-hidden="true" />
                </div>
            )}

            {!hasError && (
                <img
                    className={`image ${isLoaded ? "loaded" : ""}`}
                    src={src}
                    alt={alt}
                    loading={loading}
                    fetchPriority={fetchPriority}
                    onLoad={handleLoad}
                    onError={handleError}
                />
            )}
        </Styled.Wrapper>
    );
};

export default ImageWithLoader;

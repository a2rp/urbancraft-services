import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        position: relative;

        width: 100%;
        min-height: 160px;

        overflow: hidden;

        background: var(--color-card);

        .loaderWrapper,
        .errorState {
            position: absolute;
            inset: 0;
            z-index: 2;

            display: grid;
            place-items: center;

            background: var(--color-card);
        }

        .errorState {
            color: var(--color-text);

            svg {
                width: 28px;
                height: 28px;

                opacity: 0.45;
            }
        }

        .image {
            display: block;

            width: 100%;
            height: 100%;

            object-fit: cover;

            opacity: 0;

            transition: opacity 220ms ease;
        }

        .image.loaded {
            opacity: 1;
        }

        @media (prefers-reduced-motion: reduce) {
            .image {
                transition: none;
            }
        }
    `,
};

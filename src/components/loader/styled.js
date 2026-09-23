import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        display: grid;
        place-items: center;

        width: 100%;
        min-height: calc(100vh - 160px);

        background: var(--color-bg);

        .spinner {
            width: 42px;
            height: 42px;

            border: 3px solid var(--color-border);
            border-top-color: var(--accent);
            border-radius: 50%;

            animation: loaderRotate 0.7s linear infinite;
        }

        &.compact {
            min-height: 100%;
            background: transparent;

            .spinner {
                width: 30px;
                height: 30px;

                border-width: 2px;
            }
        }

        @keyframes loaderRotate {
            to {
                transform: rotate(360deg);
            }
        }

        @media (prefers-reduced-motion: reduce) {
            .spinner {
                animation-duration: 1.4s;
            }
        }
    `,
};

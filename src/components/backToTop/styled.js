import styled from "styled-components";

export const Styled = {
    Wrapper: styled.button`
        position: fixed;
        right: 22px;
        bottom: 22px;
        z-index: 900;

        display: grid;
        place-items: center;

        width: 46px;
        height: 46px;

        padding: 0;

        color: var(--color-heading);
        background: var(--color-card);

        border: 1px solid var(--color-border-strong);
        border-radius: 10px;

        box-shadow: var(--shadow-md);

        opacity: 0;
        visibility: hidden;
        pointer-events: none;

        cursor: pointer;

        transition:
            opacity 180ms ease,
            visibility 180ms ease,
            border-color 180ms ease,
            box-shadow 180ms ease;

        &.visible {
            opacity: 1;
            visibility: visible;
            pointer-events: auto;
        }

        svg {
            width: 16px;
            height: 16px;
        }

        &:hover {
            border-color: var(--accent-border);

            box-shadow:
                var(--shadow-md),
                0 0 0 2px var(--accent-soft);
        }

        &:focus-visible {
            outline: 2px solid var(--accent);
            outline-offset: 3px;
        }

        @media (max-width: 600px) {
            right: 14px;
            bottom: 14px;

            width: 44px;
            height: 44px;
        }
    `,
};

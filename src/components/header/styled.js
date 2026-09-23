import styled from "styled-components";

export const Styled = {
    Wrapper: styled.header`
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1000;

        width: 100%;

        background: color-mix(in srgb, var(--color-bg) 92%, transparent);

        border-bottom: 1px solid var(--color-border);

        backdrop-filter: blur(16px);

        transform: translateY(0);

        transition:
            transform 220ms ease,
            border-color 180ms ease,
            box-shadow 180ms ease;

        &.headerHidden {
            transform: translateY(-100%);
        }

        .container {
            display: flex;
            align-items: center;
            gap: 28px;

            width: min(1240px, calc(100% - 40px));
            min-height: 76px;

            margin: 0 auto;
        }

        .brand {
            display: flex;
            align-items: center;
            gap: 11px;

            flex-shrink: 0;

            margin-right: auto;

            color: var(--color-heading);

            text-decoration: none;

            border-radius: 10px;

            transition:
                box-shadow 180ms ease,
                text-shadow 180ms ease;
        }

        .brand:hover {
            text-shadow: 0 0 14px var(--accent-soft);
        }

        .brand:focus-visible {
            outline: 2px solid var(--accent);
            outline-offset: 4px;
        }

        .brandLogo {
            width: 44px;
            height: 44px;

            padding: 3px;

            object-fit: cover;

            background: var(--color-card);

            border: 1px solid var(--color-border);
            border-radius: 10px;
        }

        .brandContent {
            display: block;
        }

        .brandName {
            display: block;

            color: var(--color-heading);

            font-size: 0.88rem;
            font-weight: 800;
            line-height: 1.15;
        }

        .brandText {
            display: block;

            margin-top: 3px;

            color: var(--color-text);

            font-size: 0.58rem;
            font-weight: 700;
            letter-spacing: 0.12em;
            text-transform: uppercase;
        }

        .navigation {
            display: flex;
            align-items: center;
            gap: 3px;
        }

        .navigation a {
            min-height: 40px;

            padding: 10px 11px;

            color: var(--color-text);

            border: 1px solid transparent;
            border-radius: 8px;

            font-size: 0.7rem;
            font-weight: 700;

            text-decoration: none;

            transition:
                border-color 180ms ease,
                box-shadow 180ms ease,
                text-shadow 180ms ease;
        }

        .navigation a:hover {
            border-color: var(--color-border-strong);

            box-shadow: var(--shadow-sm);

            text-shadow: 0 0 10px var(--accent-soft);
        }

        .navigation a.active {
            color: var(--color-heading);

            border-color: var(--accent-border);

            text-shadow: 0 0 10px var(--accent-soft);
        }

        .navigation a:focus-visible {
            outline: 2px solid var(--accent);
            outline-offset: 2px;
        }

        .actions {
            display: flex;
            align-items: center;
            gap: 7px;
        }

        .themeButton,
        .menuButton {
            display: grid;
            place-items: center;

            width: 42px;
            height: 42px;

            padding: 0;

            color: var(--color-text);
            background: var(--color-card);

            border: 1px solid var(--color-border);
            border-radius: 9px;

            cursor: pointer;

            transition:
                border-color 180ms ease,
                box-shadow 180ms ease,
                text-shadow 180ms ease;
        }

        .themeButton svg,
        .menuButton svg {
            width: 17px;
            height: 17px;
        }

        .themeButton:hover,
        .menuButton:hover {
            border-color: var(--accent-border);

            box-shadow: var(--shadow-sm);

            text-shadow: 0 0 10px var(--accent-soft);
        }

        .themeButton:focus-visible,
        .menuButton:focus-visible {
            outline: 2px solid var(--accent);
            outline-offset: 3px;
        }

        .menuButton {
            display: none;
        }

        @media (max-width: 900px) {
            .navigation {
                display: none;
            }

            .menuButton {
                display: grid;
            }
        }

        @media (max-width: 520px) {
            .container {
                width: calc(100% - 28px);
                min-height: 70px;

                gap: 12px;
            }

            .brandLogo {
                width: 40px;
                height: 40px;
            }

            .brandText {
                display: none;
            }

            .themeButton,
            .menuButton {
                width: 40px;
                height: 40px;
            }
        }
    `,
};

import styled from "styled-components";

export const Styled = {
    Wrapper: styled.footer`
        width: 100%;

        padding: 48px 24px 24px;

        color: var(--color-text);
        background: var(--color-bg);

        border-top: 1px solid var(--color-border);

        .container {
            width: min(1240px, 100%);

            margin: 0 auto;
        }

        .top {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 40px;

            padding-bottom: 30px;
        }

        .brand {
            display: flex;
            align-items: center;
            gap: 14px;

            max-width: 520px;
        }

        .logo {
            width: 52px;
            height: 52px;

            flex-shrink: 0;

            padding: 4px;

            object-fit: cover;

            background: var(--color-card);

            border: 1px solid var(--color-border);
            border-radius: 11px;
        }

        .title {
            display: block;

            color: var(--color-heading);

            font-size: 0.95rem;
            font-weight: 800;
        }

        .text {
            max-width: 440px;

            margin: 6px 0 0;

            color: var(--color-text);

            font-size: 0.7rem;
            line-height: 1.7;

            opacity: 0.7;
        }

        .links {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            flex-wrap: wrap;
            gap: 7px;
        }

        .links a {
            display: grid;
            place-items: center;

            width: 40px;
            height: 40px;

            color: var(--color-text);

            border: 1px solid var(--color-border);
            border-radius: 9px;

            text-decoration: none;

            transition:
                border-color 180ms ease,
                box-shadow 180ms ease,
                text-shadow 180ms ease;
        }

        .links a svg {
            width: 14px;
            height: 14px;
        }

        .links a:hover {
            border-color: var(--accent-border);

            box-shadow: var(--shadow-sm);

            text-shadow: 0 0 10px var(--accent-soft);
        }

        .links a:focus-visible {
            outline: 2px solid var(--accent);
            outline-offset: 3px;
        }

        .bottom {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 20px;

            padding-top: 20px;

            border-top: 1px solid var(--color-border-soft);
        }

        .bottom p {
            margin: 0;

            color: var(--color-text);

            font-size: 0.68rem;
            line-height: 1.6;

            opacity: 0.72;
        }

        .bottom a {
            color: var(--color-heading);

            text-decoration: none;

            border-bottom: 1px solid transparent;

            transition:
                border-color 180ms ease,
                text-shadow 180ms ease;
        }

        .bottom a:hover {
            border-color: var(--accent);

            text-shadow: 0 0 10px var(--accent-soft);
        }

        .bottom a:focus-visible {
            outline: 2px solid var(--accent);
            outline-offset: 3px;
        }

        @media (max-width: 760px) {
            padding: 42px 18px 22px;

            .top {
                align-items: flex-start;
                flex-direction: column;

                gap: 26px;
            }

            .links {
                justify-content: flex-start;
            }
        }

        @media (max-width: 520px) {
            padding-inline: 14px;

            .brand {
                align-items: flex-start;
            }

            .bottom {
                align-items: flex-start;
                flex-direction: column;

                gap: 6px;
            }

            .note {
                display: none;
            }
        }
    `,
};

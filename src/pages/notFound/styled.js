import styled from "styled-components";

export const Styled = {
    Wrapper: styled.main`
        display: grid;
        place-items: center;

        min-height: 100vh;

        padding: 130px 20px 80px;

        color: var(--color-text, #b8b0a6);
        background:
            radial-gradient(
                circle at center,
                var(--accent-soft, rgba(201, 154, 89, 0.08)),
                transparent 35%
            ),
            var(--color-bg, #0b0a08);

        text-align: center;

        .container {
            width: min(800px, 100%);
        }

        .code {
            display: block;

            color: var(--accent, #c99a59);

            font-size: clamp(6rem, 20vw, 13rem);
            font-weight: 900;
            letter-spacing: -0.09em;
            line-height: 0.8;

            opacity: 0.2;
        }

        .label {
            margin: 28px 0 0;

            color: var(--accent, #c99a59);

            font-size: 0.63rem;
            font-weight: 800;
            letter-spacing: 0.13em;
            text-transform: uppercase;
        }

        h1 {
            margin: 12px auto 0;

            color: var(--color-heading, #f3ede4);

            font-size: clamp(2.2rem, 6vw, 4.8rem);
            font-weight: 800;
            letter-spacing: -0.055em;
            line-height: 1;
        }

        .text {
            max-width: 610px;

            margin: 22px auto 0;

            font-size: 0.76rem;
            line-height: 1.85;
        }

        .actions {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 9px;

            margin-top: 30px;
        }

        .primaryButton,
        .secondaryButton {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;

            min-height: 46px;

            padding: 9px 14px;

            border-radius: 9px;

            font-size: 0.68rem;
            font-weight: 800;

            text-decoration: none;

            transition:
                border-color 180ms ease,
                box-shadow 180ms ease;
        }

        .primaryButton {
            color: #16110b;
            background: var(--accent, #c99a59);

            border: 1px solid var(--accent, #c99a59);
        }

        .secondaryButton {
            color: var(--color-heading, #f3ede4);
            background: transparent;

            border: 1px solid var(--color-border-strong, #51493f);
        }

        .primaryButton:hover,
        .secondaryButton:hover {
            border-color: var(--color-heading, #ffffff);

            box-shadow: var(--shadow-md, 0 12px 30px rgba(0, 0, 0, 0.22));
        }

        .primaryButton:focus-visible,
        .secondaryButton:focus-visible {
            outline: 2px solid var(--accent, #c99a59);
            outline-offset: 3px;
        }

        .hint {
            display: inline-flex;
            align-items: center;
            gap: 8px;

            margin-top: 32px;

            font-size: 0.62rem;

            opacity: 0.65;
        }

        @media (max-width: 520px) {
            .actions {
                display: grid;
            }

            .primaryButton,
            .secondaryButton {
                width: 100%;
            }
        }
    `,
};

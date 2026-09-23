import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        color: var(--color-text, #b8b0a6);
        background: var(--color-bg, #0b0a08);

        .container {
            width: min(1240px, calc(100% - 40px));
            margin: 0 auto;
        }

        .label {
            margin: 0;

            color: var(--accent, #c99a59);

            font-size: 0.64rem;
            font-weight: 800;
            letter-spacing: 0.13em;
            text-transform: uppercase;
        }

        .hero {
            padding: 150px 0 95px;

            border-bottom: 1px solid var(--color-border, #29251f);
        }

        .heroGrid {
            display: grid;
            grid-template-columns: 1fr 0.8fr;
            gap: 75px;
            align-items: center;
        }

        .hero h1,
        .story h2,
        .sectionHeader h2,
        .closing h2 {
            margin: 10px 0 0;

            color: var(--color-heading, #f3ede4);

            font-weight: 800;
            letter-spacing: -0.06em;
            line-height: 0.95;
        }

        .hero h1 {
            font-size: clamp(3.5rem, 7vw, 7rem);
        }

        .hero h1 span {
            display: block;

            color: var(--color-text, #92887b);
        }

        .intro {
            max-width: 650px;

            margin: 28px 0 0;

            font-size: 0.82rem;
            line-height: 1.9;
        }

        .heroImage {
            min-height: 560px;

            border: 1px solid var(--color-border, #29251f);
            border-radius: 22px;
        }

        .story {
            padding: 105px 0;

            background: var(--color-card, #12100d);

            border-bottom: 1px solid var(--color-border, #29251f);
        }

        .storyGrid {
            display: grid;
            grid-template-columns: 0.9fr 1fr;
            gap: 80px;
            align-items: center;
        }

        .storyImage {
            min-height: 560px;

            border: 1px solid var(--color-border, #29251f);
            border-radius: 18px;
        }

        .story h2,
        .sectionHeader h2,
        .closing h2 {
            font-size: clamp(2.4rem, 5vw, 4.7rem);
        }

        .storyContent p:not(.label) {
            margin: 20px 0 0;

            font-size: 0.76rem;
            line-height: 1.9;
        }

        .values {
            padding: 100px 0;

            border-bottom: 1px solid var(--color-border, #29251f);
        }

        .sectionHeader {
            max-width: 790px;

            margin-bottom: 32px;
        }

        .valueGrid {
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 12px;
        }

        .valueCard {
            padding: 24px;

            background: var(--color-card, #12100d);

            border: 1px solid var(--color-border, #29251f);
            border-radius: 14px;

            transition:
                border-color 180ms ease,
                box-shadow 180ms ease;
        }

        .valueCard:hover {
            border-color: var(--color-border-strong, #51493f);

            box-shadow: var(--shadow-md, 0 12px 30px rgba(0, 0, 0, 0.2));
        }

        .icon {
            display: grid;
            place-items: center;

            width: 40px;
            height: 40px;

            color: var(--accent, #c99a59);

            border: 1px solid var(--accent-border, #5e472b);
            border-radius: 9px;
        }

        .valueCard h3 {
            margin: 20px 0 0;

            color: var(--color-heading, #f3ede4);

            font-size: 0.86rem;
        }

        .valueCard p {
            margin: 10px 0 0;

            font-size: 0.7rem;
            line-height: 1.75;
        }

        .closing {
            padding: 90px 0;
        }

        .closingGrid {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 50px;
        }

        .closing h2 {
            max-width: 760px;
        }

        .button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;

            flex-shrink: 0;

            min-height: 46px;
            padding: 10px 15px;

            color: #16110b;
            background: var(--accent, #c99a59);

            border: 1px solid var(--accent, #c99a59);
            border-radius: 9px;

            font-size: 0.7rem;
            font-weight: 800;

            text-decoration: none;

            transition:
                border-color 180ms ease,
                box-shadow 180ms ease;
        }

        .button:hover {
            border-color: var(--color-heading, #ffffff);

            box-shadow: var(--shadow-md, 0 12px 30px rgba(0, 0, 0, 0.24));
        }

        .button:focus-visible {
            outline: 2px solid var(--accent, #c99a59);
            outline-offset: 3px;
        }

        @media (max-width: 950px) {
            .heroGrid,
            .storyGrid {
                grid-template-columns: 1fr;
            }

            .valueGrid {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (max-width: 760px) {
            .container {
                width: calc(100% - 28px);
            }

            .hero {
                padding: 125px 0 75px;
            }

            .story,
            .values {
                padding: 75px 0;
            }

            .heroImage,
            .storyImage {
                min-height: 430px;
            }

            .closingGrid {
                align-items: flex-start;
                flex-direction: column;
            }
        }

        @media (max-width: 520px) {
            .valueGrid {
                grid-template-columns: 1fr;
            }

            .hero h1 {
                font-size: clamp(3.1rem, 15vw, 5.2rem);
            }
        }
    `,
};

import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        width: 100%;

        color: var(--color-text, #b8b0a6);
        background: var(--color-bg, #0b0a08);

        .container {
            width: min(1240px, calc(100% - 40px));
            margin: 0 auto;
        }

        .hero {
            min-height: 100vh;

            padding: 150px 0 90px;

            background:
                radial-gradient(
                    circle at 15% 15%,
                    var(--accent-soft, rgba(201, 154, 89, 0.1)),
                    transparent 34%
                ),
                var(--color-bg, #0b0a08);

            border-bottom: 1px solid var(--color-border, #29251f);
        }

        .heroGrid {
            display: grid;
            grid-template-columns:
                minmax(0, 1.1fr)
                minmax(380px, 0.9fr);
            gap: 70px;
            align-items: center;
        }

        .label,
        .sectionLabel {
            color: var(--accent, #c99a59);

            font-size: 0.65rem;
            font-weight: 800;
            letter-spacing: 0.13em;
            text-transform: uppercase;
        }

        .label {
            display: inline-flex;
            align-items: center;
            gap: 8px;

            margin-bottom: 18px;
        }

        .dot {
            width: 7px;
            height: 7px;

            background: var(--accent, #c99a59);

            border-radius: 50%;
        }

        .hero h1 {
            max-width: 760px;

            margin: 0;

            color: var(--color-heading, #f3ede4);

            font-size: clamp(3.8rem, 8vw, 7.8rem);
            font-weight: 800;
            letter-spacing: -0.065em;
            line-height: 0.9;
        }

        .hero h1 span {
            display: block;
            color: var(--color-text, #958b7e);
        }

        .heroText {
            max-width: 650px;

            margin: 28px 0 0;

            font-size: 0.84rem;
            line-height: 1.9;
        }

        .heroActions {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;

            margin-top: 32px;
        }

        .primaryButton,
        .secondaryButton,
        .textLink {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;

            text-decoration: none;

            transition:
                border-color 180ms ease,
                box-shadow 180ms ease,
                text-shadow 180ms ease;
        }

        .primaryButton,
        .secondaryButton {
            min-height: 47px;
            padding: 10px 15px;

            border-radius: 9px;

            font-size: 0.7rem;
            font-weight: 800;
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
            border-color: var(--color-heading, #f3ede4);
            box-shadow: var(--shadow-md, 0 12px 30px rgba(0, 0, 0, 0.24));
        }

        .primaryButton:focus-visible,
        .secondaryButton:focus-visible,
        .textLink:focus-visible {
            outline: 2px solid var(--accent, #c99a59);
            outline-offset: 3px;
        }

        .highlights {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 9px;

            margin-top: 45px;
        }

        .highlight {
            display: flex;
            align-items: center;
            gap: 12px;

            min-height: 82px;

            padding: 14px;

            background: var(--color-card, #12100d);

            border: 1px solid var(--color-border, #29251f);
            border-radius: 11px;
        }

        .highlightIcon {
            display: grid;
            place-items: center;

            width: 34px;
            height: 34px;

            flex-shrink: 0;

            color: var(--accent, #c99a59);

            border: 1px solid var(--accent-border, #5e472b);
            border-radius: 8px;
        }

        .highlight strong {
            display: block;

            color: var(--color-heading, #f3ede4);

            font-size: 0.83rem;
        }

        .highlight span:last-child {
            display: block;

            margin-top: 4px;

            font-size: 0.58rem;
            line-height: 1.5;
        }

        .heroVisual {
            position: relative;
        }

        .heroImage {
            min-height: 620px;

            border: 1px solid var(--color-border, #29251f);
            border-radius: 24px;
        }

        .heroCard {
            position: absolute;
            right: 22px;
            bottom: 22px;

            display: flex;
            align-items: center;
            gap: 12px;

            max-width: 330px;

            padding: 16px;

            background: color-mix(
                in srgb,
                var(--color-card, #12100d) 92%,
                transparent
            );

            border: 1px solid var(--color-border-strong, #51493f);
            border-radius: 12px;

            backdrop-filter: blur(12px);
        }

        .heroCard > svg {
            flex-shrink: 0;

            width: 20px;
            height: 20px;

            color: var(--accent, #c99a59);
        }

        .heroCard strong {
            display: block;

            color: var(--color-heading, #f3ede4);

            font-size: 0.72rem;
            line-height: 1.5;
        }

        .heroCard span {
            display: block;

            margin-top: 4px;

            font-size: 0.6rem;
            line-height: 1.5;
        }

        .section {
            padding: 100px 0;

            border-bottom: 1px solid var(--color-border, #29251f);
        }

        .sectionHeader {
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            gap: 40px;

            margin-bottom: 32px;
        }

        .sectionHeader h2,
        .experienceGrid h2,
        .cta h2 {
            max-width: 760px;

            margin: 8px 0 0;

            color: var(--color-heading, #f3ede4);

            font-size: clamp(2.2rem, 5vw, 4.6rem);
            font-weight: 800;
            letter-spacing: -0.055em;
            line-height: 0.98;
        }

        .textLink {
            flex-shrink: 0;

            color: var(--color-heading, #f3ede4);

            border-bottom: 1px solid var(--color-border-strong, #51493f);

            font-size: 0.68rem;
            font-weight: 700;
        }

        .textLink:hover {
            border-color: var(--accent, #c99a59);
            text-shadow: 0 0 10px var(--accent-soft, rgba(201, 154, 89, 0.12));
        }

        .serviceGrid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 14px;
        }

        .serviceCard {
            overflow: hidden;

            background: var(--color-card, #12100d);

            border: 1px solid var(--color-border, #29251f);
            border-radius: 16px;

            transition:
                border-color 180ms ease,
                box-shadow 180ms ease;
        }

        .serviceCard:hover {
            border-color: var(--color-border-strong, #51493f);

            box-shadow: var(--shadow-md, 0 12px 30px rgba(0, 0, 0, 0.22));
        }

        .serviceImage {
            min-height: 230px;

            border-bottom: 1px solid var(--color-border, #29251f);
        }

        .serviceContent {
            padding: 22px;
        }

        .serviceIcon {
            display: grid;
            place-items: center;

            width: 38px;
            height: 38px;

            color: var(--accent, #c99a59);

            border: 1px solid var(--accent-border, #5e472b);
            border-radius: 9px;
        }

        .serviceContent h3 {
            margin: 18px 0 0;

            color: var(--color-heading, #f3ede4);

            font-size: 1rem;
        }

        .serviceContent p {
            margin: 9px 0 0;

            font-size: 0.72rem;
            line-height: 1.75;
        }

        .experienceSection {
            padding: 105px 0;

            background: var(--color-card, #12100d);

            border-bottom: 1px solid var(--color-border, #29251f);
        }

        .experienceGrid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 80px;
        }

        .experienceContent {
            display: grid;
            align-content: center;
            gap: 18px;
        }

        .experienceContent p {
            margin: 0;

            font-size: 0.76rem;
            line-height: 1.9;
        }

        .experienceContent .textLink {
            width: fit-content;
            margin-top: 6px;
        }

        .galleryGrid {
            display: grid;
            grid-template-columns: 1.2fr 0.8fr 0.8fr;
            gap: 12px;
        }

        .galleryImage {
            min-height: 420px;

            border: 1px solid var(--color-border, #29251f);
            border-radius: 16px;
        }

        .ctaSection {
            padding: 90px 0;
        }

        .cta {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 50px;

            padding: 45px;

            background: var(--color-card, #12100d);

            border: 1px solid var(--color-border, #29251f);
            border-radius: 18px;
        }

        .cta h2 {
            max-width: 800px;
            font-size: clamp(2rem, 4vw, 3.7rem);
        }

        @media (max-width: 1000px) {
            .heroGrid {
                grid-template-columns: 1fr;
            }

            .heroImage {
                min-height: 520px;
            }

            .serviceGrid {
                grid-template-columns: repeat(2, 1fr);
            }

            .galleryGrid {
                grid-template-columns: 1fr 1fr;
            }

            .galleryImage:first-child {
                grid-column: 1 / -1;
            }
        }

        @media (max-width: 760px) {
            .container {
                width: calc(100% - 28px);
            }

            .hero {
                min-height: auto;

                padding: 125px 0 70px;
            }

            .hero h1 {
                font-size: clamp(3.3rem, 16vw, 5.8rem);
            }

            .section,
            .experienceSection {
                padding: 75px 0;
            }

            .sectionHeader,
            .cta {
                align-items: flex-start;
                flex-direction: column;
            }

            .experienceGrid {
                grid-template-columns: 1fr;
                gap: 35px;
            }

            .cta {
                padding: 28px;
            }
        }

        @media (max-width: 560px) {
            .highlights,
            .serviceGrid,
            .galleryGrid {
                grid-template-columns: 1fr;
            }

            .galleryImage:first-child {
                grid-column: auto;
            }

            .heroImage {
                min-height: 420px;
            }

            .heroCard {
                right: 12px;
                bottom: 12px;
                left: 12px;

                max-width: none;
            }

            .heroActions {
                display: grid;
            }

            .primaryButton,
            .secondaryButton {
                width: 100%;
            }
        }
    `,
};

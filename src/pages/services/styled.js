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
            padding: 150px 0 90px;

            border-bottom: 1px solid var(--color-border, #29251f);
        }

        .heroGrid {
            display: grid;
            grid-template-columns: 1fr 0.8fr;
            gap: 70px;
            align-items: center;
        }

        .hero h1,
        .sectionHeader h2,
        .support h2 {
            margin: 10px 0 0;

            color: var(--color-heading, #f3ede4);

            font-weight: 800;
            letter-spacing: -0.06em;
            line-height: 0.96;
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

            margin: 26px 0 0;

            font-size: 0.82rem;
            line-height: 1.9;
        }

        .heroImage {
            min-height: 540px;

            border: 1px solid var(--color-border, #29251f);
            border-radius: 22px;
        }

        .stats {
            padding: 20px 0;

            background: var(--color-card, #12100d);

            border-bottom: 1px solid var(--color-border, #29251f);
        }

        .statsGrid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
        }

        .stat {
            display: flex;
            align-items: center;
            gap: 14px;

            padding: 18px;

            border: 1px solid var(--color-border, #29251f);
            border-radius: 11px;
        }

        .icon {
            display: grid;
            place-items: center;

            width: 40px;
            height: 40px;

            flex-shrink: 0;

            color: var(--accent, #c99a59);

            border: 1px solid var(--accent-border, #5e472b);
            border-radius: 9px;
        }

        .stat strong {
            color: var(--color-heading, #f3ede4);
            font-size: 1rem;
        }

        .stat p {
            margin: 3px 0 0;
            font-size: 0.62rem;
        }

        .services,
        .addons,
        .faq {
            padding: 100px 0;

            border-bottom: 1px solid var(--color-border, #29251f);
        }

        .sectionHeader {
            max-width: 820px;
            margin-bottom: 34px;
        }

        .sectionHeader h2,
        .support h2 {
            font-size: clamp(2.4rem, 5vw, 4.8rem);
        }

        .serviceList {
            display: grid;
            gap: 16px;
        }

        .serviceCard {
            display: grid;
            grid-template-columns: minmax(320px, 0.9fr) 1fr;

            overflow: hidden;

            background: var(--color-card, #12100d);

            border: 1px solid var(--color-border, #29251f);
            border-radius: 16px;
        }

        .serviceCard:nth-child(even) {
            grid-template-columns: 1fr minmax(320px, 0.9fr);
        }

        .serviceCard:nth-child(even) .serviceImage {
            order: 2;
        }

        .serviceImage {
            min-height: 390px;
        }

        .serviceContent {
            display: flex;
            flex-direction: column;
            justify-content: center;

            padding: 34px;
        }

        .serviceTop {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 15px;
        }

        .badge {
            padding: 6px 8px;

            color: var(--accent, #c99a59);

            border: 1px solid var(--accent-border, #5e472b);
            border-radius: 7px;

            font-size: 0.55rem;
            font-weight: 800;
            letter-spacing: 0.06em;
            text-transform: uppercase;
        }

        .serviceContent h3 {
            margin: 24px 0 0;

            color: var(--color-heading, #f3ede4);

            font-size: 1.5rem;
            letter-spacing: -0.035em;
        }

        .tagline {
            margin: 7px 0 0;

            color: var(--accent, #c99a59);

            font-size: 0.72rem;
            font-weight: 700;
        }

        .details {
            margin: 15px 0 0;

            font-size: 0.74rem;
            line-height: 1.8;
        }

        .serviceContent ul {
            display: grid;
            gap: 8px;

            margin: 19px 0 0;
            padding: 0;

            list-style: none;
        }

        .serviceContent li {
            position: relative;

            padding-left: 16px;

            font-size: 0.67rem;
            line-height: 1.7;
        }

        .serviceContent li::before {
            position: absolute;
            top: 0.72em;
            left: 0;

            width: 5px;
            height: 5px;

            content: "";

            background: var(--accent, #c99a59);

            border-radius: 50%;
        }

        .addons {
            background: var(--color-card, #12100d);
        }

        .addonGrid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 12px;
        }

        .addonCard {
            padding: 23px;

            background: var(--color-bg, #0b0a08);

            border: 1px solid var(--color-border, #29251f);
            border-radius: 13px;
        }

        .addonCard h3 {
            margin: 20px 0 0;

            color: var(--color-heading, #f3ede4);

            font-size: 0.84rem;
        }

        .addonCard p {
            margin: 9px 0 0;

            font-size: 0.68rem;
            line-height: 1.75;
        }

        .support {
            padding: 105px 0;

            border-bottom: 1px solid var(--color-border, #29251f);
        }

        .supportGrid {
            display: grid;
            grid-template-columns: 1fr 0.9fr;
            gap: 80px;
            align-items: center;
        }

        .support p:not(.label) {
            max-width: 650px;

            margin: 22px 0 0;

            font-size: 0.76rem;
            line-height: 1.9;
        }

        .supportImage {
            min-height: 480px;

            border: 1px solid var(--color-border, #29251f);
            border-radius: 18px;
        }

        .faqGrid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
        }

        .faqCard {
            padding: 24px;

            background: var(--color-card, #12100d);

            border: 1px solid var(--color-border, #29251f);
            border-radius: 13px;
        }

        .faqCard h3 {
            color: var(--color-heading, #f3ede4);

            font-size: 0.82rem;
            line-height: 1.5;
        }

        .faqCard p {
            margin: 10px 0 0;

            font-size: 0.7rem;
            line-height: 1.8;
        }

        @media (max-width: 980px) {
            .heroGrid,
            .supportGrid {
                grid-template-columns: 1fr;
            }

            .serviceCard,
            .serviceCard:nth-child(even) {
                grid-template-columns: 1fr;
            }

            .serviceCard:nth-child(even) .serviceImage {
                order: 0;
            }

            .addonGrid {
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

            .services,
            .addons,
            .support,
            .faq {
                padding: 75px 0;
            }

            .statsGrid {
                grid-template-columns: 1fr;
            }

            .faqGrid {
                grid-template-columns: 1fr;
            }
        }

        @media (max-width: 520px) {
            .addonGrid {
                grid-template-columns: 1fr;
            }

            .serviceContent {
                padding: 22px;
            }

            .serviceImage,
            .supportImage,
            .heroImage {
                min-height: 390px;
            }
        }
    `,
};

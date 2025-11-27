// src/pages/home/styled.js
import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        width: 100%;
        padding: 36px 16px 60px;
        background: radial-gradient(
                circle at top,
                rgba(201, 169, 106, 0.08),
                transparent 60%
            ),
            var(--color-bg);
        color: var(--color-text);
    `,

    Inner: styled.div`
        width: 100%;
        max-width: 1160px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 24px;
    `,

    Hero: styled.div`
        display: grid;
        grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
        gap: 24px;
        align-items: stretch;

        @media (max-width: 960px) {
            grid-template-columns: minmax(0, 1fr);
        }
    `,

    HeroText: styled.div`
        display: flex;
        flex-direction: column;
        gap: 16px;
    `,

    Pill: styled.div`
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 4px 10px;
        border-radius: 999px;
        background: var(--accent-soft);
        border: 1px solid var(--accent-border);
        font-size: 11px;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        color: var(--color-heading);

        .dot {
            width: 6px;
            height: 6px;
            border-radius: 999px;
            background: var(--accent);
        }
    `,

    Title: styled.h1`
        margin: 0;
        font-size: clamp(24px, 3vw, 30px);
        color: var(--color-heading);
        letter-spacing: 0.06em;
        text-transform: uppercase;
    `,

    Subtitle: styled.p`
        margin: 0;
        font-size: 14px;
        line-height: 1.8;
        max-width: 36rem;
        color: var(--color-text);
        opacity: 0.96;
    `,

    HeroActions: styled.div`
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 4px;

        a {
            text-decoration: none;
            font-size: 12px;
        }

        .primary {
            display: inline-flex;
            align-items: center;
            gap: 7px;
            padding: 8px 14px;
            border-radius: 999px;
            border: 1px solid var(--accent-border);
            background: var(--accent);
            color: #000;
            cursor: pointer;
            box-shadow: 0 14px 30px rgba(0, 0, 0, 0.85);
            transition: transform 0.1s ease-out, box-shadow 0.15s ease-out;

            .icon {
                font-size: 14px;
            }

            &:hover {
                transform: translateY(-1px);
                box-shadow: 0 18px 40px rgba(0, 0, 0, 0.9);
            }

            &:active {
                transform: translateY(0);
                box-shadow: none;
            }
        }

        .ghost {
            display: inline-flex;
            align-items: center;
            gap: 7px;
            padding: 8px 13px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: transparent;
            color: var(--color-heading);
            cursor: pointer;
            transition: background-color 0.15s ease-out,
                border-color 0.15s ease-out, transform 0.1s ease-out;

            .icon {
                font-size: 14px;
            }

            &:hover {
                background: rgba(0, 0, 0, 0.7);
                border-color: var(--accent-border);
                transform: translateY(-1px);
            }

            &:active {
                transform: translateY(0);
            }
        }
    `,

    HeroHighlights: styled.ul`
        list-style: none;
        padding: 0;
        margin: 8px 0 0;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;

        li {
            min-width: 150px;
            padding: 8px 10px;
            border-radius: 14px;
            background: var(--color-card);
            border: 1px solid var(--color-border);
            box-shadow: 0 12px 28px rgba(0, 0, 0, 0.7);
        }

        .label {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.12em;
            color: var(--color-text);
            opacity: 0.85;

            .icon {
                font-size: 13px;
                color: var(--accent);
            }
        }

        .value {
            display: block;
            margin-top: 4px;
            font-size: 14px;
            color: var(--color-heading);
        }
    `,

    HeroVisual: styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
    `,

    ImageWrapper: styled.div`
        position: relative;
        width: 100%;
        max-width: 430px;
        border-radius: 22px;
        overflow: hidden;
        background: var(--color-card-soft);
        border: 1px solid var(--color-border);
        box-shadow: 0 22px 50px rgba(0, 0, 0, 0.9);

        img {
            display: block;
            width: 100%;
            height: 270px;
            object-fit: cover;
            filter: saturate(1.04) contrast(1.03);
        }

        .overlay {
            position: absolute;
            inset: 0;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 10px 12px;
            pointer-events: none;
        }

        .top-chip {
            pointer-events: auto;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 4px 10px;
            border-radius: 999px;
            background: rgba(0, 0, 0, 0.78);
            color: var(--color-heading);
            font-size: 11px;
            backdrop-filter: blur(8px);

            .icon {
                font-size: 13px;
                color: var(--accent);
            }
        }

        .bottom-strip {
            pointer-events: auto;
            padding: 4px 10px;
            border-radius: 14px;
            background: rgba(0, 0, 0, 0.8);
            font-size: 11px;
            color: var(--color-heading);
            backdrop-filter: blur(10px);

            p {
                margin: 0;
            }
        }

        @media (max-width: 960px) {
            max-width: 100%;
        }
    `,

    FallbackBlock: styled.div`
        width: 100%;
        max-width: 430px;
        padding: 20px 18px 18px;
        border-radius: 22px;
        background: linear-gradient(
                135deg,
                rgba(201, 169, 106, 0.12),
                transparent
            ),
            var(--color-card);
        border: 1px dashed var(--accent-border);
        box-shadow: 0 20px 42px rgba(0, 0, 0, 0.85);
        display: flex;
        flex-direction: column;
        gap: 8px;

        .icon-wrap {
            width: 34px;
            height: 34px;
            border-radius: 999px;
            background: var(--accent-soft);
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 4px;

            .icon {
                font-size: 18px;
                color: var(--accent);
            }
        }

        .title {
            margin: 0;
            font-size: 14px;
            font-weight: 500;
            color: var(--color-heading);
        }

        .desc {
            margin: 0;
            font-size: 12px;
            line-height: 1.7;
            color: var(--color-text);
            opacity: 0.96;
        }
    `,

    SectionHeader: styled.header`
        margin-top: 16px;
        padding: 10px 2px 4px;
        display: flex;
        flex-wrap: wrap;
        align-items: flex-end;
        justify-content: space-between;
        gap: 10px;
        border-bottom: 1px solid var(--color-border);

        .left {
            max-width: 480px;
        }

        .eyebrow {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.14em;
            color: var(--color-text);
            opacity: 0.9;
        }

        h2 {
            margin: 4px 0 4px;
            font-size: 16px;
            color: var(--color-heading);
        }

        p {
            margin: 0;
            font-size: 12px;
            color: var(--color-text);
            opacity: 0.9;
        }
    `,

    TodayGrid: styled.div`
        margin-top: 8px;
        display: grid;
        grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
        gap: 14px;

        @media (max-width: 960px) {
            grid-template-columns: minmax(0, 1fr);
        }
    `,

    TodayCard: styled.article`
        border-radius: 16px;
        background: var(--color-card);
        border: 1px solid var(--color-border);
        padding: 10px 11px 9px;
        box-shadow: 0 16px 36px rgba(0, 0, 0, 0.8);
        font-size: 12px;

        .label-row {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            margin-bottom: 6px;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.12em;
            color: var(--color-text);
            opacity: 0.9;

            .icon {
                font-size: 13px;
                color: var(--accent);
            }
        }

        .timeline {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 6px;

            li {
                padding-bottom: 4px;
                border-bottom: 1px dashed var(--color-border);
            }

            li:last-child {
                border-bottom: none;
            }

            .time {
                font-size: 11px;
                text-transform: uppercase;
                letter-spacing: 0.12em;
                color: var(--color-text);
                opacity: 0.85;
            }

            p {
                margin: 2px 0 0;
                font-size: 12px;
                color: var(--color-text);
            }
        }

        .points {
            list-style: none;
            padding: 0;
            margin: 6px 0 0;
            display: flex;
            flex-direction: column;
            gap: 5px;

            li {
                display: flex;
                align-items: flex-start;
                gap: 6px;
            }

            .bullet {
                margin-top: 4px;
                width: 5px;
                height: 5px;
                border-radius: 999px;
                background: var(--accent);
                flex-shrink: 0;
            }

            span {
                color: var(--color-text);
            }
        }

        .note {
            margin: 6px 0 0;
            font-size: 11px;
            color: var(--color-text);
            opacity: 0.9;
        }
    `,

    QuickGrid: styled.div`
        margin-top: 10px;
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 12px;

        a {
            text-decoration: none;
        }

        @media (max-width: 980px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        @media (max-width: 640px) {
            grid-template-columns: minmax(0, 1fr);
        }
    `,

    QuickCard: styled.article`
        border-radius: 16px;
        background: var(--color-card);
        border: 1px solid var(--color-border);
        padding: 10px 11px 9px;
        box-shadow: 0 16px 34px rgba(0, 0, 0, 0.8);
        display: flex;
        flex-direction: column;
        gap: 6px;
        font-size: 12px;
        color: var(--color-text);
        transition: transform 0.12s ease-out, box-shadow 0.16s ease-out,
            border-color 0.16s ease-out, background-color 0.16s ease-out;

        .top-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 2px;
        }

        .tag {
            display: inline-flex;
            align-items: center;
            gap: 5px;
            padding: 3px 8px;
            border-radius: 999px;
            background: var(--accent-soft);
            border: 1px solid var(--accent-border);
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 0.12em;

            .dot {
                width: 5px;
                height: 5px;
                border-radius: 999px;
                background: var(--accent);
            }
        }

        .icon-main {
            font-size: 18px;
            color: var(--accent);
        }

        h3 {
            margin: 0;
            font-size: 13px;
            color: var(--color-heading);
        }

        p {
            margin: 0;
            font-size: 12px;
            color: var(--color-text);
        }

        .cta-row {
            margin-top: 4px;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.12em;
            color: var(--color-text);
            opacity: 0.9;

            .icon-cta {
                font-size: 14px;
            }
        }

        &:hover {
            transform: translateY(-3px);
            box-shadow: 0 22px 50px rgba(0, 0, 0, 0.95);
            border-color: var(--accent-border);
            background: var(--color-card-soft);
        }
    `,

    BottomStrip: styled.section`
        margin-top: 16px;
        padding: 14px 14px 12px;
        border-radius: 18px;
        background: linear-gradient(
                135deg,
                rgba(201, 169, 106, 0.12),
                transparent
            ),
            var(--color-card);
        border: 1px solid var(--accent-border);
        box-shadow: 0 20px 44px rgba(0, 0, 0, 0.9);
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        gap: 14px;

        .left {
            max-width: 460px;
        }

        .eyebrow {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.14em;
            color: var(--color-text);
            opacity: 0.9;
        }

        h2 {
            margin: 4px 0 4px;
            font-size: 16px;
            color: var(--color-heading);
        }

        p {
            margin: 0;
            font-size: 12px;
            color: var(--color-text);
            opacity: 0.9;
        }

        .right {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }

        .pill-link {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 7px 13px;
            border-radius: 999px;
            border: 1px solid var(--accent-border);
            background: var(--accent);
            color: #000;
            font-size: 12px;
            text-decoration: none;
            cursor: pointer;
            transition: transform 0.1s ease-out, box-shadow 0.15s ease-out;

            .icon {
                font-size: 14px;
            }

            &:hover {
                transform: translateY(-1px);
                box-shadow: 0 14px 30px rgba(0, 0, 0, 0.8);
            }

            &:active {
                transform: translateY(0);
                box-shadow: none;
            }

            &.subtle {
                background: transparent;
                color: var(--color-heading);
                border-color: var(--color-border);

                &:hover {
                    background: rgba(0, 0, 0, 0.7);
                    border-color: var(--accent-border);
                }
            }
        }
    `,
};

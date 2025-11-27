// src/pages/gallery/styled.js
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
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 24px;
    `,

    Hero: styled.div`
        display: grid;
        grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
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

    TitleRow: styled.div`
        display: flex;
        flex-wrap: wrap;
        align-items: baseline;
        gap: 14px;

        h1 {
            margin: 0;
            font-size: clamp(24px, 3vw, 30px);
            color: var(--color-heading);
            letter-spacing: 0.06em;
            text-transform: uppercase;
        }

        .badge {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 4px 10px;
            border-radius: 999px;
            background: var(--color-card);
            border: 1px solid var(--color-border);
            font-size: 11px;
            color: var(--color-text);

            .icon {
                font-size: 13px;
                color: var(--accent);
            }
        }
    `,

    HeroSubtitle: styled.p`
        margin: 0;
        font-size: 14px;
        line-height: 1.75;
        max-width: 35rem;
        color: var(--color-text);
        opacity: 0.95;
    `,

    HeroStats: styled.ul`
        list-style: none;
        padding: 0;
        margin: 4px 0 0;
        display: flex;
        flex-wrap: wrap;
        gap: 14px;

        li {
            min-width: 120px;
            padding: 8px 10px;
            border-radius: 12px;
            background: var(--color-card);
            border: 1px solid var(--color-border);
            box-shadow: 0 10px 24px rgba(0, 0, 0, 0.55);
        }

        .label {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.12em;
            color: var(--color-text);
            opacity: 0.8;

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

    HighlightCard: styled.article`
        background: var(--color-card-soft);
        border-radius: 18px;
        border: 1px solid var(--color-border);
        padding: 10px;
        box-shadow: 0 18px 40px rgba(0, 0, 0, 0.75);
        display: flex;
        flex-direction: column;
        gap: 10px;
    `,

    HighlightImageWrapper: styled.div`
        position: relative;
        overflow: hidden;
        border-radius: 14px;
        background: var(--color-bg);

        img {
            display: block;
            width: 100%;
            height: 210px;
            object-fit: cover;
            filter: saturate(1.05) contrast(1.02);
        }

        .overlay {
            position: absolute;
            left: 10px;
            right: 10px;
            bottom: 10px;
            display: flex;
            justify-content: space-between;
            gap: 8px;
            pointer-events: none;
        }

        .chip {
            pointer-events: auto;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 4px 9px;
            border-radius: 999px;
            background: rgba(0, 0, 0, 0.75);
            color: var(--color-heading);
            font-size: 11px;
            backdrop-filter: blur(6px);

            .icon {
                font-size: 13px;
                color: var(--accent);
            }
        }

        .shuffle {
            pointer-events: auto;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 4px 9px;
            border-radius: 999px;
            border: 1px solid var(--accent-border);
            background: rgba(0, 0, 0, 0.78);
            color: var(--color-heading);
            font-size: 11px;
            cursor: pointer;
            backdrop-filter: blur(8px);
            transition: background-color 0.15s ease-out, transform 0.1s ease-out;

            .icon {
                font-size: 13px;
            }

            &:hover {
                transform: translateY(-1px);
                background: rgba(0, 0, 0, 0.9);
            }

            &:active {
                transform: translateY(0);
            }
        }
    `,

    HighlightMeta: styled.div`
        display: flex;
        flex-direction: column;
        gap: 6px;

        .title-row {
            display: flex;
            flex-wrap: wrap;
            align-items: baseline;
            gap: 8px;
        }

        h2 {
            margin: 0;
            font-size: 15px;
            color: var(--color-heading);
        }

        .mood {
            display: inline-flex;
            align-items: center;
            gap: 4px;
            padding: 2px 8px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 0.12em;
            color: var(--color-text);
            opacity: 0.85;

            .icon {
                font-size: 11px;
                color: var(--accent);
            }
        }

        .desc {
            margin: 0;
            font-size: 12px;
            line-height: 1.6;
            color: var(--color-text);
        }

        .meta {
            margin: 0;
            font-size: 11px;
            color: var(--color-text);
            opacity: 0.75;
        }
    `,

    FilterBar: styled.div`
        padding: 8px 10px;
        border-radius: 14px;
        background: var(--color-card);
        border: 1px solid var(--color-border);
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        box-shadow: 0 14px 30px rgba(0, 0, 0, 0.65);

        .left {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 10px;
        }

        .label {
            display: inline-flex;
            align-items: center;
            gap: 6px;
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

        .chips {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
        }

        .chip {
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text);
            font-size: 11px;
            cursor: pointer;
            transition: background-color 0.15s ease-out,
                border-color 0.15s ease-out, transform 0.1s ease-out;

            &.active {
                background: var(--accent);
                color: #000;
                border-color: var(--accent-border);
            }

            &:hover {
                transform: translateY(-1px);
            }
        }

        .right {
            .hint {
                font-size: 11px;
                opacity: 0.7;
            }
        }
    `,

    Grid: styled.div`
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 14px;
        margin-top: 6px;

        @media (max-width: 960px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        @media (max-width: 640px) {
            grid-template-columns: minmax(0, 1fr);
        }
    `,

    Card: styled.article`
        cursor: pointer;
        background: var(--color-card);
        border-radius: 16px;
        border: 1px solid
            ${({ $isActive }) =>
                $isActive ? "var(--accent-border)" : "var(--color-border)"};
        box-shadow: ${({ $isActive }) =>
            $isActive
                ? "0 18px 40px rgba(0,0,0,0.75)"
                : "0 12px 26px rgba(0,0,0,0.6)"};
        overflow: hidden;
        display: flex;
        flex-direction: column;
        transition: transform 0.14s ease-out, box-shadow 0.16s ease-out,
            border-color 0.16s ease-out, background-color 0.16s ease-out;

        &:hover {
            transform: translateY(-3px);
            box-shadow: 0 20px 46px rgba(0, 0, 0, 0.85);
        }

        .image-wrap {
            position: relative;
            overflow: hidden;
            background: var(--color-bg);

            img {
                display: block;
                width: 100%;
                height: 170px;
                object-fit: cover;
                filter: saturate(1.03) contrast(1.02);
                transition: transform 0.35s ease-out, filter 0.2s ease-out;
            }
        }

        &:hover img {
            transform: scale(1.03);
            filter: saturate(1.08) contrast(1.05);
        }

        .overlay {
            position: absolute;
            right: 10px;
            bottom: 10px;
        }

        .heart {
            width: 30px;
            height: 30px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: rgba(0, 0, 0, 0.75);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            color: var(--color-heading);
            font-size: 14px;
            transition: background-color 0.15s ease-out, transform 0.1s ease-out;

            .icon {
                color: var(--accent);
            }

            &:hover {
                transform: translateY(-1px);
                background: rgba(0, 0, 0, 0.9);
            }
        }

        .body {
            padding: 10px 11px 9px;
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        .title-row {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 8px;
        }

        h3 {
            margin: 0;
            font-size: 13px;
            color: var(--color-heading);
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 4px;
            padding: 2px 7px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 0.12em;
            color: var(--color-text);
            opacity: 0.8;

            .icon {
                font-size: 11px;
                color: var(--accent);
            }
        }

        .mood {
            margin: 0;
            font-size: 12px;
            color: var(--color-text);
        }

        .meta {
            margin: 0;
            font-size: 11px;
            color: var(--color-text);
            opacity: 0.75;
        }
    `,

    StoryStrip: styled.div`
        margin-top: 8px;
        padding: 12px 12px 10px;
        border-radius: 16px;
        background: var(--color-card-soft);
        border: 1px solid var(--color-border);
        box-shadow: 0 16px 34px rgba(0, 0, 0, 0.7);
        display: flex;
        flex-direction: column;
        gap: 6px;
        font-size: 12px;

        .line {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }

        .label {
            text-transform: uppercase;
            letter-spacing: 0.12em;
            font-size: 11px;
            color: var(--color-text);
            opacity: 0.8;
            min-width: 140px;
        }

        .text {
            color: var(--color-text);
        }
    `,

    CTA: styled.section`
        margin-top: 6px;
        padding: 14px 14px 12px;
        border-radius: 18px;
        background: linear-gradient(
                135deg,
                rgba(201, 169, 106, 0.12),
                transparent
            ),
            var(--color-card);
        border: 1px solid var(--accent-border);
        box-shadow: 0 18px 38px rgba(0, 0, 0, 0.8);
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
            text-transform: uppercase;
            letter-spacing: 0.14em;
            font-size: 11px;
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

        .primary {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 7px 13px;
            border-radius: 999px;
            border: 1px solid var(--accent-border);
            background: var(--accent);
            color: #000;
            font-size: 12px;
            cursor: pointer;
            transition: transform 0.1s ease-out, box-shadow 0.15s ease-out;

            .icon {
                font-size: 14px;
            }

            &:hover {
                transform: translateY(-1px);
                box-shadow: 0 12px 26px rgba(0, 0, 0, 0.7);
            }

            &:active {
                transform: translateY(0);
                box-shadow: none;
            }
        }

        .ghost {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 7px 12px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: transparent;
            color: var(--color-heading);
            font-size: 12px;
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
};

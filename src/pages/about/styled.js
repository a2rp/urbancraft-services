// src/pages/about/styled.js
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

    HeroStats: styled.ul`
        list-style: none;
        padding: 0;
        margin: 6px 0 0;
        display: flex;
        flex-wrap: wrap;
        gap: 14px;

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
        max-width: 420px;
        border-radius: 22px;
        overflow: hidden;
        background: var(--color-card-soft);
        border: 1px solid var(--color-border);
        box-shadow: 0 22px 50px rgba(0, 0, 0, 0.9);

        img {
            display: block;
            width: 100%;
            height: 260px;
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

        .chip-row {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
        }

        .chip {
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

        .bottom-note {
            pointer-events: auto;
            display: inline-flex;
            align-items: flex-start;
            gap: 6px;
            padding: 4px 10px;
            border-radius: 12px;
            background: rgba(0, 0, 0, 0.78);
            font-size: 11px;
            color: var(--color-heading);
            backdrop-filter: blur(8px);

            .icon {
                font-size: 13px;
                color: var(--accent);
                margin-top: 1px;
            }
        }

        @media (max-width: 960px) {
            max-width: 100%;
        }
    `,

    FallbackBlock: styled.div`
        width: 100%;
        max-width: 420px;
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

    SectionTwoColumns: styled.section`
        margin-top: 12px;
        display: grid;
        grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
        gap: 20px;
        align-items: flex-start;

        @media (max-width: 960px) {
            grid-template-columns: minmax(0, 1fr);
        }

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
            margin: 0 0 6px;
            font-size: 12px;
            color: var(--color-text);
            opacity: 0.96;
        }
    `,

    HighlightBlock: styled.div`
        border-radius: 18px;
        background: var(--color-card-soft);
        border: 1px solid var(--color-border);
        box-shadow: 0 18px 40px rgba(0, 0, 0, 0.85);
        padding: 12px 13px 10px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        font-size: 12px;

        .row {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 3px 9px;
            border-radius: 999px;
            background: rgba(0, 0, 0, 0.8);
            border: 1px solid var(--accent-border);
            font-size: 11px;
            color: var(--color-heading);

            .icon {
                font-size: 13px;
                color: var(--accent);
            }
        }

        .text {
            margin: 0;
            color: var(--color-text);
            line-height: 1.7;
        }

        .note {
            margin: 0;
            font-size: 11px;
            color: var(--color-text);
            opacity: 0.85;
        }
    `,

    SectionHeader: styled.header`
        margin-top: 14px;
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

    ValuesGrid: styled.div`
        margin-top: 8px;
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 12px;

        @media (max-width: 980px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        @media (max-width: 640px) {
            grid-template-columns: minmax(0, 1fr);
        }
    `,

    ValueCard: styled.article`
        background: var(--color-card);
        border-radius: 16px;
        border: 1px solid var(--color-border);
        padding: 10px 11px 9px;
        box-shadow: 0 14px 32px rgba(0, 0, 0, 0.75);
        display: flex;
        flex-direction: column;
        gap: 6px;
        font-size: 12px;

        .icon-wrap {
            width: 26px;
            height: 26px;
            border-radius: 999px;
            background: var(--accent-soft);
            display: flex;
            align-items: center;
            justify-content: center;

            .icon {
                font-size: 14px;
                color: var(--accent);
            }
        }

        h3 {
            margin: 2px 0 0;
            font-size: 13px;
            color: var(--color-heading);
        }

        p {
            margin: 0;
            font-size: 12px;
            color: var(--color-text);
        }
    `,

    InsideSection: styled.section`
        margin-top: 14px;
        display: grid;
        grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
        gap: 20px;
        align-items: flex-start;

        @media (max-width: 960px) {
            grid-template-columns: minmax(0, 1fr);
        }

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
            opacity: 0.95;
        }

        .points {
            list-style: none;
            padding: 0;
            margin: 8px 0 0;
            display: flex;
            flex-direction: column;
            gap: 5px;
            font-size: 12px;

            li {
                display: flex;
                align-items: flex-start;
                gap: 6px;
            }

            .tick {
                font-size: 13px;
                color: var(--accent);
                margin-top: 1px;
                flex-shrink: 0;
            }

            span {
                color: var(--color-text);
            }
        }
    `,

    InsideCards: styled.div`
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        gap: 8px;

        .card {
            border-radius: 16px;
            background: var(--color-card);
            border: 1px solid var(--color-border);
            padding: 9px 11px 8px;
            box-shadow: 0 14px 30px rgba(0, 0, 0, 0.75);
            font-size: 12px;
        }

        .label-row {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            margin-bottom: 4px;
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

        p {
            margin: 0;
            font-size: 12px;
            color: var(--color-text);
        }
    `,

    Timeline: styled.ul`
        list-style: none;
        padding: 0;
        margin: 8px 0 0;
        border-left: 1px dashed var(--color-border);
        padding-left: 14px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        font-size: 12px;

        li {
            position: relative;
            padding-left: 10px;
        }

        .dot {
            position: absolute;
            left: -22px;
            top: 5px;
            width: 12px;
            height: 12px;
            border-radius: 999px;
            background: var(--color-bg);
            border: 2px solid var(--accent);
            box-shadow: 0 6px 16px rgba(0, 0, 0, 0.7);
        }

        .content {
            display: flex;
            flex-direction: column;
            gap: 2px;
        }

        .year {
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.14em;
            color: var(--color-text);
            opacity: 0.8;
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
            opacity: 0.96;
        }
    `,

    OwnerSection: styled.section`
        margin-top: 14px;
        display: grid;
        grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr);
        gap: 18px;

        @media (max-width: 960px) {
            grid-template-columns: minmax(0, 1fr);
        }
    `,

    OwnerCard: styled.article`
        border-radius: 20px;
        background: var(--color-card-soft);
        border: 1px solid var(--color-border);
        padding: 12px 13px 11px;
        box-shadow: 0 20px 44px rgba(0, 0, 0, 0.9);
        display: grid;
        grid-template-columns: auto minmax(0, 1fr);
        gap: 12px;
        align-items: flex-start;
        font-size: 12px;

        .avatar {
            width: 40px;
            height: 40px;
            border-radius: 999px;
            background: var(--accent-soft);
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 600;
            font-size: 18px;
            color: var(--accent);
            box-shadow: 0 10px 24px rgba(0, 0, 0, 0.7);
        }

        .text h2 {
            margin: 0 0 4px;
            font-size: 15px;
            color: var(--color-heading);
        }

        .text p {
            margin: 0 0 6px;
            color: var(--color-text);
            line-height: 1.8;
        }

        .signoff {
            font-size: 12px;
            opacity: 0.9;
        }

        .meta-row {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            margin-top: 4px;
            font-size: 11px;
            color: var(--color-text);
            opacity: 0.85;

            .name {
                font-weight: 500;
                color: var(--color-heading);
            }
        }

        @media (max-width: 640px) {
            grid-template-columns: minmax(0, 1fr);
        }
    `,

    OwnerSide: styled.div`
        display: flex;
        flex-direction: column;
        gap: 8px;
        font-size: 12px;

        .block {
            border-radius: 16px;
            background: var(--color-card);
            border: 1px solid var(--color-border);
            padding: 9px 11px 8px;
            box-shadow: 0 14px 32px rgba(0, 0, 0, 0.75);
        }

        .label-row {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            margin-bottom: 4px;
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

        p {
            margin: 0;
            color: var(--color-text);
        }
    `,

    CTA: styled.section`
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
                box-shadow: 0 12px 26px rgba(0, 0, 0, 0.75);
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

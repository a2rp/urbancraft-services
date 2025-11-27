// src/pages/notFound/styled.js
import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        width: 100%;
        min-height: calc(100vh - 120px);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 40px 16px 60px;
        background: radial-gradient(
                circle at top,
                rgba(201, 169, 106, 0.08),
                transparent 55%
            ),
            var(--color-bg);
        color: var(--color-text);
    `,

    Inner: styled.div`
        width: 100%;
        max-width: 1080px;
        display: grid;
        grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
        gap: 32px;
        align-items: center;

        @media (max-width: 880px) {
            grid-template-columns: minmax(0, 1fr);
            gap: 24px;
        }
    `,

    Content: styled.div`
        display: flex;
        flex-direction: column;
        gap: 18px;
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
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: var(--color-heading);

        .icon {
            font-size: 12px;
            color: var(--accent);
        }
    `,

    Title: styled.div`
        display: flex;
        flex-direction: column;
        gap: 8px;

        .code {
            font-size: clamp(42px, 6vw, 56px);
            font-weight: 700;
            letter-spacing: 0.12em;
            color: var(--color-heading);
        }

        .text {
            font-size: clamp(18px, 2.4vw, 22px);
            font-weight: 500;
            color: var(--color-heading);
            max-width: 34rem;
        }
    `,

    Description: styled.p`
        margin: 0;
        font-size: 14px;
        line-height: 1.6;
        color: var(--color-text);
        max-width: 30rem;
        opacity: 0.9;
    `,

    Actions: styled.div`
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 4px;
    `,

    PrimaryButton: styled.button`
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 8px 16px;
        border-radius: 999px;
        border: 1px solid var(--accent-border);
        background: var(--accent);
        color: #000;
        font-size: 13px;
        font-weight: 500;
        cursor: pointer;
        transition: transform 0.1s ease-out, box-shadow 0.15s ease-out,
            background-color 0.15s ease-out;

        .icon {
            font-size: 14px;
        }

        &:hover {
            transform: translateY(-1px);
            box-shadow: 0 12px 24px rgba(0, 0, 0, 0.5);
        }

        &:active {
            transform: translateY(0);
            box-shadow: none;
        }
    `,

    SecondaryButton: styled.button`
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 8px 14px;
        border-radius: 999px;
        border: 1px solid var(--color-border);
        background: var(--color-card);
        color: var(--color-text);
        font-size: 13px;
        cursor: pointer;
        transition: background-color 0.15s ease-out, border-color 0.15s ease-out,
            transform 0.1s ease-out, box-shadow 0.15s ease-out;

        .icon {
            font-size: 14px;
        }

        &:hover {
            background: var(--color-card-soft);
            border-color: var(--accent-border);
            box-shadow: 0 10px 22px rgba(0, 0, 0, 0.5);
            transform: translateY(-1px);
        }

        &:active {
            transform: translateY(0);
            box-shadow: none;
        }
    `,

    Hint: styled.div`
        display: inline-flex;
        align-items: center;
        gap: 6px;
        margin-top: 4px;
        font-size: 12px;
        opacity: 0.7;

        .icon {
            font-size: 13px;
        }
    `,

    Visual: styled.div`
        display: flex;
        align-items: stretch;
        justify-content: center;
    `,

    ImageWrapper: styled.div`
        position: relative;
        width: 100%;
        max-width: 420px;
        border-radius: 20px;
        overflow: hidden;
        background: var(--color-card-soft);
        border: 1px solid var(--color-border);
        box-shadow: 0 18px 40px rgba(0, 0, 0, 0.7);

        img {
            display: block;
            width: 100%;
            height: 260px;
            object-fit: cover;
            filter: saturate(1.05) contrast(1.05);
        }

        .overlay-tag {
            position: absolute;
            left: 14px;
            bottom: 14px;
            padding: 6px 10px;
            border-radius: 999px;
            background: rgba(0, 0, 0, 0.72);
            display: inline-flex;
            align-items: center;
            gap: 6px;
            font-size: 11px;
            color: var(--color-heading);
            backdrop-filter: blur(6px);

            .dot {
                width: 6px;
                height: 6px;
                border-radius: 999px;
                background: var(--accent);
            }
        }

        @media (max-width: 880px) {
            max-width: 100%;
        }
    `,

    FallbackBlock: styled.div`
        width: 100%;
        max-width: 420px;
        padding: 22px 18px 20px;
        border-radius: 20px;
        background: linear-gradient(
                135deg,
                rgba(201, 169, 106, 0.08),
                transparent
            ),
            var(--color-card);
        border: 1px dashed var(--accent-border);
        box-shadow: 0 16px 34px rgba(0, 0, 0, 0.6);
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
            line-height: 1.6;
            opacity: 0.8;
        }
    `,
};

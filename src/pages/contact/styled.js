// src/pages/contact/styled.js
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
                transparent 60%
            ),
            var(--color-bg);
        color: var(--color-text);
    `,

    Inner: styled.div`
        width: 100%;
        max-width: 1120px;
        display: grid;
        grid-template-columns: minmax(0, 1.25fr) minmax(0, 0.95fr);
        gap: 32px;
        align-items: flex-start;

        @media (max-width: 960px) {
            grid-template-columns: minmax(0, 1fr);
            gap: 26px;
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
        letter-spacing: 0.04em;
    `,

    Subtitle: styled.p`
        margin: 0;
        font-size: 14px;
        line-height: 1.7;
        max-width: 34rem;
        color: var(--color-text);
        opacity: 0.95;
    `,

    Grid: styled.div`
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 14px;
        margin-top: 8px;

        @media (max-width: 720px) {
            grid-template-columns: minmax(0, 1fr);
        }
    `,

    Card: styled.article`
        background: var(--color-card);
        border-radius: 16px;
        border: 1px solid var(--color-border);
        padding: 12px 12px 10px;
        box-shadow: 0 12px 26px rgba(0, 0, 0, 0.55);
    `,

    CardHeader: styled.div`
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 8px;

        .icon {
            width: 28px;
            height: 28px;
            border-radius: 999px;
            background: var(--accent-soft);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--accent);
            font-size: 16px;
        }

        .text h3 {
            margin: 0;
            font-size: 13px;
            color: var(--color-heading);
        }

        .text p {
            margin: 0;
            margin-top: 2px;
            font-size: 11px;
            color: var(--color-text);
            opacity: 0.8;
        }
    `,

    CardList: styled.ul`
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 6px;
        font-size: 12px;

        li {
            display: flex;
            flex-direction: column;
            gap: 2px;
        }

        .label {
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.12em;
            color: var(--color-text);
            opacity: 0.7;
        }

        a {
            color: var(--color-heading);
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 4px;

            &:hover {
                text-decoration: underline;
            }

            .inline-icon {
                font-size: 11px;
            }
        }

        p {
            margin: 0;
            color: var(--color-text);
        }
    `,

    FormCard: styled.article`
        margin-top: 16px;
        background: var(--color-card-soft);
        border-radius: 18px;
        border: 1px solid var(--color-border);
        padding: 14px 14px 12px;
        box-shadow: 0 16px 30px rgba(0, 0, 0, 0.6);

        .head h3 {
            margin: 0;
            font-size: 14px;
            color: var(--color-heading);
        }

        .head p {
            margin: 4px 0 8px;
            font-size: 12px;
            color: var(--color-text);
            opacity: 0.9;
        }

        form {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .row {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (max-width: 720px) {
                grid-template-columns: minmax(0, 1fr);
            }
        }

        .field {
            display: flex;
            flex-direction: column;
            gap: 4px;

            label {
                font-size: 11px;
                text-transform: uppercase;
                letter-spacing: 0.12em;
                color: var(--color-text);
                opacity: 0.8;
            }

            input,
            textarea {
                border-radius: 10px;
                border: 1px solid var(--color-border);
                background: var(--color-bg);
                color: var(--color-heading);
                font-size: 13px;
                padding: 7px 9px;
                outline: none;
                resize: vertical;
                min-height: 0;

                &:focus-visible {
                    border-color: var(--accent-border);
                    box-shadow: 0 0 0 1px var(--accent-soft);
                }

                &::placeholder {
                    color: var(--color-text);
                    opacity: 0.45;
                }
            }

            textarea {
                min-height: 80px;
            }
        }

        .actions {
            margin-top: 4px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 10px;

            button {
                display: inline-flex;
                align-items: center;
                gap: 6px;
                padding: 7px 14px;
                border-radius: 999px;
                border: 1px solid var(--accent-border);
                background: var(--accent);
                color: #000;
                font-size: 12px;
                font-weight: 500;
                cursor: pointer;
                transition: transform 0.1s ease-out, box-shadow 0.15s ease-out;

                .icon {
                    font-size: 14px;
                }

                &:hover {
                    transform: translateY(-1px);
                    box-shadow: 0 10px 22px rgba(0, 0, 0, 0.55);
                }

                &:active {
                    transform: translateY(0);
                    box-shadow: none;
                }
            }

            .note {
                font-size: 11px;
                opacity: 0.7;
            }
        }
    `,

    Visual: styled.div`
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
        box-shadow: 0 20px 42px rgba(0, 0, 0, 0.75);

        img {
            display: block;
            width: 100%;
            height: 280px;
            object-fit: cover;
            filter: saturate(1.05) contrast(1.05);
        }

        .overlay {
            position: absolute;
            left: 14px;
            bottom: 14px;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 6px 10px;
            border-radius: 999px;
            background: rgba(0, 0, 0, 0.78);
            color: var(--color-heading);
            font-size: 11px;
            backdrop-filter: blur(8px);

            .tag-dot {
                width: 6px;
                height: 6px;
                border-radius: 50%;
                background: var(--accent);
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
                rgba(201, 169, 106, 0.08),
                transparent
            ),
            var(--color-card);
        border: 1px dashed var(--accent-border);
        box-shadow: 0 18px 38px rgba(0, 0, 0, 0.7);
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
            color: var(--color-text);
            opacity: 0.9;
        }
    `,
};

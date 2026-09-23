import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        min-height: 100vh;

        color: var(--color-text);
        background: var(--color-bg);

        .container {
            width: min(1240px, calc(100% - 40px));

            margin: 0 auto;
        }

        .label {
            margin: 0;

            color: var(--accent);

            font-size: 0.64rem;
            font-weight: 800;
            letter-spacing: 0.13em;
            text-transform: uppercase;
        }

        .hero {
            padding: 150px 0 80px;

            border-bottom: 1px solid var(--color-border);
        }

        .hero h1 {
            max-width: 950px;

            margin: 10px 0 0;

            color: var(--color-heading);

            font-size: clamp(3.5rem, 7vw, 7rem);

            font-weight: 800;
            letter-spacing: -0.065em;
            line-height: 0.9;
        }

        .hero h1 span {
            display: block;

            color: var(--color-text);
        }

        .intro {
            max-width: 680px;

            margin: 27px 0 0;

            font-size: 0.8rem;
            line-height: 1.9;
        }

        .gallery {
            padding: 70px 0 100px;
        }

        .filters {
            display: flex;
            flex-wrap: wrap;
            gap: 7px;

            margin-bottom: 28px;
        }

        .filters button {
            min-height: 38px;

            padding: 8px 11px;

            color: var(--color-text);
            background: transparent;

            border: 1px solid var(--color-border);

            border-radius: 8px;

            font: inherit;
            font-size: 0.62rem;
            font-weight: 700;

            cursor: pointer;

            transition:
                border-color 180ms ease,
                box-shadow 180ms ease,
                text-shadow 180ms ease;
        }

        .filters button:hover,
        .filters button.active {
            border-color: var(--accent-border);

            box-shadow: var(--shadow-sm);

            text-shadow: 0 0 10px var(--accent-soft);
        }

        .filters button:focus-visible {
            outline: 2px solid var(--accent);

            outline-offset: 3px;
        }

        .galleryGrid {
            display: grid;

            grid-template-columns: repeat(3, minmax(0, 1fr));

            gap: 12px;
        }

        .galleryCard {
            position: relative;

            min-height: 390px;

            padding: 0;

            overflow: hidden;

            color: inherit;
            background: var(--color-card);

            border: 1px solid var(--color-border);

            border-radius: 14px;

            text-align: left;

            cursor: pointer;

            transition:
                border-color 180ms ease,
                box-shadow 180ms ease;
        }

        .galleryCard:nth-child(5n + 1) {
            grid-column: span 2;
        }

        .galleryCard:hover {
            border-color: var(--color-border-strong);

            box-shadow: var(--shadow-md);
        }

        .galleryCard:focus-visible {
            outline: 2px solid var(--accent);

            outline-offset: 3px;
        }

        .galleryImage {
            position: absolute;
            inset: 0;

            min-height: 100%;
        }

        .overlay {
            position: absolute;
            inset: auto 0 0;

            z-index: 3;

            display: block;

            padding: 50px 18px 18px;

            background: linear-gradient(
                to top,
                rgba(8, 7, 5, 0.92),
                transparent
            );
        }

        .mood {
            display: block;

            color: var(--accent);

            font-size: 0.56rem;
            font-weight: 800;
            letter-spacing: 0.08em;
            text-transform: uppercase;
        }

        .overlay strong {
            display: block;

            margin-top: 6px;

            color: #f5efe7;

            font-size: 0.84rem;
            line-height: 1.45;
        }

        .meta {
            display: block;

            margin-top: 5px;

            color: #aaa093;

            font-size: 0.56rem;
        }

        .empty {
            display: grid;
            place-items: center;

            min-height: 300px;

            color: var(--color-text);

            border: 1px dashed var(--color-border);

            border-radius: 14px;
        }

        .empty svg {
            width: 30px;
            height: 30px;
        }

        .modal {
            position: fixed;
            inset: 0;

            z-index: 2000;

            display: grid;
            place-items: center;

            padding: 30px;

            overflow-y: auto;

            background: rgba(0, 0, 0, 0.84);

            backdrop-filter: blur(8px);

            cursor: zoom-out;
        }

        .modalContent {
            width: min(1100px, 100%);

            max-height: calc(100vh - 60px);

            padding: 20px;

            overflow-y: auto;

            color: var(--color-text);
            background: var(--color-card);

            border: 1px solid var(--color-border-strong);

            border-radius: 16px;

            box-shadow: var(--shadow-lg);

            cursor: default;
        }

        .modalHeader {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;

            gap: 24px;

            margin-bottom: 18px;
        }

        .modalHeader h2 {
            margin: 7px 0 0;

            color: var(--color-heading);

            font-size: clamp(1.5rem, 4vw, 2.8rem);

            letter-spacing: -0.04em;
            line-height: 1;
        }

        .closeButton {
            display: grid;
            place-items: center;

            width: 42px;
            height: 42px;

            flex-shrink: 0;

            padding: 0;

            color: var(--color-text);
            background: var(--color-bg);

            border: 1px solid var(--color-border);

            border-radius: 9px;

            cursor: pointer;

            transition:
                border-color 180ms ease,
                box-shadow 180ms ease;
        }

        .closeButton:hover {
            border-color: var(--accent-border);

            box-shadow: var(--shadow-sm);
        }

        .closeButton:focus-visible {
            outline: 2px solid var(--accent);

            outline-offset: 3px;
        }

        .closeButton svg {
            width: 18px;
            height: 18px;
        }

        .modalImage {
            width: 100%;
            min-height: 500px;
            max-height: 68vh;

            border: 1px solid var(--color-border);

            border-radius: 12px;
        }

        .modalImage .image {
            max-height: 68vh;

            object-fit: contain;

            background: #080705;
        }

        .modalMeta {
            display: flex;
            align-items: center;
            justify-content: space-between;

            gap: 20px;

            margin-top: 14px;

            font-size: 0.62rem;
        }

        @media (max-width: 900px) {
            .galleryGrid {
                grid-template-columns: repeat(2, minmax(0, 1fr));
            }

            .galleryCard:nth-child(5n + 1) {
                grid-column: auto;
            }
        }

        @media (max-width: 760px) {
            .container {
                width: calc(100% - 28px);
            }

            .hero {
                padding: 125px 0 70px;
            }

            .gallery {
                padding: 55px 0 75px;
            }

            .modal {
                padding: 14px;
            }

            .modalContent {
                max-height: calc(100vh - 28px);

                padding: 14px;
            }

            .modalImage {
                min-height: 420px;
            }
        }

        @media (max-width: 560px) {
            .galleryGrid {
                grid-template-columns: 1fr;
            }

            .galleryCard {
                min-height: 340px;
            }

            .modalHeader h2 {
                font-size: 1.35rem;
            }

            .modalImage {
                min-height: 300px;
            }

            .modalMeta {
                align-items: flex-start;

                flex-direction: column;

                gap: 5px;
            }
        }
    `,
};

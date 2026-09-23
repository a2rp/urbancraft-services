import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        position: fixed;
        inset: 0;
        z-index: 1200;

        display: flex;
        justify-content: flex-end;

        .backdrop {
            position: absolute;
            inset: 0;

            width: 100%;
            height: 100%;

            padding: 0;

            background: rgba(0, 0, 0, 0.68);

            border: 0;

            cursor: pointer;

            backdrop-filter: blur(4px);
        }

        .panel {
            position: relative;
            z-index: 1;

            display: flex;
            flex-direction: column;

            width: min(390px, 88vw);
            height: 100%;

            padding: 24px;

            overflow-y: auto;

            color: var(--color-text);
            background: var(--color-bg);

            border-left: 1px solid var(--color-border);

            box-shadow: var(--shadow-lg);
        }

        .header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 20px;

            padding-bottom: 22px;

            border-bottom: 1px solid var(--color-border);
        }

        .label {
            display: block;

            margin-bottom: 5px;

            color: var(--accent);

            font-size: 0.58rem;
            font-weight: 800;
            letter-spacing: 0.12em;
            text-transform: uppercase;
        }

        .title {
            display: block;

            color: var(--color-heading);

            font-size: 1.2rem;
            font-weight: 800;
        }

        .closeButton {
            display: grid;
            place-items: center;

            width: 42px;
            height: 42px;

            padding: 0;

            color: var(--color-text);
            background: var(--color-card);

            border: 1px solid var(--color-border);
            border-radius: 9px;

            cursor: pointer;

            transition:
                border-color 180ms ease,
                box-shadow 180ms ease;
        }

        .closeButton svg {
            width: 18px;
            height: 18px;
        }

        .closeButton:hover {
            border-color: var(--accent-border);

            box-shadow: var(--shadow-sm);
        }

        .closeButton:focus-visible {
            outline: 2px solid var(--accent);
            outline-offset: 3px;
        }

        .navigation {
            display: grid;
            gap: 7px;

            margin-top: 24px;
        }

        .navigation a {
            display: flex;
            align-items: center;
            gap: 12px;

            min-height: 52px;

            padding: 10px 12px;

            color: var(--color-text);

            border: 1px solid var(--color-border);
            border-radius: 10px;

            text-decoration: none;

            transition:
                border-color 180ms ease,
                box-shadow 180ms ease,
                text-shadow 180ms ease;
        }

        .navigation a:hover {
            border-color: var(--color-border-strong);

            box-shadow: var(--shadow-sm);
        }

        .navigation a.active {
            color: var(--color-heading);

            border-color: var(--accent-border);

            text-shadow: 0 0 10px var(--accent-soft);
        }

        .navigation a:focus-visible {
            outline: 2px solid var(--accent);
            outline-offset: 2px;
        }

        .icon {
            display: grid;
            place-items: center;

            width: 34px;
            height: 34px;

            flex-shrink: 0;

            color: var(--accent);

            background: var(--accent-soft);

            border: 1px solid var(--accent-border);
            border-radius: 8px;
        }

        .icon svg {
            width: 15px;
            height: 15px;
        }

        .text {
            font-size: 0.75rem;
            font-weight: 700;
        }

        .bottom {
            margin-top: auto;
            padding-top: 26px;
        }

        .bottom p {
            margin: 0;

            color: var(--color-text);

            font-size: 0.7rem;
            line-height: 1.75;

            opacity: 0.65;
        }
    `,
};

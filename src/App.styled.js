import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        display: flex;
        flex-direction: column;

        width: 100%;
        min-height: 100vh;

        color: var(--color-text);
        background: var(--color-bg);
    `,

    Main: styled.main`
        display: block;

        width: 100%;
        min-height: calc(100vh - 76px);

        flex: 1;
    `,
};

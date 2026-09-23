import{g as x,r as d,j as e,L as f,o as v}from"./index-Rpumz0bM.js";const j={Wrapper:x.div`
        position: relative;

        width: 100%;
        min-height: 160px;

        overflow: hidden;

        background: var(--color-card);

        .loaderWrapper,
        .errorState {
            position: absolute;
            inset: 0;
            z-index: 2;

            display: grid;
            place-items: center;

            background: var(--color-card);
        }

        .errorState {
            color: var(--color-text);

            svg {
                width: 28px;
                height: 28px;

                opacity: 0.45;
            }
        }

        .image {
            display: block;

            width: 100%;
            height: 100%;

            object-fit: cover;

            opacity: 0;

            transition: opacity 220ms ease;
        }

        .image.loaded {
            opacity: 1;
        }

        @media (prefers-reduced-motion: reduce) {
            .image {
                transition: none;
            }
        }
    `},b=({src:l,alt:c,className:n="",loading:m="lazy",fetchPriority:h="auto",onLoad:a,onError:r})=>{const[p,t]=d.useState(!1),[s,i]=d.useState(!1);d.useEffect(()=>{t(!1),i(!1)},[l]);const g=o=>{t(!0),i(!1),a==null||a(o)},u=o=>{t(!1),i(!0),r==null||r(o)};return e.jsxs(j.Wrapper,{className:n,children:[!p&&!s&&e.jsx("div",{className:"loaderWrapper",children:e.jsx(f,{compact:!0})}),s&&e.jsx("div",{className:"errorState",role:"img","aria-label":`Unable to display ${c}`,children:e.jsx(v,{"aria-hidden":"true"})}),!s&&e.jsx("img",{className:`image ${p?"loaded":""}`,src:l,alt:c,loading:m,fetchPriority:h,onLoad:g,onError:u})]})};export{b as I};

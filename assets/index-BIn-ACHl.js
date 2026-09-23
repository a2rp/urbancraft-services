import{g as x,r as o,j as e,o as u,p as b}from"./index-Rpumz0bM.js";import{I as p}from"./index-BnTAaTol.js";const f="/urbancraft-services/assets/gallery-01-BI6xkRa4.webp",v="/urbancraft-services/assets/gallery-02-HlK-rgDZ.webp",y="/urbancraft-services/assets/gallery-03-BZBhu67e.webp",w="/urbancraft-services/assets/about-02-zxERXiIn.webp",k="/urbancraft-services/assets/gallery-05-CNqWqKBg.webp",j="/urbancraft-services/assets/gallery-06-C57_TdeA.webp",C="/urbancraft-services/assets/gallery-07-OlhH_kjx.webp",N="/urbancraft-services/assets/gallery-08-BY3Zc8Sy.webp",S=[{id:"all",label:"All"},{id:"store",label:"Store"},{id:"products",label:"Products"},{id:"people",label:"People"},{id:"details",label:"Details"},{id:"bts",label:"Behind the Scenes"}],m=[{id:"fresh-counter",src:f,alt:"Fresh produce counter inside UrbanCraft Services",title:"Morning counter - freshly stocked",mood:"Everyday freshness",tags:["store","products"],meta:"Morning light - wide view"},{id:"fruit-closeup",src:v,alt:"Seasonal fresh fruits displayed at UrbanCraft Services",title:"Seasonal fruits in focus",mood:"Color & texture",tags:["products"],meta:"Close view - natural light"},{id:"baskets",src:y,alt:"Hand-picked grocery baskets ready for customers",title:"Hand-picked baskets",mood:"Market style",tags:["store","details"],meta:"Warm tone - store detail"},{id:"checkout",src:w,alt:"Customer checkout area inside UrbanCraft Services",title:"Checkout lane, no rush",mood:"Soft evening",tags:["people","store"],meta:"Ambient light - daily life"},{id:"team-laugh",src:k,alt:"UrbanCraft team taking a short break between customer orders",title:"Team huddle between orders",mood:"Behind the scenes",tags:["people","bts"],meta:"Team moment - candid"},{id:"coffee-break",src:j,alt:"A quiet staff coffee break during the working day",title:"A short pause during a long day",mood:"Calm break",tags:["bts"],meta:"Soft contrast - candid"},{id:"workspace",src:C,alt:"Workspace used for planning UrbanCraft store operations",title:"Planning the week",mood:"Planning & notes",tags:["bts","details"],meta:"Workspace - overhead view"},{id:"entrance",src:N,alt:"UrbanCraft store entrance during a busy day",title:"Entrance on a busy Saturday",mood:"Movement & light",tags:["store","people"],meta:"Street view - natural light"}],I={Wrapper:x.div`
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
    `},B=()=>{const[t,g]=o.useState("all"),[r,s]=o.useState(null),i=o.useRef(null),n=o.useMemo(()=>t==="all"?m:m.filter(a=>a.tags.includes(t)),[t]);o.useEffect(()=>{if(!r)return;const a=document.body.style.overflow;document.body.style.overflow="hidden",window.requestAnimationFrame(()=>{var l;(l=i.current)==null||l.focus()});const c=l=>{l.key==="Escape"&&s(null)};return document.addEventListener("keydown",c),()=>{document.body.style.overflow=a,document.removeEventListener("keydown",c)}},[r]);const d=()=>{s(null)},h=a=>{a.stopPropagation()};return e.jsxs(I.Wrapper,{children:[e.jsx("section",{className:"hero",children:e.jsxs("div",{className:"container",children:[e.jsx("p",{className:"label",children:"Gallery"}),e.jsxs("h1",{children:["Everyday moments from",e.jsx("span",{children:"the UrbanCraft space."})]}),e.jsx("p",{className:"intro",children:"A visual collection of products, people, shelves, working moments, and small details from around the store."})]})}),e.jsx("section",{className:"gallery",children:e.jsxs("div",{className:"container",children:[e.jsx("div",{className:"filters","aria-label":"Gallery filters",children:S.map(a=>e.jsx("button",{className:t===a.id?"active":"",type:"button",onClick:()=>g(a.id),"aria-pressed":t===a.id,children:a.label},a.id))}),n.length>0?e.jsx("div",{className:"galleryGrid",children:n.map(a=>e.jsxs("button",{className:"galleryCard",type:"button",onClick:()=>s(a),"aria-label":`Open ${a.title}`,children:[e.jsx(p,{className:"galleryImage",src:a.src,alt:a.alt}),e.jsxs("span",{className:"overlay",children:[e.jsx("span",{className:"mood",children:a.mood}),e.jsx("strong",{children:a.title}),e.jsx("span",{className:"meta",children:a.meta})]})]},a.id))}):e.jsx("div",{className:"empty",children:e.jsx(u,{"aria-hidden":"true"})})]})}),r&&e.jsx("div",{className:"modal",role:"presentation",onClick:d,children:e.jsxs("div",{className:"modalContent",role:"dialog","aria-modal":"true","aria-labelledby":"gallery-modal-title",onClick:h,children:[e.jsxs("div",{className:"modalHeader",children:[e.jsxs("div",{children:[e.jsx("p",{className:"label",children:"Gallery Preview"}),e.jsx("h2",{id:"gallery-modal-title",children:r.title})]}),e.jsx("button",{ref:i,className:"closeButton",type:"button",onClick:d,"aria-label":"Close image preview",title:"Close",children:e.jsx(b,{"aria-hidden":"true"})})]}),e.jsx(p,{className:"modalImage",src:r.src,alt:r.alt,loading:"eager"}),e.jsxs("div",{className:"modalMeta",children:[e.jsx("span",{children:r.mood}),e.jsx("span",{children:r.meta})]})]})})]})};export{B as default};

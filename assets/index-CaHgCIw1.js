import{g as n,j as e,N as a,F as o,a as i,b as t,c,d as l,e as d,f as p}from"./index-Rpumz0bM.js";import{I as s}from"./index-BnTAaTol.js";const h="/urbancraft-services/assets/hero-1EgTsgPy.webp",x="/urbancraft-services/assets/service-01-DYE0G3Th.webp",g="/urbancraft-services/assets/service-02-BLBZO3hc.webp",m="/urbancraft-services/assets/service-03-DE80wwPm.webp",b="/urbancraft-services/assets/gallery-01-B598zVs-.webp",v="/urbancraft-services/assets/gallery-01-B598zVs-.webp",u="/urbancraft-services/assets/gallery-03-ddSQiRqH.webp",f={Wrapper:n.div`
        width: 100%;

        color: var(--color-text, #b8b0a6);
        background: var(--color-bg, #0b0a08);

        .container {
            width: min(1240px, calc(100% - 40px));
            margin: 0 auto;
        }

        .hero {
            min-height: 100vh;

            padding: 150px 0 90px;

            background:
                radial-gradient(
                    circle at 15% 15%,
                    var(--accent-soft, rgba(201, 154, 89, 0.1)),
                    transparent 34%
                ),
                var(--color-bg, #0b0a08);

            border-bottom: 1px solid var(--color-border, #29251f);
        }

        .heroGrid {
            display: grid;
            grid-template-columns:
                minmax(0, 1.1fr)
                minmax(380px, 0.9fr);
            gap: 70px;
            align-items: center;
        }

        .label,
        .sectionLabel {
            color: var(--accent, #c99a59);

            font-size: 0.65rem;
            font-weight: 800;
            letter-spacing: 0.13em;
            text-transform: uppercase;
        }

        .label {
            display: inline-flex;
            align-items: center;
            gap: 8px;

            margin-bottom: 18px;
        }

        .dot {
            width: 7px;
            height: 7px;

            background: var(--accent, #c99a59);

            border-radius: 50%;
        }

        .hero h1 {
            max-width: 760px;

            margin: 0;

            color: var(--color-heading, #f3ede4);

            font-size: clamp(3.8rem, 8vw, 7.8rem);
            font-weight: 800;
            letter-spacing: -0.065em;
            line-height: 0.9;
        }

        .hero h1 span {
            display: block;
            color: var(--color-text, #958b7e);
        }

        .heroText {
            max-width: 650px;

            margin: 28px 0 0;

            font-size: 0.84rem;
            line-height: 1.9;
        }

        .heroActions {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;

            margin-top: 32px;
        }

        .primaryButton,
        .secondaryButton,
        .textLink {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;

            text-decoration: none;

            transition:
                border-color 180ms ease,
                box-shadow 180ms ease,
                text-shadow 180ms ease;
        }

        .primaryButton,
        .secondaryButton {
            min-height: 47px;
            padding: 10px 15px;

            border-radius: 9px;

            font-size: 0.7rem;
            font-weight: 800;
        }

        .primaryButton {
            color: #16110b;
            background: var(--accent, #c99a59);

            border: 1px solid var(--accent, #c99a59);
        }

        .secondaryButton {
            color: var(--color-heading, #f3ede4);
            background: transparent;

            border: 1px solid var(--color-border-strong, #51493f);
        }

        .primaryButton:hover,
        .secondaryButton:hover {
            border-color: var(--color-heading, #f3ede4);
            box-shadow: var(--shadow-md, 0 12px 30px rgba(0, 0, 0, 0.24));
        }

        .primaryButton:focus-visible,
        .secondaryButton:focus-visible,
        .textLink:focus-visible {
            outline: 2px solid var(--accent, #c99a59);
            outline-offset: 3px;
        }

        .highlights {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 9px;

            margin-top: 45px;
        }

        .highlight {
            display: flex;
            align-items: center;
            gap: 12px;

            min-height: 82px;

            padding: 14px;

            background: var(--color-card, #12100d);

            border: 1px solid var(--color-border, #29251f);
            border-radius: 11px;
        }

        .highlightIcon {
            display: grid;
            place-items: center;

            width: 34px;
            height: 34px;

            flex-shrink: 0;

            color: var(--accent, #c99a59);

            border: 1px solid var(--accent-border, #5e472b);
            border-radius: 8px;
        }

        .highlight strong {
            display: block;

            color: var(--color-heading, #f3ede4);

            font-size: 0.83rem;
        }

        .highlight span:last-child {
            display: block;

            margin-top: 4px;

            font-size: 0.58rem;
            line-height: 1.5;
        }

        .heroVisual {
            position: relative;
        }

        .heroImage {
            min-height: 620px;

            border: 1px solid var(--color-border, #29251f);
            border-radius: 24px;
        }

        .heroCard {
            position: absolute;
            right: 22px;
            bottom: 22px;

            display: flex;
            align-items: center;
            gap: 12px;

            max-width: 330px;

            padding: 16px;

            background: color-mix(
                in srgb,
                var(--color-card, #12100d) 92%,
                transparent
            );

            border: 1px solid var(--color-border-strong, #51493f);
            border-radius: 12px;

            backdrop-filter: blur(12px);
        }

        .heroCard > svg {
            flex-shrink: 0;

            width: 20px;
            height: 20px;

            color: var(--accent, #c99a59);
        }

        .heroCard strong {
            display: block;

            color: var(--color-heading, #f3ede4);

            font-size: 0.72rem;
            line-height: 1.5;
        }

        .heroCard span {
            display: block;

            margin-top: 4px;

            font-size: 0.6rem;
            line-height: 1.5;
        }

        .section {
            padding: 100px 0;

            border-bottom: 1px solid var(--color-border, #29251f);
        }

        .sectionHeader {
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            gap: 40px;

            margin-bottom: 32px;
        }

        .sectionHeader h2,
        .experienceGrid h2,
        .cta h2 {
            max-width: 760px;

            margin: 8px 0 0;

            color: var(--color-heading, #f3ede4);

            font-size: clamp(2.2rem, 5vw, 4.6rem);
            font-weight: 800;
            letter-spacing: -0.055em;
            line-height: 0.98;
        }

        .textLink {
            flex-shrink: 0;

            color: var(--color-heading, #f3ede4);

            border-bottom: 1px solid var(--color-border-strong, #51493f);

            font-size: 0.68rem;
            font-weight: 700;
        }

        .textLink:hover {
            border-color: var(--accent, #c99a59);
            text-shadow: 0 0 10px var(--accent-soft, rgba(201, 154, 89, 0.12));
        }

        .serviceGrid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 14px;
        }

        .serviceCard {
            overflow: hidden;

            background: var(--color-card, #12100d);

            border: 1px solid var(--color-border, #29251f);
            border-radius: 16px;

            transition:
                border-color 180ms ease,
                box-shadow 180ms ease;
        }

        .serviceCard:hover {
            border-color: var(--color-border-strong, #51493f);

            box-shadow: var(--shadow-md, 0 12px 30px rgba(0, 0, 0, 0.22));
        }

        .serviceImage {
            min-height: 230px;

            border-bottom: 1px solid var(--color-border, #29251f);
        }

        .serviceContent {
            padding: 22px;
        }

        .serviceIcon {
            display: grid;
            place-items: center;

            width: 38px;
            height: 38px;

            color: var(--accent, #c99a59);

            border: 1px solid var(--accent-border, #5e472b);
            border-radius: 9px;
        }

        .serviceContent h3 {
            margin: 18px 0 0;

            color: var(--color-heading, #f3ede4);

            font-size: 1rem;
        }

        .serviceContent p {
            margin: 9px 0 0;

            font-size: 0.72rem;
            line-height: 1.75;
        }

        .experienceSection {
            padding: 105px 0;

            background: var(--color-card, #12100d);

            border-bottom: 1px solid var(--color-border, #29251f);
        }

        .experienceGrid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 80px;
        }

        .experienceContent {
            display: grid;
            align-content: center;
            gap: 18px;
        }

        .experienceContent p {
            margin: 0;

            font-size: 0.76rem;
            line-height: 1.9;
        }

        .experienceContent .textLink {
            width: fit-content;
            margin-top: 6px;
        }

        .galleryGrid {
            display: grid;
            grid-template-columns: 1.2fr 0.8fr 0.8fr;
            gap: 12px;
        }

        .galleryImage {
            min-height: 420px;

            border: 1px solid var(--color-border, #29251f);
            border-radius: 16px;
        }

        .ctaSection {
            padding: 90px 0;
        }

        .cta {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 50px;

            padding: 45px;

            background: var(--color-card, #12100d);

            border: 1px solid var(--color-border, #29251f);
            border-radius: 18px;
        }

        .cta h2 {
            max-width: 800px;
            font-size: clamp(2rem, 4vw, 3.7rem);
        }

        @media (max-width: 1000px) {
            .heroGrid {
                grid-template-columns: 1fr;
            }

            .heroImage {
                min-height: 520px;
            }

            .serviceGrid {
                grid-template-columns: repeat(2, 1fr);
            }

            .galleryGrid {
                grid-template-columns: 1fr 1fr;
            }

            .galleryImage:first-child {
                grid-column: 1 / -1;
            }
        }

        @media (max-width: 760px) {
            .container {
                width: calc(100% - 28px);
            }

            .hero {
                min-height: auto;

                padding: 125px 0 70px;
            }

            .hero h1 {
                font-size: clamp(3.3rem, 16vw, 5.8rem);
            }

            .section,
            .experienceSection {
                padding: 75px 0;
            }

            .sectionHeader,
            .cta {
                align-items: flex-start;
                flex-direction: column;
            }

            .experienceGrid {
                grid-template-columns: 1fr;
                gap: 35px;
            }

            .cta {
                padding: 28px;
            }
        }

        @media (max-width: 560px) {
            .highlights,
            .serviceGrid,
            .galleryGrid {
                grid-template-columns: 1fr;
            }

            .galleryImage:first-child {
                grid-column: auto;
            }

            .heroImage {
                min-height: 420px;
            }

            .heroCard {
                right: 12px;
                bottom: 12px;
                left: 12px;

                max-width: none;
            }

            .heroActions {
                display: grid;
            }

            .primaryButton,
            .secondaryButton {
                width: 100%;
            }
        }
    `},y=[{label:"Home deliveries / month",value:"150+",icon:e.jsx(o,{"aria-hidden":"true"})},{label:"Repeat customers",value:"70%+",icon:e.jsx(c,{"aria-hidden":"true"})},{label:"Typical delivery slot",value:"60-90 mins",icon:e.jsx(l,{"aria-hidden":"true"})},{label:"Local focus",value:"Bengaluru",icon:e.jsx(d,{"aria-hidden":"true"})}],j=[{title:"Home Delivery",text:"Simple same-day delivery for daily essentials and repeat household orders.",image:x,imageAlt:"UrbanCraft groceries prepared for local home delivery",icon:e.jsx(o,{"aria-hidden":"true"})},{title:"Quick Pickup",text:"Share your list ahead of time and collect a prepared order without waiting.",image:g,imageAlt:"Prepared grocery order ready for quick pickup",icon:e.jsx(t,{"aria-hidden":"true"})},{title:"Repeat Orders",text:"Keep frequently used items easier to manage with flexible recurring orders.",image:m,imageAlt:"Everyday household essentials arranged for repeat orders",icon:e.jsx(p,{"aria-hidden":"true"})}],w=[{src:b,alt:"Fresh produce displayed inside UrbanCraft Services"},{src:v,alt:"Organised grocery shelves inside UrbanCraft Services"},{src:u,alt:"UrbanCraft store details and everyday essentials"}],C=()=>e.jsxs(f.Wrapper,{children:[e.jsx("section",{className:"hero",children:e.jsxs("div",{className:"container heroGrid",children:[e.jsxs("div",{className:"heroContent",children:[e.jsxs("div",{className:"label",children:[e.jsx("span",{className:"dot"}),"UrbanCraft Services"]}),e.jsxs("h1",{children:["Daily essentials,",e.jsx("span",{children:"without the chaos."})]}),e.jsx("p",{className:"heroText",children:"A neighbourhood-focused service built around predictable delivery, quick pickup, organised shopping, and everyday convenience."}),e.jsxs("div",{className:"heroActions",children:[e.jsxs(a,{className:"primaryButton",to:"/services",children:[e.jsx(o,{"aria-hidden":"true"}),"View Services"]}),e.jsxs(a,{className:"secondaryButton",to:"/contact",children:["Contact Us",e.jsx(i,{"aria-hidden":"true"})]})]}),e.jsx("div",{className:"highlights",children:y.map(r=>e.jsxs("article",{className:"highlight",children:[e.jsx("span",{className:"highlightIcon",children:r.icon}),e.jsxs("div",{children:[e.jsx("strong",{children:r.value}),e.jsx("span",{children:r.label})]})]},r.label))})]}),e.jsxs("div",{className:"heroVisual",children:[e.jsx(s,{className:"heroImage",src:h,alt:"Calm and organised UrbanCraft neighbourhood store",loading:"eager",fetchPriority:"high"}),e.jsxs("div",{className:"heroCard",children:[e.jsx(t,{"aria-hidden":"true"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Everyday essentials, thoughtfully organised."}),e.jsx("span",{children:"Simple shopping with less friction."})]})]})]})]})}),e.jsx("section",{className:"section",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"sectionHeader",children:[e.jsxs("div",{children:[e.jsx("p",{className:"sectionLabel",children:"Everyday Services"}),e.jsx("h2",{children:"Built around how people actually shop."})]}),e.jsxs(a,{className:"textLink",to:"/services",children:["Explore all services",e.jsx(i,{"aria-hidden":"true"})]})]}),e.jsx("div",{className:"serviceGrid",children:j.map(r=>e.jsxs("article",{className:"serviceCard",children:[e.jsx(s,{className:"serviceImage",src:r.image,alt:r.imageAlt}),e.jsxs("div",{className:"serviceContent",children:[e.jsx("span",{className:"serviceIcon",children:r.icon}),e.jsx("h3",{children:r.title}),e.jsx("p",{children:r.text})]})]},r.title))})]})}),e.jsx("section",{className:"experienceSection",children:e.jsxs("div",{className:"container experienceGrid",children:[e.jsxs("div",{children:[e.jsx("p",{className:"sectionLabel",children:"The UrbanCraft Approach"}),e.jsx("h2",{children:"Local service should feel simple and dependable."})]}),e.jsxs("div",{className:"experienceContent",children:[e.jsx("p",{children:"UrbanCraft focuses on a clear store layout, practical communication, careful packing, and predictable local service."}),e.jsx("p",{children:"Instead of adding unnecessary complexity, the experience is designed around the things customers use most often."}),e.jsxs(a,{className:"textLink",to:"/about",children:["Read our story",e.jsx(i,{"aria-hidden":"true"})]})]})]})}),e.jsx("section",{className:"section",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"sectionHeader",children:[e.jsxs("div",{children:[e.jsx("p",{className:"sectionLabel",children:"Store Preview"}),e.jsx("h2",{children:"A closer look at the space."})]}),e.jsxs(a,{className:"textLink",to:"/gallery",children:["View gallery",e.jsx(i,{"aria-hidden":"true"})]})]}),e.jsx("div",{className:"galleryGrid",children:w.map(r=>e.jsx(s,{className:"galleryImage",src:r.src,alt:r.alt},r.src))})]})}),e.jsx("section",{className:"ctaSection",children:e.jsxs("div",{className:"container cta",children:[e.jsxs("div",{children:[e.jsx("p",{className:"sectionLabel",children:"Need Something Today?"}),e.jsx("h2",{children:"Tell us what you need and we will help you plan the quickest option."})]}),e.jsxs(a,{className:"primaryButton",to:"/contact",children:["Contact UrbanCraft",e.jsx(i,{"aria-hidden":"true"})]})]})})]});export{C as default};

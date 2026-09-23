import{g as d,r as c,j as e,l as m,q as p,e as h,d as x,s as g}from"./index-Rpumz0bM.js";import{I as f}from"./index-BnTAaTol.js";const b="/urbancraft-services/assets/contact-DQhyAno8.webp",u={Wrapper:d.div`
        color: var(--color-text, #b8b0a6);
        background: var(--color-bg, #0b0a08);

        .container {
            width: min(1240px, calc(100% - 40px));
            margin: 0 auto;
        }

        .label,
        .detailLabel {
            color: var(--accent, #c99a59);

            font-size: 0.62rem;
            font-weight: 800;
            letter-spacing: 0.11em;
            text-transform: uppercase;
        }

        .hero {
            padding: 150px 0 90px;

            border-bottom: 1px solid var(--color-border, #29251f);
        }

        .heroGrid {
            display: grid;
            grid-template-columns: 1fr 0.85fr;
            gap: 75px;
            align-items: center;
        }

        .hero h1 {
            margin: 10px 0 0;

            color: var(--color-heading, #f3ede4);

            font-size: clamp(3.5rem, 7vw, 7rem);
            font-weight: 800;
            letter-spacing: -0.065em;
            line-height: 0.9;
        }

        .hero h1 span {
            display: block;

            color: var(--color-text, #92887b);
        }

        .intro {
            max-width: 620px;

            margin: 27px 0 0;

            font-size: 0.8rem;
            line-height: 1.9;
        }

        .heroImage {
            min-height: 520px;

            border: 1px solid var(--color-border, #29251f);
            border-radius: 22px;
        }

        .contact {
            padding: 100px 0;
        }

        .contactGrid {
            display: grid;
            grid-template-columns: 0.75fr 1.25fr;
            gap: 16px;
            align-items: start;
        }

        .details {
            display: grid;
            gap: 10px;
        }

        .detailCard {
            display: flex;
            align-items: flex-start;
            gap: 14px;

            padding: 20px;

            background: var(--color-card, #12100d);

            border: 1px solid var(--color-border, #29251f);
            border-radius: 12px;
        }

        .icon {
            display: grid;
            place-items: center;

            width: 38px;
            height: 38px;

            flex-shrink: 0;

            color: var(--accent, #c99a59);

            border: 1px solid var(--accent-border, #5e472b);
            border-radius: 9px;
        }

        .detailLabel {
            display: block;
            margin-bottom: 7px;
        }

        .detailCard a,
        .detailCard p {
            margin: 0;

            color: var(--color-heading, #f3ede4);

            font-size: 0.72rem;
            line-height: 1.7;

            text-decoration: none;
        }

        .detailCard a:hover {
            text-shadow: 0 0 10px var(--accent-soft, rgba(201, 154, 89, 0.14));
        }

        .formCard {
            padding: 30px;

            background: var(--color-card, #12100d);

            border: 1px solid var(--color-border, #29251f);
            border-radius: 16px;
        }

        .formHeader h2 {
            margin: 8px 0 0;

            color: var(--color-heading, #f3ede4);

            font-size: clamp(2rem, 4vw, 3.5rem);
            letter-spacing: -0.05em;
            line-height: 1;
        }

        .formHeader > p:last-child {
            max-width: 570px;

            margin: 14px 0 0;

            font-size: 0.7rem;
            line-height: 1.75;
        }

        form {
            display: grid;
            gap: 18px;

            margin-top: 28px;
        }

        .fieldRow {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
        }

        .field {
            display: grid;
            gap: 8px;
        }

        .field label {
            color: var(--color-text, #b8b0a6);

            font-size: 0.61rem;
            font-weight: 700;
        }

        input,
        textarea {
            width: 100%;

            padding: 13px 14px;

            color: var(--color-heading, #f3ede4);
            background: var(--color-bg, #0b0a08);

            border: 1px solid var(--color-border, #29251f);
            border-radius: 9px;

            font: inherit;
            font-size: 0.72rem;

            outline: none;

            transition:
                border-color 180ms ease,
                box-shadow 180ms ease;
        }

        textarea {
            min-height: 160px;
            resize: vertical;
        }

        input:focus,
        textarea:focus {
            border-color: var(--accent-border, #5e472b);

            box-shadow: 0 0 0 3px var(--accent-soft, rgba(201, 154, 89, 0.08));
        }

        form button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;

            width: fit-content;
            min-height: 45px;

            padding: 9px 14px;

            color: #16110b;
            background: var(--accent, #c99a59);

            border: 1px solid var(--accent, #c99a59);
            border-radius: 9px;

            font: inherit;
            font-size: 0.68rem;
            font-weight: 800;

            cursor: pointer;

            transition:
                border-color 180ms ease,
                box-shadow 180ms ease;
        }

        form button:hover {
            border-color: var(--color-heading, #ffffff);

            box-shadow: var(--shadow-md, 0 12px 30px rgba(0, 0, 0, 0.22));
        }

        form button:focus-visible {
            outline: 2px solid var(--accent, #c99a59);
            outline-offset: 3px;
        }

        @media (max-width: 900px) {
            .heroGrid,
            .contactGrid {
                grid-template-columns: 1fr;
            }
        }

        @media (max-width: 760px) {
            .container {
                width: calc(100% - 28px);
            }

            .hero {
                padding: 125px 0 75px;
            }

            .contact {
                padding: 75px 0;
            }

            .fieldRow {
                grid-template-columns: 1fr;
            }
        }

        @media (max-width: 520px) {
            .formCard {
                padding: 20px;
            }

            .heroImage {
                min-height: 390px;
            }

            form button {
                width: 100%;
            }
        }
    `},w=()=>{const[a,n]=c.useState({name:"",email:"",message:""}),r=i=>{const{name:s,value:o}=i.target;n(t=>({...t,[s]:o}))},l=i=>{i.preventDefault();const s=encodeURIComponent(`UrbanCraft enquiry from ${a.name||"website visitor"}`),o=encodeURIComponent([`Name: ${a.name}`,`Email: ${a.email}`,"",a.message].join(`
`));window.location.href=`mailto:hello@urbancraft.services?subject=${s}&body=${o}`};return e.jsxs(u.Wrapper,{children:[e.jsx("section",{className:"hero",children:e.jsxs("div",{className:"container heroGrid",children:[e.jsxs("div",{children:[e.jsx("p",{className:"label",children:"Contact"}),e.jsxs("h1",{children:["A simple way to",e.jsx("span",{children:"start a conversation."})]}),e.jsx("p",{className:"intro",children:"Ask about an order, delivery, pickup, availability, or anything else you need help planning."})]}),e.jsx(f,{className:"heroImage",src:b,alt:"Warm UrbanCraft workspace prepared for customer support",loading:"eager",fetchPriority:"high"})]})}),e.jsx("section",{className:"contact",children:e.jsxs("div",{className:"container contactGrid",children:[e.jsxs("div",{className:"details",children:[e.jsxs("article",{className:"detailCard",children:[e.jsx("span",{className:"icon",children:e.jsx(m,{"aria-hidden":"true"})}),e.jsxs("div",{children:[e.jsx("span",{className:"detailLabel",children:"Phone"}),e.jsx("a",{href:"tel:+911234567890",children:"+91 12345 67890"})]})]}),e.jsxs("article",{className:"detailCard",children:[e.jsx("span",{className:"icon",children:e.jsx(p,{"aria-hidden":"true"})}),e.jsxs("div",{children:[e.jsx("span",{className:"detailLabel",children:"Email"}),e.jsx("a",{href:"mailto:hello@urbancraft.services",children:"hello@urbancraft.services"})]})]}),e.jsxs("article",{className:"detailCard",children:[e.jsx("span",{className:"icon",children:e.jsx(h,{"aria-hidden":"true"})}),e.jsxs("div",{children:[e.jsx("span",{className:"detailLabel",children:"Location"}),e.jsx("p",{children:"Indiranagar, Bengaluru, Karnataka"})]})]}),e.jsxs("article",{className:"detailCard",children:[e.jsx("span",{className:"icon",children:e.jsx(x,{"aria-hidden":"true"})}),e.jsxs("div",{children:[e.jsx("span",{className:"detailLabel",children:"Hours"}),e.jsxs("p",{children:["Monday - Saturday",e.jsx("br",{}),"9:30 AM - 8:00 PM"]})]})]})]}),e.jsxs("div",{className:"formCard",children:[e.jsxs("div",{className:"formHeader",children:[e.jsx("p",{className:"label",children:"Quick Message"}),e.jsx("h2",{children:"Tell us what you need."}),e.jsx("p",{children:"This frontend form prepares an email in your default mail application."})]}),e.jsxs("form",{onSubmit:l,children:[e.jsxs("div",{className:"fieldRow",children:[e.jsxs("div",{className:"field",children:[e.jsx("label",{htmlFor:"name",children:"Name"}),e.jsx("input",{id:"name",name:"name",type:"text",value:a.name,onChange:r,placeholder:"Your name",autoComplete:"name"})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{htmlFor:"email",children:"Email"}),e.jsx("input",{id:"email",name:"email",type:"email",value:a.email,onChange:r,placeholder:"you@example.com",autoComplete:"email"})]})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{htmlFor:"message",children:"Message"}),e.jsx("textarea",{id:"message",name:"message",rows:"6",value:a.message,onChange:r,placeholder:"Tell us what you need...",required:!0})]}),e.jsxs("button",{type:"submit",children:[e.jsx(g,{"aria-hidden":"true"}),"Open Email App"]})]})]})]})})]})};export{w as default};

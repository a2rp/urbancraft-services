import{g as r,r as f,j as e,A as j,a as d,B as b,d as v,c as w,C as y,f as N}from"./index-BtaybVFw.js";const a={Wrapper:r.section`
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
    `,Inner:r.div`
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
    `,Content:r.div`
        display: flex;
        flex-direction: column;
        gap: 18px;
    `,Pill:r.div`
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
    `,Title:r.h1`
        margin: 0;
        font-size: clamp(24px, 3vw, 30px);
        color: var(--color-heading);
        letter-spacing: 0.04em;
    `,Subtitle:r.p`
        margin: 0;
        font-size: 14px;
        line-height: 1.7;
        max-width: 34rem;
        color: var(--color-text);
        opacity: 0.95;
    `,Grid:r.div`
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 14px;
        margin-top: 8px;

        @media (max-width: 720px) {
            grid-template-columns: minmax(0, 1fr);
        }
    `,Card:r.article`
        background: var(--color-card);
        border-radius: 16px;
        border: 1px solid var(--color-border);
        padding: 12px 12px 10px;
        box-shadow: 0 12px 26px rgba(0, 0, 0, 0.55);
    `,CardHeader:r.div`
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
    `,CardList:r.ul`
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
    `,FormCard:r.article`
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
    `,Visual:r.div`
        display: flex;
        align-items: center;
        justify-content: center;
    `,ImageWrapper:r.div`
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
    `,FallbackBlock:r.div`
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
    `},k="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",o="hello@urbancraft.services";function z(){const[p,x]=f.useState(!0),h=t=>{t.preventDefault();const s=new FormData(t.currentTarget),n=(s.get("name")||"").toString().trim(),l=(s.get("email")||"").toString().trim(),c=(s.get("message")||"").toString().trim(),m=`New enquiry from ${n||"UrbanCraft website"}`,i=[];n&&i.push(`Name: ${n}`),l&&i.push(`Email: ${l}`),c&&(i.length&&i.push(""),i.push("Message:"),i.push(c));const g=i.join(`
`),u=`mailto:${encodeURIComponent(o)}?subject=${encodeURIComponent(m)}&body=${encodeURIComponent(g||"Hi, I’d like to know more.")}`;window.location.href=u};return e.jsx(a.Wrapper,{children:e.jsxs(a.Inner,{className:"app-max-width",children:[e.jsxs(a.Content,{children:[e.jsxs(a.Pill,{children:[e.jsx("span",{className:"dot"}),e.jsx("span",{children:"We’re here to help"})]}),e.jsx(a.Title,{children:"Contact UrbanCraft Services"}),e.jsx(a.Subtitle,{children:"Questions, bookings, or special requests—reach out to us and we’ll get back to you as soon as possible."}),e.jsxs(a.Grid,{children:[e.jsxs(a.Card,{children:[e.jsxs(a.CardHeader,{children:[e.jsx("span",{className:"icon",children:e.jsx(j,{})}),e.jsxs("div",{className:"text",children:[e.jsx("h3",{children:"Call or WhatsApp"}),e.jsx("p",{children:"Talk to our front-desk team directly."})]})]}),e.jsxs(a.CardList,{children:[e.jsxs("li",{children:[e.jsx("span",{className:"label",children:"Phone"}),e.jsx("a",{href:"tel:+911234567890",children:"+91 12345 67890"})]}),e.jsxs("li",{children:[e.jsx("span",{className:"label",children:"WhatsApp"}),e.jsxs("a",{href:"https://wa.me/911234567890",target:"_blank",rel:"noreferrer",children:["Chat with us",e.jsx(d,{className:"inline-icon"})]})]})]})]}),e.jsxs(a.Card,{children:[e.jsxs(a.CardHeader,{children:[e.jsx("span",{className:"icon",children:e.jsx(b,{})}),e.jsxs("div",{className:"text",children:[e.jsx("h3",{children:"Email"}),e.jsx("p",{children:"Share details, photos, or documents."})]})]}),e.jsxs(a.CardList,{children:[e.jsxs("li",{children:[e.jsx("span",{className:"label",children:"Support"}),e.jsx("a",{href:`mailto:${o}`,children:o})]}),e.jsxs("li",{children:[e.jsx("span",{className:"label",children:"Business"}),e.jsx("a",{href:"mailto:work@urbancraft.services",children:"work@urbancraft.services"})]})]})]}),e.jsxs(a.Card,{children:[e.jsxs(a.CardHeader,{children:[e.jsx("span",{className:"icon",children:e.jsx(v,{})}),e.jsxs("div",{className:"text",children:[e.jsx("h3",{children:"Visit us"}),e.jsx("p",{children:"Drop by during visiting hours."})]})]}),e.jsxs(a.CardList,{children:[e.jsxs("li",{children:[e.jsx("span",{className:"label",children:"Address"}),e.jsxs("p",{children:["UrbanCraft Services Studio,",e.jsx("br",{}),"Indiranagar, Bengaluru"]})]}),e.jsxs("li",{children:[e.jsx("span",{className:"label",children:"Maps link"}),e.jsxs("a",{href:"https://maps.google.com",target:"_blank",rel:"noreferrer",children:["Open in Maps",e.jsx(d,{className:"inline-icon"})]})]})]})]}),e.jsxs(a.Card,{children:[e.jsxs(a.CardHeader,{children:[e.jsx("span",{className:"icon",children:e.jsx(w,{})}),e.jsxs("div",{className:"text",children:[e.jsx("h3",{children:"Timings"}),e.jsx("p",{children:"We try to respond within one working day."})]})]}),e.jsxs(a.CardList,{children:[e.jsxs("li",{children:[e.jsx("span",{className:"label",children:"Studio"}),e.jsx("p",{children:"Mon – Sat · 9:30 AM – 8:00 PM"})]}),e.jsxs("li",{children:[e.jsx("span",{className:"label",children:"Support"}),e.jsx("p",{children:"Daily · 9:00 AM – 10:00 PM (IST)"})]})]})]})]}),e.jsxs(a.FormCard,{children:[e.jsxs("div",{className:"head",children:[e.jsx("h3",{children:"Send a quick message"}),e.jsx("p",{children:"Fill this short form and your email app will open with the message pre-filled."})]}),e.jsxs("form",{onSubmit:h,children:[e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"field",children:[e.jsx("label",{htmlFor:"name",children:"Name"}),e.jsx("input",{id:"name",name:"name",type:"text",placeholder:"Your full name",autoComplete:"name"})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{htmlFor:"email",children:"Email"}),e.jsx("input",{id:"email",name:"email",type:"email",placeholder:"you@example.com",autoComplete:"email"})]})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{htmlFor:"message",children:"Message"}),e.jsx("textarea",{id:"message",name:"message",rows:3,placeholder:"Tell us what you have in mind..."})]}),e.jsxs("div",{className:"actions",children:[e.jsxs("button",{type:"submit",children:[e.jsx("span",{className:"icon",children:e.jsx(y,{})}),e.jsx("span",{children:"Open email app"})]}),e.jsx("span",{className:"note",children:"No server is used. The form just prepares an email for you."})]})]})]})]}),e.jsx(a.Visual,{children:p?e.jsxs(a.ImageWrapper,{children:[e.jsx("img",{src:k,alt:"Warm studio workspace with plants and a laptop",onError:()=>x(!1),loading:"lazy"}),e.jsxs("div",{className:"overlay",children:[e.jsx("span",{className:"tag-dot"}),e.jsx("span",{className:"tag-text",children:"A calm corner for every conversation"})]})]}):e.jsxs(a.FallbackBlock,{children:[e.jsx("div",{className:"icon-wrap",children:e.jsx(N,{className:"icon"})}),e.jsx("p",{className:"title",children:"Image not available"}),e.jsx("p",{className:"desc",children:"Your network is fine—the hero photo just didn’t load. You can still reach us using the details on the left."})]})})]})})}export{z as default};

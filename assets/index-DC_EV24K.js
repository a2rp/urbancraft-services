import{d as i,r as n,F as m,f as w,t as k,m as N,j as e,b as S,c as g,e as z,u as F,h as p,g as q,v as C,w as I,l as f,x as A,y as H,a as T}from"./index-Bt82ejKb.js";const r={Wrapper:i.section`
        width: 100%;
        padding: 36px 16px 60px;
        background: radial-gradient(
                circle at top,
                rgba(201, 169, 106, 0.08),
                transparent 60%
            ),
            var(--color-bg);
        color: var(--color-text);
    `,Inner:i.div`
        width: 100%;
        max-width: 1160px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 24px;
    `,Hero:i.div`
        display: grid;
        grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
        gap: 24px;
        align-items: stretch;

        @media (max-width: 960px) {
            grid-template-columns: minmax(0, 1fr);
        }
    `,HeroText:i.div`
        display: flex;
        flex-direction: column;
        gap: 16px;
    `,Pill:i.div`
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
    `,Title:i.h1`
        margin: 0;
        font-size: clamp(24px, 3vw, 30px);
        color: var(--color-heading);
        letter-spacing: 0.06em;
        text-transform: uppercase;
    `,Subtitle:i.p`
        margin: 0;
        font-size: 14px;
        line-height: 1.8;
        max-width: 36rem;
        color: var(--color-text);
        opacity: 0.95;
    `,HeroStats:i.ul`
        list-style: none;
        padding: 0;
        margin: 6px 0 0;
        display: flex;
        flex-wrap: wrap;
        gap: 14px;

        li {
            min-width: 150px;
            padding: 8px 10px;
            border-radius: 14px;
            background: var(--color-card);
            border: 1px solid var(--color-border);
            box-shadow: 0 12px 28px rgba(0, 0, 0, 0.65);
        }

        .label {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.12em;
            color: var(--color-text);
            opacity: 0.85;

            .icon {
                font-size: 13px;
                color: var(--accent);
            }
        }

        .value {
            display: block;
            margin-top: 4px;
            font-size: 14px;
            color: var(--color-heading);
        }
    `,HeroVisual:i.div`
        display: flex;
        align-items: center;
        justify-content: center;
    `,ImageWrapper:i.div`
        position: relative;
        width: 100%;
        max-width: 430px;
        border-radius: 22px;
        overflow: hidden;
        background: var(--color-card-soft);
        border: 1px solid var(--color-border);
        box-shadow: 0 22px 50px rgba(0, 0, 0, 0.85);

        img {
            display: block;
            width: 100%;
            height: 270px;
            object-fit: cover;
            filter: saturate(1.05) contrast(1.04);
        }

        .overlay {
            position: absolute;
            inset: 0;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 10px 12px;
            pointer-events: none;
        }

        .tag {
            pointer-events: auto;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 4px 10px;
            border-radius: 999px;
            background: rgba(0, 0, 0, 0.78);
            color: var(--color-heading);
            font-size: 11px;
            backdrop-filter: blur(8px);

            .icon {
                color: var(--accent);
                font-size: 13px;
            }
        }

        .bottom-strip {
            pointer-events: auto;
            display: flex;
            flex-direction: column;
            gap: 4px;
            align-items: flex-start;
        }

        .line {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 3px 9px;
            border-radius: 999px;
            background: rgba(0, 0, 0, 0.75);
            font-size: 11px;
            color: var(--color-heading);
            backdrop-filter: blur(8px);

            .icon {
                font-size: 13px;
                color: var(--accent);
            }
        }

        @media (max-width: 960px) {
            max-width: 100%;
        }
    `,FallbackBlock:i.div`
        width: 100%;
        max-width: 430px;
        padding: 20px 18px 18px;
        border-radius: 22px;
        background: linear-gradient(
                135deg,
                rgba(201, 169, 106, 0.12),
                transparent
            ),
            var(--color-card);
        border: 1px dashed var(--accent-border);
        box-shadow: 0 20px 42px rgba(0, 0, 0, 0.8);
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
            line-height: 1.7;
            color: var(--color-text);
            opacity: 0.95;
        }
    `,SectionHeader:i.header`
        margin-top: 10px;
        padding: 10px 2px 4px;
        display: flex;
        flex-wrap: wrap;
        align-items: flex-end;
        justify-content: space-between;
        gap: 10px;
        border-bottom: 1px solid var(--color-border);

        .left {
            max-width: 480px;
        }

        .eyebrow {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.14em;
            color: var(--color-text);
            opacity: 0.9;
        }

        h2 {
            margin: 4px 0 4px;
            font-size: 16px;
            color: var(--color-heading);
        }

        p {
            margin: 0;
            font-size: 12px;
            color: var(--color-text);
            opacity: 0.9;
        }

        .right {
            .hint {
                display: inline-flex;
                align-items: center;
                gap: 6px;
                font-size: 11px;
                opacity: 0.75;

                .icon {
                    font-size: 13px;
                    color: var(--accent);
                }
            }
        }
    `,CoreGrid:i.div`
        margin-top: 8px;
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 14px;

        @media (max-width: 900px) {
            grid-template-columns: minmax(0, 1fr);
        }
    `,ServiceCard:i.article`
        cursor: pointer;
        background: var(--color-card);
        border-radius: 18px;
        border: 1px solid
            ${({$active:s})=>s?"var(--accent-border)":"var(--color-border)"};
        box-shadow: ${({$active:s})=>s?"0 20px 42px rgba(0,0,0,0.85)":"0 14px 30px rgba(0,0,0,0.7)"};
        padding: 12px 12px 10px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        transition: transform 0.14s ease-out, box-shadow 0.16s ease-out,
            border-color 0.16s ease-out, background-color 0.16s ease-out;

        &:hover {
            transform: translateY(-3px);
            box-shadow: 0 22px 50px rgba(0, 0, 0, 0.9);
        }

        .header {
            display: flex;
            align-items: flex-start;
            gap: 10px;
        }

        .icon-wrap {
            width: 30px;
            height: 30px;
            border-radius: 999px;
            background: var(--accent-soft);
            display: flex;
            align-items: center;
            justify-content: center;

            .icon {
                font-size: 16px;
                color: var(--accent);
            }
        }

        .title-block h3 {
            margin: 0;
            font-size: 14px;
            color: var(--color-heading);
        }

        .title-block p {
            margin: 2px 0 0;
            font-size: 12px;
            color: var(--color-text);
            opacity: 0.9;
        }

        .badge {
            margin-left: auto;
            padding: 2px 8px;
            border-radius: 999px;
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 0.12em;
            background: rgba(201, 169, 106, 0.12);
            border: 1px solid var(--accent-border);
            color: var(--color-heading);
        }

        .details {
            margin: 0;
            margin-top: 4px;
            font-size: 12px;
            color: var(--color-text);
        }

        .bullets {
            list-style: none;
            padding: 0;
            margin: 4px 0 0;
            display: flex;
            flex-direction: column;
            gap: 4px;
            font-size: 12px;

            li {
                display: flex;
                align-items: flex-start;
                gap: 6px;
            }

            .tick {
                font-size: 13px;
                color: var(--accent);
                margin-top: 1px;
                flex-shrink: 0;
            }

            span {
                color: var(--color-text);
            }
        }
    `,AddonGrid:i.div`
        margin-top: 8px;
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 12px;

        @media (max-width: 980px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        @media (max-width: 640px) {
            grid-template-columns: minmax(0, 1fr);
        }
    `,AddonCard:i.article`
        background: var(--color-card);
        border-radius: 16px;
        border: 1px solid var(--color-border);
        padding: 10px 11px 9px;
        box-shadow: 0 14px 32px rgba(0, 0, 0, 0.7);
        display: flex;
        flex-direction: column;
        gap: 6px;
        font-size: 12px;

        .icon-wrap {
            width: 26px;
            height: 26px;
            border-radius: 999px;
            background: var(--accent-soft);
            display: flex;
            align-items: center;
            justify-content: center;

            .icon {
                font-size: 14px;
                color: var(--accent);
            }
        }

        h3 {
            margin: 2px 0 0;
            font-size: 13px;
            color: var(--color-heading);
        }

        p {
            margin: 0;
            font-size: 12px;
            color: var(--color-text);
        }
    `,FlowSection:i.section`
        margin-top: 10px;
        padding-top: 6px;
        display: grid;
        grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
        gap: 20px;

        @media (max-width: 960px) {
            grid-template-columns: minmax(0, 1fr);
        }

        .flow-left {
            max-width: 420px;
        }

        .eyebrow {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.14em;
            color: var(--color-text);
            opacity: 0.9;
        }

        h2 {
            margin: 4px 0 4px;
            font-size: 16px;
            color: var(--color-heading);
        }

        p {
            margin: 0;
            font-size: 12px;
            color: var(--color-text);
            opacity: 0.95;
        }
    `,FlowTimeline:i.ul`
        list-style: none;
        padding: 0;
        margin: 0;
        border-left: 1px dashed var(--color-border);
        padding-left: 14px;
        display: flex;
        flex-direction: column;
        gap: 10px;

        .step {
            display: flex;
            gap: 10px;
        }

        .step-number {
            margin-left: -25px;
            width: 26px;
            height: 26px;
            border-radius: 999px;
            background: var(--color-bg);
            border: 1px solid var(--accent-border);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 11px;
            color: var(--color-heading);
            box-shadow: 0 6px 16px rgba(0, 0, 0, 0.6);
            flex-shrink: 0;
        }

        .body h3 {
            margin: 0;
            font-size: 13px;
            color: var(--color-heading);
        }

        .body p {
            margin: 2px 0 0;
            font-size: 12px;
            color: var(--color-text);
            opacity: 0.95;
        }
    `,FaqSection:i.section`
        margin-top: 14px;
        padding-top: 8px;
        display: grid;
        grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
        gap: 20px;

        @media (max-width: 960px) {
            grid-template-columns: minmax(0, 1fr);
        }

        .left {
            max-width: 420px;
        }

        .eyebrow {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.14em;
            color: var(--color-text);
            opacity: 0.9;
        }

        h2 {
            margin: 4px 0 4px;
            font-size: 16px;
            color: var(--color-heading);
        }

        p {
            margin: 0;
            font-size: 12px;
            color: var(--color-text);
            opacity: 0.9;
        }
    `,FaqList:i.ul`
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 6px;

        li {
            border-radius: 12px;
            background: var(--color-card);
            border: 1px solid var(--color-border);
            overflow: hidden;
            box-shadow: 0 14px 32px rgba(0, 0, 0, 0.7);
        }

        .faq-head {
            width: 100%;
            padding: 8px 10px;
            border: none;
            background: transparent;
            color: var(--color-heading);
            font-size: 12px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 8px;
            cursor: pointer;
            transition: background-color 0.15s ease-out;

            &.open {
                background: var(--color-card-soft);
            }
        }

        .q {
            text-align: left;
        }

        .icon-wrap {
            width: 22px;
            height: 22px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            display: flex;
            align-items: center;
            justify-content: center;

            .icon {
                font-size: 13px;
            }
        }

        .faq-body {
            padding: 0 10px 8px;
            font-size: 12px;
            color: var(--color-text);
            border-top: 1px solid var(--color-border);
        }
    `,CTA:i.section`
        margin-top: 14px;
        padding: 14px 14px 12px;
        border-radius: 18px;
        background: linear-gradient(
                135deg,
                rgba(201, 169, 106, 0.12),
                transparent
            ),
            var(--color-card);
        border: 1px solid var(--accent-border);
        box-shadow: 0 20px 44px rgba(0, 0, 0, 0.85);
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        gap: 14px;

        .left {
            max-width: 460px;
        }

        .eyebrow {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.14em;
            color: var(--color-text);
            opacity: 0.9;
        }

        h2 {
            margin: 4px 0 4px;
            font-size: 16px;
            color: var(--color-heading);
        }

        p {
            margin: 0;
            font-size: 12px;
            color: var(--color-text);
            opacity: 0.9;
        }

        .right {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }

        .primary {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 7px 13px;
            border-radius: 999px;
            border: 1px solid var(--accent-border);
            background: var(--accent);
            color: #000;
            font-size: 12px;
            cursor: pointer;
            transition: transform 0.1s ease-out, box-shadow 0.15s ease-out;

            .icon {
                font-size: 14px;
            }

            &:hover {
                transform: translateY(-1px);
                box-shadow: 0 12px 26px rgba(0, 0, 0, 0.75);
            }

            &:active {
                transform: translateY(0);
                box-shadow: none;
            }
        }

        .ghost {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 7px 12px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: transparent;
            color: var(--color-heading);
            font-size: 12px;
            cursor: pointer;
            transition: background-color 0.15s ease-out,
                border-color 0.15s ease-out, transform 0.1s ease-out;

            .icon {
                font-size: 14px;
            }

            &:hover {
                background: rgba(0, 0, 0, 0.7);
                border-color: var(--accent-border);
                transform: translateY(-1px);
            }

            &:active {
                transform: translateY(0);
            }
        }
    `},E="https://images.unsplash.com/photo-1585386959984-a4155223f3f8?auto=format&fit=crop&w=1200&q=80",W="https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?auto=format&fit=crop&w=1000&q=80",x=[{id:"home-delivery",icon:m,title:"Home Delivery",tagline:"Daily essentials to your doorstep.",details:"Same-day delivery for orders placed before the cut-off time, with careful packing for fragile or fresh items.",bullets:["Delivery slots across the day","Live status via phone / WhatsApp","Cash or digital payments at delivery"],badge:"Most used"},{id:"quick-pickup",icon:w,title:"Quick Store Pickup",tagline:"Order ahead, skip the waiting.",details:"Call, message, or drop a list and we’ll keep everything ready—just pick up and go.",bullets:["Reserved queue for pickups","Helps during busy evenings","Ideal for repeat orders"],badge:"Time saver"},{id:"subscriptions",icon:k,title:"Repeat Subscriptions",tagline:"Set once, delivered on schedule.",details:"For milk, bread, fruits, or other frequently used items, set a simple recurring schedule.",bullets:["Customizable day & quantity","Pause or tweak anytime via phone","Monthly consolidated billing option"],badge:"For regulars"},{id:"bulk-orders",icon:N,title:"Bulk & Party Orders",tagline:"Stock up for events and gatherings.",details:"Special handling and planning support for functions, office gatherings, or community events.",bullets:["Pre-planned packing & delivery","Budget-wise recommendations","Early morning / late-night slots"],badge:"On request"}],P=[{id:"payment-assist",icon:I,title:"Payment Assistance",text:"From UPI and cards to cash-on-delivery, we support multiple options with clear receipts."},{id:"priority-window",icon:g,title:"Priority Time Windows",text:"Short, precise delivery windows wherever possible, especially for senior citizens or working families."},{id:"order-help",icon:f,title:"Order Help Desk",text:"Stuck finalising your list? Call us, share a photo, or forward a previous bill—we’ll build your order from there."},{id:"safe-handling",icon:A,title:"Safe Handling",text:"Segregated packing for edible, fragile, and cleaning items, so everything reaches you safely."}],h=[{q:"How do I place a home-delivery order?",a:"You can send your list on WhatsApp, call the store directly, or share a clear photo of a handwritten list. We’ll confirm availability, amount, and expected delivery time before dispatch."},{q:"Is there a minimum amount for delivery?",a:"Most local deliveries have a small minimum order value. For nearby locations or elderly customers, we try to be flexible. Exact limits depend on the area and time of day."},{q:"Do you charge extra for urgent orders?",a:"For unusually tight timelines or last-minute late-night orders, a small priority fee may apply. We’ll always inform you upfront—no surprise charges at the doorstep."},{q:"Can I change or cancel an order after placing it?",a:"If the order hasn’t been packed or dispatched yet, we’re happy to edit or cancel. Once the rider has left, only partial changes may be possible at delivery."}];function R(s){const t=s.target;t.dataset.fallbackApplied||(t.dataset.fallbackApplied="1",t.src=W)}function D(){var l,c;const[s,t]=n.useState(!0),[u,b]=n.useState(((l=x[0])==null?void 0:l.id)||null),[v,y]=n.useState(((c=h[0])==null?void 0:c.q)||"");return e.jsx(r.Wrapper,{children:e.jsxs(r.Inner,{className:"app-max-width",children:[e.jsxs(r.Hero,{children:[e.jsxs(r.HeroText,{children:[e.jsxs(r.Pill,{children:[e.jsx("span",{className:"dot"}),e.jsx("span",{children:"Services"})]}),e.jsx(r.Title,{children:"How UrbanCraft Services helps"}),e.jsx(r.Subtitle,{children:"Designed around busy days, last-minute lists, and the quiet relief of knowing that someone familiar is taking care of the essentials—from regular groceries to event-sized orders."}),e.jsxs(r.HeroStats,{children:[e.jsxs("li",{children:[e.jsxs("span",{className:"label",children:[e.jsx(m,{className:"icon"}),"Home deliveries / month"]}),e.jsx("span",{className:"value",children:"150+"})]}),e.jsxs("li",{children:[e.jsxs("span",{className:"label",children:[e.jsx(S,{className:"icon"}),"Repeat customers"]}),e.jsx("span",{className:"value",children:"70%+"})]}),e.jsxs("li",{children:[e.jsxs("span",{className:"label",children:[e.jsx(g,{className:"icon"}),"Typical delivery slot"]}),e.jsx("span",{className:"value",children:"60–90 mins"})]})]})]}),e.jsx(r.HeroVisual,{children:s?e.jsxs(r.ImageWrapper,{children:[e.jsx("img",{src:E,alt:"Staff preparing delivery crates in a local store",loading:"lazy",onError:a=>{t(!1),R(a)}}),e.jsxs("div",{className:"overlay",children:[e.jsxs("div",{className:"tag",children:[e.jsx(z,{className:"icon"}),e.jsx("span",{children:"Local deliveries · Within city"})]}),e.jsxs("div",{className:"bottom-strip",children:[e.jsxs("div",{className:"line",children:[e.jsx(F,{className:"icon"}),e.jsx("span",{children:"Express slots for urgent orders"})]}),e.jsxs("div",{className:"line",children:[e.jsx(p,{className:"icon"}),e.jsx("span",{children:"Packed & checked manually"})]})]})]})]}):e.jsxs(r.FallbackBlock,{children:[e.jsx("div",{className:"icon-wrap",children:e.jsx(q,{className:"icon"})}),e.jsx("p",{className:"title",children:"Service image not loaded"}),e.jsx("p",{className:"desc",children:"The network blocked our photo preview, but the services are very real. Scroll down to see how we can help with deliveries, subscriptions, and bulk orders."})]})})]}),e.jsxs(r.SectionHeader,{children:[e.jsxs("div",{className:"left",children:[e.jsx("span",{className:"eyebrow",children:"Core offerings"}),e.jsx("h2",{children:"What we handle for you"}),e.jsx("p",{children:"Each service is built to solve a specific everyday problem—from rushed evenings to monthly grocery planning. Tap a card to focus on it."})]}),e.jsx("div",{className:"right",children:e.jsxs("span",{className:"hint",children:[e.jsx(C,{className:"icon"}),"Service coverage may vary slightly by area and time."]})})]}),e.jsx(r.CoreGrid,{children:x.map(a=>{const o=a.icon,j=a.id===u;return e.jsxs(r.ServiceCard,{$active:j,onClick:()=>b(a.id),children:[e.jsxs("div",{className:"header",children:[e.jsx("div",{className:"icon-wrap",children:e.jsx(o,{className:"icon"})}),e.jsxs("div",{className:"title-block",children:[e.jsx("h3",{children:a.title}),e.jsx("p",{children:a.tagline})]}),a.badge&&e.jsx("span",{className:"badge",children:a.badge})]}),e.jsx("p",{className:"details",children:a.details}),e.jsx("ul",{className:"bullets",children:a.bullets.map(d=>e.jsxs("li",{children:[e.jsx(p,{className:"tick"}),e.jsx("span",{children:d})]},d))})]},a.id)})}),e.jsx(r.SectionHeader,{as:"section",children:e.jsxs("div",{className:"left",children:[e.jsx("span",{className:"eyebrow",children:"Small extras, big relief"}),e.jsx("h2",{children:"Extras that make things smoother"}),e.jsx("p",{children:"Not every service is a big feature. Some are just polite habits and simple systems that make your day lighter."})]})}),e.jsx(r.AddonGrid,{children:P.map(a=>{const o=a.icon;return e.jsxs(r.AddonCard,{children:[e.jsx("div",{className:"icon-wrap",children:e.jsx(o,{className:"icon"})}),e.jsx("h3",{children:a.title}),e.jsx("p",{children:a.text})]},a.id)})}),e.jsxs(r.FlowSection,{children:[e.jsxs("div",{className:"flow-left",children:[e.jsx("span",{className:"eyebrow",children:"Simple flow"}),e.jsx("h2",{children:"How a typical home delivery works"}),e.jsx("p",{children:"The exact steps change based on what you order, but the idea stays the same—keep you informed, avoid surprises, and finish in a single smooth loop."})]}),e.jsxs(r.FlowTimeline,{children:[e.jsx("li",{children:e.jsxs("div",{className:"step",children:[e.jsx("span",{className:"step-number",children:"01"}),e.jsxs("div",{className:"body",children:[e.jsx("h3",{children:"Share your list"}),e.jsx("p",{children:"Send a photo, forward a previous bill, or type a fresh list on WhatsApp / SMS / call."})]})]})}),e.jsx("li",{children:e.jsxs("div",{className:"step",children:[e.jsx("span",{className:"step-number",children:"02"}),e.jsxs("div",{className:"body",children:[e.jsx("h3",{children:"We confirm details"}),e.jsx("p",{children:"We check availability, suggest alternatives if needed, and share an approximate bill amount and time window."})]})]})}),e.jsx("li",{children:e.jsxs("div",{className:"step",children:[e.jsx("span",{className:"step-number",children:"03"}),e.jsxs("div",{className:"body",children:[e.jsx("h3",{children:"Packing & quality checks"}),e.jsx("p",{children:"Items are grouped by type (fresh, fragile, cleaning, etc.), then double-checked before leaving the store."})]})]})}),e.jsx("li",{children:e.jsxs("div",{className:"step",children:[e.jsx("span",{className:"step-number",children:"04"}),e.jsxs("div",{className:"body",children:[e.jsx("h3",{children:"Delivery & payment"}),e.jsx("p",{children:"The rider calls on arrival; pay via UPI, card, or cash. If anything feels off, we fix it on the spot or in the next trip."})]})]})})]})]}),e.jsxs(r.FaqSection,{children:[e.jsxs("div",{className:"left",children:[e.jsx("span",{className:"eyebrow",children:"Questions"}),e.jsx("h2",{children:"Service-related FAQs"}),e.jsx("p",{children:"These are the questions people usually ask when they move from walk-in shopping to a mix of in-store and home deliveries."})]}),e.jsx(r.FaqList,{children:h.map(a=>{const o=v===a.q;return e.jsxs("li",{children:[e.jsxs("button",{type:"button",className:o?"faq-head open":"faq-head",onClick:()=>y(o?"":a.q),children:[e.jsx("span",{className:"q",children:a.q}),e.jsx("span",{className:"icon-wrap",children:e.jsx(H,{className:"icon"})})]}),o&&e.jsx("div",{className:"faq-body",children:e.jsx("p",{children:a.a})})]},a.q)})})]}),e.jsxs(r.CTA,{children:[e.jsxs("div",{className:"left",children:[e.jsx("span",{className:"eyebrow",children:"Next step"}),e.jsx("h2",{children:"Want to try a service once?"}),e.jsx("p",{children:"Start with a small test order or a simple pickup request. You don’t need an app, login, or registration to get started."})]}),e.jsxs("div",{className:"right",children:[e.jsxs("button",{type:"button",className:"primary",children:[e.jsx(f,{className:"icon"}),"Call to place a test order"]}),e.jsxs("button",{type:"button",className:"ghost",children:[e.jsx("span",{children:"View contact details"}),e.jsx(T,{className:"icon"})]})]})]})]})})}export{D as default};

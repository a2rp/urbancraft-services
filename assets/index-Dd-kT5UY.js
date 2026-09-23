import{g as d,j as e,c as n,k as l,l as c,d as p,m,h,n as g,b as u,F as x}from"./index-Rpumz0bM.js";import{I as a}from"./index-BnTAaTol.js";const f="/urbancraft-services/assets/about-01-CW0u-GIg.webp",v="/urbancraft-services/assets/service-02-Dy74FUo3.webp",b="/urbancraft-services/assets/service-03-DIuqaVBZ.webp",y="/urbancraft-services/assets/gallery-01-B598zVs-.webp",j="/urbancraft-services/assets/service-05-D2K6yZuC.webp",N="/urbancraft-services/assets/service-06-lzxyL5qZ.webp",o={src:f,alt:"UrbanCraft team preparing local customer orders"},w=[{id:"home-delivery",iconName:"truck",title:"Home Delivery",tagline:"Daily essentials to your doorstep.",details:"Same-day delivery for orders placed before the cut-off time, with careful packing for fragile or fresh items.",bullets:["Delivery slots across the day","Live status via phone or WhatsApp","Cash or digital payments at delivery"],badge:"Most used",image:v,imageAlt:"Packed groceries prepared for home delivery"},{id:"quick-pickup",iconName:"shopping-bag",title:"Quick Store Pickup",tagline:"Order ahead, skip the waiting.",details:"Call, message, or drop a list and we will keep everything ready so you can pick up and go.",bullets:["Reserved queue for pickups","Helps during busy evenings","Ideal for repeat orders"],badge:"Time saver",image:b,imageAlt:"Prepared customer order ready for quick store pickup"},{id:"subscriptions",iconName:"refresh",title:"Repeat Subscriptions",tagline:"Set once, delivered on schedule.",details:"For milk, bread, fruits, or other frequently used items, set a simple recurring schedule.",bullets:["Customizable day and quantity","Pause or change anytime by phone","Monthly consolidated billing option"],badge:"For regulars",image:y,imageAlt:"Everyday grocery essentials arranged for recurring delivery"},{id:"bulk-orders",iconName:"users",title:"Bulk & Party Orders",tagline:"Stock up for events and gatherings.",details:"Special handling and planning support for functions, office gatherings, or community events.",bullets:["Pre-planned packing and delivery","Budget-wise recommendations","Early morning or late-night slots"],badge:"On request",image:j,imageAlt:"Bulk grocery order prepared for an event"}],k=[{id:"payment-assist",iconName:"credit-card",title:"Payment Assistance",text:"From UPI and cards to cash on delivery, multiple payment options are supported with clear receipts."},{id:"priority-window",iconName:"clock",title:"Priority Time Windows",text:"Short and precise delivery windows wherever possible, especially for senior citizens or working families."},{id:"order-help",iconName:"phone",title:"Order Help Desk",text:"Share your list, a photo, or a previous bill and the order can be prepared from there."},{id:"safe-handling",iconName:"shield",title:"Safe Handling",text:"Edible, fragile, and cleaning items are packed separately so everything reaches you safely."}],t={src:N,alt:"UrbanCraft staff helping prepare and organize customer orders"},C=[{id:"place-order",question:"How do I place a home-delivery order?",answer:"You can send your list on WhatsApp, call the store directly, or share a clear photo of a handwritten list. Availability, amount, and expected delivery time can be confirmed before dispatch."},{id:"minimum-order",question:"Is there a minimum amount for delivery?",answer:"Most local deliveries can have a small minimum order value. Exact limits may depend on the delivery area and time of day."},{id:"urgent-order",question:"Do you charge extra for urgent orders?",answer:"For unusually tight timelines or last-minute orders, a small priority fee may apply. Any additional charge should be confirmed before dispatch."},{id:"change-order",question:"Can I change or cancel an order after placing it?",answer:"If the order has not been packed or dispatched, changes or cancellation can usually be handled. Once dispatched, only limited changes may be possible."}],S=[{id:"deliveries",label:"Home deliveries / month",value:"150+",iconName:"truck"},{id:"repeat-customers",label:"Repeat customers",value:"70%+",iconName:"star"},{id:"delivery-window",label:"Typical delivery slot",value:"60-90 mins",iconName:"clock"}],I={Wrapper:d.div`
        color: var(--color-text, #b8b0a6);
        background: var(--color-bg, #0b0a08);

        .container {
            width: min(1240px, calc(100% - 40px));
            margin: 0 auto;
        }

        .label {
            margin: 0;

            color: var(--accent, #c99a59);

            font-size: 0.64rem;
            font-weight: 800;
            letter-spacing: 0.13em;
            text-transform: uppercase;
        }

        .hero {
            padding: 150px 0 90px;

            border-bottom: 1px solid var(--color-border, #29251f);
        }

        .heroGrid {
            display: grid;
            grid-template-columns: 1fr 0.8fr;
            gap: 70px;
            align-items: center;
        }

        .hero h1,
        .sectionHeader h2,
        .support h2 {
            margin: 10px 0 0;

            color: var(--color-heading, #f3ede4);

            font-weight: 800;
            letter-spacing: -0.06em;
            line-height: 0.96;
        }

        .hero h1 {
            font-size: clamp(3.5rem, 7vw, 7rem);
        }

        .hero h1 span {
            display: block;
            color: var(--color-text, #92887b);
        }

        .intro {
            max-width: 650px;

            margin: 26px 0 0;

            font-size: 0.82rem;
            line-height: 1.9;
        }

        .heroImage {
            min-height: 540px;

            border: 1px solid var(--color-border, #29251f);
            border-radius: 22px;
        }

        .stats {
            padding: 20px 0;

            background: var(--color-card, #12100d);

            border-bottom: 1px solid var(--color-border, #29251f);
        }

        .statsGrid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
        }

        .stat {
            display: flex;
            align-items: center;
            gap: 14px;

            padding: 18px;

            border: 1px solid var(--color-border, #29251f);
            border-radius: 11px;
        }

        .icon {
            display: grid;
            place-items: center;

            width: 40px;
            height: 40px;

            flex-shrink: 0;

            color: var(--accent, #c99a59);

            border: 1px solid var(--accent-border, #5e472b);
            border-radius: 9px;
        }

        .stat strong {
            color: var(--color-heading, #f3ede4);
            font-size: 1rem;
        }

        .stat p {
            margin: 3px 0 0;
            font-size: 0.62rem;
        }

        .services,
        .addons,
        .faq {
            padding: 100px 0;

            border-bottom: 1px solid var(--color-border, #29251f);
        }

        .sectionHeader {
            max-width: 820px;
            margin-bottom: 34px;
        }

        .sectionHeader h2,
        .support h2 {
            font-size: clamp(2.4rem, 5vw, 4.8rem);
        }

        .serviceList {
            display: grid;
            gap: 16px;
        }

        .serviceCard {
            display: grid;
            grid-template-columns: minmax(320px, 0.9fr) 1fr;

            overflow: hidden;

            background: var(--color-card, #12100d);

            border: 1px solid var(--color-border, #29251f);
            border-radius: 16px;
        }

        .serviceCard:nth-child(even) {
            grid-template-columns: 1fr minmax(320px, 0.9fr);
        }

        .serviceCard:nth-child(even) .serviceImage {
            order: 2;
        }

        .serviceImage {
            min-height: 390px;
        }

        .serviceContent {
            display: flex;
            flex-direction: column;
            justify-content: center;

            padding: 34px;
        }

        .serviceTop {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 15px;
        }

        .badge {
            padding: 6px 8px;

            color: var(--accent, #c99a59);

            border: 1px solid var(--accent-border, #5e472b);
            border-radius: 7px;

            font-size: 0.55rem;
            font-weight: 800;
            letter-spacing: 0.06em;
            text-transform: uppercase;
        }

        .serviceContent h3 {
            margin: 24px 0 0;

            color: var(--color-heading, #f3ede4);

            font-size: 1.5rem;
            letter-spacing: -0.035em;
        }

        .tagline {
            margin: 7px 0 0;

            color: var(--accent, #c99a59);

            font-size: 0.72rem;
            font-weight: 700;
        }

        .details {
            margin: 15px 0 0;

            font-size: 0.74rem;
            line-height: 1.8;
        }

        .serviceContent ul {
            display: grid;
            gap: 8px;

            margin: 19px 0 0;
            padding: 0;

            list-style: none;
        }

        .serviceContent li {
            position: relative;

            padding-left: 16px;

            font-size: 0.67rem;
            line-height: 1.7;
        }

        .serviceContent li::before {
            position: absolute;
            top: 0.72em;
            left: 0;

            width: 5px;
            height: 5px;

            content: "";

            background: var(--accent, #c99a59);

            border-radius: 50%;
        }

        .addons {
            background: var(--color-card, #12100d);
        }

        .addonGrid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 12px;
        }

        .addonCard {
            padding: 23px;

            background: var(--color-bg, #0b0a08);

            border: 1px solid var(--color-border, #29251f);
            border-radius: 13px;
        }

        .addonCard h3 {
            margin: 20px 0 0;

            color: var(--color-heading, #f3ede4);

            font-size: 0.84rem;
        }

        .addonCard p {
            margin: 9px 0 0;

            font-size: 0.68rem;
            line-height: 1.75;
        }

        .support {
            padding: 105px 0;

            border-bottom: 1px solid var(--color-border, #29251f);
        }

        .supportGrid {
            display: grid;
            grid-template-columns: 1fr 0.9fr;
            gap: 80px;
            align-items: center;
        }

        .support p:not(.label) {
            max-width: 650px;

            margin: 22px 0 0;

            font-size: 0.76rem;
            line-height: 1.9;
        }

        .supportImage {
            min-height: 480px;

            border: 1px solid var(--color-border, #29251f);
            border-radius: 18px;
        }

        .faqGrid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
        }

        .faqCard {
            padding: 24px;

            background: var(--color-card, #12100d);

            border: 1px solid var(--color-border, #29251f);
            border-radius: 13px;
        }

        .faqCard h3 {
            color: var(--color-heading, #f3ede4);

            font-size: 0.82rem;
            line-height: 1.5;
        }

        .faqCard p {
            margin: 10px 0 0;

            font-size: 0.7rem;
            line-height: 1.8;
        }

        @media (max-width: 980px) {
            .heroGrid,
            .supportGrid {
                grid-template-columns: 1fr;
            }

            .serviceCard,
            .serviceCard:nth-child(even) {
                grid-template-columns: 1fr;
            }

            .serviceCard:nth-child(even) .serviceImage {
                order: 0;
            }

            .addonGrid {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (max-width: 760px) {
            .container {
                width: calc(100% - 28px);
            }

            .hero {
                padding: 125px 0 75px;
            }

            .services,
            .addons,
            .support,
            .faq {
                padding: 75px 0;
            }

            .statsGrid {
                grid-template-columns: 1fr;
            }

            .faqGrid {
                grid-template-columns: 1fr;
            }
        }

        @media (max-width: 520px) {
            .addonGrid {
                grid-template-columns: 1fr;
            }

            .serviceContent {
                padding: 22px;
            }

            .serviceImage,
            .supportImage,
            .heroImage {
                min-height: 390px;
            }
        }
    `},i={truck:e.jsx(x,{"aria-hidden":"true"}),"shopping-bag":e.jsx(u,{"aria-hidden":"true"}),refresh:e.jsx(g,{"aria-hidden":"true"}),users:e.jsx(h,{"aria-hidden":"true"}),"credit-card":e.jsx(m,{"aria-hidden":"true"}),clock:e.jsx(p,{"aria-hidden":"true"}),phone:e.jsx(c,{"aria-hidden":"true"}),shield:e.jsx(l,{"aria-hidden":"true"}),star:e.jsx(n,{"aria-hidden":"true"})},z=()=>e.jsxs(I.Wrapper,{children:[e.jsx("section",{className:"hero",children:e.jsxs("div",{className:"container heroGrid",children:[e.jsxs("div",{children:[e.jsx("p",{className:"label",children:"Services"}),e.jsxs("h1",{children:["Everyday support,",e.jsx("span",{children:"kept straightforward."})]}),e.jsx("p",{className:"intro",children:"Delivery, pickup, recurring orders, and practical help for the things households use most often."})]}),e.jsx(a,{className:"heroImage",src:o.src,alt:o.alt,loading:"eager",fetchPriority:"high"})]})}),e.jsx("section",{className:"stats",children:e.jsx("div",{className:"container statsGrid",children:S.map(r=>e.jsxs("article",{className:"stat",children:[e.jsx("span",{className:"icon",children:i[r.iconName]}),e.jsx("strong",{children:r.value}),e.jsx("p",{children:r.label})]},r.id))})}),e.jsx("section",{className:"services",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"sectionHeader",children:[e.jsx("p",{className:"label",children:"Core Services"}),e.jsx("h2",{children:"Practical options for different kinds of days."})]}),e.jsx("div",{className:"serviceList",children:w.map(r=>e.jsxs("article",{className:"serviceCard",children:[e.jsx(a,{className:"serviceImage",src:r.image,alt:r.imageAlt}),e.jsxs("div",{className:"serviceContent",children:[e.jsxs("div",{className:"serviceTop",children:[e.jsx("span",{className:"icon",children:i[r.iconName]}),e.jsx("span",{className:"badge",children:r.badge})]}),e.jsx("h3",{children:r.title}),e.jsx("p",{className:"tagline",children:r.tagline}),e.jsx("p",{className:"details",children:r.details}),e.jsx("ul",{children:r.bullets.map(s=>e.jsx("li",{children:s},s))})]})]},r.id))})]})}),e.jsx("section",{className:"addons",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"sectionHeader",children:[e.jsx("p",{className:"label",children:"Extra Support"}),e.jsx("h2",{children:"Small details that make regular orders easier."})]}),e.jsx("div",{className:"addonGrid",children:k.map(r=>e.jsxs("article",{className:"addonCard",children:[e.jsx("span",{className:"icon",children:i[r.iconName]}),e.jsx("h3",{children:r.title}),e.jsx("p",{children:r.text})]},r.id))})]})}),e.jsx("section",{className:"support",children:e.jsxs("div",{className:"container supportGrid",children:[e.jsxs("div",{children:[e.jsx("p",{className:"label",children:"Personal Assistance"}),e.jsx("h2",{children:"Not sure which option fits your order?"}),e.jsx("p",{children:"Call or message with your list. The order can be organised around pickup, delivery, recurring requirements, or larger planned quantities."})]}),e.jsx(a,{className:"supportImage",src:t.src,alt:t.alt})]})}),e.jsx("section",{className:"faq",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"sectionHeader",children:[e.jsx("p",{className:"label",children:"Common Questions"}),e.jsx("h2",{children:"Useful details before you order."})]}),e.jsx("div",{className:"faqGrid",children:C.map(r=>e.jsxs("article",{className:"faqCard",children:[e.jsx("h3",{children:r.question}),e.jsx("p",{children:r.answer})]},r.id))})]})})]});export{z as default};

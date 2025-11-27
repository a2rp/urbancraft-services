import{d as r,r as x,j as e,e as n,m as l,n as h,b as m,o as c,c as o,g,p as f,f as u,q as b,s as p,h as v,a as w}from"./index-Bt82ejKb.js";const a={Wrapper:r.section`
        width: 100%;
        padding: 36px 16px 60px;
        background: radial-gradient(
                circle at top,
                rgba(201, 169, 106, 0.08),
                transparent 60%
            ),
            var(--color-bg);
        color: var(--color-text);
    `,Inner:r.div`
        width: 100%;
        max-width: 1160px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 24px;
    `,Hero:r.div`
        display: grid;
        grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
        gap: 24px;
        align-items: stretch;

        @media (max-width: 960px) {
            grid-template-columns: minmax(0, 1fr);
        }
    `,HeroText:r.div`
        display: flex;
        flex-direction: column;
        gap: 16px;
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
        letter-spacing: 0.06em;
        text-transform: uppercase;
    `,Subtitle:r.p`
        margin: 0;
        font-size: 14px;
        line-height: 1.8;
        max-width: 36rem;
        color: var(--color-text);
        opacity: 0.96;
    `,HeroStats:r.ul`
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
            box-shadow: 0 12px 28px rgba(0, 0, 0, 0.7);
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
    `,HeroVisual:r.div`
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
        box-shadow: 0 22px 50px rgba(0, 0, 0, 0.9);

        img {
            display: block;
            width: 100%;
            height: 260px;
            object-fit: cover;
            filter: saturate(1.04) contrast(1.03);
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

        .chip-row {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
        }

        .chip {
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
                font-size: 13px;
                color: var(--accent);
            }
        }

        .bottom-note {
            pointer-events: auto;
            display: inline-flex;
            align-items: flex-start;
            gap: 6px;
            padding: 4px 10px;
            border-radius: 12px;
            background: rgba(0, 0, 0, 0.78);
            font-size: 11px;
            color: var(--color-heading);
            backdrop-filter: blur(8px);

            .icon {
                font-size: 13px;
                color: var(--accent);
                margin-top: 1px;
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
                rgba(201, 169, 106, 0.12),
                transparent
            ),
            var(--color-card);
        border: 1px dashed var(--accent-border);
        box-shadow: 0 20px 42px rgba(0, 0, 0, 0.85);
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
            opacity: 0.96;
        }
    `,SectionTwoColumns:r.section`
        margin-top: 12px;
        display: grid;
        grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
        gap: 20px;
        align-items: flex-start;

        @media (max-width: 960px) {
            grid-template-columns: minmax(0, 1fr);
        }

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
            margin: 0 0 6px;
            font-size: 12px;
            color: var(--color-text);
            opacity: 0.96;
        }
    `,HighlightBlock:r.div`
        border-radius: 18px;
        background: var(--color-card-soft);
        border: 1px solid var(--color-border);
        box-shadow: 0 18px 40px rgba(0, 0, 0, 0.85);
        padding: 12px 13px 10px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        font-size: 12px;

        .row {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 3px 9px;
            border-radius: 999px;
            background: rgba(0, 0, 0, 0.8);
            border: 1px solid var(--accent-border);
            font-size: 11px;
            color: var(--color-heading);

            .icon {
                font-size: 13px;
                color: var(--accent);
            }
        }

        .text {
            margin: 0;
            color: var(--color-text);
            line-height: 1.7;
        }

        .note {
            margin: 0;
            font-size: 11px;
            color: var(--color-text);
            opacity: 0.85;
        }
    `,SectionHeader:r.header`
        margin-top: 14px;
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
    `,ValuesGrid:r.div`
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
    `,ValueCard:r.article`
        background: var(--color-card);
        border-radius: 16px;
        border: 1px solid var(--color-border);
        padding: 10px 11px 9px;
        box-shadow: 0 14px 32px rgba(0, 0, 0, 0.75);
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
    `,InsideSection:r.section`
        margin-top: 14px;
        display: grid;
        grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
        gap: 20px;
        align-items: flex-start;

        @media (max-width: 960px) {
            grid-template-columns: minmax(0, 1fr);
        }

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
            opacity: 0.95;
        }

        .points {
            list-style: none;
            padding: 0;
            margin: 8px 0 0;
            display: flex;
            flex-direction: column;
            gap: 5px;
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
    `,InsideCards:r.div`
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        gap: 8px;

        .card {
            border-radius: 16px;
            background: var(--color-card);
            border: 1px solid var(--color-border);
            padding: 9px 11px 8px;
            box-shadow: 0 14px 30px rgba(0, 0, 0, 0.75);
            font-size: 12px;
        }

        .label-row {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            margin-bottom: 4px;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.12em;
            color: var(--color-text);
            opacity: 0.9;

            .icon {
                font-size: 13px;
                color: var(--accent);
            }
        }

        p {
            margin: 0;
            font-size: 12px;
            color: var(--color-text);
        }
    `,Timeline:r.ul`
        list-style: none;
        padding: 0;
        margin: 8px 0 0;
        border-left: 1px dashed var(--color-border);
        padding-left: 14px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        font-size: 12px;

        li {
            position: relative;
            padding-left: 10px;
        }

        .dot {
            position: absolute;
            left: -22px;
            top: 5px;
            width: 12px;
            height: 12px;
            border-radius: 999px;
            background: var(--color-bg);
            border: 2px solid var(--accent);
            box-shadow: 0 6px 16px rgba(0, 0, 0, 0.7);
        }

        .content {
            display: flex;
            flex-direction: column;
            gap: 2px;
        }

        .year {
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.14em;
            color: var(--color-text);
            opacity: 0.8;
        }

        h3 {
            margin: 0;
            font-size: 13px;
            color: var(--color-heading);
        }

        p {
            margin: 0;
            font-size: 12px;
            color: var(--color-text);
            opacity: 0.96;
        }
    `,OwnerSection:r.section`
        margin-top: 14px;
        display: grid;
        grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr);
        gap: 18px;

        @media (max-width: 960px) {
            grid-template-columns: minmax(0, 1fr);
        }
    `,OwnerCard:r.article`
        border-radius: 20px;
        background: var(--color-card-soft);
        border: 1px solid var(--color-border);
        padding: 12px 13px 11px;
        box-shadow: 0 20px 44px rgba(0, 0, 0, 0.9);
        display: grid;
        grid-template-columns: auto minmax(0, 1fr);
        gap: 12px;
        align-items: flex-start;
        font-size: 12px;

        .avatar {
            width: 40px;
            height: 40px;
            border-radius: 999px;
            background: var(--accent-soft);
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 600;
            font-size: 18px;
            color: var(--accent);
            box-shadow: 0 10px 24px rgba(0, 0, 0, 0.7);
        }

        .text h2 {
            margin: 0 0 4px;
            font-size: 15px;
            color: var(--color-heading);
        }

        .text p {
            margin: 0 0 6px;
            color: var(--color-text);
            line-height: 1.8;
        }

        .signoff {
            font-size: 12px;
            opacity: 0.9;
        }

        .meta-row {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            margin-top: 4px;
            font-size: 11px;
            color: var(--color-text);
            opacity: 0.85;

            .name {
                font-weight: 500;
                color: var(--color-heading);
            }
        }

        @media (max-width: 640px) {
            grid-template-columns: minmax(0, 1fr);
        }
    `,OwnerSide:r.div`
        display: flex;
        flex-direction: column;
        gap: 8px;
        font-size: 12px;

        .block {
            border-radius: 16px;
            background: var(--color-card);
            border: 1px solid var(--color-border);
            padding: 9px 11px 8px;
            box-shadow: 0 14px 32px rgba(0, 0, 0, 0.75);
        }

        .label-row {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            margin-bottom: 4px;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.12em;
            color: var(--color-text);
            opacity: 0.9;

            .icon {
                font-size: 13px;
                color: var(--accent);
            }
        }

        p {
            margin: 0;
            color: var(--color-text);
        }
    `,CTA:r.section`
        margin-top: 16px;
        padding: 14px 14px 12px;
        border-radius: 18px;
        background: linear-gradient(
                135deg,
                rgba(201, 169, 106, 0.12),
                transparent
            ),
            var(--color-card);
        border: 1px solid var(--accent-border);
        box-shadow: 0 20px 44px rgba(0, 0, 0, 0.9);
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
    `},y="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",j="https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?auto=format&fit=crop&w=1000&q=80",k=[{id:"freshness",icon:u,title:"Thoughtful stocking",text:"We prefer a tighter, carefully chosen range over endless shelves. Less visual noise, more useful products."},{id:"time",icon:o,title:"Respect for your time",text:"Quick pickups, clear call-backs, and realistic delivery windows instead of vague ‘on the way’ messages."},{id:"clarity",icon:b,title:"Transparent communication",text:"If something is out of stock or delayed, we tell you. No hidden swaps or quiet replacements at billing."},{id:"care",icon:p,title:"Care in small things",text:"From how bags are arranged to how quickly calls are returned, we try not to treat any detail as ‘too small’."}],N=[{year:"Year 1",title:"From a simple local store",text:"Started as a straightforward neighborhood shop—the kind of place people dropped by after work for quick essentials."},{year:"Year 2",title:"Adding structure to chaos",text:"Noticed recurring patterns in how people ordered. We began logging repeat lists, common queries, and busy-time bottlenecks."},{year:"Year 3",title:"Deliveries, lists, and routines",text:"Introduced home deliveries, phone-based ordering, and simple subscription-style routines for repeat customers."},{year:"Today",title:"UrbanCraft Services",text:"Same local-store warmth, but with more organised services, better tracking, and a calmer visual experience for visitors."}],z=["Counters arranged to keep walk paths open, not blocked by stacks.","Pricing and discounts kept clear and legible, without cluttered posters.","Coolers and fresh sections placed where people naturally pause and decide.","Back-of-house shelves labelled so the team spends less time searching."];function S(t){const s=t.target;s.dataset.fallbackApplied||(s.dataset.fallbackApplied="1",s.src=j)}function T(){const[t,s]=x.useState(!0);return e.jsx(a.Wrapper,{children:e.jsxs(a.Inner,{className:"app-max-width",children:[e.jsxs(a.Hero,{children:[e.jsxs(a.HeroText,{children:[e.jsxs(a.Pill,{children:[e.jsx("span",{className:"dot"}),e.jsx("span",{children:"About UrbanCraft Services"})]}),e.jsx(a.Title,{children:"A local store, tuned for busy lives"}),e.jsx(a.Subtitle,{children:"UrbanCraft Services is built around a simple idea: combine the familiarity of a neighborhood shop with the quiet discipline of a well-run service team."}),e.jsxs(a.HeroStats,{children:[e.jsxs("li",{children:[e.jsxs("span",{className:"label",children:[e.jsx(n,{className:"icon"}),"Rooted in one neighborhood"]}),e.jsx("span",{className:"value",children:"Single-city focus"})]}),e.jsxs("li",{children:[e.jsxs("span",{className:"label",children:[e.jsx(l,{className:"icon"}),"Families we serve"]}),e.jsx("span",{className:"value",children:"Growing every month"})]}),e.jsxs("li",{children:[e.jsxs("span",{className:"label",children:[e.jsx(h,{className:"icon"}),"Style of work"]}),e.jsx("span",{className:"value",children:"Calm & precise"})]})]})]}),e.jsx(a.HeroVisual,{children:t?e.jsxs(a.ImageWrapper,{children:[e.jsx("img",{src:y,alt:"Street view of a calm, well-lit local store at dusk",loading:"lazy",onError:i=>{s(!1),S(i)}}),e.jsxs("div",{className:"overlay",children:[e.jsxs("div",{className:"chip-row",children:[e.jsxs("div",{className:"chip",children:[e.jsx(m,{className:"icon"}),e.jsx("span",{children:"Everyday, not occasional"})]}),e.jsxs("div",{className:"chip",children:[e.jsx(c,{className:"icon"}),e.jsx("span",{children:"Neighborhood-first focus"})]})]}),e.jsxs("div",{className:"bottom-note",children:[e.jsx(o,{className:"icon"}),e.jsx("span",{children:"Lights on early, shutters down late, but the idea is to keep your day lighter."})]})]})]}):e.jsxs(a.FallbackBlock,{children:[e.jsx("div",{className:"icon-wrap",children:e.jsx(g,{className:"icon"})}),e.jsx("p",{className:"title",children:"Image preview not loaded"}),e.jsx("p",{className:"desc",children:"The hero photo didn’t load, but the story remains the same—a local store, tuned slowly and carefully around how people actually shop."})]})})]}),e.jsxs(a.SectionTwoColumns,{children:[e.jsxs("div",{className:"left",children:[e.jsx("span",{className:"eyebrow",children:"Where it started"}),e.jsx("h2",{children:"From rushed visits to calmer experiences"}),e.jsx("p",{children:"Over time, we noticed that people were not just buying things—they were juggling time, kids, deadlines, calls, and last-minute reminders. The store was one more thing to “ somehow manage before the day ends”."}),e.jsx("p",{children:"UrbanCraft Services is our attempt to reduce that friction. Not with loud offers or gimmicks, but with quieter, more dependable routines: organised racks, predictable service, and simple, clear options for delivery and pickups."})]}),e.jsx("div",{className:"right",children:e.jsxs(a.HighlightBlock,{children:[e.jsx("div",{className:"row",children:e.jsxs("div",{className:"pill",children:[e.jsx(f,{className:"icon"}),e.jsx("span",{children:"Slow, steady improvements"})]})}),e.jsx("p",{className:"text",children:"The store didn’t change overnight. We kept small internal checklists, tracked peak hours, gradually re-arranged shelves, set up delivery patterns—and kept only the changes that actually made people’s visits easier."}),e.jsx("p",{className:"note",children:"No dramatic “grand reopening”. Just quiet, continuous tinkering."})]})})]}),e.jsx(a.SectionHeader,{children:e.jsxs("div",{className:"left",children:[e.jsx("span",{className:"eyebrow",children:"What we stand for"}),e.jsx("h2",{children:"The principles behind the day-to-day work"}),e.jsx("p",{children:"The layout, the way we answer calls, the way bags are packed—everything is guided by a few simple principles that we keep coming back to."})]})}),e.jsx(a.ValuesGrid,{children:k.map(i=>{const d=i.icon;return e.jsxs(a.ValueCard,{children:[e.jsx("div",{className:"icon-wrap",children:e.jsx(d,{className:"icon"})}),e.jsx("h3",{children:i.title}),e.jsx("p",{children:i.text})]},i.id)})}),e.jsxs(a.InsideSection,{children:[e.jsxs("div",{className:"left",children:[e.jsx("span",{className:"eyebrow",children:"Inside the store"}),e.jsx("h2",{children:"What a typical visit feels like"}),e.jsx("p",{children:"The exact details change across days and seasons, but the goal stays constant: you should be able to understand the space within a few seconds of walking in."}),e.jsx("ul",{className:"points",children:z.map(i=>e.jsxs("li",{children:[e.jsx(v,{className:"tick"}),e.jsx("span",{children:i})]},i))})]}),e.jsxs(a.InsideCards,{children:[e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"label-row",children:[e.jsx(o,{className:"icon"}),e.jsx("span",{children:"Peak hour handling"})]}),e.jsx("p",{children:"Evening hours are broken into micro-slots, balancing quick walk-ins, phone orders, and deliveries so the space doesn’t feel chaotic."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"label-row",children:[e.jsx(l,{className:"icon"}),e.jsx("span",{children:"Different shoppers, different styles"})]}),e.jsx("p",{children:"Some people like browsing. Others want to be in and out in minutes. The layout and counter behavior try to respect both."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"label-row",children:[e.jsx(c,{className:"icon"}),e.jsx("span",{children:"Offers without noise"})]}),e.jsx("p",{children:"When there are offers, we keep them visible but not overwhelming—no aggressive clutter on every aisle."})]})]})]}),e.jsx(a.SectionHeader,{children:e.jsxs("div",{className:"left",children:[e.jsx("span",{className:"eyebrow",children:"A slow timeline"}),e.jsx("h2",{children:"How UrbanCraft evolved over the years"}),e.jsx("p",{children:"There isn’t a single big “pivot” moment—just small, repeated choices that nudged the store in a more intentional direction."})]})}),e.jsx(a.Timeline,{children:N.map(i=>e.jsxs("li",{children:[e.jsx("div",{className:"dot"}),e.jsxs("div",{className:"content",children:[e.jsx("span",{className:"year",children:i.year}),e.jsx("h3",{children:i.title}),e.jsx("p",{children:i.text})]})]},i.year))}),e.jsxs(a.OwnerSection,{children:[e.jsxs(a.OwnerCard,{children:[e.jsx("div",{className:"avatar",children:e.jsx("span",{children:"U"})}),e.jsxs("div",{className:"text",children:[e.jsx("h2",{children:"A note from the owner"}),e.jsx("p",{children:"“UrbanCraft isn’t an attempt to become the biggest store in the area. It’s an attempt to be the calmest, most reliable one—the place people instinctively trust when they’re tired, busy, or just not in the mood to compare ten brands for everything.”"}),e.jsx("p",{className:"signoff",children:"We keep improving in quiet, small ways—layout tweaks, better checklists, clearer workflows. If you notice something that can be better, we genuinely want to hear it."}),e.jsxs("div",{className:"meta-row",children:[e.jsx("span",{className:"name",children:"UrbanCraft Services"}),e.jsx("span",{className:"role",children:"Store & service team"})]})]})]}),e.jsxs(a.OwnerSide,{children:[e.jsxs("div",{className:"block",children:[e.jsxs("div",{className:"label-row",children:[e.jsx(p,{className:"icon"}),e.jsx("span",{children:"What matters most"})]}),e.jsx("p",{children:"People should feel slightly lighter walking out than they did walking in—whether they visited in person or interacted over a call."})]}),e.jsxs("div",{className:"block",children:[e.jsxs("div",{className:"label-row",children:[e.jsx(o,{className:"icon"}),e.jsx("span",{children:"How we measure ourselves"})]}),e.jsx("p",{children:"Fewer repeated complaints. Shorter time to resolve issues. More familiar names on the order book week after week."})]})]})]}),e.jsxs(a.CTA,{children:[e.jsxs("div",{className:"left",children:[e.jsx("span",{className:"eyebrow",children:"Visit or message"}),e.jsx("h2",{children:"See the store once, or start with a small order"}),e.jsx("p",{children:"The best way to understand UrbanCraft is to use it in your everyday life—whether that means a quick walk-in visit or a simple delivery request."})]}),e.jsxs("div",{className:"right",children:[e.jsxs("button",{type:"button",className:"primary",children:[e.jsx(n,{className:"icon"}),"Find us on the map"]}),e.jsxs("button",{type:"button",className:"ghost",children:[e.jsx("span",{children:"View services and delivery options"}),e.jsx(w,{className:"icon"})]})]})]})]})})}export{T as default};

import{d as r,r as c,j as e,k as m,g as b,m as v,c as y,b as j,t as w,o as h,z as N,s as k,a as z}from"./index-Bt82ejKb.js";const o={Wrapper:r.section`
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
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 24px;
    `,Hero:r.div`
        display: grid;
        grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
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
    `,TitleRow:r.div`
        display: flex;
        flex-wrap: wrap;
        align-items: baseline;
        gap: 14px;

        h1 {
            margin: 0;
            font-size: clamp(24px, 3vw, 30px);
            color: var(--color-heading);
            letter-spacing: 0.06em;
            text-transform: uppercase;
        }

        .badge {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 4px 10px;
            border-radius: 999px;
            background: var(--color-card);
            border: 1px solid var(--color-border);
            font-size: 11px;
            color: var(--color-text);

            .icon {
                font-size: 13px;
                color: var(--accent);
            }
        }
    `,HeroSubtitle:r.p`
        margin: 0;
        font-size: 14px;
        line-height: 1.75;
        max-width: 35rem;
        color: var(--color-text);
        opacity: 0.95;
    `,HeroStats:r.ul`
        list-style: none;
        padding: 0;
        margin: 4px 0 0;
        display: flex;
        flex-wrap: wrap;
        gap: 14px;

        li {
            min-width: 120px;
            padding: 8px 10px;
            border-radius: 12px;
            background: var(--color-card);
            border: 1px solid var(--color-border);
            box-shadow: 0 10px 24px rgba(0, 0, 0, 0.55);
        }

        .label {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.12em;
            color: var(--color-text);
            opacity: 0.8;

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
    `,HighlightCard:r.article`
        background: var(--color-card-soft);
        border-radius: 18px;
        border: 1px solid var(--color-border);
        padding: 10px;
        box-shadow: 0 18px 40px rgba(0, 0, 0, 0.75);
        display: flex;
        flex-direction: column;
        gap: 10px;
    `,HighlightImageWrapper:r.div`
        position: relative;
        overflow: hidden;
        border-radius: 14px;
        background: var(--color-bg);

        img {
            display: block;
            width: 100%;
            height: 210px;
            object-fit: cover;
            filter: saturate(1.05) contrast(1.02);
        }

        .overlay {
            position: absolute;
            left: 10px;
            right: 10px;
            bottom: 10px;
            display: flex;
            justify-content: space-between;
            gap: 8px;
            pointer-events: none;
        }

        .chip {
            pointer-events: auto;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 4px 9px;
            border-radius: 999px;
            background: rgba(0, 0, 0, 0.75);
            color: var(--color-heading);
            font-size: 11px;
            backdrop-filter: blur(6px);

            .icon {
                font-size: 13px;
                color: var(--accent);
            }
        }

        .shuffle {
            pointer-events: auto;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 4px 9px;
            border-radius: 999px;
            border: 1px solid var(--accent-border);
            background: rgba(0, 0, 0, 0.78);
            color: var(--color-heading);
            font-size: 11px;
            cursor: pointer;
            backdrop-filter: blur(8px);
            transition: background-color 0.15s ease-out, transform 0.1s ease-out;

            .icon {
                font-size: 13px;
            }

            &:hover {
                transform: translateY(-1px);
                background: rgba(0, 0, 0, 0.9);
            }

            &:active {
                transform: translateY(0);
            }
        }
    `,HighlightMeta:r.div`
        display: flex;
        flex-direction: column;
        gap: 6px;

        .title-row {
            display: flex;
            flex-wrap: wrap;
            align-items: baseline;
            gap: 8px;
        }

        h2 {
            margin: 0;
            font-size: 15px;
            color: var(--color-heading);
        }

        .mood {
            display: inline-flex;
            align-items: center;
            gap: 4px;
            padding: 2px 8px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 0.12em;
            color: var(--color-text);
            opacity: 0.85;

            .icon {
                font-size: 11px;
                color: var(--accent);
            }
        }

        .desc {
            margin: 0;
            font-size: 12px;
            line-height: 1.6;
            color: var(--color-text);
        }

        .meta {
            margin: 0;
            font-size: 11px;
            color: var(--color-text);
            opacity: 0.75;
        }
    `,FilterBar:r.div`
        padding: 8px 10px;
        border-radius: 14px;
        background: var(--color-card);
        border: 1px solid var(--color-border);
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        box-shadow: 0 14px 30px rgba(0, 0, 0, 0.65);

        .left {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 10px;
        }

        .label {
            display: inline-flex;
            align-items: center;
            gap: 6px;
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

        .chips {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
        }

        .chip {
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text);
            font-size: 11px;
            cursor: pointer;
            transition: background-color 0.15s ease-out,
                border-color 0.15s ease-out, transform 0.1s ease-out;

            &.active {
                background: var(--accent);
                color: #000;
                border-color: var(--accent-border);
            }

            &:hover {
                transform: translateY(-1px);
            }
        }

        .right {
            .hint {
                font-size: 11px;
                opacity: 0.7;
            }
        }
    `,Grid:r.div`
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 14px;
        margin-top: 6px;

        @media (max-width: 960px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        @media (max-width: 640px) {
            grid-template-columns: minmax(0, 1fr);
        }
    `,Card:r.article`
        cursor: pointer;
        background: var(--color-card);
        border-radius: 16px;
        border: 1px solid
            ${({$isActive:t})=>t?"var(--accent-border)":"var(--color-border)"};
        box-shadow: ${({$isActive:t})=>t?"0 18px 40px rgba(0,0,0,0.75)":"0 12px 26px rgba(0,0,0,0.6)"};
        overflow: hidden;
        display: flex;
        flex-direction: column;
        transition: transform 0.14s ease-out, box-shadow 0.16s ease-out,
            border-color 0.16s ease-out, background-color 0.16s ease-out;

        &:hover {
            transform: translateY(-3px);
            box-shadow: 0 20px 46px rgba(0, 0, 0, 0.85);
        }

        .image-wrap {
            position: relative;
            overflow: hidden;
            background: var(--color-bg);

            img {
                display: block;
                width: 100%;
                height: 170px;
                object-fit: cover;
                filter: saturate(1.03) contrast(1.02);
                transition: transform 0.35s ease-out, filter 0.2s ease-out;
            }
        }

        &:hover img {
            transform: scale(1.03);
            filter: saturate(1.08) contrast(1.05);
        }

        .overlay {
            position: absolute;
            right: 10px;
            bottom: 10px;
        }

        .heart {
            width: 30px;
            height: 30px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: rgba(0, 0, 0, 0.75);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            color: var(--color-heading);
            font-size: 14px;
            transition: background-color 0.15s ease-out, transform 0.1s ease-out;

            .icon {
                color: var(--accent);
            }

            &:hover {
                transform: translateY(-1px);
                background: rgba(0, 0, 0, 0.9);
            }
        }

        .body {
            padding: 10px 11px 9px;
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        .title-row {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 8px;
        }

        h3 {
            margin: 0;
            font-size: 13px;
            color: var(--color-heading);
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 4px;
            padding: 2px 7px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 0.12em;
            color: var(--color-text);
            opacity: 0.8;

            .icon {
                font-size: 11px;
                color: var(--accent);
            }
        }

        .mood {
            margin: 0;
            font-size: 12px;
            color: var(--color-text);
        }

        .meta {
            margin: 0;
            font-size: 11px;
            color: var(--color-text);
            opacity: 0.75;
        }
    `,StoryStrip:r.div`
        margin-top: 8px;
        padding: 12px 12px 10px;
        border-radius: 16px;
        background: var(--color-card-soft);
        border: 1px solid var(--color-border);
        box-shadow: 0 16px 34px rgba(0, 0, 0, 0.7);
        display: flex;
        flex-direction: column;
        gap: 6px;
        font-size: 12px;

        .line {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }

        .label {
            text-transform: uppercase;
            letter-spacing: 0.12em;
            font-size: 11px;
            color: var(--color-text);
            opacity: 0.8;
            min-width: 140px;
        }

        .text {
            color: var(--color-text);
        }
    `,CTA:r.section`
        margin-top: 6px;
        padding: 14px 14px 12px;
        border-radius: 18px;
        background: linear-gradient(
                135deg,
                rgba(201, 169, 106, 0.12),
                transparent
            ),
            var(--color-card);
        border: 1px solid var(--accent-border);
        box-shadow: 0 18px 38px rgba(0, 0, 0, 0.8);
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
            text-transform: uppercase;
            letter-spacing: 0.14em;
            font-size: 11px;
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
                box-shadow: 0 12px 26px rgba(0, 0, 0, 0.7);
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
    `},S="https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?auto=format&fit=crop&w=1000&q=80",s=[{id:"fresh-counter",url:"https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1100&q=80",title:"Morning counter · Freshly stocked",mood:"Everyday freshness",tags:["store","products"],meta:"Shot at 8:30 AM · Wide"},{id:"fruit-closeup",url:"https://images.unsplash.com/photo-1518843875459-f738682238a6?auto=format&fit=crop&w=1100&q=80",title:"Seasonal fruits in focus",mood:"Color & texture",tags:["products"],meta:"Macro · Natural light"},{id:"baskets",url:"https://images.unsplash.com/photo-1542838132-0fae9e417063?auto=format&fit=crop&w=1100&q=80",title:"Hand-picked baskets",mood:"Market style",tags:["store","details"],meta:"Warm tone · Film look"},{id:"checkout",url:"https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1100&q=80",title:"Checkout lane, no rush",mood:"Soft evening",tags:["people","store"],meta:"Ambient · Daily life"},{id:"team-laugh",url:"https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1100&q=80",title:"Team huddle between orders",mood:"Behind the scenes",tags:["people","bts"],meta:"Studio corner · BTS"},{id:"coffee-break",url:"https://images.unsplash.com/photo-1459257868276-5e65389e2722?auto=format&fit=crop&w=1100&q=80",title:"5-minute pause, long day",mood:"Calm break",tags:["bts"],meta:"Soft contrast · Candid"},{id:"workspace",url:"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1100&q=80",title:"Owner’s desk · Planning the week",mood:"Planning & notes",tags:["owner","bts"],meta:"Overhead · Desk story"},{id:"entrance",url:"https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1100&q=80",title:"Entrance on a busy Saturday",mood:"Movement & light",tags:["store","people"],meta:"Street · Natural blur"},{id:"shelf-detail",url:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1100&q=80",title:"Shelf detail · Quiet corner",mood:"Neat & minimal",tags:["details","products"],meta:"Close crop · Texture"},{id:"night-front",url:"https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1100&q=80",title:"Front facade after closing",mood:"Night lights",tags:["store"],meta:"Blue hour · Long exposure"}],C=[{id:"all",label:"All moments"},{id:"store",label:"Inside the store"},{id:"products",label:"Products"},{id:"people",label:"People & mood"},{id:"bts",label:"Behind the scenes"},{id:"details",label:"Details"}];function g(t){const l=t.target;l.dataset.fallbackApplied||(l.dataset.fallbackApplied="1",l.src=S)}function H(){var x;const[t,l]=c.useState("all"),[n,d]=c.useState(((x=s[0])==null?void 0:x.id)||null),u=c.useMemo(()=>t==="all"?s:s.filter(a=>a.tags.includes(t)),[t]),i=c.useMemo(()=>s.find(a=>a.id===n)||s[0]||null,[n]);return e.jsx(o.Wrapper,{children:e.jsxs(o.Inner,{className:"app-max-width",children:[e.jsxs(o.Hero,{children:[e.jsxs(o.HeroText,{children:[e.jsxs(o.Pill,{children:[e.jsx("span",{className:"dot"}),e.jsx("span",{children:"Visual logbook"})]}),e.jsxs(o.TitleRow,{children:[e.jsx("h1",{children:"Gallery"}),e.jsxs("span",{className:"badge",children:[e.jsx(m,{className:"icon"}),"Moments from UrbanCraft Services"]})]}),e.jsx(o.HeroSubtitle,{children:"A quiet collection of the everyday scenes that make this place feel alive—fresh counters, late-evening lights, team breaks, and the tiny details most people walk past."}),e.jsxs(o.HeroStats,{children:[e.jsxs("li",{children:[e.jsxs("span",{className:"label",children:[e.jsx(b,{className:"icon"}),"Photos"]}),e.jsx("span",{className:"value",children:s.length.toString().padStart(2,"0")})]}),e.jsxs("li",{children:[e.jsxs("span",{className:"label",children:[e.jsx(v,{className:"icon"}),"People & spaces"]}),e.jsx("span",{className:"value",children:"Mixed"})]}),e.jsxs("li",{children:[e.jsxs("span",{className:"label",children:[e.jsx(y,{className:"icon"}),"Updated"]}),e.jsx("span",{className:"value",children:"This season"})]})]})]}),e.jsx(o.HighlightCard,{children:i&&e.jsxs(e.Fragment,{children:[e.jsxs(o.HighlightImageWrapper,{children:[e.jsx("img",{src:i.url,alt:i.title,loading:"lazy",onError:g}),e.jsxs("div",{className:"overlay",children:[e.jsxs("div",{className:"chip",children:[e.jsx(j,{className:"icon"}),"Featured capture"]}),e.jsxs("button",{type:"button",className:"shuffle",onClick:()=>{const a=s.findIndex(f=>f.id===n),p=a===-1?0:(a+1)%s.length;d(s[p].id)},children:[e.jsx(w,{className:"icon"}),e.jsx("span",{children:"Another moment"})]})]})]}),e.jsxs(o.HighlightMeta,{children:[e.jsxs("div",{className:"title-row",children:[e.jsx("h2",{children:i.title}),e.jsxs("span",{className:"mood",children:[e.jsx(h,{className:"icon"}),i.mood]})]}),e.jsx("p",{className:"desc",children:"Not staged, not styled for a shoot—just a frame paused from a regular working day at the store."}),e.jsx("p",{className:"meta",children:i.meta})]})]})})]}),e.jsxs(o.FilterBar,{children:[e.jsxs("div",{className:"left",children:[e.jsxs("span",{className:"label",children:[e.jsx(N,{className:"icon"}),"View by"]}),e.jsx("ul",{className:"chips",children:C.map(a=>e.jsx("li",{children:e.jsx("button",{type:"button",className:a.id===t?"chip active":"chip",onClick:()=>l(a.id),children:a.label})},a.id))})]}),e.jsx("div",{className:"right",children:e.jsx("span",{className:"hint",children:"Click a card to set it as the featured photo."})})]}),e.jsx(o.Grid,{children:u.map(a=>e.jsxs(o.Card,{onClick:()=>d(a.id),$isActive:a.id===n,children:[e.jsxs("div",{className:"image-wrap",children:[e.jsx("img",{src:a.url,alt:a.title,loading:"lazy",onError:g}),e.jsx("div",{className:"overlay",children:e.jsx("button",{type:"button",className:"heart",onClick:p=>{p.stopPropagation()},children:e.jsx(k,{className:"icon"})})})]}),e.jsxs("div",{className:"body",children:[e.jsxs("div",{className:"title-row",children:[e.jsx("h3",{children:a.title}),e.jsxs("span",{className:"pill",children:[e.jsx(h,{className:"icon"}),a.tags[0]||"store"]})]}),e.jsx("p",{className:"mood",children:a.mood}),e.jsx("p",{className:"meta",children:a.meta})]})]},a.id))}),e.jsxs(o.StoryStrip,{children:[e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"label",children:"How we use this gallery"}),e.jsx("span",{className:"text",children:"A quiet reference board for upcoming flyers, website banners, and in-store signage."})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"label",children:"What’s not here"}),e.jsx("span",{className:"text",children:"No stock models or glossy product renders—just a realistic view of how the place usually feels."})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"label",children:"Next on the list"}),e.jsx("span",{className:"text",children:"Short video loops, staff portrait wall, and a behind-the-counter time-lapse."})]})]}),e.jsxs(o.CTA,{children:[e.jsxs("div",{className:"left",children:[e.jsx("span",{className:"eyebrow",children:"Built for owners & teams"}),e.jsx("h2",{children:"Need these visuals in your brochure or flyer?"}),e.jsx("p",{children:"The same visual language can be reused for posters, print flyers, WhatsApp menus, or your online listing. Capture once, reuse everywhere."})]}),e.jsxs("div",{className:"right",children:[e.jsxs("button",{type:"button",className:"primary",children:[e.jsx(m,{className:"icon"}),"Book a photo session"]}),e.jsxs("button",{type:"button",className:"ghost",children:[e.jsx("span",{children:"View print-ready flyer layout"}),e.jsx(z,{className:"icon"})]})]})]})]})})}export{H as default};

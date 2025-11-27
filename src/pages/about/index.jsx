// src/pages/about/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiMapPin,
    FiClock,
    FiHeart,
    FiTrendingUp,
    FiShoppingBag,
    FiUsers,
    FiSmile,
    FiCheckCircle,
    FiArrowRight,
    FiBookOpen,
    FiStar,
    FiTag,
    FiImage,
} from "react-icons/fi";

const HERO_URL =
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80";

const FALLBACK_URL =
    "https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?auto=format&fit=crop&w=1000&q=80";

const VALUES = [
    {
        id: "freshness",
        icon: FiShoppingBag,
        title: "Thoughtful stocking",
        text: "We prefer a tighter, carefully chosen range over endless shelves. Less visual noise, more useful products.",
    },
    {
        id: "time",
        icon: FiClock,
        title: "Respect for your time",
        text: "Quick pickups, clear call-backs, and realistic delivery windows instead of vague ‘on the way’ messages.",
    },
    {
        id: "clarity",
        icon: FiBookOpen,
        title: "Transparent communication",
        text: "If something is out of stock or delayed, we tell you. No hidden swaps or quiet replacements at billing.",
    },
    {
        id: "care",
        icon: FiHeart,
        title: "Care in small things",
        text: "From how bags are arranged to how quickly calls are returned, we try not to treat any detail as ‘too small’.",
    },
];

const TIMELINE = [
    {
        year: "Year 1",
        title: "From a simple local store",
        text: "Started as a straightforward neighborhood shop—the kind of place people dropped by after work for quick essentials.",
    },
    {
        year: "Year 2",
        title: "Adding structure to chaos",
        text: "Noticed recurring patterns in how people ordered. We began logging repeat lists, common queries, and busy-time bottlenecks.",
    },
    {
        year: "Year 3",
        title: "Deliveries, lists, and routines",
        text: "Introduced home deliveries, phone-based ordering, and simple subscription-style routines for repeat customers.",
    },
    {
        year: "Today",
        title: "UrbanCraft Services",
        text: "Same local-store warmth, but with more organised services, better tracking, and a calmer visual experience for visitors.",
    },
];

const INSIDE_POINTS = [
    "Counters arranged to keep walk paths open, not blocked by stacks.",
    "Pricing and discounts kept clear and legible, without cluttered posters.",
    "Coolers and fresh sections placed where people naturally pause and decide.",
    "Back-of-house shelves labelled so the team spends less time searching.",
];

function handleImageError(e) {
    const img = e.target;
    if (!img.dataset.fallbackApplied) {
        img.dataset.fallbackApplied = "1";
        img.src = FALLBACK_URL;
    }
}

export default function About() {
    const [heroOk, setHeroOk] = useState(true);

    return (
        <Styled.Wrapper>
            <Styled.Inner className="app-max-width">
                {/* ===== Hero ===== */}
                <Styled.Hero>
                    <Styled.HeroText>
                        <Styled.Pill>
                            <span className="dot" />
                            <span>About UrbanCraft Services</span>
                        </Styled.Pill>

                        <Styled.Title>
                            A local store, tuned for busy lives
                        </Styled.Title>

                        <Styled.Subtitle>
                            UrbanCraft Services is built around a simple idea:
                            combine the familiarity of a neighborhood shop with
                            the quiet discipline of a well-run service team.
                        </Styled.Subtitle>

                        <Styled.HeroStats>
                            <li>
                                <span className="label">
                                    <FiMapPin className="icon" />
                                    Rooted in one neighborhood
                                </span>
                                <span className="value">Single-city focus</span>
                            </li>
                            <li>
                                <span className="label">
                                    <FiUsers className="icon" />
                                    Families we serve
                                </span>
                                <span className="value">Growing every month</span>
                            </li>
                            <li>
                                <span className="label">
                                    <FiSmile className="icon" />
                                    Style of work
                                </span>
                                <span className="value">Calm & precise</span>
                            </li>
                        </Styled.HeroStats>
                    </Styled.HeroText>

                    <Styled.HeroVisual>
                        {heroOk ? (
                            <Styled.ImageWrapper>
                                <img
                                    src={HERO_URL}
                                    alt="Street view of a calm, well-lit local store at dusk"
                                    loading="lazy"
                                    onError={(e) => {
                                        setHeroOk(false);
                                        handleImageError(e);
                                    }}
                                />
                                <div className="overlay">
                                    <div className="chip-row">
                                        <div className="chip">
                                            <FiStar className="icon" />
                                            <span>Everyday, not occasional</span>
                                        </div>
                                        <div className="chip">
                                            <FiTag className="icon" />
                                            <span>Neighborhood-first focus</span>
                                        </div>
                                    </div>
                                    <div className="bottom-note">
                                        <FiClock className="icon" />
                                        <span>
                                            Lights on early, shutters down late,
                                            but the idea is to keep your day
                                            lighter.
                                        </span>
                                    </div>
                                </div>
                            </Styled.ImageWrapper>
                        ) : (
                            <Styled.FallbackBlock>
                                <div className="icon-wrap">
                                    <FiImage className="icon" />
                                </div>
                                <p className="title">Image preview not loaded</p>
                                <p className="desc">
                                    The hero photo didn’t load, but the story
                                    remains the same—a local store, tuned slowly
                                    and carefully around how people actually shop.
                                </p>
                            </Styled.FallbackBlock>
                        )}
                    </Styled.HeroVisual>
                </Styled.Hero>

                {/* ===== Origin story ===== */}
                <Styled.SectionTwoColumns>
                    <div className="left">
                        <span className="eyebrow">Where it started</span>
                        <h2>From rushed visits to calmer experiences</h2>
                        <p>
                            Over time, we noticed that people were not just
                            buying things—they were juggling time, kids,
                            deadlines, calls, and last-minute reminders. The
                            store was one more thing to “ somehow manage before
                            the day ends”.
                        </p>
                        <p>
                            UrbanCraft Services is our attempt to reduce that
                            friction. Not with loud offers or gimmicks, but with
                            quieter, more dependable routines: organised racks,
                            predictable service, and simple, clear options for
                            delivery and pickups.
                        </p>
                    </div>
                    <div className="right">
                        <Styled.HighlightBlock>
                            <div className="row">
                                <div className="pill">
                                    <FiTrendingUp className="icon" />
                                    <span>Slow, steady improvements</span>
                                </div>
                            </div>
                            <p className="text">
                                The store didn’t change overnight. We kept
                                small internal checklists, tracked peak hours,
                                gradually re-arranged shelves, set up delivery
                                patterns—and kept only the changes that
                                actually made people’s visits easier.
                            </p>
                            <p className="note">
                                No dramatic “grand reopening”. Just quiet,
                                continuous tinkering.
                            </p>
                        </Styled.HighlightBlock>
                    </div>
                </Styled.SectionTwoColumns>

                {/* ===== Values ===== */}
                <Styled.SectionHeader>
                    <div className="left">
                        <span className="eyebrow">What we stand for</span>
                        <h2>The principles behind the day-to-day work</h2>
                        <p>
                            The layout, the way we answer calls, the way bags
                            are packed—everything is guided by a few simple
                            principles that we keep coming back to.
                        </p>
                    </div>
                </Styled.SectionHeader>

                <Styled.ValuesGrid>
                    {VALUES.map((value) => {
                        const Icon = value.icon;
                        return (
                            <Styled.ValueCard key={value.id}>
                                <div className="icon-wrap">
                                    <Icon className="icon" />
                                </div>
                                <h3>{value.title}</h3>
                                <p>{value.text}</p>
                            </Styled.ValueCard>
                        );
                    })}
                </Styled.ValuesGrid>

                {/* ===== Inside the store ===== */}
                <Styled.InsideSection>
                    <div className="left">
                        <span className="eyebrow">Inside the store</span>
                        <h2>What a typical visit feels like</h2>
                        <p>
                            The exact details change across days and seasons,
                            but the goal stays constant: you should be able to
                            understand the space within a few seconds of
                            walking in.
                        </p>
                        <ul className="points">
                            {INSIDE_POINTS.map((p) => (
                                <li key={p}>
                                    <FiCheckCircle className="tick" />
                                    <span>{p}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <Styled.InsideCards>
                        <div className="card">
                            <div className="label-row">
                                <FiClock className="icon" />
                                <span>Peak hour handling</span>
                            </div>
                            <p>
                                Evening hours are broken into micro-slots,
                                balancing quick walk-ins, phone orders, and
                                deliveries so the space doesn’t feel chaotic.
                            </p>
                        </div>
                        <div className="card">
                            <div className="label-row">
                                <FiUsers className="icon" />
                                <span>Different shoppers, different styles</span>
                            </div>
                            <p>
                                Some people like browsing. Others want to be in
                                and out in minutes. The layout and counter
                                behavior try to respect both.
                            </p>
                        </div>
                        <div className="card">
                            <div className="label-row">
                                <FiTag className="icon" />
                                <span>Offers without noise</span>
                            </div>
                            <p>
                                When there are offers, we keep them visible but
                                not overwhelming—no aggressive clutter on every
                                aisle.
                            </p>
                        </div>
                    </Styled.InsideCards>
                </Styled.InsideSection>

                {/* ===== Timeline ===== */}
                <Styled.SectionHeader>
                    <div className="left">
                        <span className="eyebrow">A slow timeline</span>
                        <h2>How UrbanCraft evolved over the years</h2>
                        <p>
                            There isn’t a single big “pivot” moment—just small,
                            repeated choices that nudged the store in a more
                            intentional direction.
                        </p>
                    </div>
                </Styled.SectionHeader>

                <Styled.Timeline>
                    {TIMELINE.map((item) => (
                        <li key={item.year}>
                            <div className="dot" />
                            <div className="content">
                                <span className="year">{item.year}</span>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </div>
                        </li>
                    ))}
                </Styled.Timeline>

                {/* ===== Owner note ===== */}
                <Styled.OwnerSection>
                    <Styled.OwnerCard>
                        <div className="avatar">
                            <span>U</span>
                        </div>
                        <div className="text">
                            <h2>A note from the owner</h2>
                            <p>
                                “UrbanCraft isn’t an attempt to become the
                                biggest store in the area. It’s an attempt to be
                                the calmest, most reliable one—the place people
                                instinctively trust when they’re tired, busy, or
                                just not in the mood to compare ten brands for
                                everything.”
                            </p>
                            <p className="signoff">
                                We keep improving in quiet, small ways—layout
                                tweaks, better checklists, clearer workflows. If
                                you notice something that can be better, we
                                genuinely want to hear it.
                            </p>
                            <div className="meta-row">
                                <span className="name">UrbanCraft Services</span>
                                <span className="role">Store & service team</span>
                            </div>
                        </div>
                    </Styled.OwnerCard>

                    <Styled.OwnerSide>
                        <div className="block">
                            <div className="label-row">
                                <FiHeart className="icon" />
                                <span>What matters most</span>
                            </div>
                            <p>
                                People should feel slightly lighter walking out
                                than they did walking in—whether they visited in
                                person or interacted over a call.
                            </p>
                        </div>
                        <div className="block">
                            <div className="label-row">
                                <FiClock className="icon" />
                                <span>How we measure ourselves</span>
                            </div>
                            <p>
                                Fewer repeated complaints. Shorter time to
                                resolve issues. More familiar names on the order
                                book week after week.
                            </p>
                        </div>
                    </Styled.OwnerSide>
                </Styled.OwnerSection>

                {/* ===== Closing strip ===== */}
                <Styled.CTA>
                    <div className="left">
                        <span className="eyebrow">Visit or message</span>
                        <h2>See the store once, or start with a small order</h2>
                        <p>
                            The best way to understand UrbanCraft is to use it
                            in your everyday life—whether that means a quick
                            walk-in visit or a simple delivery request.
                        </p>
                    </div>
                    <div className="right">
                        <button type="button" className="primary">
                            <FiMapPin className="icon" />
                            Find us on the map
                        </button>
                        <button type="button" className="ghost">
                            <span>View services and delivery options</span>
                            <FiArrowRight className="icon" />
                        </button>
                    </div>
                </Styled.CTA>
            </Styled.Inner>
        </Styled.Wrapper>
    );
}

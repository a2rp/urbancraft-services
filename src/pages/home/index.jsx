// src/pages/home/index.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Styled } from "./styled";
import {
    FiShoppingBag,
    FiTruck,
    FiPhoneCall,
    FiMapPin,
    FiClock,
    FiCamera,
    FiInfo,
    FiArrowRight,
    FiStar,
    FiCheckCircle,
    FiImage,
} from "react-icons/fi";

const HERO_URL =
    "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1400&q=80";

const FALLBACK_URL =
    "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80";

const QUICK_LINKS = [
    {
        id: "about",
        to: "/about",
        label: "About the store",
        description:
            "How UrbanCraft Services started, how we think about time, layout, and calm shopping.",
        tag: "Story",
        icon: FiInfo,
    },
    {
        id: "services",
        to: "/services",
        label: "Services & deliveries",
        description:
            "Home delivery, quick pickups, subscriptions and bulk orders—for everyday use.",
        tag: "Most visited",
        icon: FiTruck,
    },
    {
        id: "gallery",
        to: "/gallery",
        label: "Gallery & space",
        description:
            "A visual sense of the store, racks, fresh sections, and how the layout feels.",
        tag: "Preview",
        icon: FiCamera,
    },
    {
        id: "contact",
        to: "/contact",
        label: "Contact & timings",
        description:
            "Store location, rough timings, and the best way to reach us for orders.",
        tag: "Details",
        icon: FiPhoneCall,
    },
];

const HIGHLIGHTS = [
    {
        label: "Home deliveries / month",
        value: "150+",
        icon: FiTruck,
    },
    {
        label: "Repeat customers",
        value: "70%+",
        icon: FiStar,
    },
    {
        label: "Typical delivery window",
        value: "60–90 mins",
        icon: FiClock,
    },
    {
        label: "Focus area",
        value: "Single city",
        icon: FiMapPin,
    },
];

const TODAY_POINTS = [
    "Same-day delivery for orders confirmed before the daily cut-off.",
    "Priority help for elderly customers and families with young kids.",
    "Quick pickup option for regular lists—call ahead, collect in minutes.",
];

function handleImageError(e) {
    const img = e.target;
    if (!img.dataset.fallbackApplied) {
        img.dataset.fallbackApplied = "1";
        img.src = FALLBACK_URL;
    }
}

export default function Home() {
    const [heroOk, setHeroOk] = useState(true);

    return (
        <Styled.Wrapper>
            <Styled.Inner className="app-max-width">
                {/* ===== HERO ===== */}
                <Styled.Hero>
                    <Styled.HeroText>
                        <Styled.Pill>
                            <span className="dot" />
                            <span>UrbanCraft Services</span>
                        </Styled.Pill>

                        <Styled.Title>
                            Daily essentials, minus noisy chaos
                        </Styled.Title>

                        <Styled.Subtitle>
                            A local store tuned slowly around busy lives: calm
                            layout, predictable service, and simple options for
                            delivery, pickups, and repeat orders.
                        </Styled.Subtitle>

                        <Styled.HeroActions>
                            <NavLink to="/services" className="primary">
                                <FiTruck className="icon" />
                                <span>View services</span>
                            </NavLink>
                            <NavLink to="/contact" className="ghost">
                                <span>Contact & timings</span>
                                <FiArrowRight className="icon" />
                            </NavLink>
                        </Styled.HeroActions>

                        <Styled.HeroHighlights>
                            {HIGHLIGHTS.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <li key={item.label}>
                                        <div className="label">
                                            <Icon className="icon" />
                                            <span>{item.label}</span>
                                        </div>
                                        <div className="value">{item.value}</div>
                                    </li>
                                );
                            })}
                        </Styled.HeroHighlights>
                    </Styled.HeroText>

                    <Styled.HeroVisual>
                        {heroOk ? (
                            <Styled.ImageWrapper>
                                <img
                                    src={HERO_URL}
                                    alt="View from inside a calm, organised grocery aisle"
                                    loading="lazy"
                                    onError={(e) => {
                                        setHeroOk(false);
                                        handleImageError(e);
                                    }}
                                />
                                <div className="overlay">
                                    <div className="top-chip">
                                        <FiShoppingBag className="icon" />
                                        <span>
                                            Essentials, snacks, fresh, and more
                                        </span>
                                    </div>
                                    <div className="bottom-strip">
                                        <p>
                                            Shelves arranged for clarity, not
                                            clutter. The goal is simple: you
                                            should be able to find things
                                            without feeling rushed.
                                        </p>
                                    </div>
                                </div>
                            </Styled.ImageWrapper>
                        ) : (
                            <Styled.FallbackBlock>
                                <div className="icon-wrap">
                                    <FiImage className="icon" />
                                </div>
                                <p className="title">
                                    Hero image preview not loaded
                                </p>
                                <p className="desc">
                                    Some networks block heavy images. The store
                                    itself is lighter: cleaner aisles, calmer
                                    service, and fewer things competing for your
                                    attention.
                                </p>
                            </Styled.FallbackBlock>
                        )}
                    </Styled.HeroVisual>
                </Styled.Hero>

                {/* ===== TODAY SECTION ===== */}
                <Styled.SectionHeader>
                    <div className="left">
                        <span className="eyebrow">Today at the store</span>
                        <h2>How we typically run the day</h2>
                        <p>
                            Exact timings and patterns shift with seasons, but
                            most days follow a simple rhythm: prepare early,
                            handle peak hours calmly, and stay predictable for
                            regulars.
                        </p>
                    </div>
                </Styled.SectionHeader>

                <Styled.TodayGrid>
                    <Styled.TodayCard>
                        <div className="label-row">
                            <FiClock className="icon" />
                            <span>Rough flow of the day</span>
                        </div>
                        <ul className="timeline">
                            <li>
                                <span className="time">Morning</span>
                                <p>Stock checks, fresh-arrivals, first lists.</p>
                            </li>
                            <li>
                                <span className="time">Afternoon</span>
                                <p>
                                    Calmer hours—great time for slower browse
                                    visits.
                                </p>
                            </li>
                            <li>
                                <span className="time">Evening</span>
                                <p>
                                    Peak orders & walk-ins; we keep extra focus
                                    on queue flow and deliveries.
                                </p>
                            </li>
                        </ul>
                    </Styled.TodayCard>

                    <Styled.TodayCard>
                        <div className="label-row">
                            <FiCheckCircle className="icon" />
                            <span>What doesn’t change</span>
                        </div>
                        <ul className="points">
                            {TODAY_POINTS.map((p) => (
                                <li key={p}>
                                    <span className="bullet" />
                                    <span>{p}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="note">
                            Details vary, but the central promise stays—less
                            chaos, clearer communication, and quick fixes when
                            something goes wrong.
                        </p>
                    </Styled.TodayCard>
                </Styled.TodayGrid>

                {/* ===== QUICK LINKS ===== */}
                <Styled.SectionHeader>
                    <div className="left">
                        <span className="eyebrow">Explore the site</span>
                        <h2>Where do you want to start?</h2>
                        <p>
                            Think of this site as a quiet brochure for the
                            store. Each section focuses on one part: story,
                            services, visuals, and contact details.
                        </p>
                    </div>
                </Styled.SectionHeader>

                <Styled.QuickGrid>
                    {QUICK_LINKS.map((item) => {
                        const Icon = item.icon;
                        return (
                            <NavLink key={item.id} to={item.to}>
                                <Styled.QuickCard>
                                    <div className="top-row">
                                        <div className="tag">
                                            <span className="dot" />
                                            <span>{item.tag}</span>
                                        </div>
                                        <Icon className="icon-main" />
                                    </div>
                                    <h3>{item.label}</h3>
                                    <p>{item.description}</p>
                                    <div className="cta-row">
                                        <span>Open section</span>
                                        <FiArrowRight className="icon-cta" />
                                    </div>
                                </Styled.QuickCard>
                            </NavLink>
                        );
                    })}
                </Styled.QuickGrid>

                {/* ===== SMALL STRIP ===== */}
                <Styled.BottomStrip>
                    <div className="left">
                        <span className="eyebrow">First-time visitor</span>
                        <h2>Not sure yet? Start small.</h2>
                        <p>
                            You don’t have to change your routine overnight.
                            Begin with one quick pickup, a small delivery, or a
                            simple walk-in visit just to see how the space
                            feels.
                        </p>
                    </div>
                    <div className="right">
                        <NavLink to="/services" className="pill-link">
                            <FiTruck className="icon" />
                            <span>See what we handle today</span>
                        </NavLink>
                        <NavLink to="/gallery" className="pill-link subtle">
                            <FiCamera className="icon" />
                            <span>Glance through the gallery</span>
                        </NavLink>
                    </div>
                </Styled.BottomStrip>
            </Styled.Inner>
        </Styled.Wrapper>
    );
}

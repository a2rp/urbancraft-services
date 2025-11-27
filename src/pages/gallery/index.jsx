// src/pages/gallery/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiCamera,
    FiImage,
    FiUsers,
    FiStar,
    FiTag,
    FiHeart,
    FiSliders,
    FiClock,
    FiArrowRight,
    FiRefreshCw,
} from "react-icons/fi";

const FALLBACK_URL =
    "https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?auto=format&fit=crop&w=1000&q=80";

const IMAGES = [
    {
        id: "fresh-counter",
        url: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1100&q=80",
        title: "Morning counter · Freshly stocked",
        mood: "Everyday freshness",
        tags: ["store", "products"],
        meta: "Shot at 8:30 AM · Wide",
    },
    {
        id: "fruit-closeup",
        url: "https://images.unsplash.com/photo-1518843875459-f738682238a6?auto=format&fit=crop&w=1100&q=80",
        title: "Seasonal fruits in focus",
        mood: "Color & texture",
        tags: ["products"],
        meta: "Macro · Natural light",
    },
    {
        id: "baskets",
        url: "https://images.unsplash.com/photo-1542838132-0fae9e417063?auto=format&fit=crop&w=1100&q=80",
        title: "Hand-picked baskets",
        mood: "Market style",
        tags: ["store", "details"],
        meta: "Warm tone · Film look",
    },
    {
        id: "checkout",
        url: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1100&q=80",
        title: "Checkout lane, no rush",
        mood: "Soft evening",
        tags: ["people", "store"],
        meta: "Ambient · Daily life",
    },
    {
        id: "team-laugh",
        url: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1100&q=80",
        title: "Team huddle between orders",
        mood: "Behind the scenes",
        tags: ["people", "bts"],
        meta: "Studio corner · BTS",
    },
    {
        id: "coffee-break",
        url: "https://images.unsplash.com/photo-1459257868276-5e65389e2722?auto=format&fit=crop&w=1100&q=80",
        title: "5-minute pause, long day",
        mood: "Calm break",
        tags: ["bts"],
        meta: "Soft contrast · Candid",
    },
    {
        id: "workspace",
        url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1100&q=80",
        title: "Owner’s desk · Planning the week",
        mood: "Planning & notes",
        tags: ["owner", "bts"],
        meta: "Overhead · Desk story",
    },
    {
        id: "entrance",
        url: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1100&q=80",
        title: "Entrance on a busy Saturday",
        mood: "Movement & light",
        tags: ["store", "people"],
        meta: "Street · Natural blur",
    },
    {
        id: "shelf-detail",
        url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1100&q=80",
        title: "Shelf detail · Quiet corner",
        mood: "Neat & minimal",
        tags: ["details", "products"],
        meta: "Close crop · Texture",
    },
    {
        id: "night-front",
        url: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1100&q=80",
        title: "Front facade after closing",
        mood: "Night lights",
        tags: ["store"],
        meta: "Blue hour · Long exposure",
    },
];

const FILTERS = [
    { id: "all", label: "All moments" },
    { id: "store", label: "Inside the store" },
    { id: "products", label: "Products" },
    { id: "people", label: "People & mood" },
    { id: "bts", label: "Behind the scenes" },
    { id: "details", label: "Details" },
];

function handleImageError(e) {
    const img = e.target;
    if (!img.dataset.fallbackApplied) {
        img.dataset.fallbackApplied = "1";
        img.src = FALLBACK_URL;
    }
}

export default function Gallery() {
    const [activeFilter, setActiveFilter] = useState("all");
    const [highlightedId, setHighlightedId] = useState(IMAGES[0]?.id || null);

    const filteredImages = useMemo(() => {
        if (activeFilter === "all") return IMAGES;
        return IMAGES.filter((img) => img.tags.includes(activeFilter));
    }, [activeFilter]);

    const highlightImage = useMemo(
        () =>
            IMAGES.find((img) => img.id === highlightedId) ||
            IMAGES[0] ||
            null,
        [highlightedId]
    );

    return (
        <Styled.Wrapper>
            <Styled.Inner className="app-max-width">
                {/* ===== Hero / heading row ===== */}
                <Styled.Hero>
                    <Styled.HeroText>
                        <Styled.Pill>
                            <span className="dot" />
                            <span>Visual logbook</span>
                        </Styled.Pill>

                        <Styled.TitleRow>
                            <h1>Gallery</h1>
                            <span className="badge">
                                <FiCamera className="icon" />
                                Moments from UrbanCraft Services
                            </span>
                        </Styled.TitleRow>

                        <Styled.HeroSubtitle>
                            A quiet collection of the everyday scenes that make
                            this place feel alive—fresh counters, late-evening
                            lights, team breaks, and the tiny details most
                            people walk past.
                        </Styled.HeroSubtitle>

                        <Styled.HeroStats>
                            <li>
                                <span className="label">
                                    <FiImage className="icon" />
                                    Photos
                                </span>
                                <span className="value">
                                    {IMAGES.length.toString().padStart(2, "0")}
                                </span>
                            </li>
                            <li>
                                <span className="label">
                                    <FiUsers className="icon" />
                                    People & spaces
                                </span>
                                <span className="value">Mixed</span>
                            </li>
                            <li>
                                <span className="label">
                                    <FiClock className="icon" />
                                    Updated
                                </span>
                                <span className="value">This season</span>
                            </li>
                        </Styled.HeroStats>
                    </Styled.HeroText>

                    {/* Highlighted image / story card */}
                    <Styled.HighlightCard>
                        {highlightImage && (
                            <>
                                <Styled.HighlightImageWrapper>
                                    <img
                                        src={highlightImage.url}
                                        alt={highlightImage.title}
                                        loading="lazy"
                                        onError={handleImageError}
                                    />
                                    <div className="overlay">
                                        <div className="chip">
                                            <FiStar className="icon" />
                                            Featured capture
                                        </div>
                                        <button
                                            type="button"
                                            className="shuffle"
                                            onClick={() => {
                                                const currentIndex =
                                                    IMAGES.findIndex(
                                                        (img) =>
                                                            img.id ===
                                                            highlightedId
                                                    );
                                                const nextIndex =
                                                    currentIndex === -1
                                                        ? 0
                                                        : (currentIndex + 1) %
                                                        IMAGES.length;
                                                setHighlightedId(
                                                    IMAGES[nextIndex].id
                                                );
                                            }}
                                        >
                                            <FiRefreshCw className="icon" />
                                            <span>Another moment</span>
                                        </button>
                                    </div>
                                </Styled.HighlightImageWrapper>

                                <Styled.HighlightMeta>
                                    <div className="title-row">
                                        <h2>{highlightImage.title}</h2>
                                        <span className="mood">
                                            <FiTag className="icon" />
                                            {highlightImage.mood}
                                        </span>
                                    </div>
                                    <p className="desc">
                                        Not staged, not styled for a shoot—just
                                        a frame paused from a regular working
                                        day at the store.
                                    </p>
                                    <p className="meta">{highlightImage.meta}</p>
                                </Styled.HighlightMeta>
                            </>
                        )}
                    </Styled.HighlightCard>
                </Styled.Hero>

                {/* ===== Filter bar ===== */}
                <Styled.FilterBar>
                    <div className="left">
                        <span className="label">
                            <FiSliders className="icon" />
                            View by
                        </span>
                        <ul className="chips">
                            {FILTERS.map((filter) => (
                                <li key={filter.id}>
                                    <button
                                        type="button"
                                        className={
                                            filter.id === activeFilter
                                                ? "chip active"
                                                : "chip"
                                        }
                                        onClick={() =>
                                            setActiveFilter(filter.id)
                                        }
                                    >
                                        {filter.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="right">
                        <span className="hint">
                            Click a card to set it as the featured photo.
                        </span>
                    </div>
                </Styled.FilterBar>

                {/* ===== Grid ===== */}
                <Styled.Grid>
                    {filteredImages.map((img) => (
                        <Styled.Card
                            key={img.id}
                            onClick={() => setHighlightedId(img.id)}
                            $isActive={img.id === highlightedId}
                        >
                            <div className="image-wrap">
                                <img
                                    src={img.url}
                                    alt={img.title}
                                    loading="lazy"
                                    onError={handleImageError}
                                />
                                <div className="overlay">
                                    <button
                                        type="button"
                                        className="heart"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            // purely visual, no state
                                        }}
                                    >
                                        <FiHeart className="icon" />
                                    </button>
                                </div>
                            </div>

                            <div className="body">
                                <div className="title-row">
                                    <h3>{img.title}</h3>
                                    <span className="pill">
                                        <FiTag className="icon" />
                                        {img.tags[0] || "store"}
                                    </span>
                                </div>
                                <p className="mood">{img.mood}</p>
                                <p className="meta">{img.meta}</p>
                            </div>
                        </Styled.Card>
                    ))}
                </Styled.Grid>

                {/* ===== Story / notes strip ===== */}
                <Styled.StoryStrip>
                    <div className="line">
                        <span className="label">How we use this gallery</span>
                        <span className="text">
                            A quiet reference board for upcoming flyers,
                            website banners, and in-store signage.
                        </span>
                    </div>
                    <div className="line">
                        <span className="label">What’s not here</span>
                        <span className="text">
                            No stock models or glossy product renders—just a
                            realistic view of how the place usually feels.
                        </span>
                    </div>
                    <div className="line">
                        <span className="label">Next on the list</span>
                        <span className="text">
                            Short video loops, staff portrait wall, and a
                            behind-the-counter time-lapse.
                        </span>
                    </div>
                </Styled.StoryStrip>

                {/* ===== CTA strip ===== */}
                <Styled.CTA>
                    <div className="left">
                        <span className="eyebrow">
                            Built for owners & teams
                        </span>
                        <h2>Need these visuals in your brochure or flyer?</h2>
                        <p>
                            The same visual language can be reused for
                            posters, print flyers, WhatsApp menus, or your
                            online listing. Capture once, reuse everywhere.
                        </p>
                    </div>
                    <div className="right">
                        <button type="button" className="primary">
                            <FiCamera className="icon" />
                            Book a photo session
                        </button>
                        <button type="button" className="ghost">
                            <span>View print-ready flyer layout</span>
                            <FiArrowRight className="icon" />
                        </button>
                    </div>
                </Styled.CTA>
            </Styled.Inner>
        </Styled.Wrapper>
    );
}

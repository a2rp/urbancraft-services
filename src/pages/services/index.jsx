// src/pages/services/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiTruck,
    FiShoppingBag,
    FiClock,
    FiPhoneCall,
    FiMapPin,
    FiStar,
    FiZap,
    FiCheckCircle,
    FiArrowRight,
    FiRefreshCw,
    FiShield,
    FiCreditCard,
    FiUsers,
    FiAlertCircle,
    FiImage,
    FiChevronDown,
} from "react-icons/fi";

const HERO_URL =
    "https://images.unsplash.com/photo-1585386959984-a4155223f3f8?auto=format&fit=crop&w=1200&q=80";

const FALLBACK_URL =
    "https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?auto=format&fit=crop&w=1000&q=80";

const CORE_SERVICES = [
    {
        id: "home-delivery",
        icon: FiTruck,
        title: "Home Delivery",
        tagline: "Daily essentials to your doorstep.",
        details:
            "Same-day delivery for orders placed before the cut-off time, with careful packing for fragile or fresh items.",
        bullets: [
            "Delivery slots across the day",
            "Live status via phone / WhatsApp",
            "Cash or digital payments at delivery",
        ],
        badge: "Most used",
    },
    {
        id: "quick-pickup",
        icon: FiShoppingBag,
        title: "Quick Store Pickup",
        tagline: "Order ahead, skip the waiting.",
        details:
            "Call, message, or drop a list and we’ll keep everything ready—just pick up and go.",
        bullets: [
            "Reserved queue for pickups",
            "Helps during busy evenings",
            "Ideal for repeat orders",
        ],
        badge: "Time saver",
    },
    {
        id: "subscriptions",
        icon: FiRefreshCw,
        title: "Repeat Subscriptions",
        tagline: "Set once, delivered on schedule.",
        details:
            "For milk, bread, fruits, or other frequently used items, set a simple recurring schedule.",
        bullets: [
            "Customizable day & quantity",
            "Pause or tweak anytime via phone",
            "Monthly consolidated billing option",
        ],
        badge: "For regulars",
    },
    {
        id: "bulk-orders",
        icon: FiUsers,
        title: "Bulk & Party Orders",
        tagline: "Stock up for events and gatherings.",
        details:
            "Special handling and planning support for functions, office gatherings, or community events.",
        bullets: [
            "Pre-planned packing & delivery",
            "Budget-wise recommendations",
            "Early morning / late-night slots",
        ],
        badge: "On request",
    },
];

const ADDON_SERVICES = [
    {
        id: "payment-assist",
        icon: FiCreditCard,
        title: "Payment Assistance",
        text: "From UPI and cards to cash-on-delivery, we support multiple options with clear receipts.",
    },
    {
        id: "priority-window",
        icon: FiClock,
        title: "Priority Time Windows",
        text: "Short, precise delivery windows wherever possible, especially for senior citizens or working families.",
    },
    {
        id: "order-help",
        icon: FiPhoneCall,
        title: "Order Help Desk",
        text: "Stuck finalising your list? Call us, share a photo, or forward a previous bill—we’ll build your order from there.",
    },
    {
        id: "safe-handling",
        icon: FiShield,
        title: "Safe Handling",
        text: "Segregated packing for edible, fragile, and cleaning items, so everything reaches you safely.",
    },
];

const FAQ_ITEMS = [
    {
        q: "How do I place a home-delivery order?",
        a: "You can send your list on WhatsApp, call the store directly, or share a clear photo of a handwritten list. We’ll confirm availability, amount, and expected delivery time before dispatch.",
    },
    {
        q: "Is there a minimum amount for delivery?",
        a: "Most local deliveries have a small minimum order value. For nearby locations or elderly customers, we try to be flexible. Exact limits depend on the area and time of day.",
    },
    {
        q: "Do you charge extra for urgent orders?",
        a: "For unusually tight timelines or last-minute late-night orders, a small priority fee may apply. We’ll always inform you upfront—no surprise charges at the doorstep.",
    },
    {
        q: "Can I change or cancel an order after placing it?",
        a: "If the order hasn’t been packed or dispatched yet, we’re happy to edit or cancel. Once the rider has left, only partial changes may be possible at delivery.",
    },
];

function handleImageError(e) {
    const img = e.target;
    if (!img.dataset.fallbackApplied) {
        img.dataset.fallbackApplied = "1";
        img.src = FALLBACK_URL;
    }
}

export default function Services() {
    const [heroOk, setHeroOk] = useState(true);
    const [activeServiceId, setActiveServiceId] = useState(
        CORE_SERVICES[0]?.id || null
    );
    const [openFaq, setOpenFaq] = useState(FAQ_ITEMS[0]?.q || "");

    return (
        <Styled.Wrapper>
            <Styled.Inner className="app-max-width">
                {/* ===== Hero row ===== */}
                <Styled.Hero>
                    <Styled.HeroText>
                        <Styled.Pill>
                            <span className="dot" />
                            <span>Services</span>
                        </Styled.Pill>

                        <Styled.Title>How UrbanCraft Services helps</Styled.Title>

                        <Styled.Subtitle>
                            Designed around busy days, last-minute lists, and
                            the quiet relief of knowing that someone familiar is
                            taking care of the essentials—from regular
                            groceries to event-sized orders.
                        </Styled.Subtitle>

                        <Styled.HeroStats>
                            <li>
                                <span className="label">
                                    <FiTruck className="icon" />
                                    Home deliveries / month
                                </span>
                                <span className="value">150+</span>
                            </li>
                            <li>
                                <span className="label">
                                    <FiStar className="icon" />
                                    Repeat customers
                                </span>
                                <span className="value">70%+</span>
                            </li>
                            <li>
                                <span className="label">
                                    <FiClock className="icon" />
                                    Typical delivery slot
                                </span>
                                <span className="value">60–90 mins</span>
                            </li>
                        </Styled.HeroStats>
                    </Styled.HeroText>

                    <Styled.HeroVisual>
                        {heroOk ? (
                            <Styled.ImageWrapper>
                                <img
                                    src={HERO_URL}
                                    alt="Staff preparing delivery crates in a local store"
                                    loading="lazy"
                                    onError={(e) => {
                                        setHeroOk(false);
                                        handleImageError(e);
                                    }}
                                />
                                <div className="overlay">
                                    <div className="tag">
                                        <FiMapPin className="icon" />
                                        <span>Local deliveries · Within city</span>
                                    </div>
                                    <div className="bottom-strip">
                                        <div className="line">
                                            <FiZap className="icon" />
                                            <span>Express slots for urgent orders</span>
                                        </div>
                                        <div className="line">
                                            <FiCheckCircle className="icon" />
                                            <span>Packed & checked manually</span>
                                        </div>
                                    </div>
                                </div>
                            </Styled.ImageWrapper>
                        ) : (
                            <Styled.FallbackBlock>
                                <div className="icon-wrap">
                                    <FiImage className="icon" />
                                </div>
                                <p className="title">Service image not loaded</p>
                                <p className="desc">
                                    The network blocked our photo preview, but
                                    the services are very real. Scroll down to
                                    see how we can help with deliveries,
                                    subscriptions, and bulk orders.
                                </p>
                            </Styled.FallbackBlock>
                        )}
                    </Styled.HeroVisual>
                </Styled.Hero>

                {/* ===== Core services grid ===== */}
                <Styled.SectionHeader>
                    <div className="left">
                        <span className="eyebrow">Core offerings</span>
                        <h2>What we handle for you</h2>
                        <p>
                            Each service is built to solve a specific everyday
                            problem—from rushed evenings to monthly grocery
                            planning. Tap a card to focus on it.
                        </p>
                    </div>
                    <div className="right">
                        <span className="hint">
                            <FiAlertCircle className="icon" />
                            Service coverage may vary slightly by area and time.
                        </span>
                    </div>
                </Styled.SectionHeader>

                <Styled.CoreGrid>
                    {CORE_SERVICES.map((service) => {
                        const Icon = service.icon;
                        const isActive = service.id === activeServiceId;

                        return (
                            <Styled.ServiceCard
                                key={service.id}
                                $active={isActive}
                                onClick={() => setActiveServiceId(service.id)}
                            >
                                <div className="header">
                                    <div className="icon-wrap">
                                        <Icon className="icon" />
                                    </div>
                                    <div className="title-block">
                                        <h3>{service.title}</h3>
                                        <p>{service.tagline}</p>
                                    </div>
                                    {service.badge && (
                                        <span className="badge">
                                            {service.badge}
                                        </span>
                                    )}
                                </div>

                                <p className="details">{service.details}</p>

                                <ul className="bullets">
                                    {service.bullets.map((b) => (
                                        <li key={b}>
                                            <FiCheckCircle className="tick" />
                                            <span>{b}</span>
                                        </li>
                                    ))}
                                </ul>
                            </Styled.ServiceCard>
                        );
                    })}
                </Styled.CoreGrid>

                {/* ===== Add-on services ===== */}
                <Styled.SectionHeader as="section">
                    <div className="left">
                        <span className="eyebrow">Small extras, big relief</span>
                        <h2>Extras that make things smoother</h2>
                        <p>
                            Not every service is a big feature. Some are just
                            polite habits and simple systems that make your day
                            lighter.
                        </p>
                    </div>
                </Styled.SectionHeader>

                <Styled.AddonGrid>
                    {ADDON_SERVICES.map((item) => {
                        const Icon = item.icon;
                        return (
                            <Styled.AddonCard key={item.id}>
                                <div className="icon-wrap">
                                    <Icon className="icon" />
                                </div>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </Styled.AddonCard>
                        );
                    })}
                </Styled.AddonGrid>

                {/* ===== How it works ===== */}
                <Styled.FlowSection>
                    <div className="flow-left">
                        <span className="eyebrow">Simple flow</span>
                        <h2>How a typical home delivery works</h2>
                        <p>
                            The exact steps change based on what you order, but
                            the idea stays the same—keep you informed, avoid
                            surprises, and finish in a single smooth loop.
                        </p>
                    </div>

                    <Styled.FlowTimeline>
                        <li>
                            <div className="step">
                                <span className="step-number">01</span>
                                <div className="body">
                                    <h3>Share your list</h3>
                                    <p>
                                        Send a photo, forward a previous bill, or
                                        type a fresh list on WhatsApp / SMS / call.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="step">
                                <span className="step-number">02</span>
                                <div className="body">
                                    <h3>We confirm details</h3>
                                    <p>
                                        We check availability, suggest
                                        alternatives if needed, and share an
                                        approximate bill amount and time window.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="step">
                                <span className="step-number">03</span>
                                <div className="body">
                                    <h3>Packing & quality checks</h3>
                                    <p>
                                        Items are grouped by type (fresh, fragile,
                                        cleaning, etc.), then double-checked before
                                        leaving the store.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="step">
                                <span className="step-number">04</span>
                                <div className="body">
                                    <h3>Delivery & payment</h3>
                                    <p>
                                        The rider calls on arrival; pay via UPI,
                                        card, or cash. If anything feels off, we
                                        fix it on the spot or in the next trip.
                                    </p>
                                </div>
                            </div>
                        </li>
                    </Styled.FlowTimeline>
                </Styled.FlowSection>

                {/* ===== FAQ ===== */}
                <Styled.FaqSection>
                    <div className="left">
                        <span className="eyebrow">Questions</span>
                        <h2>Service-related FAQs</h2>
                        <p>
                            These are the questions people usually ask when they
                            move from walk-in shopping to a mix of in-store and
                            home deliveries.
                        </p>
                    </div>

                    <Styled.FaqList>
                        {FAQ_ITEMS.map((item) => {
                            const open = openFaq === item.q;
                            return (
                                <li key={item.q}>
                                    <button
                                        type="button"
                                        className={open ? "faq-head open" : "faq-head"}
                                        onClick={() =>
                                            setOpenFaq(open ? "" : item.q)
                                        }
                                    >
                                        <span className="q">{item.q}</span>
                                        <span className="icon-wrap">
                                            <FiChevronDown className="icon" />
                                        </span>
                                    </button>
                                    {open && (
                                        <div className="faq-body">
                                            <p>{item.a}</p>
                                        </div>
                                    )}
                                </li>
                            );
                        })}
                    </Styled.FaqList>
                </Styled.FaqSection>

                {/* ===== Closing strip ===== */}
                <Styled.CTA>
                    <div className="left">
                        <span className="eyebrow">Next step</span>
                        <h2>Want to try a service once?</h2>
                        <p>
                            Start with a small test order or a simple pickup
                            request. You don’t need an app, login, or registration
                            to get started.
                        </p>
                    </div>
                    <div className="right">
                        <button type="button" className="primary">
                            <FiPhoneCall className="icon" />
                            Call to place a test order
                        </button>
                        <button type="button" className="ghost">
                            <span>View contact details</span>
                            <FiArrowRight className="icon" />
                        </button>
                    </div>
                </Styled.CTA>
            </Styled.Inner>
        </Styled.Wrapper>
    );
}

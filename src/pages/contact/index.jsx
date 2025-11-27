// src/pages/contact/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiPhone,
    FiMail,
    FiMapPin,
    FiClock,
    FiSend,
    FiArrowRight,
    FiImage,
} from "react-icons/fi";

const HERO_URL =
    "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80";

// 🔑 change only this if you want a different primary contact email
const CONTACT_EMAIL = "hello@urbancraft.services";

export default function Contact() {
    const [heroOk, setHeroOk] = useState(true);

    const handleQuickMessageSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const name = (formData.get("name") || "").toString().trim();
        const email = (formData.get("email") || "").toString().trim();
        const message = (formData.get("message") || "").toString().trim();

        const subject = `New enquiry from ${name || "UrbanCraft website"}`;
        const lines = [];

        if (name) lines.push(`Name: ${name}`);
        if (email) lines.push(`Email: ${email}`);
        if (message) {
            if (lines.length) lines.push("");
            lines.push("Message:");
            lines.push(message);
        }

        const body = lines.join("\n");

        const mailto = `mailto:${encodeURIComponent(
            CONTACT_EMAIL
        )}?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(body || "Hi, I’d like to know more.")}`;

        // 👉 opens default mail app, completely frontend only
        window.location.href = mailto;
    };

    return (
        <Styled.Wrapper>
            <Styled.Inner className="app-max-width">
                {/* Left: content */}
                <Styled.Content>
                    <Styled.Pill>
                        <span className="dot" />
                        <span>We’re here to help</span>
                    </Styled.Pill>

                    <Styled.Title>Contact UrbanCraft Services</Styled.Title>

                    <Styled.Subtitle>
                        Questions, bookings, or special requests—reach out to us
                        and we’ll get back to you as soon as possible.
                    </Styled.Subtitle>

                    <Styled.Grid>
                        {/* Contact details */}
                        <Styled.Card>
                            <Styled.CardHeader>
                                <span className="icon">
                                    <FiPhone />
                                </span>
                                <div className="text">
                                    <h3>Call or WhatsApp</h3>
                                    <p>Talk to our front-desk team directly.</p>
                                </div>
                            </Styled.CardHeader>

                            <Styled.CardList>
                                <li>
                                    <span className="label">Phone</span>
                                    <a href="tel:+911234567890">
                                        +91 12345 67890
                                    </a>
                                </li>
                                <li>
                                    <span className="label">WhatsApp</span>
                                    <a
                                        href="https://wa.me/911234567890"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Chat with us
                                        <FiArrowRight className="inline-icon" />
                                    </a>
                                </li>
                            </Styled.CardList>
                        </Styled.Card>

                        <Styled.Card>
                            <Styled.CardHeader>
                                <span className="icon">
                                    <FiMail />
                                </span>
                                <div className="text">
                                    <h3>Email</h3>
                                    <p>Share details, photos, or documents.</p>
                                </div>
                            </Styled.CardHeader>

                            <Styled.CardList>
                                <li>
                                    <span className="label">Support</span>
                                    <a href={`mailto:${CONTACT_EMAIL}`}>
                                        {CONTACT_EMAIL}
                                    </a>
                                </li>
                                <li>
                                    <span className="label">Business</span>
                                    <a href="mailto:work@urbancraft.services">
                                        work@urbancraft.services
                                    </a>
                                </li>
                            </Styled.CardList>
                        </Styled.Card>

                        <Styled.Card>
                            <Styled.CardHeader>
                                <span className="icon">
                                    <FiMapPin />
                                </span>
                                <div className="text">
                                    <h3>Visit us</h3>
                                    <p>Drop by during visiting hours.</p>
                                </div>
                            </Styled.CardHeader>

                            <Styled.CardList>
                                <li>
                                    <span className="label">Address</span>
                                    <p>
                                        UrbanCraft Services Studio,
                                        <br />
                                        Indiranagar, Bengaluru
                                    </p>
                                </li>
                                <li>
                                    <span className="label">Maps link</span>
                                    <a
                                        href="https://maps.google.com"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Open in Maps
                                        <FiArrowRight className="inline-icon" />
                                    </a>
                                </li>
                            </Styled.CardList>
                        </Styled.Card>

                        <Styled.Card>
                            <Styled.CardHeader>
                                <span className="icon">
                                    <FiClock />
                                </span>
                                <div className="text">
                                    <h3>Timings</h3>
                                    <p>We try to respond within one working day.</p>
                                </div>
                            </Styled.CardHeader>

                            <Styled.CardList>
                                <li>
                                    <span className="label">Studio</span>
                                    <p>Mon – Sat · 9:30 AM – 8:00 PM</p>
                                </li>
                                <li>
                                    <span className="label">Support</span>
                                    <p>Daily · 9:00 AM – 10:00 PM (IST)</p>
                                </li>
                            </Styled.CardList>
                        </Styled.Card>
                    </Styled.Grid>

                    {/* Quick message form – frontend-only mailto */}
                    <Styled.FormCard>
                        <div className="head">
                            <h3>Send a quick message</h3>
                            <p>
                                Fill this short form and your email app will open
                                with the message pre-filled.
                            </p>
                        </div>

                        <form onSubmit={handleQuickMessageSubmit}>
                            <div className="row">
                                <div className="field">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder="Your full name"
                                        autoComplete="name"
                                    />
                                </div>
                                <div className="field">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="you@example.com"
                                        autoComplete="email"
                                    />
                                </div>
                            </div>

                            <div className="field">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={3}
                                    placeholder="Tell us what you have in mind..."
                                />
                            </div>

                            <div className="actions">
                                <button type="submit">
                                    <span className="icon">
                                        <FiSend />
                                    </span>
                                    <span>Open email app</span>
                                </button>
                                <span className="note">
                                    No server is used. The form just prepares an
                                    email for you.
                                </span>
                            </div>
                        </form>
                    </Styled.FormCard>
                </Styled.Content>

                {/* Right: image / fallback */}
                <Styled.Visual>
                    {heroOk ? (
                        <Styled.ImageWrapper>
                            <img
                                src={HERO_URL}
                                alt="Warm studio workspace with plants and a laptop"
                                onError={() => setHeroOk(false)}
                                loading="lazy"
                            />
                            <div className="overlay">
                                <span className="tag-dot" />
                                <span className="tag-text">
                                    A calm corner for every conversation
                                </span>
                            </div>
                        </Styled.ImageWrapper>
                    ) : (
                        <Styled.FallbackBlock>
                            <div className="icon-wrap">
                                <FiImage className="icon" />
                            </div>
                            <p className="title">Image not available</p>
                            <p className="desc">
                                Your network is fine—the hero photo just didn’t
                                load. You can still reach us using the details on
                                the left.
                            </p>
                        </Styled.FallbackBlock>
                    )}
                </Styled.Visual>
            </Styled.Inner>
        </Styled.Wrapper>
    );
}

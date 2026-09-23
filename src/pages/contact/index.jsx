import { useState } from "react";

import { FiClock, FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";

import ImageWithLoader from "../../components/imageWithLoader";

import contactImage from "../../assets/images/contact/contact.webp";

import { Styled } from "./styled";

const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setForm((current) => ({
            ...current,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const subject = encodeURIComponent(
            `UrbanCraft enquiry from ${form.name || "website visitor"}`,
        );

        const body = encodeURIComponent(
            [
                `Name: ${form.name}`,
                `Email: ${form.email}`,
                "",
                form.message,
            ].join("\n"),
        );

        window.location.href = `mailto:hello@urbancraft.services?subject=${subject}&body=${body}`;
    };

    return (
        <Styled.Wrapper>
            <section className="hero">
                <div className="container heroGrid">
                    <div>
                        <p className="label">Contact</p>

                        <h1>
                            A simple way to
                            <span>start a conversation.</span>
                        </h1>

                        <p className="intro">
                            Ask about an order, delivery, pickup, availability,
                            or anything else you need help planning.
                        </p>
                    </div>

                    <ImageWithLoader
                        className="heroImage"
                        src={contactImage}
                        alt="Warm UrbanCraft workspace prepared for customer support"
                        loading="eager"
                        fetchPriority="high"
                    />
                </div>
            </section>

            <section className="contact">
                <div className="container contactGrid">
                    <div className="details">
                        <article className="detailCard">
                            <span className="icon">
                                <FiPhone aria-hidden="true" />
                            </span>

                            <div>
                                <span className="detailLabel">Phone</span>

                                <a href="tel:+911234567890">+91 12345 67890</a>
                            </div>
                        </article>

                        <article className="detailCard">
                            <span className="icon">
                                <FiMail aria-hidden="true" />
                            </span>

                            <div>
                                <span className="detailLabel">Email</span>

                                <a href="mailto:hello@urbancraft.services">
                                    hello@urbancraft.services
                                </a>
                            </div>
                        </article>

                        <article className="detailCard">
                            <span className="icon">
                                <FiMapPin aria-hidden="true" />
                            </span>

                            <div>
                                <span className="detailLabel">Location</span>

                                <p>Indiranagar, Bengaluru, Karnataka</p>
                            </div>
                        </article>

                        <article className="detailCard">
                            <span className="icon">
                                <FiClock aria-hidden="true" />
                            </span>

                            <div>
                                <span className="detailLabel">Hours</span>

                                <p>
                                    Monday - Saturday
                                    <br />
                                    9:30 AM - 8:00 PM
                                </p>
                            </div>
                        </article>
                    </div>

                    <div className="formCard">
                        <div className="formHeader">
                            <p className="label">Quick Message</p>

                            <h2>Tell us what you need.</h2>

                            <p>
                                This frontend form prepares an email in your
                                default mail application.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="fieldRow">
                                <div className="field">
                                    <label htmlFor="name">Name</label>

                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="Your name"
                                        autoComplete="name"
                                    />
                                </div>

                                <div className="field">
                                    <label htmlFor="email">Email</label>

                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={form.email}
                                        onChange={handleChange}
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
                                    rows="6"
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="Tell us what you need..."
                                    required
                                />
                            </div>

                            <button type="submit">
                                <FiSend aria-hidden="true" />
                                Open Email App
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </Styled.Wrapper>
    );
};

export default Contact;

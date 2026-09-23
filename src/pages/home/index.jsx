import { NavLink } from "react-router-dom";

import {
    FiArrowRight,
    FiCheckCircle,
    FiClock,
    FiMapPin,
    FiShoppingBag,
    FiStar,
    FiTruck,
} from "react-icons/fi";

import ImageWithLoader from "../../components/imageWithLoader";

import heroImage from "../../assets/images/home/hero.webp";
import service01 from "../../assets/images/home/service-01.webp";
import service02 from "../../assets/images/home/service-02.webp";
import service03 from "../../assets/images/home/service-03.webp";
import gallery01 from "../../assets/images/home/gallery-01.webp";
import gallery02 from "../../assets/images/home/gallery-02.webp";
import gallery03 from "../../assets/images/home/gallery-03.webp";

import { Styled } from "./styled";

const highlights = [
    {
        label: "Home deliveries / month",
        value: "150+",
        icon: <FiTruck aria-hidden="true" />,
    },
    {
        label: "Repeat customers",
        value: "70%+",
        icon: <FiStar aria-hidden="true" />,
    },
    {
        label: "Typical delivery slot",
        value: "60-90 mins",
        icon: <FiClock aria-hidden="true" />,
    },
    {
        label: "Local focus",
        value: "Bengaluru",
        icon: <FiMapPin aria-hidden="true" />,
    },
];

const services = [
    {
        title: "Home Delivery",
        text: "Simple same-day delivery for daily essentials and repeat household orders.",
        image: service01,
        imageAlt: "UrbanCraft groceries prepared for local home delivery",
        icon: <FiTruck aria-hidden="true" />,
    },
    {
        title: "Quick Pickup",
        text: "Share your list ahead of time and collect a prepared order without waiting.",
        image: service02,
        imageAlt: "Prepared grocery order ready for quick pickup",
        icon: <FiShoppingBag aria-hidden="true" />,
    },
    {
        title: "Repeat Orders",
        text: "Keep frequently used items easier to manage with flexible recurring orders.",
        image: service03,
        imageAlt: "Everyday household essentials arranged for repeat orders",
        icon: <FiCheckCircle aria-hidden="true" />,
    },
];

const gallery = [
    {
        src: gallery01,
        alt: "Fresh produce displayed inside UrbanCraft Services",
    },
    {
        src: gallery02,
        alt: "Organised grocery shelves inside UrbanCraft Services",
    },
    {
        src: gallery03,
        alt: "UrbanCraft store details and everyday essentials",
    },
];

const Home = () => {
    return (
        <Styled.Wrapper>
            <section className="hero">
                <div className="container heroGrid">
                    <div className="heroContent">
                        <div className="label">
                            <span className="dot" />
                            UrbanCraft Services
                        </div>

                        <h1>
                            Daily essentials,
                            <span>without the chaos.</span>
                        </h1>

                        <p className="heroText">
                            A neighbourhood-focused service built around
                            predictable delivery, quick pickup, organised
                            shopping, and everyday convenience.
                        </p>

                        <div className="heroActions">
                            <NavLink className="primaryButton" to="/services">
                                <FiTruck aria-hidden="true" />
                                View Services
                            </NavLink>

                            <NavLink className="secondaryButton" to="/contact">
                                Contact Us
                                <FiArrowRight aria-hidden="true" />
                            </NavLink>
                        </div>

                        <div className="highlights">
                            {highlights.map((item) => (
                                <article className="highlight" key={item.label}>
                                    <span className="highlightIcon">
                                        {item.icon}
                                    </span>

                                    <div>
                                        <strong>{item.value}</strong>
                                        <span>{item.label}</span>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>

                    <div className="heroVisual">
                        <ImageWithLoader
                            className="heroImage"
                            src={heroImage}
                            alt="Calm and organised UrbanCraft neighbourhood store"
                            loading="eager"
                            fetchPriority="high"
                        />

                        <div className="heroCard">
                            <FiShoppingBag aria-hidden="true" />

                            <div>
                                <strong>
                                    Everyday essentials, thoughtfully organised.
                                </strong>

                                <span>Simple shopping with less friction.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="sectionHeader">
                        <div>
                            <p className="sectionLabel">Everyday Services</p>

                            <h2>Built around how people actually shop.</h2>
                        </div>

                        <NavLink className="textLink" to="/services">
                            Explore all services
                            <FiArrowRight aria-hidden="true" />
                        </NavLink>
                    </div>

                    <div className="serviceGrid">
                        {services.map((service) => (
                            <article
                                className="serviceCard"
                                key={service.title}
                            >
                                <ImageWithLoader
                                    className="serviceImage"
                                    src={service.image}
                                    alt={service.imageAlt}
                                />

                                <div className="serviceContent">
                                    <span className="serviceIcon">
                                        {service.icon}
                                    </span>

                                    <h3>{service.title}</h3>

                                    <p>{service.text}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="experienceSection">
                <div className="container experienceGrid">
                    <div>
                        <p className="sectionLabel">The UrbanCraft Approach</p>

                        <h2>
                            Local service should feel simple and dependable.
                        </h2>
                    </div>

                    <div className="experienceContent">
                        <p>
                            UrbanCraft focuses on a clear store layout,
                            practical communication, careful packing, and
                            predictable local service.
                        </p>

                        <p>
                            Instead of adding unnecessary complexity, the
                            experience is designed around the things customers
                            use most often.
                        </p>

                        <NavLink className="textLink" to="/about">
                            Read our story
                            <FiArrowRight aria-hidden="true" />
                        </NavLink>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="sectionHeader">
                        <div>
                            <p className="sectionLabel">Store Preview</p>

                            <h2>A closer look at the space.</h2>
                        </div>

                        <NavLink className="textLink" to="/gallery">
                            View gallery
                            <FiArrowRight aria-hidden="true" />
                        </NavLink>
                    </div>

                    <div className="galleryGrid">
                        {gallery.map((item) => (
                            <ImageWithLoader
                                key={item.src}
                                className="galleryImage"
                                src={item.src}
                                alt={item.alt}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section className="ctaSection">
                <div className="container cta">
                    <div>
                        <p className="sectionLabel">Need Something Today?</p>

                        <h2>
                            Tell us what you need and we will help you plan the
                            quickest option.
                        </h2>
                    </div>

                    <NavLink className="primaryButton" to="/contact">
                        Contact UrbanCraft
                        <FiArrowRight aria-hidden="true" />
                    </NavLink>
                </div>
            </section>
        </Styled.Wrapper>
    );
};

export default Home;

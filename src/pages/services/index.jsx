import {
    FiClock,
    FiCreditCard,
    FiPhone,
    FiRefreshCw,
    FiShield,
    FiShoppingBag,
    FiStar,
    FiTruck,
    FiUsers,
} from "react-icons/fi";

import ImageWithLoader from "../../components/imageWithLoader";

import {
    ADDON_SERVICES,
    CORE_SERVICES,
    SERVICE_FAQS,
    SERVICE_HERO_IMAGE,
    SERVICE_STATS,
    SERVICE_SUPPORT_IMAGE,
} from "../../data/services";

import { Styled } from "./styled";

const iconMap = {
    truck: <FiTruck aria-hidden="true" />,
    "shopping-bag": <FiShoppingBag aria-hidden="true" />,
    refresh: <FiRefreshCw aria-hidden="true" />,
    users: <FiUsers aria-hidden="true" />,
    "credit-card": <FiCreditCard aria-hidden="true" />,
    clock: <FiClock aria-hidden="true" />,
    phone: <FiPhone aria-hidden="true" />,
    shield: <FiShield aria-hidden="true" />,
    star: <FiStar aria-hidden="true" />,
};

const Services = () => {
    return (
        <Styled.Wrapper>
            <section className="hero">
                <div className="container heroGrid">
                    <div>
                        <p className="label">Services</p>

                        <h1>
                            Everyday support,
                            <span>kept straightforward.</span>
                        </h1>

                        <p className="intro">
                            Delivery, pickup, recurring orders, and practical
                            help for the things households use most often.
                        </p>
                    </div>

                    <ImageWithLoader
                        className="heroImage"
                        src={SERVICE_HERO_IMAGE.src}
                        alt={SERVICE_HERO_IMAGE.alt}
                        loading="eager"
                        fetchPriority="high"
                    />
                </div>
            </section>

            <section className="stats">
                <div className="container statsGrid">
                    {SERVICE_STATS.map((item) => (
                        <article className="stat" key={item.id}>
                            <span className="icon">
                                {iconMap[item.iconName]}
                            </span>

                            <strong>{item.value}</strong>
                            <p>{item.label}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="services">
                <div className="container">
                    <div className="sectionHeader">
                        <p className="label">Core Services</p>

                        <h2>Practical options for different kinds of days.</h2>
                    </div>

                    <div className="serviceList">
                        {CORE_SERVICES.map((service) => (
                            <article className="serviceCard" key={service.id}>
                                <ImageWithLoader
                                    className="serviceImage"
                                    src={service.image}
                                    alt={service.imageAlt}
                                />

                                <div className="serviceContent">
                                    <div className="serviceTop">
                                        <span className="icon">
                                            {iconMap[service.iconName]}
                                        </span>

                                        <span className="badge">
                                            {service.badge}
                                        </span>
                                    </div>

                                    <h3>{service.title}</h3>

                                    <p className="tagline">{service.tagline}</p>

                                    <p className="details">{service.details}</p>

                                    <ul>
                                        {service.bullets.map((item) => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="addons">
                <div className="container">
                    <div className="sectionHeader">
                        <p className="label">Extra Support</p>

                        <h2>Small details that make regular orders easier.</h2>
                    </div>

                    <div className="addonGrid">
                        {ADDON_SERVICES.map((service) => (
                            <article className="addonCard" key={service.id}>
                                <span className="icon">
                                    {iconMap[service.iconName]}
                                </span>

                                <h3>{service.title}</h3>
                                <p>{service.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="support">
                <div className="container supportGrid">
                    <div>
                        <p className="label">Personal Assistance</p>

                        <h2>Not sure which option fits your order?</h2>

                        <p>
                            Call or message with your list. The order can be
                            organised around pickup, delivery, recurring
                            requirements, or larger planned quantities.
                        </p>
                    </div>

                    <ImageWithLoader
                        className="supportImage"
                        src={SERVICE_SUPPORT_IMAGE.src}
                        alt={SERVICE_SUPPORT_IMAGE.alt}
                    />
                </div>
            </section>

            <section className="faq">
                <div className="container">
                    <div className="sectionHeader">
                        <p className="label">Common Questions</p>

                        <h2>Useful details before you order.</h2>
                    </div>

                    <div className="faqGrid">
                        {SERVICE_FAQS.map((item) => (
                            <article className="faqCard" key={item.id}>
                                <h3>{item.question}</h3>
                                <p>{item.answer}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </Styled.Wrapper>
    );
};

export default Services;

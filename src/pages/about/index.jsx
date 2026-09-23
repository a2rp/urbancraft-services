import { NavLink } from "react-router-dom";

import {
    FiArrowRight,
    FiCheckCircle,
    FiHeart,
    FiMapPin,
    FiUsers,
} from "react-icons/fi";

import ImageWithLoader from "../../components/imageWithLoader";

import about01 from "../../assets/images/about/about-01.webp";
import about02 from "../../assets/images/about/about-02.webp";

import { Styled } from "./styled";

const values = [
    {
        title: "Useful before impressive",
        text: "The experience is shaped around everyday usefulness, not unnecessary complexity.",
        icon: <FiCheckCircle aria-hidden="true" />,
    },
    {
        title: "Local by design",
        text: "Shorter distances make communication, pickup, and delivery easier to keep predictable.",
        icon: <FiMapPin aria-hidden="true" />,
    },
    {
        title: "Human service",
        text: "Customers should be able to ask a simple question and get a clear answer without friction.",
        icon: <FiUsers aria-hidden="true" />,
    },
    {
        title: "Care in the details",
        text: "From packing to store layout, small details create a calmer and more dependable experience.",
        icon: <FiHeart aria-hidden="true" />,
    },
];

const About = () => {
    return (
        <Styled.Wrapper>
            <section className="hero">
                <div className="container heroGrid">
                    <div>
                        <p className="label">About UrbanCraft</p>

                        <h1>
                            A neighbourhood service built around
                            <span>clarity and consistency.</span>
                        </h1>

                        <p className="intro">
                            UrbanCraft is a concept for a modern local store
                            experience where shopping, delivery, pickup, and
                            everyday support feel simpler.
                        </p>
                    </div>

                    <ImageWithLoader
                        className="heroImage"
                        src={about01}
                        alt="UrbanCraft local store interior and organised shelves"
                        loading="eager"
                        fetchPriority="high"
                    />
                </div>
            </section>

            <section className="story">
                <div className="container storyGrid">
                    <ImageWithLoader
                        className="storyImage"
                        src={about02}
                        alt="UrbanCraft team organising products inside the store"
                    />

                    <div className="storyContent">
                        <p className="label">Our Approach</p>

                        <h2>Keep the useful parts. Remove the noise.</h2>

                        <p>
                            Local stores are already part of everyday routines.
                            UrbanCraft builds on that familiarity with better
                            organisation, clearer communication, and simple
                            service options.
                        </p>

                        <p>
                            The goal is not to turn a neighbourhood shop into
                            something complicated. It is to make the experience
                            more predictable for customers with busy schedules.
                        </p>

                        <p>
                            That means thoughtful shelves, practical delivery
                            windows, faster pickups, and direct contact when
                            something needs attention.
                        </p>
                    </div>
                </div>
            </section>

            <section className="values">
                <div className="container">
                    <div className="sectionHeader">
                        <p className="label">What Matters</p>

                        <h2>A few principles guide every service.</h2>
                    </div>

                    <div className="valueGrid">
                        {values.map((value) => (
                            <article className="valueCard" key={value.title}>
                                <span className="icon">{value.icon}</span>

                                <h3>{value.title}</h3>

                                <p>{value.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="closing">
                <div className="container closingGrid">
                    <div>
                        <p className="label">Explore More</p>

                        <h2>
                            See how those ideas turn into practical services.
                        </h2>
                    </div>

                    <NavLink className="button" to="/services">
                        View Services
                        <FiArrowRight aria-hidden="true" />
                    </NavLink>
                </div>
            </section>
        </Styled.Wrapper>
    );
};

export default About;

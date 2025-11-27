// src/pages/notFound/index.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Styled } from "./styled";
import {
    FiAlertTriangle,
    FiHome,
    FiMail,
    FiArrowLeft,
    FiImage,
} from "react-icons/fi";

const HERO_URL =
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80";

export default function NotFound() {
    const [heroOk, setHeroOk] = useState(true);

    return (
        <Styled.Wrapper>
            <Styled.Inner className="app-max-width">
                <Styled.Content>
                    <Styled.Pill>
                        <span className="icon">
                            <FiAlertTriangle />
                        </span>
                        <span>404 · Page not found</span>
                    </Styled.Pill>

                    <Styled.Title>
                        <span className="code">404</span>
                        <span className="text">
                            The page you’re looking for has moved, vanished, or
                            never existed.
                        </span>
                    </Styled.Title>

                    <Styled.Description>
                        You might have followed an outdated link, or typed
                        something a little off. No worries—your journey doesn’t
                        have to end here. Choose where you’d like to go next.
                    </Styled.Description>

                    <Styled.Actions>
                        <NavLink to="/home">
                            <Styled.PrimaryButton>
                                <span className="icon">
                                    <FiHome />
                                </span>
                                <span>Back to Home</span>
                            </Styled.PrimaryButton>
                        </NavLink>

                        <NavLink to="/contact">
                            <Styled.SecondaryButton>
                                <span className="icon">
                                    <FiMail />
                                </span>
                                <span>Contact support</span>
                            </Styled.SecondaryButton>
                        </NavLink>
                    </Styled.Actions>

                    <Styled.Hint>
                        <FiArrowLeft className="icon" />
                        <span>Or use the sidebar to jump to any other page.</span>
                    </Styled.Hint>
                </Styled.Content>

                <Styled.Visual>
                    {heroOk ? (
                        <Styled.ImageWrapper>
                            <img
                                src={HERO_URL}
                                alt="Abstract city lights on a dark background"
                                onError={() => setHeroOk(false)}
                                loading="lazy"
                            />
                            <div className="overlay-tag">
                                <span className="dot" />
                                <span>Lost in navigation</span>
                            </div>
                        </Styled.ImageWrapper>
                    ) : (
                        <Styled.FallbackBlock>
                            <div className="icon-wrap">
                                <FiImage className="icon" />
                            </div>
                            <p className="title">Image lost in transit</p>
                            <p className="desc">
                                Your connection is fine—the hero image just didn’t
                                make it. The rest of the site is still here for
                                you.
                            </p>
                        </Styled.FallbackBlock>
                    )}
                </Styled.Visual>
            </Styled.Inner>
        </Styled.Wrapper>
    );
}

import { useEffect, useMemo, useRef, useState } from "react";

import { FiImage, FiX } from "react-icons/fi";

import ImageWithLoader from "../../components/imageWithLoader";

import { GALLERY_FILTERS, GALLERY_IMAGES } from "../../data/galleryImages";

import { Styled } from "./styled";

const Gallery = () => {
    const [activeFilter, setActiveFilter] = useState("all");

    const [selectedImage, setSelectedImage] = useState(null);

    const closeButtonRef = useRef(null);

    const filteredImages = useMemo(() => {
        if (activeFilter === "all") {
            return GALLERY_IMAGES;
        }

        return GALLERY_IMAGES.filter((item) =>
            item.tags.includes(activeFilter),
        );
    }, [activeFilter]);

    useEffect(() => {
        if (!selectedImage) {
            return undefined;
        }

        const previousOverflow = document.body.style.overflow;

        document.body.style.overflow = "hidden";

        window.requestAnimationFrame(() => {
            closeButtonRef.current?.focus();
        });

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setSelectedImage(null);
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;

            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [selectedImage]);

    const handleModalClose = () => {
        setSelectedImage(null);
    };

    const handleModalContentClick = (event) => {
        event.stopPropagation();
    };

    return (
        <Styled.Wrapper>
            <section className="hero">
                <div className="container">
                    <p className="label">Gallery</p>

                    <h1>
                        Everyday moments from
                        <span>the UrbanCraft space.</span>
                    </h1>

                    <p className="intro">
                        A visual collection of products, people, shelves,
                        working moments, and small details from around the
                        store.
                    </p>
                </div>
            </section>

            <section className="gallery">
                <div className="container">
                    <div className="filters" aria-label="Gallery filters">
                        {GALLERY_FILTERS.map((filter) => (
                            <button
                                key={filter.id}
                                className={
                                    activeFilter === filter.id ? "active" : ""
                                }
                                type="button"
                                onClick={() => setActiveFilter(filter.id)}
                                aria-pressed={activeFilter === filter.id}
                            >
                                {filter.label}
                            </button>
                        ))}
                    </div>

                    {filteredImages.length > 0 ? (
                        <div className="galleryGrid">
                            {filteredImages.map((item) => (
                                <button
                                    className="galleryCard"
                                    key={item.id}
                                    type="button"
                                    onClick={() => setSelectedImage(item)}
                                    aria-label={`Open ${item.title}`}
                                >
                                    <ImageWithLoader
                                        className="galleryImage"
                                        src={item.src}
                                        alt={item.alt}
                                    />

                                    <span className="overlay">
                                        <span className="mood">
                                            {item.mood}
                                        </span>

                                        <strong>{item.title}</strong>

                                        <span className="meta">
                                            {item.meta}
                                        </span>
                                    </span>
                                </button>
                            ))}
                        </div>
                    ) : (
                        <div className="empty">
                            <FiImage aria-hidden="true" />
                        </div>
                    )}
                </div>
            </section>

            {selectedImage && (
                <div
                    className="modal"
                    role="presentation"
                    onClick={handleModalClose}
                >
                    <div
                        className="modalContent"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="gallery-modal-title"
                        onClick={handleModalContentClick}
                    >
                        <div className="modalHeader">
                            <div>
                                <p className="label">Gallery Preview</p>

                                <h2 id="gallery-modal-title">
                                    {selectedImage.title}
                                </h2>
                            </div>

                            <button
                                ref={closeButtonRef}
                                className="closeButton"
                                type="button"
                                onClick={handleModalClose}
                                aria-label="Close image preview"
                                title="Close"
                            >
                                <FiX aria-hidden="true" />
                            </button>
                        </div>

                        <ImageWithLoader
                            className="modalImage"
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            loading="eager"
                        />

                        <div className="modalMeta">
                            <span>{selectedImage.mood}</span>

                            <span>{selectedImage.meta}</span>
                        </div>
                    </div>
                </div>
            )}
        </Styled.Wrapper>
    );
};

export default Gallery;

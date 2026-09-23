import gallery01 from "../assets/images/gallery/gallery-01.webp";
import gallery02 from "../assets/images/gallery/gallery-02.webp";
import gallery03 from "../assets/images/gallery/gallery-03.webp";
import gallery04 from "../assets/images/gallery/gallery-04.webp";
import gallery05 from "../assets/images/gallery/gallery-05.webp";
import gallery06 from "../assets/images/gallery/gallery-06.webp";
import gallery07 from "../assets/images/gallery/gallery-07.webp";
import gallery08 from "../assets/images/gallery/gallery-08.webp";

export const GALLERY_FILTERS = [
    {
        id: "all",
        label: "All",
    },
    {
        id: "store",
        label: "Store",
    },
    {
        id: "products",
        label: "Products",
    },
    {
        id: "people",
        label: "People",
    },
    {
        id: "details",
        label: "Details",
    },
    {
        id: "bts",
        label: "Behind the Scenes",
    },
];

export const GALLERY_IMAGES = [
    {
        id: "fresh-counter",
        src: gallery01,
        alt: "Fresh produce counter inside UrbanCraft Services",
        title: "Morning counter - freshly stocked",
        mood: "Everyday freshness",
        tags: ["store", "products"],
        meta: "Morning light - wide view",
    },
    {
        id: "fruit-closeup",
        src: gallery02,
        alt: "Seasonal fresh fruits displayed at UrbanCraft Services",
        title: "Seasonal fruits in focus",
        mood: "Color & texture",
        tags: ["products"],
        meta: "Close view - natural light",
    },
    {
        id: "baskets",
        src: gallery03,
        alt: "Hand-picked grocery baskets ready for customers",
        title: "Hand-picked baskets",
        mood: "Market style",
        tags: ["store", "details"],
        meta: "Warm tone - store detail",
    },
    {
        id: "checkout",
        src: gallery04,
        alt: "Customer checkout area inside UrbanCraft Services",
        title: "Checkout lane, no rush",
        mood: "Soft evening",
        tags: ["people", "store"],
        meta: "Ambient light - daily life",
    },
    {
        id: "team-laugh",
        src: gallery05,
        alt: "UrbanCraft team taking a short break between customer orders",
        title: "Team huddle between orders",
        mood: "Behind the scenes",
        tags: ["people", "bts"],
        meta: "Team moment - candid",
    },
    {
        id: "coffee-break",
        src: gallery06,
        alt: "A quiet staff coffee break during the working day",
        title: "A short pause during a long day",
        mood: "Calm break",
        tags: ["bts"],
        meta: "Soft contrast - candid",
    },
    {
        id: "workspace",
        src: gallery07,
        alt: "Workspace used for planning UrbanCraft store operations",
        title: "Planning the week",
        mood: "Planning & notes",
        tags: ["bts", "details"],
        meta: "Workspace - overhead view",
    },
    {
        id: "entrance",
        src: gallery08,
        alt: "UrbanCraft store entrance during a busy day",
        title: "Entrance on a busy Saturday",
        mood: "Movement & light",
        tags: ["store", "people"],
        meta: "Street view - natural light",
    },
];

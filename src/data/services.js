import service01 from "../assets/images/services/service-01.webp";
import service02 from "../assets/images/services/service-02.webp";
import service03 from "../assets/images/services/service-03.webp";
import service04 from "../assets/images/services/service-04.webp";
import service05 from "../assets/images/services/service-05.webp";
import service06 from "../assets/images/services/service-06.webp";

export const SERVICE_HERO_IMAGE = {
    src: service01,
    alt: "UrbanCraft team preparing local customer orders",
};

export const CORE_SERVICES = [
    {
        id: "home-delivery",
        iconName: "truck",
        title: "Home Delivery",
        tagline: "Daily essentials to your doorstep.",
        details:
            "Same-day delivery for orders placed before the cut-off time, with careful packing for fragile or fresh items.",
        bullets: [
            "Delivery slots across the day",
            "Live status via phone or WhatsApp",
            "Cash or digital payments at delivery",
        ],
        badge: "Most used",
        image: service02,
        imageAlt: "Packed groceries prepared for home delivery",
    },
    {
        id: "quick-pickup",
        iconName: "shopping-bag",
        title: "Quick Store Pickup",
        tagline: "Order ahead, skip the waiting.",
        details:
            "Call, message, or drop a list and we will keep everything ready so you can pick up and go.",
        bullets: [
            "Reserved queue for pickups",
            "Helps during busy evenings",
            "Ideal for repeat orders",
        ],
        badge: "Time saver",
        image: service03,
        imageAlt: "Prepared customer order ready for quick store pickup",
    },
    {
        id: "subscriptions",
        iconName: "refresh",
        title: "Repeat Subscriptions",
        tagline: "Set once, delivered on schedule.",
        details:
            "For milk, bread, fruits, or other frequently used items, set a simple recurring schedule.",
        bullets: [
            "Customizable day and quantity",
            "Pause or change anytime by phone",
            "Monthly consolidated billing option",
        ],
        badge: "For regulars",
        image: service04,
        imageAlt: "Everyday grocery essentials arranged for recurring delivery",
    },
    {
        id: "bulk-orders",
        iconName: "users",
        title: "Bulk & Party Orders",
        tagline: "Stock up for events and gatherings.",
        details:
            "Special handling and planning support for functions, office gatherings, or community events.",
        bullets: [
            "Pre-planned packing and delivery",
            "Budget-wise recommendations",
            "Early morning or late-night slots",
        ],
        badge: "On request",
        image: service05,
        imageAlt: "Bulk grocery order prepared for an event",
    },
];

export const ADDON_SERVICES = [
    {
        id: "payment-assist",
        iconName: "credit-card",
        title: "Payment Assistance",
        text: "From UPI and cards to cash on delivery, multiple payment options are supported with clear receipts.",
    },
    {
        id: "priority-window",
        iconName: "clock",
        title: "Priority Time Windows",
        text: "Short and precise delivery windows wherever possible, especially for senior citizens or working families.",
    },
    {
        id: "order-help",
        iconName: "phone",
        title: "Order Help Desk",
        text: "Share your list, a photo, or a previous bill and the order can be prepared from there.",
    },
    {
        id: "safe-handling",
        iconName: "shield",
        title: "Safe Handling",
        text: "Edible, fragile, and cleaning items are packed separately so everything reaches you safely.",
    },
];

export const SERVICE_SUPPORT_IMAGE = {
    src: service06,
    alt: "UrbanCraft staff helping prepare and organize customer orders",
};

export const SERVICE_FAQS = [
    {
        id: "place-order",
        question: "How do I place a home-delivery order?",
        answer: "You can send your list on WhatsApp, call the store directly, or share a clear photo of a handwritten list. Availability, amount, and expected delivery time can be confirmed before dispatch.",
    },
    {
        id: "minimum-order",
        question: "Is there a minimum amount for delivery?",
        answer: "Most local deliveries can have a small minimum order value. Exact limits may depend on the delivery area and time of day.",
    },
    {
        id: "urgent-order",
        question: "Do you charge extra for urgent orders?",
        answer: "For unusually tight timelines or last-minute orders, a small priority fee may apply. Any additional charge should be confirmed before dispatch.",
    },
    {
        id: "change-order",
        question: "Can I change or cancel an order after placing it?",
        answer: "If the order has not been packed or dispatched, changes or cancellation can usually be handled. Once dispatched, only limited changes may be possible.",
    },
];

export const SERVICE_STATS = [
    {
        id: "deliveries",
        label: "Home deliveries / month",
        value: "150+",
        iconName: "truck",
    },
    {
        id: "repeat-customers",
        label: "Repeat customers",
        value: "70%+",
        iconName: "star",
    },
    {
        id: "delivery-window",
        label: "Typical delivery slot",
        value: "60-90 mins",
        iconName: "clock",
    },
];

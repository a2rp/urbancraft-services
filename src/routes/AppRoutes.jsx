import { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Loader from "../components/loader";

const Home = lazy(() => import("../pages/home"));
const About = lazy(() => import("../pages/about"));
const Services = lazy(() => import("../pages/services"));
const Gallery = lazy(() => import("../pages/gallery"));
const Contact = lazy(() => import("../pages/contact"));
const NotFound = lazy(() => import("../pages/notFound"));

const AppRoutes = () => {
    const location = useLocation();

    return (
        <Suspense key={location.pathname} fallback={<Loader />}>
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/about" element={<About />} />

                <Route path="/services" element={<Services />} />

                <Route path="/gallery" element={<Gallery />} />

                <Route path="/contact" element={<Contact />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;

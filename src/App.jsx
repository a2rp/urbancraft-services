import { useCallback, useState } from "react";

import BackToTop from "./components/backToTop";
import DrawerMenu from "./components/drawerMenu";
import Footer from "./components/footer";
import Header from "./components/header";
import ScrollToTop from "./components/scrollToTop";

import AppRoutes from "./routes/AppRoutes";

import { Styled } from "./App.styled";

const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = useCallback(() => {
        setIsMenuOpen((current) => !current);
    }, []);

    const handleMenuClose = useCallback(() => {
        setIsMenuOpen(false);
    }, []);

    return (
        <Styled.Wrapper>
            <ScrollToTop />

            <Header isMenuOpen={isMenuOpen} onMenuToggle={handleMenuToggle} />

            <DrawerMenu isOpen={isMenuOpen} onClose={handleMenuClose} />

            <Styled.Main>
                <AppRoutes />
            </Styled.Main>

            <Footer />

            <BackToTop />
        </Styled.Wrapper>
    );
};

export default App;

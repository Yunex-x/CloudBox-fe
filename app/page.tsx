import Hero from "./components/1hero";
import Footer from "./components/layout/footer";
import Header from "./components/layout/header";
import Features from "./components/sections/2features";
import Preview from "./components/sections/3preview";
import Sharing from "./components/sections/4sharing";
import Solution from "./components/sections/8solution";
import TopicsSection from "./components/sections/9topics";
import { Container } from "./components/sections/container/container";
    
export default function HomePage() {
    return (
        <main>
            <Header />
            <Hero />
            <Features />
            <Preview />
            <Sharing />
            <Container/>
            <Solution/>
            <TopicsSection />
            <Footer />

        </main>



    )
}
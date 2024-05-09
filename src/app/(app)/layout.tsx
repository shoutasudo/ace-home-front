import Footer from "@/ _components/Footer"
import Header from "@/ _components/Header"
import TopScrollBanner from "@/ _components/TopScrollBanner"

const AppLayout = ({ children }:{children: React.ReactNode}) => {
    return (
        <>
            <div className="w-full fixed top-0">
                <Header />
            </div>
            <div className="w-full">{children}</div>
            <section className="top-scroll-banner w-full">
                <TopScrollBanner />
            </section>
            <footer>
                <div className="footer w-full">
                    <Footer />
                </div>
            </footer>
        </>

    )
}

export default AppLayout
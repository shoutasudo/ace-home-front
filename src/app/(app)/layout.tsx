import Footer from "@/ _components/Footer"
import Header from "@/ _components/Header"
import TopScrollBanner from "@/ _components/TopScrollBanner"
import { Metadata } from "next"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons'

export const metadata: Metadata = {
    title: 'TOPページ'
}

const AppLayout = ({ children }: { children: React.ReactNode }) => {
    const phone = '09014497070'
    return (
        <>
            <div className="w-full fixed top-0 z-50">
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
            <div
                className="fixed z-50 bottom-10 right-3 pt-5 pb-4 px-5 border-2 bg-mainPink rounded-full cursor-pointer text-white border-white"
            >
                <a href={`tel:${phone}`}>
                    <FontAwesomeIcon
                        icon={faPhoneVolume}
                        className="w-full cursor-pointer sns-icon"
                    />
                </a>
            </div>
        </>

    )
}

export default AppLayout

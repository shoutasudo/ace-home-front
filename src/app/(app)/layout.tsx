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
                className="fixed z-50 bottom-10 right-3 w-20 h-20 border-2 bg-mainPink rounded-full cursor-pointer text-white border-white"
            >
                <div className="pt-5">
                    <a href={`tel:${process.env.TEL_NUM}`}>
                        <FontAwesomeIcon
                            icon={faPhoneVolume}
                            className="w-full cursor-pointer sns-icon"
                        />
                    </a>
                </div>
            </div>
        </>

    )
}

export default AppLayout

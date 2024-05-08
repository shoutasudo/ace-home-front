import TopImage from '@/ _components/TopImage'
import TopAbout from '@/ _components/TopAbout'
import Service from '@/ _components/Service '
import MemberRegister from '@/ _components/MemberRegister'
import Service2 from '@/ _components/Service2'
import Information from '@/ _components/Information'

const Home = () => {
    return (
        <>
            <div className="w-full">
                <main className="mt-34">
                    <section className="top-image w-full">
                        <TopImage />
                    </section>
                    <section className="top-about pt-10 pb-11 z-0">
                        <TopAbout>
                            メゾンエイブルは、お部屋探しのエイブルが運営する、
                            <br />
                            ひとり暮らし女性を応援するための
                            <br />
                            生活サポートサービスです。
                            <br />
                            国内のひとり暮らしをしている方なら誰でもご利用いただけます。
                        </TopAbout>
                    </section>
                    <section className="service  md:py-12 py-5">
                        <Service />
                    </section>
                    <section className="member-register w-full px-5">
                        <MemberRegister />
                    </section>
                    <section className="service-2 w-full">
                        <Service2 />
                    </section>
                    <section className="information">
                        <Information />
                    </section>
                    <section className="member-register w-full px-5">
                        <MemberRegister />
                    </section>
                </main>
            </div>
        </>
    )
}

export default Home

import TopImage from '@/ _components/TopImage'
import TopAbout from '@/ _components/TopAbout'
import MemberRegister from '@/ _components/MemberRegister'
import Service2 from '@/ _components/Service2'
import Information from '@/ _components/Information'
import InstagramContents from '@/ _components/InstagramContents'

const Home = () => {
    return (
        <>
            <div className="w-full">
                <main className="mt-34">
                    <section className="top-image w-full lg:mt-32">
                        <TopImage />
                    </section>
                    <section className="top-about pt-10 pb-11 z-0">
                        <TopAbout />
                    </section>
                    <section className="instagram-contents md:py-12 py-5">
                        <InstagramContents />
                    </section>
                    <section className="member-register w-full px-5">
                        <MemberRegister />
                    </section>
                    <section className="service-2 w-full">
                        <Service2 />
                    </section>
                    <section className="information w-full mt-10">
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

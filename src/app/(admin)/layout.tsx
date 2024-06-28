import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'TOPページ',
    robots: 'noindex'
}

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            {children}
        </>

    )
}

export default AdminLayout

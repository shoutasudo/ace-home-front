import React from 'react';

interface Props {
    children: React.ReactNode;
}

const PageTitle: React.FC<Props> = ({ children }) => {
    return (
        <section className="pb-4 border-b border-gray-300 space-y-5">
            <h1 className="text-2xl font-bold">{children}</h1>
        </section>
    );
}

export default PageTitle;

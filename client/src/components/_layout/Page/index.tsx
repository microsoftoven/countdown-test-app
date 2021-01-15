import React from 'react';

interface Props {

}

export const Page: React.FC<Props> = ({children}) => {
    return (
        <section className="ctapp">
            {children}
        </section>
    )
}
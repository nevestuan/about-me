import React, { FC } from 'react';
import PageHeader from './PageHeader';

const PageLayout: FC = ({ children }) => {
    return (
        <>
            <header>
                <PageHeader />
            </header>
            <div className="page-content">{children}</div>
        </>
    );
};

export default PageLayout;

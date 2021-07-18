import React, { FC } from 'react';
import PageHeader from './PageHeader';

interface IPageLayoutProps {
    children?: React.ReactNode;
}

const PageLayout: FC = ({ children = null }): IPageLayoutProps => {
    return (
        <>
            <header>
                <PageHeader />
            </header>
            <div className="page-content">{children}</div>
            <footer>
                <div className="content-container">Created with passion ❤️</div>
            </footer>
        </>
    );
};

export default PageLayout;

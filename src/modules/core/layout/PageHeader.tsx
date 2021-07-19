import React, { FC } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Affix } from 'antd';

interface INavItem {
    anchor: string;
    title: string;
}

const StyledHeader = styled.div`
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
        ul {
            display: flex;
            flex-direction: row-reverse;
            align-items: center;

            .nav-item {
                a {
                    color: var(--text-color);
                    &:hover {
                        color: var(--primary-color);
                    }
                }
            }
        }
    }
`;

const NAV_CONFIG = [
    {
        anchor: '#portfolio',
        title: 'Portfolio',
    },
    {
        anchor: '#credits',
        title: 'Credits',
    },
];

const PageHeader: FC = () => {
    const renderNavItem = (item: INavItem) => {
        if (item.anchor) {
            return (
                <li key={item.title} className="nav-item m-x-16">
                    <a className="text-family-bold" href={item.anchor}>
                        {item.title}
                    </a>
                </li>
            );
        }
        return null;
    };

    return (
        <Affix offsetTop={0}>
            <StyledHeader className="content-container">
                <Link href="/" passHref>
                    <a className="logo p-y-8">
                        <img
                            width={32}
                            src="/images/core/logo.png"
                            alt="T Logo"
                        />
                    </a>
                </Link>
                <nav>
                    <ul>{NAV_CONFIG.map((item) => renderNavItem(item))}</ul>
                </nav>
            </StyledHeader>
        </Affix>
    );
};

export default PageHeader;

import React, { FC } from 'react';
import { Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;

interface PageLayoutProps {
    children?: React.ReactNode;
}

const PageLayout: FC = ({ children = null }): PageLayoutProps => {
    return (
        <Layout className="layout">
            <Header>
                <div className="logo" />
                <Menu mode="horizontal">
                    <Menu.Item key="lab">Lab</Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>{children}</Content>
            <Footer style={{ textAlign: 'center' }}>
                Ant Design ©2018 Created by Ant UED
            </Footer>
        </Layout>
    );
};

export default PageLayout;

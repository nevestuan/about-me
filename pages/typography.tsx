import React, { FC } from 'react';
import { Descriptions, Button, Row, Col, Divider } from 'antd';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    padding: 32px 0;
`;

const StyledResponsiveDemo = styled.div`
    padding: 24px;
    border: 1px solid #363636;
    background-color: #ffccc7;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (min-width: var(--screen-xl-min)) and (max-width: var(--screen-xl-max)}) {
        background-color: #ffe7ba;
    }
    @media screen and (min-width: var(--screen-lg-min)) and (max-width: var(--screen-lg-max)) {
        background-color: #ffffb8;
    }
    @media screen and (min-width: var(--screen-md-min)) and (max-width: var(--screen-md-max)) {
        background-color: #d9f7be;
    }
    @media screen and (max-width: var(--screen-sm-max)) {
        background-color: #bae7ff;
    }
`;

const RabbitTypography: FC = () => {
    const title = (
        <span className="text-header text-color-primary">
            Typography Utilities
        </span>
    );

    return (
        <StyledWrapper>
            <div className="content-container">
                <Descriptions title={title} bordered column={1}>
                    <Descriptions.Item label="Headers">
                        <p className="text-header">
                            Large Header 1. 32pt Bold "text-header"
                        </p>
                        <p className="text-header section-header">
                            Large Header 1. 28pt Bold "text-header
                            section-header"
                        </p>
                    </Descriptions.Item>
                    <Descriptions.Item label="Subheading">
                        <p className="text-subheading">
                            Subheading. 18pt Regular "text-subheading"
                        </p>
                        <p className="text-subheading subheading-medium">
                            Subheading. 18pt Medium "text-subheading
                            subheading-medium"
                        </p>
                        <p className="text-subheading subheading-semibold">
                            Subheading. 18pt Semibold "text-subheading
                            subheading-semibold"
                        </p>
                        <p className="text-subheading subheading-bold">
                            Subheading. 18pt Bold "text-subheading
                            subheading-bold"
                        </p>
                    </Descriptions.Item>
                    <Descriptions.Item label="Body">
                        <p>Body 1. 14pt Regular</p>
                        <p className="body-medium">
                            Body 1. 14pt Medium "body-medium"
                        </p>
                        <p className="body-semibold">
                            Body 1. 14pt Semi Bold "body-semibold"
                        </p>
                        <p className="body-bold">
                            Body 1. 14pt Bold "body-bold"
                        </p>
                    </Descriptions.Item>
                    <Descriptions.Item label="Body2">
                        <p className="body-2">Body 1. 14pt Regular "body-2"</p>
                        <p className="body-2 body-medium">
                            Body 1. 14pt Medium "body-2 body-medium"
                        </p>
                        <p className="body-2 body-semibold">
                            Body 1. 14pt Semi Bold "body-2 body-semibold"
                        </p>
                        <p className="body-2 body-bold">
                            Body 1. 14pt Bold "body-2 body-bold"
                        </p>
                    </Descriptions.Item>
                    <Descriptions.Item label="Button">
                        <Row gutter={[16, 16]}>
                            <Col xs={24} md={12}>
                                <Button type="primary" className="mr-16">
                                    Primary 14pt
                                </Button>
                            </Col>
                            <Col xs={24} md={12}>
                                <Button type="primary" size="large">
                                    Primary Large 14pt
                                </Button>
                            </Col>
                            <Col xs={24} md={12}>
                                <Button type="ghost" className="mr-16">
                                    Ghost 14pt
                                </Button>
                            </Col>
                            <Col xs={24} md={12}>
                                <Button type="ghost" size="large">
                                    Ghost Large 14pt
                                </Button>
                            </Col>
                        </Row>
                    </Descriptions.Item>
                    <Descriptions.Item label="Footnote">
                        <p className="text-footnote">
                            Footnote. 12pt Regular "text-footnote"
                        </p>
                        <p className="text-footnote footnote-bold">
                            Footnote. 12pt Bold "text-footnote footnote-bold"
                        </p>
                    </Descriptions.Item>
                    <Descriptions.Item label="Colors">
                        <p className="text-color-primary">
                            Primary "text-color-primary"
                        </p>
                        <p className="text-color-disabled">
                            Disabled "text-color-disabled"
                        </p>
                        <p className="text-color-warning">
                            Warning "text-color-warning"
                        </p>
                        <p>
                            <a className="has-text-underline">
                                Link "text-color-link"
                            </a>
                        </p>
                        <p className="text-color-success">
                            Success "text-color-success"
                        </p>
                        <p className="text-color-pending">
                            Pending "text-color-pending"
                        </p>
                    </Descriptions.Item>
                </Descriptions>
                <Divider />
                <StyledResponsiveDemo className="text-header has-text-centered">
                    <span className="hidden visible-xxl">
                        Screen XXL (Ultra Wide Desktop) <br /> "hidden
                        visible-xxl"
                    </span>
                    <span className="hidden visible-xl hidden-xxl">
                        Screen XL (Wide Desktop) <br />
                        "hidden visible-xl hidden-xxl"
                    </span>
                    <span className="hidden visible-lg hidden-xl">
                        Screen LG (Desktop) <br />
                        "hidden visible-lg hidden-xl"
                    </span>
                    <span className="hidden visible-md hidden-lg">
                        Screen MD (Tablet) <br />
                        "hidden visible-md hidden-lg"
                    </span>
                    <span className="hidden-md">
                        Screen SM (Mobile) <br />
                        "hidden-md"
                    </span>
                </StyledResponsiveDemo>
            </div>
        </StyledWrapper>
    );
};

export default RabbitTypography;

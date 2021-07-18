import React, { FC } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';

const StyledWrapper = styled.div`
    width: 100vw;
    height: calc(100vh - 36px);

    .content-row {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .content-left {
            max-width: 500px;
            .greeting {
                font-size: 48px;
                font-family: var(--font-family-bold);
                font-weight: bold;
            }
            .description {
                font-size: 16px;
            }
        }

        .content-right {
            img {
                width: 100%;
            }
        }
    }
`;

const HomeHero = (): FC => {
    return (
        <StyledWrapper className="content-container">
            <Row className="content-row">
                <Col className="content-left" xs={24} md={12}>
                    <p className="greeting">Hi there,</p>
                    <p className="description">
                        My name is Tuan Pham. Neves is my nickname. <br />
                        I’m a full-stack developer with 7 years of experience in
                        software programming. I have a profound understanding of
                        web development. <br /> I’m energetic, self-driven, and
                        swiftly adaptable to new environments.
                    </p>
                </Col>
                <Col className="content-right" xs={12} md={12}>
                    <img
                        src="/images/home/hero_illustration.jpg"
                        alt="Hero Tuna"
                    />
                </Col>
            </Row>
        </StyledWrapper>
    );
};

export default HomeHero;

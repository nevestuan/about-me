import React from 'react';
import styled from 'styled-components';
import { Row, Col, Button } from 'antd';
import {
    GithubOutlined,
    LinkedinOutlined,
    MailOutlined,
} from '@ant-design/icons';
import Fade from 'react-reveal/Fade';
import HeroParticles from './HeroParticles';

const StyledWrapper = styled.div`
    width: 100vw;
    height: calc(100vh - 36px);
    position: relative;

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
            .contact-icon {
                margin-right: 16px;
                font-size: 32px;
            }
        }

        .content-right {
            img {
                width: 100%;
            }
        }
    }
`;

const HomeHero: React.FC = () => {
    return (
        <StyledWrapper>
            <HeroParticles />
            <Row className="content-row content-container">
                <Col className="content-left" xs={24} md={12}>
                    <Fade left>
                        <p className="greeting">Hi there 👋,</p>
                    </Fade>
                    <Fade bottom cascade>
                        <div className="description">
                            <p>My name is Tuan Pham.</p>
                            <p>
                                I’m a full-stack developer with multiple years
                                of experience in software programming. I have a
                                profound understanding of web development.
                            </p>
                            <p>
                                I’m energetic, self-driven, and swiftly
                                adaptable to new environments.
                            </p>
                        </div>
                        <p>
                            <Button
                                href="#portfolio"
                                size="large"
                                className="ant-btn-gradient"
                            >
                                View Portfolio
                            </Button>
                        </p>
                        <p className="text-subheading subheading-bold">
                            Contact me:
                        </p>
                        <p>
                            <a
                                href="https://www.linkedin.com/in/neves-pham/"
                                target="_blank"
                            >
                                <LinkedinOutlined className="contact-icon" />
                            </a>
                            <a
                                href="https://github.com/nevestuan"
                                target="_blank"
                            >
                                <GithubOutlined className="contact-icon" />
                            </a>
                            <a href="mailto:tuanpa.911@gmail.com">
                                <MailOutlined className="contact-icon" />
                            </a>
                        </p>
                    </Fade>
                </Col>
                <Col className="content-right" xs={12} md={12}>
                    <Fade right>
                        <img
                            src="/images/home/hero_illustration.jpg"
                            alt="Hero Tuna"
                        />
                    </Fade>
                </Col>
            </Row>
        </StyledWrapper>
    );
};

export default HomeHero;

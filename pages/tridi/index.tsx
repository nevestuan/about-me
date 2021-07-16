import React, { FC } from 'react';
import styled from 'styled-components';
import { TridiDemo } from '@tridi/components';
import { PageLayout } from '@core/components';

const StyledWrapper = styled.div`
    .npm-badge {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 16px;
    }

    .tridi-demo-wrapper {
        width: '1000px';

        @media only screen and (max-width: '999px') {
            width: '100vw';
        }
    }

    .dot {
        position: absolute;
    }

    .tridi-dot:after {
        -webkit-animation-name: 'ripple'; /*动画属性名，也就是我们前面keyframes定义的动画名*/
        -webkit-animation-duration: 1s; /*动画持续时间*/
        -webkit-animation-timing-function: ease; /*动画频率，和transition-timing-function是一样的*/
        -webkit-animation-delay: 0s; /*动画延迟时间*/
        -webkit-animation-iteration-count: infinite; /*定义循环资料，infinite为无限次*/
        -webkit-animation-direction: normal; /*定义动画方式*/
    }

    @keyframes ripple {
        0% {
            left: 5px;
            top: 5px;
            opcity: 75;
            width: 0;
            height: 0;
        }
        100% {
            left: -20px;
            top: -20px;
            opacity: 0;
            width: 50px;
            height: 50px;
        }
    }
`;

const TridiPage: FC = () => {
    return (
        <PageLayout>
            <StyledWrapper>
                <div className="npm-badge">
                    <a
                        href="https://badge.fury.io/js/react-tridi"
                        style={{ marginRight: '16px' }}
                    >
                        <img
                            src="https://badge.fury.io/js/react-tridi.svg"
                            alt="npm version"
                            height="24"
                        />
                    </a>
                    React Tridi
                </div>
                <TridiDemo />
            </StyledWrapper>
        </PageLayout>
    );
};

export default TridiPage;

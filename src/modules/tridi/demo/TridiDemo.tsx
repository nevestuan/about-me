import React, { useState, useRef, FC } from 'react';
import { Button } from 'antd';
import dynamic from 'next/dynamic';

import 'react-tridi/dist/index.css';

const Tridi = dynamic(import('react-tridi'), { ssr: false });

const TridiDemo: FC = () => {
    const [isAutoPlayRunning, setIsAutoPlayRunning] = useState(false);
    const [pins, setPins] = useState([]);
    const tridiRef = useRef(null);

    const frameChangeHandler = (currentFrameIndex) => {
        console.log('current frame index', currentFrameIndex);
    };

    const recordStartHandler = (recordingSessionId) =>
        console.log('on record start', { recordingSessionId, pins });

    const recordStopHandler = (recordingSessionId) =>
        console.log('on record stop', { recordingSessionId, pins });

    const pinClickHandler = (pin) => {
        console.log('on pin click', pin);
        tridiRef.current.toggleRecording(true, pin.recordingSessionId);
    };

    return (
        <div className="tridi-demo-wrapper">
            <Tridi
                ref={tridiRef}
                location="./images/tridi"
                format="jpg"
                count="36"
                onFrameChange={frameChangeHandler}
                autoplaySpeed={70}
                onAutoplayStart={() => setIsAutoPlayRunning(true)}
                onAutoplayStop={() => setIsAutoPlayRunning(false)}
                onRecordStart={recordStartHandler}
                onRecordStop={recordStopHandler}
                onPinClick={pinClickHandler}
                inverse
                showControlBar
                showStatusBar
                mousewheel
                pins={pins}
                setPins={setPins}
                hintOnStartup
                hintText="Drag to view"
            />

            <Button onClick={() => tridiRef.current.prev()}>Prev</Button>
            <Button onClick={() => tridiRef.current.next()}>Next</Button>
            <Button
                onClick={() =>
                    tridiRef.current.toggleAutoplay(!isAutoPlayRunning)
                }
            >
                {isAutoPlayRunning ? 'Pause' : 'Autoplay'}
            </Button>
        </div>
    );
};

export default TridiDemo;

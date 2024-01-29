import React from 'react';
import useLogic from '../hooks/hands';

function HandsCapture() {
    const { videoElement, maxVideoWidth, maxVideoHeight, canvasEl } = useLogic();
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}
        >
            <video
                style={{ display: 'none' }}
                className='video'
                playsInline
                ref={videoElement}
            />
            <canvas style={{transform: 'rotateY(180deg)'}} ref={canvasEl} width={maxVideoWidth} height={maxVideoHeight} />
        </div>
    );
}

export default HandsCapture;
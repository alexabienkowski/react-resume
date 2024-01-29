import { useCallback, useEffect, useRef } from 'react';
import { Camera } from '@mediapipe/camera_utils';
import {
    drawConnectors,
    drawLandmarks,
} from '@mediapipe/drawing_utils';
import { Hands, HAND_CONNECTIONS, ResultsListener } from '@mediapipe/hands';

const maxVideoWidth = 960;
const maxVideoHeight = 540;

const useLogic = () => {
    // videoElement type needs update.
    const videoElement = useRef<any>(null);
    const hands = useRef<Hands | null>(null);
    const camera = useRef<Camera | null>(null);
    const canvasEl = useRef<HTMLCanvasElement>(null);

    const onResults: ResultsListener = useCallback(async (results) =>{
        if (canvasEl.current) {
            if (results.multiHandLandmarks.length) {
            }
            const ctx = canvasEl.current.getContext('2d');
            if (!ctx) throw 'No context';

            ctx.save();
            ctx.clearRect(0, 0, canvasEl.current.width, canvasEl.current.height);
            ctx.drawImage(results.image, 0, 0, maxVideoWidth, maxVideoHeight);

            if (results.multiHandLandmarks) {
                for (const [_, landmarks] of results.multiHandLandmarks.entries()) {
                    drawConnectors(ctx, landmarks, HAND_CONNECTIONS, {
                        color: '#00e1ff',
                        lineWidth: 2
                    });
                    drawLandmarks(ctx, landmarks, {
                        color: '#ff2929',
                        lineWidth: 1
                    });
                }
            }
            ctx.restore();
        }
    }, []);


    useEffect(() => {

        const run = async () => {

            if (!videoElement.current) throw 'No video element';
            if (!videoElement.current) throw 'No canvas element';

            camera.current = new Camera(videoElement.current, {
                onFrame: async () => {
                    await hands.current?.send({ image: videoElement.current });
                },
                width: maxVideoWidth,
                height: maxVideoHeight,
            });
            camera.current.start();

            hands.current = new Hands({
                locateFile: (file) => {
                    return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
                },
            });
            hands.current.setOptions({
                maxNumHands: 2,
                modelComplexity: 1,
                minDetectionConfidence: 0.5,
                minTrackingConfidence: 0.5,
            });
            hands.current.onResults(onResults);
        }

        run()

    }, []);

    return { maxVideoHeight, maxVideoWidth, canvasEl, videoElement };
}

export default useLogic;
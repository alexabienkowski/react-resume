import HandsCapture from '../components/Hands';
import { FC } from "react";

const HandsAi: FC = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', width: '100%', height: '100vh' }}>
            <div style={{ display: 'flex', flexDirection: 'column', width: 600, alignItems: 'flex-start' }}>
                <a target={'_blank'} href={'https://developers.google.com/mediapipe'}>
                    <img alt={'mediapipe'} src={'./images/mediapipe.png'}/>
                </a>
                <a target={'_blank'} href={'https://www.tensorflow.org/'}>
                    <img alt={'tensorflow'} src={'./images/tensorflow.png'}/>
                </a>

            </div>
            <div style={{ flex: 1 }}>
                <HandsCapture/>
            </div>
        </div>
    );

}

export default HandsAi;

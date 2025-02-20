import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';
import { FC, memo, MouseEvent, useCallback, useEffect, useRef, useState } from 'react';

import { isMobile } from '../../config';
import { portfolioItems, SectionId } from '../../data/data';
import { PortfolioItem } from '../../data/dataDef';
import useDetectOutsideClick from '../../hooks/useDetectOutsideClick';
import Section from '../Layout/Section';
import HandsAi from "../../pages/hands-ai";
import HandsCapture from "../Hands";
import { Spinnaker } from "next/dist/compiled/@next/font/dist/google";

const Portfolio: FC = memo(() => {
    const [enabled, setEnabled] = useState(false);

    return (
        <Section className="bg-neutral-800" sectionId={SectionId.Portfolio}>
            <div className="flex flex-col gap-y-8">
                <h2 className="self-center text-xl font-bold text-white">Check out some of my work below!</h2>
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', columnGap: 12, rowGap: 12, width: '100%' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', width: 300, alignItems: 'flex-start', borderRadius: 12, padding: 20, backgroundColor: 'white' }}>
                        <a target={'_blank'} href={'https://developers.google.com/mediapipe'}>
                            <img alt={'mediapipe'} src={'./images/mediapipe.png'} style={{ width: 200 }} />
                        </a>
                        <a target={'_blank'} href={'https://www.tensorflow.org/'}>
                            <img alt={'tensorflow'} src={'./images/tensorflow.png'} style={{ marginLeft: -6, width: 220 }} />
                        </a>
                        <div style={{ height: 12 }} />
                        <div className="text-lg text-black">
                            This is a demonstration of the <span className="text-blue-500">MediaPipe</span> and <span className="text-blue-500">Tensorflow</span> libraries. It will recognize your hands in the webcam, and draw 3D spline and joint information. <span className="font-semibold">Make sure to show your hands to the camera!</span>
                        </div>
                    </div>
                    <div style={{ flex: 1, minWidth: 400, minHeight: 500, borderRadius: 12, overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#e4e4e4' }}>
                        {!enabled && (
                            <button onClick={() => setEnabled(true)} className="w-max rounded-full border-2 border-green-600 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-offset-stone-800">
                                Load Demo
                            </button>
                        )}
                        {enabled && (
                            <>
                                <span className="loader" style={{ position: 'absolute' }}></span>
                                <HandsCapture />
                            </>
                        )}
                    </div>
                </div>
            </div>
        </Section>
    );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;
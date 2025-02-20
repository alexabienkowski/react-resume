import { useEffect, useRef } from 'react';
import { Landmark, Results } from '@mediapipe/hands';
import * as tf from '@tensorflow/tfjs';
import _ from 'lodash';

//@ts-ignore
const calcLandmarkList = (image, landmarks) => {
    const { width: imageWidth, height: imageHeight } = image;

    const landmarkPoint: any = [];

    // Keypoint
    //@ts-ignore
    Object.values(landmarks).forEach((landmark: Landmark) => {
        const landmarkX = Math.min(landmark.x * imageWidth, imageWidth - 1);
        const landmarkY = Math.min(landmark.y * imageHeight, imageHeight - 1);

        landmarkPoint.push([landmarkX, landmarkY]);
    });

    return landmarkPoint;
};

//@ts-ignore
const preProcessLandmark = (landmarkList) => {
    let tempLandmarkList = _.cloneDeep(landmarkList);

    let baseX = 0;
    let baseY = 0;

    //convert to realtive coordinates
    Object.values(tempLandmarkList).forEach((landmarkPoint, index) => {
        if (!index) {
            //@ts-ignore
            baseX = parseInt(landmarkPoint[0]);
            //@ts-ignore
            baseY = parseInt(landmarkPoint[1]);
        }

        tempLandmarkList[index][0] = tempLandmarkList[index][0] - baseX;
        tempLandmarkList[index][1] = tempLandmarkList[index][1] - baseY;
    });

    //convert to one-dimensional list
    tempLandmarkList = _.flatten(tempLandmarkList);

    //normalize
    const maxValue = Math.max(
        //@ts-ignore
        ...tempLandmarkList.map((value) => Math.abs(value))
    );
    //@ts-ignore
    tempLandmarkList = tempLandmarkList.map((value) => value / maxValue);
    return tempLandmarkList;
};

function useKeyPointClassifier() {
    const model = useRef<any>();
//@ts-ignore
    const keyPointClassifier = async (landmarkList) => {
        const result = await model.current
            .execute(tf.tensor2d([landmarkList]))
            .squeeze()
            .argMax()
            .data();

        return result;
    };
//@ts-ignore
    const processLandmark = async (handLandmarks: Results, image) => {
        const landmarkList = calcLandmarkList(image, handLandmarks);
        const preProcessedLandmarkList = preProcessLandmark(landmarkList);
        const handSignId = await keyPointClassifier(preProcessedLandmarkList);
        return handSignId[0];
    };

    const loadModel = async () => {
        model.current = await tf.loadGraphModel(
            `/tf-models/key-point-classifier/model.json`
        );
    };

    useEffect(() => {
        loadModel();
    }, []);
    return { processLandmark };
}

export default useKeyPointClassifier;
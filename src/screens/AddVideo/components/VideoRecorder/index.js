import React, { useState, useRef, } from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import RightTopMenu from './RightTopMenu';
import VideoTimings from './VideoTimings';
import Zooming from './Zooming';
// import * as RNVisionCamera from 'react-native-vision-camera';

const VideoRecorder = ({ onRecordingFinished = (v) => { } }) => {
    const [isRecording, setIsRecording] = useState(false);
    const [isFlip, flipCam] = useState(true);
    const [isFlash, setFlashState] = useState(false);
    const [zoomValue, setZoomValue] = useState(1);
    const [secondsElapsed, setSecondsElapsed] = useState(0);
    const [camPermission, setCamPermission] = useState(false);
    const [audioPermission, setAudioPermission] = useState(false);
    let intervalId = null;

    const cameraRef = useRef(null);
    useEffect(() => {
        return () => clearInterval(intervalId);
    }, []);

    const back_devices = useCameraDevices('wide-angle-camera')
    const front_devices = useCameraDevices('ultra-wide-angle-camera')
    const device = isFlip ? back_devices.back : front_devices.front

    // if(cameraRef.current){
    //     console.log(cameraRef.current.requestCameraPermission)
    // }

    const startRecording = async () => {
        setIsRecording(true);
        try {
            const options = {
                videoBitrate: 12000000, // 12Mbps
                audioBitrate: 256000, // 256Kbps
                fps: 30,
                codec: 'H264',
                enableAudio: true,
                onRecordingFinished: (video) => {
                    console.log("onRecordingFinished:", video)
                    onRecordingFinished(video)
                    clearInterval(intervalId);
                    setSecondsElapsed(0);
                },
                onRecordingError: (error) => console.log("onRecordingError:", error),
            };
            const recording = await cameraRef.current?.startRecording(options);
            intervalId = setInterval(() => { setSecondsElapsed(secondsElapsed => secondsElapsed + 1); }, 1000);
            console.log('Recording started');
        } catch (error) {
            console.log("startRecording", error);
        }
    };

    const stopRecording = async () => {
        setIsRecording(false);
        try {
            const recording = await cameraRef.current?.stopRecording();
            clearInterval(intervalId);
            setSecondsElapsed(0);
            console.log('Recording stopped', recording);
        } catch (error) {
            console.log("stopRecording Err: ", error);
        }
    };

    function formatTime(secondsElapsed) {
        let minutes = Math.floor(secondsElapsed / 60);
        let seconds = Math.floor(secondsElapsed % 60);
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        return `${minutes}:${seconds}`;
    }

    const handlerPermissions = async () => {
        let camStatus = await Camera.getCameraPermissionStatus()
        if (camStatus != 'authorized') {
            camStatus = await Camera.requestCameraPermission()
            setCamPermission(camStatus)
        }
        let audioStatus = await Camera.getMicrophonePermissionStatus()
        if (audioStatus != 'authorized') {
            audioStatus = await Camera.requestMicrophonePermission()
            setAudioPermission(audioStatus)
        }
    }

    if (cameraRef.current) {
        handlerPermissions()
    }

    return (
        <View style={styles.container}>
            {device &&
                <Camera
                    ref={cameraRef}
                    device={device}
                    video={true}
                    audio={true}
                    isActive={true}
                    torch={isFlash ? 'on' : 'off'}
                    enableZoomGesture={true}
                    zoom={zoomValue}
                    style={StyleSheet.absoluteFill}
                />
            }
            {secondsElapsed > 0 && <Text style={styles.txt01}>{formatTime(secondsElapsed)}</Text>}
            {/* {camPermission && <Text style={styles.txt01}>{(camPermission)}</Text>}
            {audioPermission && <Text style={styles.txt01}>{(audioPermission)}</Text>} */}
            <RightTopMenu
                is_flip={isFlip}
                is_flash={isFlash}
                onClick={async (event_type, value) => {
                    if (event_type == 'flip') flipCam(value)
                    if (event_type == 'flash') setFlashState(value)
                }} />
            <View style={styles.controlsContainer}>
                <Zooming
                    defaultValue={zoomValue}
                    setZoomValue={(v) => { setZoomValue(v) }} />
                <View style={{ height: 10 }} />
                <VideoTimings />
                <View style={{ height: 10 }} />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        if (isRecording) stopRecording()
                        else startRecording()
                    }}>
                    <View style={styles.v01}>
                        <Text style={styles.buttonText}>{isRecording ? "Stop" : "Start"}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    controlsContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100,
        position: 'absolute',
        bottom: 20,
    },
    button: {
        borderWidth:6,
        borderColor:"rgba(229, 56, 78, 0.6)",
        borderRadius: 100,
        height: 68,
        width: 68,
        alignItems: 'center',
        justifyContent: 'center',
    },
    v01:{
        backgroundColor: '#E5384E',
        borderRadius: 100,
        height: 58,
        width: 58,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    txt01: {
        position: 'absolute',
        top: 30,
        alignSelf: 'center',
        color: '#fff'
    },
});

export default VideoRecorder;

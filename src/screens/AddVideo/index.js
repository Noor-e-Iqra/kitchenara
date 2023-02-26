import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  StatusBar,
  Alert,
} from 'react-native';
import React, { useEffect, useRef, useState, version } from 'react';

const { width, height } = Dimensions.get('screen');
import ActionSheet from 'react-native-actions-sheet';
import OnVideoModal from './components/OnVideoModal';
import routes from '../../navigation/routes';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/metrices';
import { FONTS } from '../../theme';
import GalleryPickerModal from './components/GalleryPickerModal';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import { FlatList } from 'react-native-gesture-handler';

export const AddVideo = ({ navigation }) => {
  const modalShowRef = useRef(null);
  const galleryModalRef = useRef(null);
  const zoom_list = [
    { name: '1x', val: 1 },
    { name: '2x', val: 2 },
    { name: '3x', val: 3 },
    { name: '4x', val: 4 },
    { name: '5x', val: 5 },
  ]
  const times_list = [
    { name: '3m', val: 180 },
    { name: '60s', val: 60 },
    { name: '15s', val: 15 },
  ]
  const [isRecording, setIsRecording] = useState(false);
  const [isFlip, setFlip] = useState(true);
  const [isFlash, setFlash] = useState(false);
  const [zoomValue, setZoomValue] = useState(1);
  const [defaultTimer, setTimerValue] = useState(60);
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
          // onRecordingFinished(video)
          Alert.alert("Recorded Video: ", JSON.stringify(video))
          navigation.navigate(routes.videoNext.index);
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
      navigation.navigate(routes.videoNext.index);
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
      <StatusBar barStyle={'dark-content'} translucent={true} />
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

      <View style={styles.containerRight}>
        <TouchableOpacity
          onPress={() => { setFlip(!isFlip) }}>
          <View style={styles.conRightV01}></View>
          <View style={{ height: 4 }} />
          <Text style={styles.conRightTxt01}>Flip</Text>
        </TouchableOpacity>
        <View style={{ height: 20 }} />
        <TouchableOpacity
          onPress={() => { setTimerValue() }}>
          <View style={styles.conRightV01}></View>
          <View style={{ height: 4 }} />
          <Text style={styles.conRightTxt01}>Timer</Text>
        </TouchableOpacity>
        <View style={{ height: 20 }} />
        <TouchableOpacity
          onPress={() => { setFlash(!isFlash) }}>
          <View style={styles.conRightV01}></View>
          <View style={{ height: 4 }} />
          <Text style={styles.conRightTxt01}>Flash</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerLeft}>
        <TouchableOpacity
          onPress={() => { navigation.goBack() }}>
          <Text style={styles.conLeftTxt01}>X</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.controlsContainer}>
        <View style={styles.zoomContainer}>
          <FlatList
            horizontal={true}
            data={zoom_list}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  style={styles.zoomV01(zoomValue == item.val)}
                  onPress={() => {
                    setZoomValue(item.val)
                  }}>
                  <Text style={styles.zoomTxt01(zoomValue == item.val)}>{item.name}</Text>
                </TouchableOpacity>
              )
            }}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <View style={{ height: 10 }} />

        <View style={styles.timerContainer}>
          <FlatList
            horizontal={true}
            data={times_list}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  style={styles.timerV01(defaultTimer == item.val)}
                  onPress={() => {
                    setTimerValue(item)
                  }}>
                  <Text style={styles.timerTxt01(defaultTimer == item.val)}>{item.name}</Text>
                </TouchableOpacity>
              )
            }}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <View style={{ height: 10 }} />
        <View style={styles.boToomParent}>
          <View style={styles.filterBtn}>
            <Text style={styles.filterBtnTxt}>Filters</Text>
          </View>

          <TouchableOpacity
            style={styles.recordingBtn}
            onPress={() => {
              if (isRecording) stopRecording()
              // else startRecording()
              else modalShowRef.current?.show();
            }}>
            <View style={styles.recordingBtnV01}>
              <Text style={styles.buttonText}>{isRecording ? "Stop" : "Start"}</Text>
            </View>
          </TouchableOpacity>

          <View>
            <TouchableOpacity
              onPress={() => {
                galleryModalRef?.current?.show();
              }}
              style={styles.galleryBtn}>
              <Image source={require('../../assets/images/plus.png')} />
            </TouchableOpacity>
            <Text
              style={styles.galleryBtnTxt}>
              Gallery
            </Text>
          </View>
        </View>
      </View>

      <ActionSheet
        ref={modalShowRef}
        containerStyle={{
          borderTopLeftRadius: 37,
          borderTopRightRadius: 37,
        }}
        indicatorStyle={{
          width: 37,
          height: 2.98,
          backgroundColor: 'rgba(224, 224, 224, 1)',
          borderRadius: 100,
          marginTop: 5,
        }}
        gestureEnabled={true}>
        <OnVideoModal
          callback={() => {
            modalShowRef.current?.hide()
            if (isRecording) stopRecording()
            else startRecording()
            // navigation.navigate(routes.videoNext.index);
          }}
        />
      </ActionSheet>


      <ActionSheet
        ref={galleryModalRef}
        containerStyle={{
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
        indicatorStyle={{
          width: 50,
          height: 2.98,
          backgroundColor: 'rgba(229, 56, 78, 1)',
          borderRadius: 100,
          marginTop: 5,
        }}
        gestureEnabled={true}>
        <GalleryPickerModal
          callback={() => {
            galleryModalRef.current.hide();
          }}
        />
      </ActionSheet> 

      {/* <View style={styles.bgImageWrapper}>
        <Image
          source={require('../../assets/images/backgroundvideo.png')}
          resizeMode="contain"
        />
      </View>
      <View style={styles.topParrent}>
        <View>
          <Image source={require('../../assets/images/cross-white.png')} />
        </View>
        <View>
          <View style={{alignItems: 'center'}}>
            <Image source={require('../../assets/images/flip.png')} />
            <Text style={{...styles.textstyle}}>Flip</Text>
          </View>
          <View
            style={{marginVertical: verticalScale(15), alignItems: 'center'}}>
            <Image source={require('../../assets/images/timer.png')} />
            <Text style={{...styles.textstyle}}>Timer</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Image source={require('../../assets/images/flash.png')} />
            <Text style={{...styles.textstyle}}>Flash</Text>
          </View>
        </View>
      </View>
      <View style={styles.boToomParent}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            paddingHorizontal: horizontalScale(18),
            paddingVertical: verticalScale(11),
            borderRadius: moderateScale(5),
          }}>
          {new Array(5).fill(null).map((__, index) => {
            return (
              <Text
                style={{
                  ...FONTS.arial_rounded_bold,
                  fontSize: moderateScale(13),
                  color: 'white',
                }}>
                {index + 1 + 'x'}
              </Text>
            );
          })}
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: verticalScale(88),
            alignItems: 'center',
          }}>
          <View>
            <View
              style={{
                backgroundColor: 'rgba(221, 131, 243, 1)',
                height: moderateScale(39),
                width: moderateScale(38),
                borderRadius: moderateScale(8),
              }}></View>
            <Text
              style={{
                ...FONTS.arial_rounded_bold,
                fontSize: 12,
                color: 'rgba(255, 255, 255, 1)',
                marginTop: 3,
              }}>
              Filters
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              modalShowRef.current?.show();
            }}
            style={{
              height: moderateScale(83),
              width: moderateScale(83),
              borderWidth: moderateScale(6),
              borderColor: 'rgba(229, 56, 78, 0.6)',
              borderRadius: moderateScale(199),
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                height: moderateScale(66),
                width: moderateScale(66),
                backgroundColor: 'rgba(229, 56, 78, 1)',
                borderRadius: moderateScale(100),
              }}></View>
          </TouchableOpacity>
          <View>
            <TouchableOpacity
              onPress={() => {
                galleryModalRef?.current?.show();
              }}
              style={{
                backgroundColor: 'white',
                height: moderateScale(39),
                width: moderateScale(38),
                borderRadius: moderateScale(8),
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image source={require('../../assets/images/plus.png')} />
            </TouchableOpacity>
            <Text
              style={{
                ...FONTS.arial_rounded_bold,
                fontSize: 12,
                color: 'rgba(255, 255, 255, 1)',
                marginTop: 3,
              }}>
              Gallery
            </Text>
          </View>
        </View>
      </View>*/}
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
    bottom: 2,
  },
  recordingBtn: {
    height: moderateScale(83),
    width: moderateScale(83),
    borderWidth: moderateScale(6),
    borderColor: 'rgba(229, 56, 78, 0.6)',
    borderRadius: moderateScale(199),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // recordingBtn: {
  //   borderWidth: 6,
  //   borderColor: "rgba(229, 56, 78, 0.6)",
  //   borderRadius: 100,
  //   height: 68,
  //   width: 68,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  recordingBtnV01: {
    height: moderateScale(66),
    width: moderateScale(66),
    backgroundColor: 'rgba(229, 56, 78, 1)',
    borderRadius: moderateScale(100),
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  galleryBtn: {
    backgroundColor: 'white',
    height: moderateScale(39),
    width: moderateScale(38),
    borderRadius: moderateScale(8),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  galleryBtnTxt: {
    ...FONTS.arial_rounded_bold,
    fontSize: 12,
    color: 'rgba(255, 255, 255, 1)',
    marginTop: 3,
  },
  txt01: {
    position: 'absolute',
    top: 30,
    alignSelf: 'center',
    color: '#fff'
  },
  zoomContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  zoomV01: (is) => ({
    paddingHorizontal: 10,
    backgroundColor: is ? '#ffffff' : 'transparent',
    marginHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 2
  }),
  zoomTxt01: (is) => ({
    color: is ? '#000' : '#fff',
    fontSize: 12,
  }),
  timerContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  timerV01: (is) => ({
    paddingHorizontal: 10,
    backgroundColor: is ? 'rgba(0,0,0,0.5)' : 'transparent',
    marginHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 20
  }),
  timerTxt01: (is) => ({
    color: '#fff',
    fontSize: 12,
  }),
  containerRight: {
    width: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 6,
    top: 50
  },
  containerLeft: {
    width: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 6,
    top: 50
  },
  conRightV01: {
    height: 20,
    width: 20,
    borderRadius: 100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  conRightTxt01: {
    fontSize: 10,
    color: '#fff'
  },
  conLeftTxt01: {
    fontSize: 18,
    color: '#fff'
  },
  // container: {
  //   height: height,
  //   width: width,
  // },
  // bgImageWrapper: {
  //   height: height,
  //   width: width,
  //   position: 'absolute',
  // },
  // topParrent: {
  //   position: 'absolute',
  //   width: width,
  //   top: verticalScale(47),
  //   paddingHorizontal: horizontalScale(16),
  //   display: 'flex',
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   alignItems: 'flex-start',
  // },
  boToomParent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    // position: 'absolute',
    width: width,
    marginBottom: verticalScale(30),
    // paddingHorizontal: horizontalScale(30),
  },
  filterBtn: {
    backgroundColor: 'rgba(221, 131, 243, 1)',
    height: moderateScale(39),
    width: moderateScale(38),
    borderRadius: moderateScale(8),
    alignItems:'center',
    justifyContent:'center'
  },
  filterBtnTxt: {
    ...FONTS.arial_rounded_bold,
    fontSize: 12,
    color: 'rgba(255, 255, 255, 1)',
    marginTop: 3,
  },
  // textstyle: {
  //   ...FONTS.arial_rounded_bold,
  //   fontSize: 9,
  //   color: 'rgba(255, 255, 255, 1)',
  //   marginTop: 4,
  // },
});

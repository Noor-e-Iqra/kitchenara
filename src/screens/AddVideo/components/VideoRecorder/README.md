# Video Cam Recorder App
Video Cam Recorder App is a mobile application built using React Native that allows users to record videos using their phone's camera. The app provides the ability to flip the camera, turn on/off the flash, zoom in/out, and view the elapsed time during recording.

# Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Installing
Need to Install `react-native-vision-camera`
```bash
npm install react-native-vision-camera --save
# for ios also need to install 
cd ios && pod install
```

if there is any issue in project running related to kotlin versioning in android then goto `\node_modules\react-native-vision-camera\android\gradle.properties` and change `VisionCamera_kotlinVersion=1.5.30` into `VisionCamera_kotlinVersion=1.6.20`

## How to Use
you just neet to import VideoRecorder Component

```js
import React, { Component } from "react";
import VideoCamRecorder from "./path/VideoCamRecorder";

class App extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      "loader":true
    }
  }

  async UNSAFE_componentWillMount(){
  }

  render(){
    return (
      <VideoCamRecorder
            onRecordingFinished={(e) => {
                // return video temp path and duration etc
                Alert.alert("Video Object:",JSON.stringify(e))
            }} />
    );
  }
}


export default App
```

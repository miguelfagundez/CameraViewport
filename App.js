import { transform } from '@babel/core';
import React, { useRef } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Button,
  StyleSheet,
} from 'react-native';
import { RNCamera } from 'react-native-camera';

const CameraView = () => {
  const cameraRef = useRef(null);
  const takePicture = async () => {
    if (cameraRef) {
      const options = { quality: 0.5, base64: true };
      const data = await cameraRef.takePictureAsync(options);
      console.log(data.uri);
    }
  };

  return (
    <SafeAreaView style={styles.safeWrapper}>
      <View style={styles.container}>
        <RNCamera
          ref={cameraRef}
          style={styles.camera}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
        />
        {
          /*
          
          <View style={styles.snapWrapper}>
          <View style={styles.topHorizontal}>
          </View>
          <View style={styles.bottomHorizontal}>
          </View>
          <View style={styles.topVertical}>
          </View>
          <View style={styles.bottomVertical}>
          </View>

          <View style={styles.square} />
          <TouchableOpacity onPress={takePicture} style={styles.capture}>
              <Text style={styles.snapText}>SNAP</Text>
          </TouchableOpacity>
          <View style={styles.square} />
        </View>
          */
        }

        <View style={styles.topFrame}> 
          <View style={styles.topNormal} />
          <View style={styles.topRotate} />
        </View>
        <View style={styles.bottomFrame}> 
          <View style={styles.bottomNormal} />
          <View style={styles.bottomRotate} />
        </View>

      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeWrapper: {
    flex: 1,
  },
  container: {
    flex: 2,
    flexDirection: 'column',
    backgroundColor: 'black',
    position: 'relative',
  },
  camera: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
  snapWrapper: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    position: 'absolute',

  },
  snapText: {
    fontSize: 14,
    color: 'red',
  },
  topFrame:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '10%', 
    backgroundColor: 'rgba(0, 0, 0, 0)',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  topNormal: {
    width: 80,
    height: 120,
    borderRadius: 5,
    marginTop: '15%',
    borderTopColor: "white",
    borderLeftColor: "white",
    borderRightColor: 'rgba(0, 0, 0, 0)',
    borderBottomColor: 'rgba(0, 0, 0, 0)',
    borderWidth: 8,
  },
  topRotate: {
    width: 80,
    height: 80,
    marginTop: '15%', 
    borderRadius: 5,
    transform:[{rotate: '90deg'}],
    borderTopColor: "white",
    borderLeftColor: "white",
    borderRightColor: 'rgba(0, 0, 0, 0)',
    borderBottomColor: 'rgba(0, 0, 0, 0)',
    borderWidth: 8,
  },
  bottomFrame:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '10%',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  bottomNormal: {
    width: 80,
    height: 80,
    borderRadius: 5,
    marginBottom: '15%',
    transform:[{rotate: '-90deg'}],
    alignSelf: 'flex-end',
    borderTopColor: "red",
    borderLeftColor: "red",
    borderRightColor: 'rgba(0, 0, 0, 0)',
    borderBottomColor: 'rgba(0, 0, 0, 0)',
    borderWidth: 8,
  },
  bottomRotate: {
    width: 80,
    height: 120,
    borderRadius: 5,
    marginBottom: '15%',
    transform:[{rotate: '180deg'}],
    borderTopColor: "red",
    borderLeftColor: "red",
    borderRightColor: 'rgba(0, 0, 0, 0)',
    borderBottomColor: 'rgba(0, 0, 0, 0)',
    borderWidth: 8,
  },
});

export default CameraView;
import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import Home from "./components/Home";
import { Audio } from "expo-av";
import React, { useEffect, useState } from "react";
import * as FileSystem from "expo-file-system";
import records from "./assets/mic-icon.png";
import records2 from "./assets/mic-icon-2.png";
import play from "./assets/play-icon.png";
import pause from "./assets/pause-icon.png";
import logo from "./assets/logo.png";

export default function App() {
  // console.log(FileSystem.cacheDirectory);
  // console.log(Date.now());
  const [recording, setRecording] = useState();
  const [isRecording, setIsRecording] = useState(false);
  const [recordings, setRecordings] = useState([]);
  const [playing, setPlaying] = useState(false);
  const [sound, setSound] = useState();
  const [update, setUpdate] = useState("");
  const [uri, setUri] = useState("");

  const recordingsDir = FileSystem.documentDirectory + "audio-recordings/";

  // useEffect(() => {
  //   //Check if the Document Directory was created
  //   const makeDir = async () => {
  //     const dir = await FileSystem.getInfoAsync(recordingsDir);
  //     if (!dir.exists) {
  //       console.log("Recordings Folder directory doesn't exist, creating....");
  //       await FileSystem.makeDirectoryAsync(recordingsDir, {
  //         intermediates: true,
  //       });
  //     }
  //     const dirInfo = await FileSystem.readDirectoryAsync(recordingsDir);
  //     console.log("URI of Recording Folder.: ", recordingsDir);
  //     console.log(dir);
  //     console.log("Contents of Recording Folder:");
  //     console.log(dirInfo);
  //   };

  //   makeDir();
  // }, [update]);

  // console.log(uri);

  //Start Recording & Stop Recording
  async function startRecording() {
    try {
      const perm = await Audio.requestPermissionsAsync();
      console.log("Requesting permissions..");
      if (perm.status === "granted") {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true,
        });
        console.log("Starting recording..");
        const { recording } = await Audio.Recording.createAsync(
          Audio.RECORDING_OPTIONS_PRESENT_HIGH_QUALITY
        );
        setRecording(recording);
      }
      console.log("Recording started");
    } catch (err) {
      console.error("Failed to start recording", err);
    }
  }

  async function stopRecording() {
    console.log("Stopping recording..");
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    let allRecordings = [...recordings];
    const { sound, status } = await recording.createNewLoadedSoundAsync();
    allRecordings.push({
      sound: sound,
      duration: getDurationFormatted(status.durationMillis),
      file: recording.getURI(),
    });
    console.log("Recording stopped and stored at:", uri);
    setRecordings(allRecordings);
  }

  function getDurationFormatted(milliseconds) {
    const minutes = milliseconds / 1000 / 60;
    const seconds = Math.round((minutes - Math.floor(minutes)) * 60);
    return seconds < 10
      ? `${Math.floor(minutes)}:0${seconds}`
      : `${Math.floor(minutes)}:${seconds}`;
  }
  function getRecordingLines() {
    return recordings.map((recordingLine, index) => {
      return (
        <View key={index} style={styles.item}>
          {/* <View key={index} style={styles.row}> */}
          {/* <Text style={styles.fill}> */}
          <Text style={styles.recordName}>
            Recording #{index + 1} | {recordingLine.duration}
          </Text>
          {/* <Button
            onPress={() => recordingLine.sound.replayAsync()}
            title="Play"
          /> */}
          {/* <Button
            onPress={() => recordingLine.sound.replayAsync()}
            title="Play"
          /> */}
          <Pressable
            onPress={() => {
              setPlaying(!playing);
              playing === true
                ? recordingLine.sound.replayAsync()
                : recordingLine.sound.stopAsync();
            }}
          >
            <Image source={playing ? pause : play} style={styles.playIcon} />
          </Pressable>
        </View>
      );
    });
  }
  function clearRecordings() {
    setRecordings([]);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" translucent={false} backgroundColor="#e5e5e5" />
      <View style={styles.head}>
        <Image source={records} style={{ width: 50, height: 50 }} />
        <Image source={logo} />
        {/* <Text style={styles.logo}>Snip</Text> */}
      </View>
      <View style={styles.overContainer}>
        <View style={styles.recordList}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* <View style={styles.item}>
            <Text style={styles.recordName}>Recording name</Text>
            <Pressable>
              <Image source={playing ? pause : play} style={styles.playIcon} />
            </Pressable> */}
            {/* <Button
              title={recording.length > 0 ? "Clear Recordings" : ""}
              onPress={clearRecordings}
            /> */}
            {/* </View> */}
            {getRecordingLines()}
          </ScrollView>
        </View>
        <View style={[styles.recordBtn, styles.Btn]}>
          <Pressable
            style={[
              styles.recordBtn,
              { backgroundColor: recording ? "#EB5E55" : "#9A8F97" },
            ]}
            onPress={recording ? stopRecording : startRecording}
          >
            <Text style={styles.recordBtnText}>
              {recording ? "STOP" : "RECORD"}
            </Text>
          </Pressable>
        </View>
        {/* </View> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e5e5e5",
    // backgroundColor: "#BCD0C7",
    // alignItems: "center",
    justifyContent: "flex-end",
  },
  head: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  logo: {
    fontSize: 30,
    fontWeight: "800",
    // fontStyle:"italic",
    color: "maroon",
    color: "white",
  },
  overContainer: {
    flex: 3,
    // height: "85%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "#ffffff",
    // backgroundColor: "#B2B2B2",
    alignItems: "center",
  },
  recordList: {
    width: "100%",
    borderWidth: 4,
    borderRadius: 20,
    // height: "80%",
    flex: 8,
    marginBottom: 10,
    borderColor: "#BCD0C7",
    // borderColor: "#E9E3E6",
    padding: 10,
    flexDirection: "column",
  },
  item: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#BCD0C7",
    flexDirection: "row",
    alignItems: "center",
  },
  recordName: {
    width: "90%",
    fontSize: 15,
    fontWeight: "500",
  },
  playIcon: {
    width: 30,
    height: 30,
    alignSelf: "flex-end",
  },
  Btn: {
    padding: 10,
    backgroundColor: "#E9E3E6",
    borderRadius: 100,
    width: 100,
    height: 100,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    // flex:1,
  },
  recordBtn: {
    height: 90,
    width: 90,
    borderRadius: 100,
    padding: 10,
    // backgroundColor: ,
    // backgroundColor: "#EB5E55",
    justifyContent: "center",
    alignItems: "center",
  },
  recordBtnText: {
    fontWeight: "bold",
    color: "white",
    fontSize: 16,
  },
});

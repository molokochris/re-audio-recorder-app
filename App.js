import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
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
  const [playing, setPlaying] = useState(false);
  const [sound, setSound] = useState();
  const [update, setUpdate] = useState("");
  const [uri, setUri] = useState("");

  const recordingsDir = FileSystem.documentDirectory + "audio-recordings/";

  useEffect(() => {
    //Check if the Document Directory was created
    const makeDir = async () => {
      const dir = await FileSystem.getInfoAsync(recordingsDir);
      if (!dir.exists) {
        console.log("Recordings Folder directory doesn't exist, creating....");
        await FileSystem.makeDirectoryAsync(recordingsDir, {
          intermediates: true,
        });
      }
      const dirInfo = await FileSystem.readDirectoryAsync(recordingsDir);
      console.log("URI of Recording Folder.: ", recordingsDir);
      console.log(dir);
      console.log("Contents of Recording Folder:");
      console.log(dirInfo);
    };

    makeDir();
  }, [update]);

  console.log(uri);
  //Start Recording & Stop Recording
  async function startRecording() {
    try {
      console.log("Requesting permissions..");
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      console.log("Starting recording..");
      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY
      );
      setRecording(recording);
      console.log("Recording started");
    } catch (err) {
      console.error("Failed to start recording", err);
    }
  }

  async function stopRecording() {
    console.log("Stopping recording..");
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI();
    console.log("Recording stopped and stored at:", uri);
    // try {
    //   await FileSystem.moveAsync({
    //     from: uri,
    //     to: recordingsDir,
    //   });
    //   console.log("Audio was moved! ;)");
    // } catch (err) {
    //   console.log("this is why: ", err);
    // }
    setUri(uri);
    setUpdate(!update);
  }

  // Playing Recording & ...

  // async function playSound() {
  //   console.log("Loading Sound");
  //   const { sound } = await Audio.Sound.createAsync(require(uri));
  //   setSound(sound);

  //   console.log("Playing Sound");
  //   setPlaying(!playing);
  //   await sound.playAsync();
  // }

  // useEffect(() => {
  //   return sound
  //     ? () => {
  //         console.log("Unloading Sound");
  //         sound.unloadAsync();
  //       }
  //     : undefined;
  // }, [sound]);

  return (
    <View style={styles.container}>
      <StatusBar style="light" translucent={false} backgroundColor="#e5e5e5" />
      <View style={styles.head}>
        <Image source={records} style={{ width: 50, height: 50 }} />
        <Image source={logo} />
        {/* <Text style={styles.logo}>Snip</Text> */}
      </View>
      <View style={styles.overContainer}>
        {/* <FlatList> */}
        <View style={styles.recordList}>
          <View style={styles.item}>
            <Text style={styles.recordName}>Recording name</Text>
            <Pressable>
              <Image source={playing ? pause : play} style={styles.playIcon} />
            </Pressable>
          </View>
          <View style={styles.item}>
            <Text style={styles.recordName}>Recording name</Text>
            <Pressable onPress={() => setPlaying(!playing)}>
              <Image source={playing ? pause : play} style={styles.playIcon} />
            </Pressable>
          </View>
          <View style={styles.item}>
            <Text style={styles.recordName}>Recording name</Text>
            <Pressable onPress={() => setPlaying(!playing)}>
              <Image source={playing ? pause : play} style={styles.playIcon} />
            </Pressable>
          </View>
          <View style={styles.item}>
            <Text style={styles.recordName}>Recording name</Text>
            <Pressable onPress={() => setPlaying(!playing)}>
              <Image source={playing ? pause : play} style={styles.playIcon} />
            </Pressable>
          </View>
        </View>
        {/* </FlatList> */}
        {/* <View> */}
        <View style={[styles.recordBtn, styles.Btn]}>
          <Pressable
            style={[
              styles.recordBtn,
              { backgroundColor: recording ? "#EB5E55" : "#9A8F97" },
            ]}
            onPress={recording ? stopRecording : startRecording}
            // onPress={() => setRecording(!recording)}
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

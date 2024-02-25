import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Clock from "./src/Clock";
import * as ScreenOrientation from "expo-screen-orientation";

const App = () => {
  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
  }, []);

  const getCurrentTime = () => {
    const { getHours, getMinutes, getSeconds } = new Date();
    const hours = getHours();
    const minutes = getMinutes();
    const seconds = getSeconds();

    const currentTime = `${hours < 10 ? "0" : ""}${hours}:${
      minutes < 10 ? "0" : ""
    }${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

    return currentTime;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Clock updateClock={getCurrentTime} timeToUpdateClock={1000} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black"
  }
});

export default App;

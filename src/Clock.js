import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native-web";

const Clock = ({ updateClock, timeToUpdateClock }) => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(updateClock());
    }, timeToUpdateClock);

    return () => clearInterval(interval);
  }, []);

  return (
    <View>
      <Text style={styles.text}>{time}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "red",
    fontSize: 180
  }
});
export default Clock;

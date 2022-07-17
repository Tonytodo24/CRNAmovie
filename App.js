import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import styled from "styled-components/native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>123123 Open up App.js to start working on your app!</Text>
      <StatusBar style="dark" />
      <Button title="123" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

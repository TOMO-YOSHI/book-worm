import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{}} />
      <View
        style={{
          height: 100,
          borderBottomWidth: 0.5,
          borderBottomColor: "#e9e9e9",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 24 }}>Book Worm</Text>
      </View>
      <View style={{ flex: 1 }}></View>
      <View
        style={{
          height: 70,
          borderTopWidth: 0.5,
          borderTopColor: "#e9e9e9",
          flexDirection: "row",
        }}
      >
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text style={{ fontSize: 20 }}>Total</Text>
          <Text>0</Text>
        </View>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text style={{ fontSize: 20 }}>Reading</Text>
          <Text>0</Text>
        </View>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text style={{ fontSize: 20 }}>Read</Text>
          <Text>0</Text>
        </View>
      </View>
      <SafeAreaView style={{}} />
    </View>
    // <View
    //   style={{
    //     flex: 1,
    //     flexDirection: "column",
    //     borderWidth: 5,
    //     borderColor: "red",
    //     // alignItems: "flex-start",
    //     // justifyContent: "flex-end",
    //   }}
    // >
    //   <View style={[{ flex: 2, backgroundColor: "blue" }]} />
    //   <View style={[{ flex: 2, backgroundColor: "orange" }]} />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  box: { height: 50, width: 50, backgroundColor: "red" },
});

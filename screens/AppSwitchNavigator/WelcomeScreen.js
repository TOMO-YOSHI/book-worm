import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import colors from "../../assets/colors";
import CustomActionButton from "../../components/CustomActionButton";

class WelcomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.upperHalfOfScreen}>
          <Ionicons name="ios-book" size={150} color={colors.logoColor} />
          <Text style={styles.welcomeTitle}>Book Worm</Text>
        </View>
        <View style={styles.bottomHalfOfScreen}>
          <CustomActionButton
            style={styles.loginButton}
            title="Log in"
            onPress={() => this.props.navigation.navigate("HomeScreen")}
          >
            <Text style={styles.buttonText}>Log in</Text>
          </CustomActionButton>
          <CustomActionButton
            style={styles.signupButton}
            title="Sign up"
            onPress={() => this.props.navigation.navigate("SignUpScreen")}
          >
            <Text style={styles.buttonText}>Sign up</Text>
          </CustomActionButton>
        </View>
      </View>
    );
  }
}
export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgMain,
  },
  upperHalfOfScreen: {
    flex: 1,
    // borderColor: "black",
    // borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomHalfOfScreen: {
    flex: 1,
    // borderColor: "orange",
    // borderWidth: 1,
    alignItems: "center",
  },
  welcomeTitle: {
    fontSize: 50,
    fontWeight: "100",
    color: colors.textWhite,
  },
  loginButton: {
    width: 200,
    backgroundColor: "transparent",
    borderWidth: 0.5,
    borderColor: colors.bgPrimary,
    marginBottom: 10,
  },
  signupButton: {
    width: 200,
    backgroundColor: "transparent",
    borderWidth: 0.5,
    borderColor: colors.bgError,
  },
  buttonText: {
    fontWeight: "100",
    color: colors.textWhite,
  },
});

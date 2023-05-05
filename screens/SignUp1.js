import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const SignUp1 = () => {
  return (
    <View style={styles.signUp}>
      <Image
        style={styles.illustration3Icon}
        resizeMode="cover"
        source={require("../assets/illustration-3.png")}
      />
      <Text style={styles.purely}>Purely</Text>
      <Text style={[styles.welcome, styles.welcomeTypo]}>WELCOME</Text>
      <Text style={[styles.registerSuccessfully, styles.welcomeTypo]}>
        Register successfully!
      </Text>
      <View style={[styles.rectangleParent, styles.textFieldPosition]}>
        <View style={styles.instanceChild} />
        <Text style={[styles.textField, styles.textFieldPosition]}>
          Back to Home
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeTypo: {
    fontFamily: FontFamily.heading1,
    fontWeight: "700",
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  textFieldPosition: {
    left: "50%",
    position: "absolute",
  },
  illustration3Icon: {
    top: 63,
    left: 0,
    width: 555,
    height: 555,
    position: "absolute",
    overflow: "hidden",
  },
  purely: {
    marginLeft: -41.5,
    top: "81.53%",
    fontWeight: "500",
    fontFamily: FontFamily.heading4,
    textAlign: "left",
    color: Color.sub2,
    fontSize: FontSize.heading1_size,
    left: "50%",
    position: "absolute",
  },
  welcome: {
    marginLeft: -72.5,
    top: 618,
    color: Color.sub2,
    fontSize: FontSize.heading1_size,
    fontFamily: FontFamily.heading1,
    fontWeight: "700",
  },
  registerSuccessfully: {
    marginLeft: -129.5,
    top: 561,
    fontSize: FontSize.heading2_size,
    color: Color.skyblue_200,
  },
  instanceChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.skyblue_200,
    position: "absolute",
    width: "100%",
  },
  textField: {
    marginTop: -13,
    marginLeft: -74.5,
    top: "50%",
    fontSize: FontSize.heading3_size,
    fontWeight: "600",
    fontFamily: FontFamily.heading3,
    color: Color.white,
    textAlign: "center",
  },
  rectangleParent: {
    marginLeft: -171.5,
    top: 714,
    width: 343,
    height: 48,
  },
  signUp: {
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default SignUp1;

import * as React from "react";
import { Text, StyleSheet, View, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const SignUp = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signUp}>
      <Text style={[styles.communicationHealthcare, styles.textFieldTypo]}>
        Communication Healthcare
      </Text>
      <Text style={[styles.welcome, styles.welcomePosition]}>WELCOME</Text>
      <View style={[styles.component43, styles.component43Position]}>
        <Text style={styles.purely}>PURELY</Text>
      </View>
      <Pressable
        style={[styles.rectangleParent, styles.welcomePosition]}
        onPress={() => navigation.navigate("Home")}
      >
        <View style={styles.instanceChild} />
        <Text style={[styles.textField, styles.textFieldTypo]}>
          Back to Home
        </Text>
      </Pressable>
      <Image
        style={[styles.component1Icon, styles.component43Position]}
        resizeMode="cover"
        source={require("../assets/component-1.png")}
      />
      <Image
        style={styles.component2Icon}
        resizeMode="cover"
        source={require("../assets/component-2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textFieldTypo: {
    textAlign: "center",
    fontFamily: FontFamily.heading3,
    fontWeight: "600",
    fontSize: FontSize.heading3_size,
    left: "50%",
    position: "absolute",
  },
  welcomePosition: {
    left: "50%",
    position: "absolute",
  },
  component43Position: {
    left: 0,
    position: "absolute",
  },
  communicationHealthcare: {
    marginLeft: -144.5,
    top: "51.6%",
    color: Color.sub2,
  },
  welcome: {
    marginLeft: -77.5,
    top: 380,
    fontSize: FontSize.heading1_size,
    fontWeight: "700",
    fontFamily: FontFamily.heading1,
    textAlign: "left",
    color: Color.sub2,
  },
  purely: {
    fontSize: 84,
    fontFamily: FontFamily.balooRegular,
    color: Color.skyblue_200,
    textAlign: "left",
  },
  component43: {
    marginTop: -226,
    width: 375,
    height: 135,
    flexDirection: "row",
    padding: 42,
    top: "50%",
    backgroundColor: Color.white,
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
    color: Color.white,
    top: "50%",
  },
  rectangleParent: {
    marginLeft: -171.5,
    top: 480,
    width: 343,
    height: 48,
  },
  component1Icon: {
    top: 575,
    width: 261,
    height: 237,
  },
  component2Icon: {
    top: 612,
    left: 188,
    width: 187,
    height: 200,
    position: "absolute",
  },
  signUp: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default SignUp;

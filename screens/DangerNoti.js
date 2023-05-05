import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const DangerNoti = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.dangerNoti}>
      <Image
        style={[
          styles.materialSymbolswarningOutliIcon,
          styles.frameParentPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/materialsymbolswarningoutlinerounded.png")}
      />
      <Text style={styles.sarahKimsHeartContainer}>
        <Text style={styles.sarahKimsHeartContainer1}>
          <Text
            style={styles.sarahKimsHeart}
          >{`Sarah Kim’s heart rate index is too high!

`}</Text>
          <Text style={styles.theLatestIndex}>
            The latest index is 130 bpm!
          </Text>
        </Text>
      </Text>
      <View style={[styles.frameParent, styles.frameParentPosition]}>
        <View style={styles.groupParent}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/group-8462.png")}
          />
          <Text style={[styles.callElderly, styles.qunLMTypo]}>{`Call 
Elderly`}</Text>
        </View>
        <View style={styles.groupParent}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/group-8462.png")}
          />
          <Text style={[styles.callElderly, styles.qunLMTypo]}>
            Call Sitter
          </Text>
        </View>
        <View style={styles.groupParent}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/group-8460.png")}
          />
          <Text style={[styles.callElderly, styles.qunLMTypo]}>
            Measure again
          </Text>
        </View>
      </View>
      <View style={styles.component38}>
        <View style={[styles.rectangleParent, styles.backgroundIconPosition]}>
          <View style={[styles.groupChild, styles.childBg]} />
          <View style={[styles.statusBarwhitebase, styles.groupChildPosition]}>
            <Image
              style={[styles.backgroundIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/background1.png")}
            />
            <View style={[styles.charge, styles.gsPosition]}>
              <Image
                style={[styles.batteryIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/battery-icon1.png")}
              />
              <Text style={[styles.text, styles.textFlexBox]}>58 %</Text>
            </View>
            <Image
              style={styles.bluetoothIcon}
              resizeMode="cover"
              source={require("../assets/bluetooth-icon1.png")}
            />
            <Text style={[styles.text1, styles.textFlexBox]}>9:41 AM</Text>
            <Image
              style={styles.wifiIcon}
              resizeMode="cover"
              source={require("../assets/wifi1.png")}
            />
            <Text style={[styles.gs, styles.textFlexBox]}>GS</Text>
            <Image
              style={[styles.signalIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/signal1.png")}
            />
          </View>
          <View style={[styles.rectangleGroup, styles.instanceChildPosition]}>
            <View
              style={[styles.instanceChild, styles.instanceChildPosition]}
            />
            <Image
              style={styles.chevronLeftIcon}
              resizeMode="cover"
              source={require("../assets/chevronleft1.png")}
            />
            <Text style={[styles.qunLM, styles.qunLMTypo]}>Sign up</Text>
          </View>
        </View>
        <Pressable
          style={styles.wrapper}
          onPress={() => navigation.navigate("Setting")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-15952.png")}
          />
        </Pressable>
        <Text style={[styles.communityHealthcare, styles.welcomePosition]}>
          Purely
        </Text>
        <Text style={[styles.welcome, styles.welcomePosition]}>Welcome</Text>
        <Pressable
          style={styles.chat5}
          onPress={() => navigation.navigate("ChatHome")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/chat-5.png")}
          />
        </Pressable>
      </View>
      <Pressable style={styles.component32} onPress={() => navigation.goBack()}>
        <View
          style={[styles.component32Child, styles.backgroundIconPosition]}
        />
        <Text style={[styles.textField, styles.textFieldTypo]}>Skip</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  frameParentPosition: {
    left: "50%",
    position: "absolute",
  },
  qunLMTypo: {
    fontFamily: FontFamily.heading3,
    fontWeight: "600",
    textAlign: "center",
  },
  backgroundIconPosition: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  childBg: {
    backgroundColor: Color.skyblue_100,
    top: "0%",
  },
  groupChildPosition: {
    right: "0%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  gsPosition: {
    top: "15%",
    height: "70%",
  },
  textFlexBox: {
    alignItems: "flex-end",
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.size_xs,
    display: "flex",
    position: "absolute",
  },
  instanceChildPosition: {
    borderBottomLeftRadius: Border.br_5xs,
    borderBottomRightRadius: Border.br_5xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  welcomePosition: {
    color: Color.white,
    left: "21.87%",
    textAlign: "left",
    position: "absolute",
  },
  textFieldTypo: {
    fontSize: FontSize.heading3_size,
    fontFamily: FontFamily.heading3,
    fontWeight: "600",
  },
  materialSymbolswarningOutliIcon: {
    marginLeft: -27.5,
    top: 293,
    width: 56,
    height: 56,
    overflow: "hidden",
  },
  sarahKimsHeart: {
    fontWeight: "700",
    fontFamily: FontFamily.heading1,
    color: Color.red,
  },
  theLatestIndex: {
    fontFamily: FontFamily.heading4,
    color: Color.dimgray,
    fontWeight: "500",
  },
  sarahKimsHeartContainer1: {
    lineBreak: "anywhere",
    width: "100%",
  },
  sarahKimsHeartContainer: {
    top: 373,
    left: 38,
    fontSize: FontSize.heading1_size,
    width: 300,
    height: 175,
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    position: "absolute",
  },
  frameChild: {
    width: 45,
    height: 45,
  },
  callElderly: {
    fontSize: FontSize.notice_size,
    width: 110,
    marginTop: 10,
    color: Color.dimgray,
  },
  groupParent: {
    alignItems: "center",
  },
  frameParent: {
    marginLeft: -163.5,
    top: 642,
    width: 327,
    flexDirection: "row",
    justifyContent: "center",
  },
  groupChild: {
    height: "76%",
    bottom: "24%",
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  backgroundIcon: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  batteryIcon: {
    height: "67.86%",
    width: "44.14%",
    top: "17.86%",
    bottom: "14.29%",
    left: "55.86%",
    right: "0%",
    position: "absolute",
  },
  text: {
    width: "50.45%",
    fontFamily: FontFamily.sFUITextRegular,
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.size_xs,
    left: "0%",
    top: "0%",
    height: "100%",
  },
  charge: {
    width: "14.8%",
    right: "1.47%",
    bottom: "15%",
    left: "83.73%",
    position: "absolute",
  },
  bluetoothIcon: {
    width: 8,
    height: 13,
    opacity: 0.45,
  },
  text1: {
    width: "12.8%",
    left: "43.73%",
    fontFamily: FontFamily.sFUITextMedium,
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.size_xs,
    top: "15%",
    height: "70%",
    fontWeight: "500",
  },
  wifiIcon: {
    width: 12,
    height: 9,
  },
  gs: {
    width: "4.53%",
    left: "11.73%",
    fontFamily: FontFamily.sFUITextRegular,
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.size_xs,
    top: "15%",
    height: "70%",
  },
  signalIcon: {
    height: "27.5%",
    width: "8.93%",
    top: "37.5%",
    right: "89.33%",
    bottom: "35%",
    left: "1.73%",
    position: "absolute",
  },
  statusBarwhitebase: {
    height: "20%",
    bottom: "80%",
    left: "0%",
    top: "0%",
    width: "100%",
  },
  instanceChild: {
    backgroundColor: Color.skyblue_100,
    top: "0%",
    height: "100%",
  },
  chevronLeftIcon: {
    top: 20,
    left: 16,
    width: 16,
    height: 16,
    position: "absolute",
    overflow: "hidden",
  },
  qunLM: {
    top: 11,
    left: 154,
    lineHeight: 34,
    color: Color.oldlace,
    display: "none",
    fontSize: FontSize.heading4_size,
    position: "absolute",
  },
  rectangleGroup: {
    top: "20%",
    height: "80%",
  },
  rectangleParent: {
    left: "0%",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: "2.4%",
    top: "23%",
    right: "76.27%",
    bottom: "-3%",
    width: "21.33%",
    height: "80%",
    position: "absolute",
  },
  communityHealthcare: {
    top: "55%",
    fontSize: FontSize.heading3_size,
    fontFamily: FontFamily.heading3,
    fontWeight: "600",
  },
  welcome: {
    top: "39%",
    lineHeight: 27,
    fontFamily: FontFamily.text1,
    fontSize: FontSize.heading4_size,
  },
  chat5: {
    left: "89.33%",
    top: "47%",
    right: "4.27%",
    bottom: "29%",
    width: "6.4%",
    height: "24%",
    position: "absolute",
  },
  component38: {
    top: 0,
    left: 0,
    width: 375,
    height: 100,
    position: "absolute",
  },
  component32Child: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: "#49c6e5",
    borderWidth: 1,
    left: "0%",
  },
  textField: {
    marginTop: -13,
    marginLeft: -23.5,
    top: "50%",
    color: Color.skyblue_200,
    textAlign: "center",
    fontSize: FontSize.heading3_size,
    left: "50%",
    position: "absolute",
  },
  component32: {
    top: 744,
    left: 24,
    width: 343,
    height: 48,
    position: "absolute",
  },
  dangerNoti: {
    backgroundColor: Color.whitesmoke,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default DangerNoti;

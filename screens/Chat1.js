import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const Chat1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.chat}>
      <View style={[styles.chatChild, styles.chatChildPosition]} />
      <Pressable
        style={[styles.button2, styles.button2Position]}
        onPress={() => navigation.navigate("User3Profile")}
      >
        <View style={[styles.button2Child, styles.childPosition]} />
        <Text style={[styles.textField, styles.button2Position]}>
          Accept or Reject
        </Text>
      </Pressable>
      <View style={[styles.microphone1Parent, styles.button2Position]}>
        <Image
          style={[styles.microphone1Icon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/microphone-11.png")}
        />
        <Image
          style={[styles.attachFile1Icon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/attachfile-11.png")}
        />
        <Image
          style={[styles.attachFile1Icon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/smile-11.png")}
        />
        <View style={[styles.typeHereParent, styles.frameChildBorder]}>
          <Text style={[styles.typeHere, styles.typeHereFlexBox]}>
            Type here
          </Text>
          <Image
            style={[styles.paperPlaneIcon, styles.chevronLeftLayout]}
            resizeMode="cover"
            source={require("../assets/paperplane.png")}
          />
        </View>
      </View>
      <Image
        style={[styles.menuDots1Icon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/menudots-1.png")}
      />
      <View style={[styles.component38, styles.chatChildPosition]}>
        <View style={[styles.component38Child, styles.childPosition]} />
        <View style={styles.statusBarwhitebase}>
          <Image
            style={[styles.backgroundIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/background.png")}
          />
          <View style={[styles.charge, styles.gsPosition]}>
            <Image
              style={[styles.batteryIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/battery-icon.png")}
            />
            <Text style={[styles.text, styles.textFlexBox]}>58 %</Text>
          </View>
          <Image
            style={styles.bluetoothIcon}
            resizeMode="cover"
            source={require("../assets/bluetooth-icon.png")}
          />
          <Text style={[styles.text1, styles.text1Typo]}>9:41 AM</Text>
          <Image
            style={styles.wifiIcon}
            resizeMode="cover"
            source={require("../assets/wifi.png")}
          />
          <Text style={[styles.gs, styles.textFlexBox]}>GS</Text>
          <Image
            style={[styles.signalIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/signal.png")}
          />
        </View>
        <View style={[styles.rectangleParent, styles.childPosition]}>
          <View style={[styles.frameChild, styles.frameChildBorder]} />
          <Pressable
            style={[styles.chevronLeft, styles.chevronLeftLayout]}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/chevronleft.png")}
            />
          </Pressable>
          <View style={styles.angleRight2Parent}>
            <Pressable
              style={styles.chevronLeftLayout}
              onPress={() => navigation.navigate("User3Profile")}
            >
              <Image
                style={styles.icon1}
                resizeMode="cover"
                source={require("../assets/angleright-2.png")}
              />
            </Pressable>
            <Pressable
              style={[styles.wrapper, styles.wrapperLayout]}
              onPress={() => navigation.navigate("Setting")}
            >
              <Image
                style={styles.icon2}
                resizeMode="cover"
                source={require("../assets/ellipse-1595.png")}
              />
            </Pressable>
            <Text style={[styles.signUp, styles.text1Typo]}>Kayden Blake</Text>
            <Pressable
              style={[styles.chat1, styles.iconLayout1]}
              onPress={() => navigation.navigate("ChatHome")}
            >
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../assets/chat-13.png")}
              />
            </Pressable>
          </View>
        </View>
      </View>
      <Image
        style={[styles.chatItem, styles.wrapperLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-1619.png")}
      />
      <Image
        style={styles.chatInner}
        resizeMode="cover"
        source={require("../assets/ellipse-1620.png")}
      />
      <View style={styles.hiCanYouTellMeMoreAboutWrapper}>
        <Text style={[styles.hiCanYou, styles.typeHereFlexBox]}>{`Hi,
Can you tell me more about your job’s requirement?`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chatChildPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  button2Position: {
    left: "50%",
    position: "absolute",
  },
  childPosition: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    width: "100%",
  },
  iconLayout1: {
    height: 24,
    width: 24,
  },
  frameChildBorder: {
    borderColor: "rgba(26, 26, 26, 0.4)",
    borderStyle: "solid",
  },
  typeHereFlexBox: {
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.text1,
    alignItems: "center",
  },
  chevronLeftLayout: {
    height: 16,
    width: 16,
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  gsPosition: {
    top: "15%",
    height: "70%",
  },
  textFlexBox: {
    alignItems: "flex-end",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  text1Typo: {
    fontWeight: "500",
    color: Color.sub2,
    display: "flex",
    textAlign: "left",
  },
  wrapperLayout: {
    height: 70,
    width: 70,
  },
  chatChild: {
    top: 677,
    height: 135,
    backgroundColor: Color.white,
  },
  button2Child: {
    backgroundColor: Color.skyblue_200,
    borderRadius: Border.br_5xs,
    left: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  textField: {
    marginTop: -13,
    marginLeft: -88.5,
    top: "50%",
    fontSize: FontSize.heading3_size,
    fontWeight: "600",
    fontFamily: FontFamily.heading3,
    color: Color.white,
    textAlign: "center",
  },
  button2: {
    bottom: 24,
    width: 343,
    height: 48,
    marginLeft: -171.5,
    left: "50%",
  },
  microphone1Icon: {
    overflow: "hidden",
  },
  attachFile1Icon: {
    marginLeft: 8,
    overflow: "hidden",
  },
  typeHere: {
    fontSize: FontSize.text4_size,
    color: Color.darkgray_100,
    width: 215,
  },
  paperPlaneIcon: {
    overflow: "hidden",
  },
  typeHereParent: {
    borderWidth: 1,
    padding: Padding.p_5xs,
    marginLeft: 8,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_5xs,
  },
  microphone1Parent: {
    bottom: 85,
    alignItems: "center",
    flexDirection: "row",
    marginLeft: -171.5,
    left: "50%",
  },
  menuDots1Icon: {
    top: 31,
    left: 331,
    position: "absolute",
    overflow: "hidden",
  },
  component38Child: {
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    left: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    backgroundColor: Color.white,
  },
  backgroundIcon: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
    top: "0%",
    height: "100%",
  },
  batteryIcon: {
    height: "67.86%",
    width: "44.14%",
    top: "17.86%",
    bottom: "14.29%",
    left: "55.86%",
    right: "0%",
  },
  text: {
    width: "50.45%",
    color: Color.sub2,
    fontFamily: FontFamily.sFUITextRegular,
    alignItems: "flex-end",
    fontSize: FontSize.size_xs,
    display: "flex",
    textAlign: "left",
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
    alignItems: "flex-end",
    fontSize: FontSize.size_xs,
    position: "absolute",
    fontWeight: "500",
    top: "15%",
    height: "70%",
  },
  wifiIcon: {
    width: 12,
    height: 9,
  },
  gs: {
    width: "4.53%",
    left: "11.73%",
    color: Color.sub2,
    fontFamily: FontFamily.sFUITextRegular,
    alignItems: "flex-end",
    fontSize: FontSize.size_xs,
    display: "flex",
    textAlign: "left",
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
  },
  statusBarwhitebase: {
    height: "26.32%",
    bottom: "73.68%",
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  frameChild: {
    borderBottomWidth: 1,
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
    top: "0%",
    height: "100%",
    position: "absolute",
    backgroundColor: Color.white,
  },
  icon: {
    display: "none",
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  chevronLeft: {
    left: 16,
    top: 20,
    position: "absolute",
  },
  icon1: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  icon2: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    marginLeft: 8,
  },
  signUp: {
    fontSize: FontSize.heading1_size,
    textTransform: "capitalize",
    fontFamily: FontFamily.heading4,
    width: 223,
    marginLeft: 8,
    alignItems: "center",
  },
  chat1: {
    marginLeft: 8,
  },
  angleRight2Parent: {
    top: 8,
    left: 24,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  rectangleParent: {
    height: "73.68%",
    top: "26.32%",
    left: "0%",
    position: "absolute",
    backgroundColor: Color.white,
  },
  component38: {
    top: 0,
    height: 76,
  },
  chatItem: {
    top: 375,
    left: 304,
    position: "absolute",
  },
  chatInner: {
    top: 326,
    left: 21,
    width: 40,
    height: 40,
    position: "absolute",
  },
  hiCanYou: {
    fontSize: FontSize.notice_size,
    color: Color.black,
    width: 185,
  },
  hiCanYouTellMeMoreAboutWrapper: {
    top: 277,
    left: 71,
    backgroundColor: Color.whitesmoke,
    padding: Padding.p_3xs,
    flexDirection: "row",
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  chat: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Chat1;

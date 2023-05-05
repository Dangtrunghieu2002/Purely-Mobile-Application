import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border, Padding } from "../GlobalStyles";

const Chat = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.chat}>
      <View style={[styles.chatChild, styles.chatChildLayout]} />
      <Image
        style={[styles.menuDots1Icon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/menudots-1.png")}
      />
      <View style={[styles.component38, styles.groupChildPosition]}>
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
          <View style={[styles.frameChild, styles.childBorder]} />
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
          <View style={[styles.angleRight2Parent, styles.parentFlexBox]}>
            <Pressable
              style={styles.chevronLeftLayout}
              onPress={() => navigation.goBack()}
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
      <View style={[styles.microphone1Parent, styles.parentFlexBox]}>
        <Image
          style={[styles.microphone1Icon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/microphone-1.png")}
        />
        <Image
          style={[styles.attachFile1Icon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/attachfile-1.png")}
        />
        <Image
          style={[styles.attachFile1Icon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/smile-1.png")}
        />
        <View style={[styles.sentMail2Parent, styles.groupChildLayout]}>
          <Image
            style={styles.sentMail2Icon}
            resizeMode="cover"
            source={require("../assets/sentmail-2.png")}
          />
          <View style={[styles.groupChild, styles.groupChildLayout]} />
          <Text style={[styles.typeHere, styles.typeHereTypo]}>Type here</Text>
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
      <View
        style={[styles.hiCanYouTellMeMoreAboutWrapper, styles.parentFlexBox]}
      >
        <Text style={[styles.hiCanYou, styles.typeHereTypo]}>{`Hi,
Can you tell me more about your job’s requirement?`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chatChildLayout: {
    width: 375,
    position: "absolute",
  },
  iconLayout1: {
    height: 24,
    width: 24,
  },
  groupChildPosition: {
    top: 0,
    left: 0,
  },
  childPosition: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    width: "100%",
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
    display: "flex",
    textAlign: "left",
    color: Color.sub2,
  },
  childBorder: {
    borderStyle: "solid",
    position: "absolute",
  },
  chevronLeftLayout: {
    height: 16,
    width: 16,
  },
  parentFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  wrapperLayout: {
    height: 70,
    width: 70,
  },
  groupChildLayout: {
    height: 35,
    width: 240,
  },
  typeHereTypo: {
    fontFamily: FontFamily.text1,
    textAlign: "left",
  },
  chatChild: {
    top: 677,
    height: 135,
    left: 0,
    width: 375,
    backgroundColor: Color.white,
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
    display: "flex",
    textAlign: "left",
    color: Color.sub2,
    fontFamily: FontFamily.sFUITextRegular,
    alignItems: "flex-end",
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
    display: "flex",
    textAlign: "left",
    color: Color.sub2,
    fontFamily: FontFamily.sFUITextRegular,
    alignItems: "flex-end",
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
    borderColor: "rgba(26, 26, 26, 0.4)",
    borderBottomWidth: 1,
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
    top: "0%",
    height: "100%",
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
    left: 24,
    alignItems: "center",
    top: 8,
  },
  rectangleParent: {
    height: "73.68%",
    top: "26.32%",
    left: "0%",
    position: "absolute",
    backgroundColor: Color.white,
  },
  component38: {
    height: 76,
    width: 375,
    position: "absolute",
  },
  microphone1Icon: {
    overflow: "hidden",
  },
  attachFile1Icon: {
    marginLeft: 10,
    overflow: "hidden",
  },
  sentMail2Icon: {
    right: 10,
    width: 20,
    height: 20,
    top: 8,
    position: "absolute",
    overflow: "hidden",
  },
  groupChild: {
    borderRadius: 10,
    borderColor: "#797979",
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
    top: 0,
    left: 0,
  },
  typeHere: {
    top: 10,
    left: 18,
    color: "#797979",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.text1,
    position: "absolute",
  },
  sentMail2Parent: {
    marginLeft: 10,
  },
  microphone1Parent: {
    bottom: 22,
    left: 14,
    alignItems: "center",
  },
  chatItem: {
    top: 371,
    left: 300,
    position: "absolute",
  },
  chatInner: {
    top: 322,
    left: 17,
    width: 40,
    height: 40,
    position: "absolute",
  },
  hiCanYou: {
    fontSize: FontSize.notice_size,
    color: Color.black,
    width: 185,
    alignItems: "center",
    display: "flex",
  },
  hiCanYouTellMeMoreAboutWrapper: {
    top: 273,
    left: 67,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.whitesmoke,
    padding: Padding.p_3xs,
  },
  chat: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Chat;

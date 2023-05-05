import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Request4 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.request}>
      <Image
        style={styles.outOfStock1Icon}
        resizeMode="cover"
        source={require("../assets/outofstock-11.png")}
      />
      <Text style={styles.thereIsNo}>There is no request yet</Text>
      <View style={[styles.groupParent, styles.textFieldPosition]}>
        <Pressable
          style={styles.rectangleParent}
          onPress={() => navigation.navigate("Suggest")}
        >
          <View style={[styles.groupChild, styles.groupPosition]} />
          <Text style={styles.indexInformation}>Suggest</Text>
          <Image
            style={styles.groupItem}
            resizeMode="cover"
            source={require("../assets/line-6.png")}
          />
        </Pressable>
        <Pressable
          style={styles.rectangleParent}
          onPress={() => navigation.navigate("Request3")}
        >
          <View style={[styles.groupInner, styles.groupPosition]} />
          <Text style={styles.request1}>Request</Text>
          <Image
            style={[styles.lineIcon, styles.lineIconLayout]}
            resizeMode="cover"
            source={require("../assets/line-6.png")}
          />
        </Pressable>
      </View>
      <Image
        style={[styles.requestChild, styles.lineIconLayout]}
        resizeMode="cover"
        source={require("../assets/line-6.png")}
      />
      <Pressable
        style={[styles.component32, styles.textFieldPosition]}
        onPress={() => navigation.navigate("Request4")}
      >
        <View style={[styles.component32Child, styles.childPosition]} />
        <Text style={[styles.textField, styles.textFieldPosition]}>
          Add request
        </Text>
      </Pressable>
      <View style={[styles.component38, styles.rectanglePosition]}>
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
          <Text style={[styles.text1, styles.textFlexBox]}>9:41 AM</Text>
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
        <View style={[styles.rectangleContainer, styles.childPosition]}>
          <View style={[styles.frameChild, styles.frameChildBorder]} />
          <Pressable
            style={styles.chevronLeft}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/chevronleft.png")}
            />
          </Pressable>
          <Text style={styles.signUp}>Elderly Sitter</Text>
          <Pressable
            style={styles.wrapper}
            onPress={() => navigation.navigate("Setting")}
          >
            <Image
              style={[styles.icon1, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-15951.png")}
            />
          </Pressable>
        </View>
        <Pressable
          style={styles.chat1}
          onPress={() => navigation.navigate("ChatHome")}
        >
          <Image
            style={[styles.icon1, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/chat-1.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.component27, styles.frameChildBorder]}>
        <Pressable
          style={styles.rectangleLayout}
          onPress={() => navigation.navigate("Home")}
        >
          <View style={[styles.rectangleView, styles.rectangleLayout]} />
          <Image
            style={styles.home1Icon}
            resizeMode="cover"
            source={require("../assets/home-11.png")}
          />
        </Pressable>
        <Pressable
          style={styles.rectangleLayout}
          onPress={() => navigation.navigate("OverviewHealthIndex2")}
        >
          <View style={[styles.rectangleView, styles.rectangleLayout]} />
          <Image
            style={styles.home1Icon}
            resizeMode="cover"
            source={require("../assets/pharmacy-2.png")}
          />
        </Pressable>
        <View style={styles.rectangleLayout}>
          <LinearGradient
            style={[styles.rectangleLineargradient, styles.rectangleLayout]}
            locations={[0, 1]}
            colors={["rgba(84, 222, 253, 0.4)", "rgba(84, 222, 253, 0)"]}
            useAngle={true}
            angle={182.32}
          />
          <Image
            style={styles.home1Icon}
            resizeMode="cover"
            source={require("../assets/handholdingheart-1-2.png")}
          />
        </View>
        <Pressable
          style={styles.rectangleLayout}
          onPress={() => navigation.navigate("Connections1")}
        >
          <View style={[styles.rectangleView, styles.rectangleLayout]} />
          <Image
            style={styles.home1Icon}
            resizeMode="cover"
            source={require("../assets/users-2.png")}
          />
        </Pressable>
        <Pressable
          style={styles.rectangleLayout}
          onPress={() => navigation.navigate("Notification1")}
        >
          <View style={[styles.rectangleView, styles.rectangleLayout]} />
          <Image
            style={styles.home1Icon}
            resizeMode="cover"
            source={require("../assets/bell.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textFieldPosition: {
    left: "50%",
    position: "absolute",
  },
  groupPosition: {
    backgroundColor: Color.whitesmoke,
    left: 0,
    top: 0,
    height: 34,
    width: 172,
    position: "absolute",
  },
  lineIconLayout: {
    height: 1,
    width: 164,
    top: 33,
    position: "absolute",
  },
  childPosition: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    width: "100%",
  },
  rectanglePosition: {
    left: 0,
    top: 0,
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
    display: "flex",
    fontSize: FontSize.size_xs,
    color: Color.sub2,
    textAlign: "left",
    position: "absolute",
  },
  frameChildBorder: {
    borderStyle: "solid",
    position: "absolute",
  },
  rectangleLayout: {
    height: 56,
    width: 75,
  },
  outOfStock1Icon: {
    marginTop: -45,
    left: 143,
    width: 90,
    height: 90,
    top: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  thereIsNo: {
    top: 475,
    left: 90,
    lineHeight: 27,
    color: Color.dimgray,
    textAlign: "center",
    fontFamily: FontFamily.text1,
    fontSize: FontSize.heading4_size,
    position: "absolute",
  },
  groupChild: {
    borderTopLeftRadius: Border.br_5xs,
    borderBottomLeftRadius: Border.br_5xs,
  },
  indexInformation: {
    left: 50,
    color: Color.black,
    textAlign: "left",
    top: 11,
    fontFamily: FontFamily.text1,
    fontSize: FontSize.heading4_size,
    position: "absolute",
  },
  groupItem: {
    top: 34,
    left: 8,
    width: 163,
    height: 0,
    display: "none",
    position: "absolute",
  },
  rectangleParent: {
    height: 34,
    width: 172,
  },
  groupInner: {
    borderTopRightRadius: Border.br_5xs,
    borderBottomRightRadius: Border.br_5xs,
  },
  request1: {
    left: 53,
    color: Color.skyblue_200,
    fontFamily: FontFamily.heading4,
    fontWeight: "500",
    textAlign: "left",
    top: 11,
    fontSize: FontSize.heading4_size,
    position: "absolute",
  },
  lineIcon: {
    left: 1,
  },
  groupParent: {
    marginLeft: -174.5,
    top: 92,
    flexDirection: "row",
  },
  requestChild: {
    left: 7,
  },
  component32Child: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.skyblue_200,
    left: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  textField: {
    marginTop: -13,
    marginLeft: -65.5,
    fontSize: FontSize.heading3_size,
    fontWeight: "600",
    fontFamily: FontFamily.heading3,
    color: Color.white,
    textAlign: "center",
    top: "50%",
  },
  component32: {
    marginLeft: -171.5,
    top: 684,
    width: 343,
    height: 48,
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
    position: "absolute",
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
    display: "flex",
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
    display: "flex",
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
    display: "flex",
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
    height: "100%",
    display: "none",
    overflow: "hidden",
    width: "100%",
  },
  chevronLeft: {
    left: 16,
    top: 20,
    width: 16,
    height: 16,
    position: "absolute",
  },
  signUp: {
    top: 18,
    left: 72,
    fontSize: FontSize.heading1_size,
    textTransform: "capitalize",
    color: Color.sub2,
    fontFamily: FontFamily.heading4,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  icon1: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: "2.4%",
    top: "-5.36%",
    right: "78.93%",
    bottom: "-19.64%",
    width: "18.67%",
    height: "125%",
    position: "absolute",
  },
  rectangleContainer: {
    height: "73.68%",
    top: "26.32%",
    left: "0%",
    position: "absolute",
    backgroundColor: Color.white,
  },
  chat1: {
    left: "87.2%",
    top: "47.37%",
    right: "6.4%",
    bottom: "21.05%",
    width: "6.4%",
    height: "31.58%",
    position: "absolute",
  },
  component38: {
    width: 375,
    height: 76,
    position: "absolute",
  },
  rectangleView: {
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  home1Icon: {
    top: 16,
    left: 25,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleLineargradient: {
    backgroundColor: "transparent",
    borderColor: "#49c6e5",
    borderTopWidth: 1.5,
    borderStyle: "solid",
    position: "absolute",
    left: 0,
    top: 0,
  },
  component27: {
    bottom: 0,
    borderColor: "#666",
    borderTopWidth: 1,
    left: "0%",
    right: "0%",
    flexDirection: "row",
    width: "100%",
  },
  request: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Request4;

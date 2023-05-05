import * as React from "react";
import { Text, StyleSheet, View, Pressable, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const Request1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.request}>
      <View style={[styles.elderlysStatusParent, styles.component39Position]}>
        <Text style={[styles.elderlysStatus, styles.elderlysStatusTypo]}>
          Elderly’s Status
        </Text>
        <View style={[styles.fullNameParent, styles.frameChildBorder]}>
          <Text style={[styles.fullName, styles.textTypo1]}>
            Elderly’s Name
          </Text>
          <Text style={styles.kaydenBlake}>Sarah Kim</Text>
        </View>
        <View style={[styles.fullNameParent, styles.frameChildBorder]}>
          <Text style={[styles.fullName, styles.textTypo1]}>Age</Text>
          <Text style={styles.kaydenBlake}>65 years old</Text>
        </View>
        <View style={[styles.fullNameParent, styles.frameChildBorder]}>
          <Text style={[styles.fullName, styles.textTypo1]}>Disease</Text>
          <Text style={styles.kaydenBlake}>High blood pressure</Text>
        </View>
        <View style={[styles.fullNameParent, styles.frameChildBorder]}>
          <Text style={[styles.fullName, styles.textTypo1]}>Note</Text>
          <Text style={styles.kaydenBlake}>Kind of hard</Text>
        </View>
        <Text
          style={[styles.elderlySitterRequirement, styles.elderlysStatusTypo]}
        >
          Elderly Sitter Requirement
        </Text>
        <View style={[styles.fullNameParent, styles.frameChildBorder]}>
          <Text style={[styles.fullName, styles.textTypo1]}>
            Year of Experience
          </Text>
          <Text style={styles.kaydenBlake}>Not mentioned</Text>
        </View>
        <View style={[styles.fullNameParent, styles.frameChildBorder]}>
          <Text style={[styles.fullName, styles.textTypo1]}>Skills</Text>
          <Text style={styles.kaydenBlake}>Cooking</Text>
        </View>
        <Text
          style={[styles.elderlySitterRequirement, styles.elderlysStatusTypo]}
        >
          Job Detail
        </Text>
        <View style={[styles.fullNameParent, styles.frameChildBorder]}>
          <Text style={[styles.fullName, styles.textTypo1]}>Date</Text>
          <Text style={styles.kaydenBlake}>11/03/2023</Text>
        </View>
        <View style={[styles.fullNameParent, styles.frameChildBorder]}>
          <Text style={[styles.fullName, styles.textTypo1]}>Time</Text>
          <Text style={styles.kaydenBlake}>10:00 - 13:00</Text>
        </View>
        <View style={[styles.fullNameParent, styles.frameChildBorder]}>
          <Text style={[styles.fullName, styles.textTypo1]}>Address</Text>
          <Text style={styles.kaydenBlake}>
            Ho Chi Minh, District 3, 279 Le Hong Phong
          </Text>
        </View>
        <View style={[styles.fullNameParent, styles.frameChildBorder]}>
          <Text style={[styles.fullName, styles.textTypo1]}>Offered Price</Text>
          <Text style={styles.kaydenBlake}>$115</Text>
        </View>
        <Text style={styles.sittersApplied}>
          <Text style={[styles.text, styles.textTypo1]}>3</Text>
          <Text style={styles.sittersApplied1}> sitters applied</Text>
        </Text>
      </View>
      <Pressable
        style={[styles.component39, styles.componentLayout]}
        onPress={() => navigation.navigate("Request2")}
      >
        <View style={[styles.component39Child, styles.groupInnerBorder]} />
        <Text style={[styles.textField, styles.textTypo]}>Edit detail</Text>
      </Pressable>
      <Pressable
        style={[styles.component32, styles.component32Position]}
        onPress={() => navigation.navigate("Request1")}
      >
        <View style={[styles.component32Child, styles.childPosition]} />
        <Text style={[styles.textField1, styles.textTypo]}>
          View application
        </Text>
      </Pressable>
      <View style={[styles.component27, styles.component27FlexBox]}>
        <View style={styles.groupLayout}>
          <Pressable
            style={[styles.groupChild, styles.groupPosition]}
            onPress={() => navigation.navigate("Home")}
          />
          <Image
            style={[styles.home1Icon, styles.chat1Layout]}
            resizeMode="cover"
            source={require("../assets/home-11.png")}
          />
        </View>
        <Pressable
          style={styles.groupLayout}
          onPress={() => navigation.navigate("OverviewHealthIndex2")}
        >
          <View style={[styles.groupChild, styles.groupPosition]} />
          <Image
            style={[styles.home1Icon, styles.chat1Layout]}
            resizeMode="cover"
            source={require("../assets/pharmacy-2.png")}
          />
        </Pressable>
        <View style={styles.groupLayout}>
          <LinearGradient
            style={[styles.groupInner, styles.groupPosition]}
            locations={[0, 1]}
            colors={["rgba(84, 222, 253, 0.4)", "rgba(84, 222, 253, 0)"]}
            useAngle={true}
            angle={182.32}
          />
          <Image
            style={[styles.home1Icon, styles.chat1Layout]}
            resizeMode="cover"
            source={require("../assets/handholdingheart-1-2.png")}
          />
        </View>
        <Pressable
          style={styles.groupLayout}
          onPress={() => navigation.navigate("Connections1")}
        >
          <View style={[styles.groupChild, styles.groupPosition]} />
          <Image
            style={[styles.home1Icon, styles.chat1Layout]}
            resizeMode="cover"
            source={require("../assets/users-2.png")}
          />
        </Pressable>
        <Pressable
          style={styles.groupLayout}
          onPress={() => navigation.navigate("Notification1")}
        >
          <View style={[styles.groupChild, styles.groupPosition]} />
          <Image
            style={[styles.home1Icon, styles.chat1Layout]}
            resizeMode="cover"
            source={require("../assets/bell.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.component38, styles.groupPosition]}>
        <View style={[styles.component38Child, styles.childPosition1]} />
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
            <Text style={[styles.text1, styles.textFlexBox]}>58 %</Text>
          </View>
          <Image
            style={styles.bluetoothIcon}
            resizeMode="cover"
            source={require("../assets/bluetooth-icon.png")}
          />
          <Text style={[styles.text2, styles.text2Typo]}>9:41 AM</Text>
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
        <View style={[styles.groupView, styles.childPosition1]}>
          <View style={[styles.frameChild, styles.childPosition1]} />
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
          <View style={[styles.angleRight2Parent, styles.component27FlexBox]}>
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
              style={styles.wrapper}
              onPress={() => navigation.navigate("Setting")}
            >
              <Image
                style={styles.icon2}
                resizeMode="cover"
                source={require("../assets/ellipse-1595.png")}
              />
            </Pressable>
            <Text style={[styles.signUp, styles.text2Typo]}>
              Request Detail
            </Text>
            <Pressable
              style={[styles.chat1, styles.chat1Layout]}
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
    </View>
  );
};

const styles = StyleSheet.create({
  component39Position: {
    left: "50%",
    marginLeft: -171.5,
    position: "absolute",
  },
  elderlysStatusTypo: {
    display: "flex",
    color: Color.sub2,
    alignItems: "center",
    textAlign: "left",
    fontFamily: FontFamily.heading3,
    fontWeight: "600",
    fontSize: FontSize.heading3_size,
  },
  frameChildBorder: {
    borderBottomWidth: 1,
    borderColor: "rgba(26, 26, 26, 0.4)",
    borderStyle: "solid",
  },
  textTypo1: {
    fontFamily: FontFamily.heading3,
    fontWeight: "600",
  },
  componentLayout: {
    height: 48,
    width: 343,
  },
  groupInnerBorder: {
    borderColor: "#49c6e5",
    borderStyle: "solid",
  },
  textTypo: {
    textAlign: "center",
    top: "50%",
    marginTop: -13,
    fontFamily: FontFamily.heading3,
    fontWeight: "600",
    fontSize: FontSize.heading3_size,
    left: "50%",
    position: "absolute",
  },
  component32Position: {
    left: 16,
    position: "absolute",
  },
  childPosition: {
    borderRadius: Border.br_5xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  component27FlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  groupPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  chat1Layout: {
    height: 24,
    width: 24,
  },
  childPosition1: {
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
  text2Typo: {
    fontWeight: "500",
    display: "flex",
    textAlign: "left",
    color: Color.sub2,
  },
  chevronLeftLayout: {
    height: 16,
    width: 16,
  },
  elderlysStatus: {
    width: 212,
    alignItems: "center",
  },
  fullName: {
    fontSize: FontSize.notice_size,
    color: Color.dimgray,
    textAlign: "left",
  },
  kaydenBlake: {
    marginTop: 16,
    width: 343,
    fontFamily: FontFamily.text1,
    fontSize: FontSize.text1_size,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.sub2,
  },
  fullNameParent: {
    paddingBottom: Padding.p_5xs,
    marginTop: 24,
  },
  elderlySitterRequirement: {
    width: 327,
    marginTop: 24,
    alignItems: "center",
  },
  text: {
    color: Color.skyblue_200,
    fontSize: FontSize.heading3_size,
    fontWeight: "600",
  },
  sittersApplied1: {
    fontFamily: FontFamily.text1,
    fontSize: FontSize.text1_size,
    color: Color.sub2,
  },
  sittersApplied: {
    marginTop: 24,
    textAlign: "left",
  },
  elderlysStatusParent: {
    top: 100,
  },
  component39Child: {
    borderWidth: 1,
    borderRadius: Border.br_5xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.white,
  },
  textField: {
    marginLeft: -53.5,
    color: Color.skyblue_200,
  },
  component39: {
    top: 1026,
    left: "50%",
    marginLeft: -171.5,
    position: "absolute",
  },
  component32Child: {
    backgroundColor: Color.skyblue_200,
  },
  textField1: {
    marginLeft: -88.5,
    color: Color.white,
  },
  component32: {
    top: 1082,
    height: 48,
    width: 343,
  },
  groupChild: {
    height: 56,
    width: 75,
    backgroundColor: Color.white,
  },
  home1Icon: {
    top: 16,
    left: 25,
    position: "absolute",
    overflow: "hidden",
  },
  groupLayout: {
    height: 56,
    width: 75,
  },
  groupInner: {
    backgroundColor: "transparent",
    borderTopWidth: 1.5,
    height: 56,
    width: 75,
    borderColor: "#49c6e5",
    borderStyle: "solid",
  },
  component27: {
    marginLeft: -187.5,
    bottom: 0,
    borderColor: "#666",
    borderTopWidth: 1,
    borderStyle: "solid",
    flexDirection: "row",
    left: "50%",
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
  text1: {
    width: "50.45%",
    fontFamily: FontFamily.sFUITextRegular,
    alignItems: "flex-end",
    fontSize: FontSize.size_xs,
    display: "flex",
    textAlign: "left",
    color: Color.sub2,
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
  text2: {
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
    fontFamily: FontFamily.sFUITextRegular,
    alignItems: "flex-end",
    fontSize: FontSize.size_xs,
    display: "flex",
    textAlign: "left",
    color: Color.sub2,
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
    left: "0%",
    top: "0%",
    height: "100%",
    borderBottomWidth: 1,
    borderColor: "rgba(26, 26, 26, 0.4)",
    borderStyle: "solid",
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
    top: 20,
    left: 16,
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
    width: 70,
    height: 70,
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
  },
  groupView: {
    height: "73.68%",
    top: "26.32%",
    left: "0%",
    position: "absolute",
    backgroundColor: Color.white,
  },
  component38: {
    width: 375,
    height: 76,
  },
  request: {
    flex: 1,
    height: 1210,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Request1;

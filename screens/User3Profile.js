import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const User3Profile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.user3Profile}>
      <View style={styles.elderlysStatusParent}>
        <Text style={[styles.elderlysStatus, styles.kaydenBlakeFlexBox]}>
          Elderly’s Status
        </Text>
        <View style={[styles.fullNameParent, styles.frameChildBorder]}>
          <Text style={[styles.fullName, styles.textTypo]}>Elderly’s Name</Text>
          <Text style={[styles.kaydenBlake, styles.kaydenBlakeTypo]}>
            Sarah Kim
          </Text>
        </View>
        <View style={[styles.fullNameParent, styles.frameChildBorder]}>
          <Text style={[styles.fullName, styles.textTypo]}>Age</Text>
          <Text style={[styles.kaydenBlake, styles.kaydenBlakeTypo]}>
            65 years old
          </Text>
        </View>
        <View style={[styles.fullNameParent, styles.frameChildBorder]}>
          <Text style={[styles.fullName, styles.textTypo]}>Disease</Text>
          <Text style={[styles.kaydenBlake, styles.kaydenBlakeTypo]}>
            High blood pressure
          </Text>
        </View>
        <View style={[styles.fullNameParent, styles.frameChildBorder]}>
          <Text style={[styles.fullName, styles.textTypo]}>Note</Text>
          <Text style={[styles.kaydenBlake, styles.kaydenBlakeTypo]}>
            Kind of hard
          </Text>
        </View>
        <Text
          style={[styles.elderlySitterRequirement, styles.kaydenBlakeFlexBox]}
        >
          Elderly Sitter Requirement
        </Text>
        <View style={[styles.fullNameParent, styles.frameChildBorder]}>
          <Text style={[styles.fullName, styles.textTypo]}>
            Year of Experience
          </Text>
          <Text style={[styles.kaydenBlake, styles.kaydenBlakeTypo]}>
            Not mentioned
          </Text>
        </View>
        <View style={[styles.fullNameParent, styles.frameChildBorder]}>
          <Text style={[styles.fullName, styles.textTypo]}>Skills</Text>
          <Text style={[styles.kaydenBlake, styles.kaydenBlakeTypo]}>
            Cooking
          </Text>
        </View>
        <Text
          style={[styles.elderlySitterRequirement, styles.kaydenBlakeFlexBox]}
        >
          Job Detail
        </Text>
        <View style={[styles.fullNameParent, styles.frameChildBorder]}>
          <Text style={[styles.fullName, styles.textTypo]}>Date</Text>
          <Text style={[styles.kaydenBlake, styles.kaydenBlakeTypo]}>
            11/03/2023
          </Text>
        </View>
        <View style={[styles.fullNameParent, styles.frameChildBorder]}>
          <Text style={[styles.fullName, styles.textTypo]}>Time</Text>
          <Text style={[styles.kaydenBlake, styles.kaydenBlakeTypo]}>
            10:00 - 13:00
          </Text>
        </View>
        <View style={[styles.fullNameParent, styles.frameChildBorder]}>
          <Text style={[styles.fullName, styles.textTypo]}>Address</Text>
          <Text style={[styles.kaydenBlake, styles.kaydenBlakeTypo]}>
            This is hidden. You will see when hired.
          </Text>
        </View>
        <View style={[styles.fullNameParent, styles.frameChildBorder]}>
          <Text style={[styles.fullName, styles.textTypo]}>Offered Price</Text>
          <Text style={[styles.kaydenBlake, styles.kaydenBlakeTypo]}>$115</Text>
        </View>
        <Text style={styles.sittersApplied}>
          <Text style={[styles.text, styles.textTypo]}>3</Text>
          <Text style={styles.kaydenBlakeTypo}> sitters applied</Text>
        </Text>
        <View style={styles.component32}>
          <View style={[styles.component32Child, styles.childPosition]} />
          <Text style={[styles.textField, styles.textTypo]}>Apply</Text>
        </View>
      </View>
      <View style={[styles.component27, styles.component27FlexBox]}>
        <Pressable
          style={styles.groupLayout}
          onPress={() => navigation.navigate("Home")}
        >
          <View style={[styles.groupChild, styles.groupPosition]} />
          <Image
            style={[styles.home1Icon, styles.chat1Layout]}
            resizeMode="cover"
            source={require("../assets/home-1.png")}
          />
        </Pressable>
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
        <View style={[styles.groupView, styles.childPosition]}>
          <View style={[styles.frameChild, styles.childPosition]} />
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
            <Image
              style={[styles.angleRight2Icon, styles.chevronLeftLayout]}
              resizeMode="cover"
              source={require("../assets/angleright-2.png")}
            />
            <Pressable
              style={styles.wrapper}
              onPress={() => navigation.navigate("Setting")}
            >
              <Image
                style={styles.icon1}
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
                style={styles.icon2}
                resizeMode="cover"
                source={require("../assets/chat-1.png")}
              />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  kaydenBlakeFlexBox: {
    display: "flex",
    alignItems: "center",
    textAlign: "left",
  },
  frameChildBorder: {
    borderBottomWidth: 1,
    borderColor: "rgba(26, 26, 26, 0.4)",
    borderStyle: "solid",
  },
  textTypo: {
    fontFamily: FontFamily.heading3,
    fontWeight: "600",
  },
  kaydenBlakeTypo: {
    fontFamily: FontFamily.text1,
    fontSize: FontSize.text1_size,
    color: Color.sub2,
  },
  childPosition: {
    bottom: "0%",
    left: "0%",
    right: "0%",
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
    color: Color.sub2,
    display: "flex",
    fontFamily: FontFamily.heading3,
    fontWeight: "600",
    fontSize: FontSize.heading3_size,
  },
  fullName: {
    fontSize: FontSize.notice_size,
    color: Color.dimgray,
    textAlign: "left",
  },
  kaydenBlake: {
    marginTop: 16,
    width: 343,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
  },
  fullNameParent: {
    paddingBottom: Padding.p_5xs,
    marginTop: 24,
  },
  elderlySitterRequirement: {
    width: 327,
    marginTop: 24,
    alignItems: "center",
    color: Color.sub2,
    display: "flex",
    fontFamily: FontFamily.heading3,
    fontWeight: "600",
    fontSize: FontSize.heading3_size,
  },
  text: {
    color: Color.skyblue_200,
    fontSize: FontSize.heading3_size,
    fontWeight: "600",
  },
  sittersApplied: {
    marginTop: 24,
    textAlign: "left",
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
    marginLeft: -31.5,
    top: "50%",
    color: Color.white,
    textAlign: "center",
    fontSize: FontSize.heading3_size,
    fontWeight: "600",
    left: "50%",
    position: "absolute",
  },
  component32: {
    height: 48,
    width: 343,
    marginTop: 24,
  },
  elderlysStatusParent: {
    marginLeft: -171.5,
    top: 100,
    left: "50%",
    position: "absolute",
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
    borderColor: "#49c6e5",
    borderTopWidth: 1.5,
    height: 56,
    width: 75,
    borderStyle: "solid",
  },
  component27: {
    marginLeft: -187.5,
    bottom: 0,
    borderColor: "#666",
    borderTopWidth: 1,
    borderStyle: "solid",
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
    left: 16,
    top: 20,
    position: "absolute",
  },
  angleRight2Icon: {
    overflow: "hidden",
  },
  icon1: {
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
  icon2: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
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
  user3Profile: {
    flex: 1,
    height: 1162,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default User3Profile;

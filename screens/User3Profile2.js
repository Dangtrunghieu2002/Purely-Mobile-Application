import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const User3Profile2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.user3Profile}>
      <View style={[styles.generalInformationParent, styles.parentPosition]}>
        <Text style={[styles.generalInformation, styles.textFieldTypo]}>
          General Information
        </Text>
        <View style={[styles.fullNameParent, styles.frameChildBorder]}>
          <Text style={[styles.fullName, styles.text1Typo]}>Full name</Text>
          <Text style={[styles.kaydenBlake, styles.kaydenBlakeSpaceBlock]}>
            Kayden Blake
          </Text>
        </View>
        <View style={[styles.fullNameParent, styles.frameChildBorder]}>
          <Text style={[styles.fullName, styles.text1Typo]}>Age</Text>
          <Text style={[styles.kaydenBlake, styles.kaydenBlakeSpaceBlock]}>
            65 years old
          </Text>
        </View>
        <View style={[styles.fullNameParent, styles.frameChildBorder]}>
          <Text style={[styles.fullName, styles.text1Typo]}>Date of Birth</Text>
          <Text style={[styles.kaydenBlake, styles.kaydenBlakeSpaceBlock]}>
            12/03/1987
          </Text>
        </View>
        <View style={[styles.fullNameParent, styles.frameChildBorder]}>
          <Text style={[styles.fullName, styles.text1Typo]}>Location</Text>
          <Text style={[styles.kaydenBlake, styles.kaydenBlakeSpaceBlock]}>
            89 Ho Tung Mau, District 5
          </Text>
        </View>
        <View style={[styles.fullNameParent, styles.frameChildBorder]}>
          <Text style={[styles.fullName, styles.text1Typo]}>Skills</Text>
          <Text style={[styles.kaydenBlake, styles.kaydenBlakeSpaceBlock]}>
            Cooking, Gardening
          </Text>
        </View>
        <View style={[styles.fullNameParent, styles.frameChildBorder]}>
          <Text style={[styles.fullName, styles.text1Typo]}>
            Diploma/ Certificate
          </Text>
          <Text style={[styles.kaydenBlake, styles.kaydenBlakeSpaceBlock]}>
            Certificate III in Nursery Operations (Nursery Production)
          </Text>
        </View>
        <Text style={[styles.workExperience, styles.textFieldTypo]}>
          Work Experience
        </Text>
        <View style={[styles.fullNameParent, styles.frameChildBorder]}>
          <Text style={[styles.fullName, styles.text1Typo]}>Current Job</Text>
          <Text style={[styles.kaydenBlake, styles.kaydenBlakeSpaceBlock]}>
            Housekeeper
          </Text>
        </View>
        <View style={[styles.fullNameParent, styles.frameChildBorder]}>
          <Text style={[styles.fullName, styles.text1Typo]}>
            Year of Experience
          </Text>
          <Text style={[styles.kaydenBlake, styles.kaydenBlakeSpaceBlock]}>
            02 years
          </Text>
        </View>
        <View style={[styles.fullNameParent, styles.frameChildBorder]}>
          <Text style={[styles.fullName, styles.text1Typo]}>Introduction</Text>
          <Text style={[styles.kaydenBlake, styles.kaydenBlakeSpaceBlock]}>
            I am familiar with the job to take care of the elderly. I cared my
            grandma since I was 10! I also know nutrious diet for them.
          </Text>
        </View>
        <Text style={[styles.workExperience, styles.textFieldTypo]}>
          Review
        </Text>
        <View style={styles.component42ShadowBox}>
          <Image
            style={styles.component42Child}
            resizeMode="cover"
            source={require("../assets/rectangle-346243541.png")}
          />
          <View style={styles.frameParent}>
            <View style={styles.frameGroup}>
              <View style={styles.mariBonesParent}>
                <Text style={[styles.mariBones, styles.signUpTypo]}>
                  Mari Bones
                </Text>
                <Text style={[styles.text, styles.textTypo]}>11/03/2023</Text>
              </View>
              <View style={styles.wrapper}>
                <Text style={[styles.text1, styles.text1FlexBox]}>4.9/5</Text>
              </View>
            </View>
            <Text style={[styles.annaDidGreat, styles.jobsLayout]}>
              Anna did great job! She took care of my mother carefully. Would
              love to highly recommend her!
            </Text>
          </View>
        </View>
        <View style={styles.component42ShadowBox}>
          <Image
            style={styles.component42Child}
            resizeMode="cover"
            source={require("../assets/rectangle-346243541.png")}
          />
          <View style={styles.frameParent}>
            <View style={styles.frameGroup}>
              <View style={styles.mariBonesParent}>
                <Text style={[styles.mariBones, styles.signUpTypo]}>
                  Mari Bones
                </Text>
                <Text style={[styles.text, styles.textTypo]}>11/03/2023</Text>
              </View>
              <View style={styles.wrapper}>
                <Text style={[styles.text1, styles.text1FlexBox]}>4.9/5</Text>
              </View>
            </View>
            <Text style={[styles.annaDidGreat, styles.jobsLayout]}>
              Anna did great job! She took care of my mother carefully. Would
              love to highly recommend her!
            </Text>
          </View>
        </View>
        <View style={styles.component32}>
          <View
            style={[styles.component32Child, styles.component32ChildBorder]}
          />
          <Text style={[styles.textField, styles.textFieldTypo]}>
            Edit your profile
          </Text>
        </View>
      </View>
      <View style={[styles.groupParent, styles.parentPosition]}>
        <View style={styles.rectangleGroup}>
          <View style={[styles.groupChild, styles.groupPosition]} />
          <Text style={[styles.indexInformation, styles.jobsPosition]}>
            Your Profile
          </Text>
          <Image
            style={styles.groupItem}
            resizeMode="cover"
            source={require("../assets/line-6.png")}
          />
        </View>
        <Pressable
          style={styles.rectangleGroup}
          onPress={() => navigation.navigate("User3Profile1")}
        >
          <View style={[styles.groupInner, styles.groupPosition]} />
          <Text style={[styles.jobs, styles.jobsPosition]}>Jobs</Text>
          <Image
            style={styles.lineIcon}
            resizeMode="cover"
            source={require("../assets/line-7.png")}
          />
        </Pressable>
      </View>
      <View style={styles.component27}>
        <Pressable
          style={styles.rectangleLayout}
          onPress={() => navigation.navigate("Home")}
        >
          <View style={[styles.rectangleView, styles.rectangleLayout]} />
          <Image
            style={styles.home1Icon}
            resizeMode="cover"
            source={require("../assets/home-1.png")}
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
      <View style={[styles.component38, styles.rectanglePosition]}>
        <View style={[styles.component38Child, styles.childPosition]} />
        <View style={[styles.statusBarwhitebase, styles.batteryIconPosition]}>
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
            <Text style={[styles.text4, styles.textFlexBox]}>58 %</Text>
          </View>
          <Image
            style={styles.bluetoothIcon}
            resizeMode="cover"
            source={require("../assets/bluetooth-icon.png")}
          />
          <Text style={[styles.text5, styles.textFlexBox]}>9:41 AM</Text>
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
        <View style={[styles.rectangleParent4, styles.childPosition]}>
          <View style={[styles.frameChild, styles.childPosition]} />
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
          <Text style={[styles.signUp, styles.signUpTypo]}>Elderly Sitter</Text>
          <Pressable
            style={styles.frame}
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
    </View>
  );
};

const styles = StyleSheet.create({
  parentPosition: {
    left: "50%",
    position: "absolute",
  },
  textFieldTypo: {
    fontFamily: FontFamily.heading3,
    fontWeight: "600",
    fontSize: FontSize.heading3_size,
    textAlign: "center",
  },
  frameChildBorder: {
    borderBottomWidth: 1,
    borderColor: "rgba(26, 26, 26, 0.4)",
    borderStyle: "solid",
  },
  text1Typo: {
    fontSize: FontSize.notice_size,
    fontFamily: FontFamily.heading3,
    fontWeight: "600",
  },
  kaydenBlakeSpaceBlock: {
    marginTop: 16,
    color: Color.sub2,
  },
  signUpTypo: {
    fontFamily: FontFamily.heading4,
    fontWeight: "500",
  },
  textTypo: {
    fontFamily: FontFamily.text1,
    textAlign: "left",
  },
  text1FlexBox: {
    display: "flex",
    alignItems: "center",
  },
  jobsLayout: {
    lineHeight: 27,
    fontFamily: FontFamily.text1,
  },
  component32ChildBorder: {
    borderColor: "#49c6e5",
    borderStyle: "solid",
  },
  groupPosition: {
    backgroundColor: Color.whitesmoke,
    left: 0,
    top: 0,
    height: 34,
    width: 172,
    position: "absolute",
  },
  jobsPosition: {
    top: 11,
    fontSize: FontSize.heading4_size,
    textAlign: "left",
    position: "absolute",
  },
  rectangleLayout: {
    height: 56,
    width: 75,
  },
  rectanglePosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  childPosition: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  batteryIconPosition: {
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
    fontSize: FontSize.size_xs,
    display: "flex",
    textAlign: "left",
    color: Color.sub2,
    position: "absolute",
  },
  generalInformation: {
    textAlign: "center",
    color: Color.sub2,
  },
  fullName: {
    textAlign: "left",
    color: Color.dimgray,
  },
  kaydenBlake: {
    fontSize: FontSize.text1_size,
    width: 343,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.text1,
    textAlign: "left",
  },
  fullNameParent: {
    paddingBottom: Padding.p_5xs,
    marginTop: 24,
  },
  workExperience: {
    marginTop: 24,
    textAlign: "center",
    color: Color.sub2,
  },
  component42Child: {
    borderRadius: Border.br_17xl,
    width: 72,
    height: 72,
  },
  mariBones: {
    color: Color.sub3,
    width: 183,
    fontSize: FontSize.heading4_size,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
  },
  text: {
    fontSize: FontSize.text4_size,
    marginTop: 8,
    color: Color.dimgray,
  },
  mariBonesParent: {
    justifyContent: "center",
  },
  text1: {
    color: Color.white,
    width: 48,
    justifyContent: "center",
    alignItems: "center",
    fontSize: FontSize.notice_size,
    fontFamily: FontFamily.heading3,
    fontWeight: "600",
    textAlign: "center",
  },
  wrapper: {
    backgroundColor: Color.skyblue_200,
    padding: Padding.p_5xs,
    justifyContent: "flex-end",
    flexDirection: "row",
    borderRadius: Border.br_5xs,
    alignItems: "center",
  },
  frameGroup: {
    flexDirection: "row",
  },
  annaDidGreat: {
    width: 246,
    fontSize: FontSize.heading4_size,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    marginTop: 16,
    color: Color.sub2,
  },
  frameParent: {
    marginLeft: 8,
  },
  component42ShadowBox: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_5xs,
    elevation: 9,
    shadowRadius: 9,
    shadowColor: "rgba(26, 26, 26, 0.12)",
    flexDirection: "row",
    shadowOpacity: 1,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    borderRadius: Border.br_5xs,
    marginTop: 24,
    backgroundColor: Color.white,
  },
  component32Child: {
    borderWidth: 1,
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
    top: "0%",
    height: "100%",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.white,
  },
  textField: {
    marginTop: -13,
    marginLeft: -84.5,
    top: "50%",
    color: Color.skyblue_200,
    textAlign: "center",
    left: "50%",
    position: "absolute",
  },
  component32: {
    height: 48,
    width: 343,
    marginTop: 24,
  },
  generalInformationParent: {
    top: 142,
    marginLeft: -171.5,
    left: "50%",
  },
  groupChild: {
    borderTopLeftRadius: Border.br_5xs,
    borderBottomLeftRadius: Border.br_5xs,
  },
  indexInformation: {
    left: 36,
    color: Color.skyblue_200,
    fontFamily: FontFamily.heading4,
    fontWeight: "500",
  },
  groupItem: {
    top: 33,
    left: 7,
    width: 164,
    height: 1,
    position: "absolute",
  },
  rectangleGroup: {
    height: 34,
    width: 172,
  },
  groupInner: {
    borderTopRightRadius: Border.br_5xs,
    borderBottomRightRadius: Border.br_5xs,
  },
  jobs: {
    left: 64,
    color: Color.black,
    lineHeight: 27,
    fontFamily: FontFamily.text1,
  },
  lineIcon: {
    top: 34,
    left: 172,
    width: 163,
    height: 0,
    display: "none",
    position: "absolute",
  },
  groupParent: {
    top: 92,
    flexDirection: "row",
    marginLeft: -171.5,
    left: "50%",
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
    borderTopWidth: 1.5,
    left: 0,
    top: 0,
    position: "absolute",
    borderColor: "#49c6e5",
    borderStyle: "solid",
  },
  component27: {
    marginLeft: -187.5,
    bottom: 0,
    borderColor: "#666",
    borderTopWidth: 1,
    flexDirection: "row",
    borderStyle: "solid",
    left: "50%",
    position: "absolute",
  },
  component38Child: {
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowRadius: 10,
    elevation: 10,
    left: "0%",
    top: "0%",
    height: "100%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    bottom: "0%",
    backgroundColor: Color.white,
  },
  backgroundIcon: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
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
    position: "absolute",
  },
  text4: {
    width: "50.45%",
    fontFamily: FontFamily.sFUITextRegular,
    alignItems: "flex-end",
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
  text5: {
    width: "12.8%",
    left: "43.73%",
    fontFamily: FontFamily.sFUITextMedium,
    alignItems: "flex-end",
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
    alignItems: "flex-end",
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
    top: "0%",
    width: "100%",
  },
  frameChild: {
    left: "0%",
    top: "0%",
    height: "100%",
    borderBottomWidth: 1,
    borderColor: "rgba(26, 26, 26, 0.4)",
    borderStyle: "solid",
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
    width: 16,
    height: 16,
    position: "absolute",
  },
  signUp: {
    top: 18,
    left: 72,
    fontSize: FontSize.heading1_size,
    textTransform: "capitalize",
    textAlign: "left",
    color: Color.sub2,
    position: "absolute",
  },
  icon1: {
    height: "100%",
    width: "100%",
  },
  frame: {
    left: "2.4%",
    top: "-5.36%",
    right: "78.93%",
    bottom: "-19.64%",
    width: "18.67%",
    height: "125%",
    position: "absolute",
  },
  rectangleParent4: {
    height: "73.68%",
    top: "26.32%",
    left: "0%",
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
  },
  user3Profile: {
    flex: 1,
    height: 1525,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default User3Profile2;

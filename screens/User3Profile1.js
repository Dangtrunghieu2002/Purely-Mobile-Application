import * as React from "react";
import { Text, StyleSheet, View, Pressable, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const User3Profile1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.user3Profile}>
      <Pressable
        style={styles.component42Parent}
        onPress={() => navigation.navigate("User3Profile")}
      >
        <View style={styles.component42}>
          <View style={styles.frameParent}>
            <View>
              <Text style={[styles.mariBones, styles.hrFlexBox]}>
                Mari Bones
              </Text>
              <Text style={[styles.text, styles.hr1Typo]}>11/03/2023</Text>
            </View>
            <View style={[styles.hrWrapper, styles.wrapperSpaceBlock]}>
              <Text style={[styles.hr, styles.hrFlexBox]}>
                <Text style={styles.hrTxt}>
                  <Text style={[styles.text1, styles.jobsTypo]}>$37</Text>
                  <Text style={[styles.hr1, styles.hr1Typo]}>/hr</Text>
                </Text>
              </Text>
            </View>
          </View>
          <View style={styles.frameGroup}>
            <View style={styles.frameParent}>
              <View style={[styles.cookingWrapper, styles.wrapperSpaceBlock]}>
                <Text style={[styles.cooking, styles.iNeedALayout]}>
                  Cooking
                </Text>
              </View>
              <View
                style={[styles.exercisingWrapper, styles.wrapperSpaceBlock]}
              >
                <Text style={[styles.cooking, styles.iNeedALayout]}>
                  Exercising
                </Text>
              </View>
            </View>
            <View
              style={[styles.healthCheckingWrapper, styles.wrapperSpaceBlock]}
            >
              <Text style={[styles.cooking, styles.iNeedALayout]}>
                Health checking
              </Text>
            </View>
          </View>
          <Text style={[styles.iNeedA, styles.iNeedALayout]}>
            I need a careful housekeeper to cook lunch for an old man. I will
            prepare needed materials to cook!
          </Text>
        </View>
        <View style={styles.frameParentShadowBox}>
          <View style={styles.frameParent}>
            <View>
              <Text style={[styles.mariBones, styles.hrFlexBox]}>
                Mari Bones
              </Text>
              <Text style={[styles.text, styles.hr1Typo]}>11/03/2023</Text>
            </View>
            <View style={[styles.hrWrapper, styles.wrapperSpaceBlock]}>
              <Text style={[styles.hr, styles.hrFlexBox]}>
                <Text style={styles.hrTxt}>
                  <Text style={[styles.text1, styles.jobsTypo]}>$37</Text>
                  <Text style={[styles.hr1, styles.hr1Typo]}>/hr</Text>
                </Text>
              </Text>
            </View>
          </View>
          <View style={styles.frameGroup}>
            <View style={styles.frameParent}>
              <View style={[styles.cookingWrapper, styles.wrapperSpaceBlock]}>
                <Text style={[styles.cooking, styles.iNeedALayout]}>
                  Cooking
                </Text>
              </View>
              <View
                style={[styles.exercisingWrapper, styles.wrapperSpaceBlock]}
              >
                <Text style={[styles.cooking, styles.iNeedALayout]}>
                  Exercising
                </Text>
              </View>
            </View>
            <View
              style={[styles.healthCheckingWrapper, styles.wrapperSpaceBlock]}
            >
              <Text style={[styles.cooking, styles.iNeedALayout]}>
                Health checking
              </Text>
            </View>
          </View>
          <Text style={[styles.iNeedA, styles.iNeedALayout]}>
            I need a careful housekeeper to cook lunch for an old man. I will
            prepare needed materials to cook!
          </Text>
        </View>
        <View style={styles.frameParentShadowBox}>
          <View style={styles.frameParent}>
            <View>
              <Text style={[styles.mariBones, styles.hrFlexBox]}>
                Mari Bones
              </Text>
              <Text style={[styles.text, styles.hr1Typo]}>11/03/2023</Text>
            </View>
            <View style={[styles.hrWrapper, styles.wrapperSpaceBlock]}>
              <Text style={[styles.hr, styles.hrFlexBox]}>
                <Text style={styles.hrTxt}>
                  <Text style={[styles.text1, styles.jobsTypo]}>$37</Text>
                  <Text style={[styles.hr1, styles.hr1Typo]}>/hr</Text>
                </Text>
              </Text>
            </View>
          </View>
          <View style={styles.frameGroup}>
            <View style={styles.frameParent}>
              <View style={[styles.cookingWrapper, styles.wrapperSpaceBlock]}>
                <Text style={[styles.cooking, styles.iNeedALayout]}>
                  Cooking
                </Text>
              </View>
              <View
                style={[styles.exercisingWrapper, styles.wrapperSpaceBlock]}
              >
                <Text style={[styles.cooking, styles.iNeedALayout]}>
                  Exercising
                </Text>
              </View>
            </View>
            <View
              style={[styles.healthCheckingWrapper, styles.wrapperSpaceBlock]}
            >
              <Text style={[styles.cooking, styles.iNeedALayout]}>
                Health checking
              </Text>
            </View>
          </View>
          <Text style={[styles.iNeedA, styles.iNeedALayout]}>
            I need a careful housekeeper to cook lunch for an old man. I will
            prepare needed materials to cook!
          </Text>
        </View>
        <View style={styles.frameParentShadowBox}>
          <View style={styles.frameParent}>
            <View>
              <Text style={[styles.mariBones, styles.hrFlexBox]}>
                Mari Bones
              </Text>
              <Text style={[styles.text, styles.hr1Typo]}>11/03/2023</Text>
            </View>
            <View style={[styles.hrWrapper, styles.wrapperSpaceBlock]}>
              <Text style={[styles.hr, styles.hrFlexBox]}>
                <Text style={styles.hrTxt}>
                  <Text style={[styles.text1, styles.jobsTypo]}>$37</Text>
                  <Text style={[styles.hr1, styles.hr1Typo]}>/hr</Text>
                </Text>
              </Text>
            </View>
          </View>
          <View style={styles.frameGroup}>
            <View style={styles.frameParent}>
              <View style={[styles.cookingWrapper, styles.wrapperSpaceBlock]}>
                <Text style={[styles.cooking, styles.iNeedALayout]}>
                  Cooking
                </Text>
              </View>
              <View
                style={[styles.exercisingWrapper, styles.wrapperSpaceBlock]}
              >
                <Text style={[styles.cooking, styles.iNeedALayout]}>
                  Exercising
                </Text>
              </View>
            </View>
            <View
              style={[styles.healthCheckingWrapper, styles.wrapperSpaceBlock]}
            >
              <Text style={[styles.cooking, styles.iNeedALayout]}>
                Health checking
              </Text>
            </View>
          </View>
          <Text style={[styles.iNeedA, styles.iNeedALayout]}>
            I need a careful housekeeper to cook lunch for an old man. I will
            prepare needed materials to cook!
          </Text>
        </View>
        <View style={[styles.frameParent12, styles.frameParentShadowBox]}>
          <View style={styles.frameParent}>
            <View>
              <Text style={[styles.mariBones, styles.hrFlexBox]}>
                Mari Bones
              </Text>
              <Text style={[styles.text, styles.hr1Typo]}>11/03/2023</Text>
            </View>
            <View style={[styles.hrWrapper, styles.wrapperSpaceBlock]}>
              <Text style={[styles.hr, styles.hrFlexBox]}>
                <Text style={styles.hrTxt}>
                  <Text style={[styles.text1, styles.jobsTypo]}>$37</Text>
                  <Text style={[styles.hr1, styles.hr1Typo]}>/hr</Text>
                </Text>
              </Text>
            </View>
          </View>
          <View style={styles.frameGroup}>
            <View style={styles.frameParent}>
              <View style={[styles.cookingWrapper, styles.wrapperSpaceBlock]}>
                <Text style={[styles.cooking, styles.iNeedALayout]}>
                  Cooking
                </Text>
              </View>
              <View
                style={[styles.exercisingWrapper, styles.wrapperSpaceBlock]}
              >
                <Text style={[styles.cooking, styles.iNeedALayout]}>
                  Exercising
                </Text>
              </View>
            </View>
            <View
              style={[styles.healthCheckingWrapper, styles.wrapperSpaceBlock]}
            >
              <Text style={[styles.cooking, styles.iNeedALayout]}>
                Health checking
              </Text>
            </View>
          </View>
          <Text style={[styles.iNeedA, styles.iNeedALayout]}>
            I need a careful housekeeper to cook lunch for an old man. I will
            prepare needed materials to cook!
          </Text>
        </View>
      </Pressable>
      <View style={[styles.filterParent, styles.home1IconLayout]}>
        <Text style={styles.filter}>Filter</Text>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
      </View>
      <View style={[styles.groupParent, styles.groupParentPosition]}>
        <Pressable
          style={styles.groupLayout}
          onPress={() => navigation.navigate("User3Profile2")}
        >
          <View style={[styles.groupChild, styles.groupPosition]} />
          <Text style={[styles.indexInformation, styles.jobsPosition]}>
            Your Profile
          </Text>
          <Image
            style={styles.groupItem}
            resizeMode="cover"
            source={require("../assets/line-6.png")}
          />
        </Pressable>
        <Pressable
          style={styles.groupLayout}
          onPress={() => navigation.navigate("User3Profile1")}
        >
          <View style={[styles.groupInner, styles.groupPosition]} />
          <Text style={[styles.jobs, styles.jobsPosition]}>Jobs</Text>
          <Image
            style={[styles.lineIcon, styles.groupPosition]}
            resizeMode="cover"
            source={require("../assets/line-7.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.header3, styles.groupPosition]}>
        <View style={[styles.header3Child, styles.childIconPosition]} />
        <View style={[styles.statusBarwhitebase, styles.childIconPosition]}>
          <Image
            style={[styles.backgroundIcon, styles.childIconPosition]}
            resizeMode="cover"
            source={require("../assets/background.png")}
          />
          <View style={[styles.charge, styles.gsPosition]}>
            <Image
              style={[styles.batteryIcon, styles.childIconPosition]}
              resizeMode="cover"
              source={require("../assets/battery-icon.png")}
            />
            <Text style={[styles.text10, styles.textFlexBox]}>58 %</Text>
          </View>
          <Image
            style={styles.bluetoothIcon}
            resizeMode="cover"
            source={require("../assets/bluetooth-icon.png")}
          />
          <Text style={[styles.text11, styles.textFlexBox]}>9:41 AM</Text>
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
        <View style={[styles.rectangleContainer, styles.childIconPosition]}>
          <View style={[styles.frameChild, styles.childIconPosition]} />
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
      <View style={[styles.component28, styles.hrWrapperBorder]}>
        <Pressable
          style={styles.rectangleLayout}
          onPress={() => navigation.navigate("Home")}
        >
          <View style={[styles.rectangleView, styles.rectangleLayout]} />
          <Image
            style={[styles.home1Icon, styles.home1IconLayout]}
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
            style={[styles.home1Icon, styles.home1IconLayout]}
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
            style={[styles.home1Icon, styles.home1IconLayout]}
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
            style={[styles.home1Icon, styles.home1IconLayout]}
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
            style={[styles.home1Icon, styles.home1IconLayout]}
            resizeMode="cover"
            source={require("../assets/bell.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  hrFlexBox: {
    display: "flex",
    alignItems: "center",
  },
  hr1Typo: {
    fontFamily: FontFamily.text1,
    fontSize: FontSize.text4_size,
    color: Color.dimgray,
  },
  wrapperSpaceBlock: {
    padding: Padding.p_5xs,
    flexDirection: "row",
    borderRadius: Border.br_5xs,
  },
  jobsTypo: {
    color: Color.skyblue_200,
    fontFamily: FontFamily.heading4,
    fontWeight: "500",
  },
  iNeedALayout: {
    lineHeight: 27,
    fontFamily: FontFamily.text1,
  },
  frameParentShadowBox: {
    marginTop: 16,
    justifyContent: "center",
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_5xs,
    shadowOpacity: 1,
    elevation: 9,
    shadowRadius: 9,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowColor: "rgba(26, 26, 26, 0.12)",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.white,
  },
  home1IconLayout: {
    height: 24,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupParentPosition: {
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  groupPosition: {
    left: 0,
    position: "absolute",
  },
  jobsPosition: {
    top: 11,
    textAlign: "left",
    fontSize: FontSize.heading4_size,
    position: "absolute",
  },
  childIconPosition: {
    right: "0%",
    position: "absolute",
  },
  gsPosition: {
    top: "15%",
    height: "70%",
  },
  textFlexBox: {
    alignItems: "flex-end",
    fontSize: FontSize.size_xs,
    color: Color.sub2,
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  signUpTypo: {
    fontFamily: FontFamily.heading4,
    fontWeight: "500",
    textAlign: "left",
  },
  hrWrapperBorder: {
    borderColor: "#666",
    borderStyle: "solid",
  },
  rectangleLayout: {
    height: 56,
    width: 75,
  },
  mariBones: {
    color: Color.sub3,
    width: 239,
    textAlign: "left",
    fontFamily: FontFamily.heading4,
    fontWeight: "500",
    fontSize: FontSize.heading4_size,
  },
  text: {
    marginTop: 8,
    color: Color.dimgray,
    textAlign: "left",
  },
  text1: {
    fontSize: FontSize.heading4_size,
  },
  hr1: {
    color: Color.dimgray,
  },
  hrTxt: {
    lineBreak: "anywhere",
    width: "100%",
  },
  hr: {
    width: 72,
    textAlign: "center",
  },
  hrWrapper: {
    borderWidth: 1,
    borderColor: "#666",
    borderStyle: "solid",
  },
  frameParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  cooking: {
    color: Color.black,
    textAlign: "center",
    fontSize: FontSize.heading4_size,
  },
  cookingWrapper: {
    backgroundColor: Color.whitesmoke,
  },
  exercisingWrapper: {
    marginLeft: 8,
    backgroundColor: Color.whitesmoke,
  },
  healthCheckingWrapper: {
    backgroundColor: Color.whitesmoke,
    marginTop: 8,
  },
  frameGroup: {
    marginTop: 12,
  },
  iNeedA: {
    width: 327,
    color: Color.sub2,
    marginTop: 12,
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    fontSize: FontSize.heading4_size,
  },
  component42: {
    justifyContent: "center",
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_5xs,
    elevation: 9,
    shadowRadius: 9,
    shadowColor: "rgba(26, 26, 26, 0.12)",
    borderRadius: Border.br_5xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    backgroundColor: Color.white,
  },
  frameParent12: {
    overflow: "hidden",
  },
  component42Parent: {
    top: 190,
    left: "50%",
    marginLeft: -171.5,
    position: "absolute",
  },
  filter: {
    top: 7,
    left: 30,
    fontSize: FontSize.notice_size,
    fontStyle: "italic",
    fontFamily: FontFamily.interRegularItalic,
    color: Color.dimgray,
    textAlign: "left",
    position: "absolute",
  },
  vectorIcon: {
    width: "31.88%",
    right: "68.12%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  filterParent: {
    top: 149,
    width: 69,
    left: 16,
  },
  groupChild: {
    borderTopLeftRadius: Border.br_5xs,
    borderBottomLeftRadius: Border.br_5xs,
    top: 0,
    left: 0,
    height: 34,
    width: 172,
    backgroundColor: Color.whitesmoke,
  },
  indexInformation: {
    left: 36,
    color: Color.sub2,
    lineHeight: 27,
    fontFamily: FontFamily.text1,
  },
  groupItem: {
    top: 34,
    left: 8,
    width: 163,
    height: 0,
    display: "none",
    position: "absolute",
  },
  groupLayout: {
    height: 34,
    width: 172,
  },
  groupInner: {
    borderTopRightRadius: Border.br_5xs,
    borderBottomRightRadius: Border.br_5xs,
    top: 0,
    left: 0,
    height: 34,
    width: 172,
    backgroundColor: Color.whitesmoke,
  },
  jobs: {
    left: 64,
    color: Color.skyblue_200,
    fontFamily: FontFamily.heading4,
    fontWeight: "500",
  },
  lineIcon: {
    top: 33,
    width: 164,
    height: 1,
  },
  groupParent: {
    top: 92,
    marginLeft: -171.5,
    flexDirection: "row",
  },
  header3Child: {
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowRadius: 10,
    elevation: 10,
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    right: "0%",
    width: "100%",
    backgroundColor: Color.white,
  },
  backgroundIcon: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  batteryIcon: {
    height: "67.86%",
    width: "44.14%",
    top: "17.86%",
    bottom: "14.29%",
    left: "55.86%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  text10: {
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
  text11: {
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
    borderColor: "rgba(26, 26, 26, 0.4)",
    borderBottomWidth: 1,
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    borderStyle: "solid",
    width: "100%",
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
    width: 16,
    height: 16,
    left: 16,
    position: "absolute",
  },
  signUp: {
    top: 18,
    left: 72,
    fontSize: FontSize.heading1_size,
    textTransform: "capitalize",
    color: Color.sub2,
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
    bottom: "0%",
    width: "100%",
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
  header3: {
    width: 375,
    height: 76,
    top: 0,
    left: 0,
  },
  rectangleView: {
    left: 0,
    position: "absolute",
    top: 0,
    backgroundColor: Color.white,
  },
  home1Icon: {
    top: 16,
    left: 25,
    width: 24,
    overflow: "hidden",
  },
  rectangleLineargradient: {
    backgroundColor: "transparent",
    borderColor: "#49c6e5",
    borderTopWidth: 1.5,
    left: 0,
    position: "absolute",
    top: 0,
    borderStyle: "solid",
  },
  component28: {
    marginLeft: -187.5,
    bottom: 0,
    borderTopWidth: 1,
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  user3Profile: {
    flex: 1,
    height: 1377,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default User3Profile1;

import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Border, Color, Padding } from "../GlobalStyles";

const OverviewHealthIndex2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.overviewHealthIndex}>
      <Pressable
        style={[styles.blIndex1Parent, styles.parentPosition1]}
        onPress={() => navigation.navigate("OverviewHealthIndex1")}
      >
        <View style={styles.indexShadowBox}>
          <View style={[styles.bloodPressureParent, styles.parentFrameFlexBox]}>
            <Image
              style={styles.bloodPressureIcon}
              resizeMode="cover"
              source={require("../assets/blood-pressure.png")}
            />
            <View style={[styles.frameParent, styles.parentFrameFlexBox]}>
              <View>
                <View>
                  <View style={styles.parentFrameFlexBox}>
                    <Text style={styles.bloodPressure}>Blood pressure</Text>
                    <Text style={[styles.mmhg, styles.mmhgTypo]}>(mmHg)</Text>
                  </View>
                  <View style={[styles.minParent, styles.parentFrameFlexBox]}>
                    <Text style={[styles.min, styles.minLayout]}>Min</Text>
                    <Text style={[styles.average, styles.text1Layout]}>
                      Average
                    </Text>
                    <Text style={[styles.average, styles.text1Layout]}>
                      Max
                    </Text>
                  </View>
                </View>
                <View style={styles.parent}>
                  <Text style={[styles.text, styles.textTypo]}>80/120</Text>
                  <Text style={[styles.text1, styles.textTypo]}>80/126</Text>
                  <Text style={[styles.text1, styles.textTypo]}>90/137</Text>
                </View>
              </View>
              <Image
                style={[styles.angleRight3Icon, styles.angleIconLayout]}
                resizeMode="cover"
                source={require("../assets/angleright-1.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.hrIndex1, styles.indexShadowBox]}>
          <View style={[styles.heartParent, styles.parentFrameFlexBox]}>
            <Image
              style={styles.bloodPressureIcon}
              resizeMode="cover"
              source={require("../assets/heart1.png")}
            />
            <View style={[styles.frameParent, styles.parentFrameFlexBox]}>
              <View>
                <View>
                  <View>
                    <View style={styles.parentFrameFlexBox}>
                      <Text style={styles.bloodPressure}>Heart rate</Text>
                      <Text style={[styles.bpm, styles.bpmTypo]}>(bpm)</Text>
                    </View>
                    <View style={[styles.minParent, styles.parentFrameFlexBox]}>
                      <Text style={[styles.min, styles.minLayout]}>Min</Text>
                      <Text style={[styles.average, styles.text1Layout]}>
                        Average
                      </Text>
                      <Text style={[styles.average, styles.text1Layout]}>
                        Max
                      </Text>
                    </View>
                  </View>
                  <View style={styles.parent}>
                    <Text style={[styles.text, styles.textTypo]}>80</Text>
                    <Text style={[styles.text1, styles.textTypo]}>80</Text>
                    <Text style={[styles.text1, styles.textTypo]}>89</Text>
                  </View>
                </View>
              </View>
              <Image
                style={[styles.angleRight3Icon, styles.angleIconLayout]}
                resizeMode="cover"
                source={require("../assets/angleright-1.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.spo2Index1, styles.indexShadowBox]}>
          <View style={[styles.heartParent, styles.parentFrameFlexBox]}>
            <Image
              style={styles.bloodPressureIcon}
              resizeMode="cover"
              source={require("../assets/spo2.png")}
            />
            <View style={[styles.frameParent, styles.parentFrameFlexBox]}>
              <View>
                <View>
                  <View style={styles.parentFrameFlexBox}>
                    <Text style={styles.bloodPressure}>SPO2</Text>
                    <Text style={[styles.bpm, styles.bpmTypo]}>(%)</Text>
                  </View>
                  <View style={[styles.minParent, styles.parentFrameFlexBox]}>
                    <Text style={[styles.min, styles.minLayout]}>Min</Text>
                    <Text style={[styles.average, styles.text1Layout]}>
                      Average
                    </Text>
                    <Text style={[styles.average, styles.text1Layout]}>
                      Max
                    </Text>
                  </View>
                </View>
                <View style={styles.parent}>
                  <Text style={[styles.text, styles.textTypo]}>96</Text>
                  <Text style={[styles.text1, styles.textTypo]}>98</Text>
                  <Text style={[styles.text1, styles.textTypo]}>99</Text>
                </View>
              </View>
              <Image
                style={[styles.angleRight3Icon, styles.angleIconLayout]}
                resizeMode="cover"
                source={require("../assets/angleright-1.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.weightIndex1, styles.indexShadowBox]}>
          <View style={[styles.weightParent, styles.parentFrameFlexBox]}>
            <Image
              style={styles.bloodPressureIcon}
              resizeMode="cover"
              source={require("../assets/weight.png")}
            />
            <View style={[styles.frameParent6, styles.parentFrameFlexBox]}>
              <View>
                <View>
                  <View style={styles.parentFrameFlexBox}>
                    <Text style={styles.bloodPressure}>Weight</Text>
                    <Text style={[styles.bpm, styles.bpmTypo]}>(Kg)</Text>
                  </View>
                  <View style={[styles.minParent, styles.parentFrameFlexBox]}>
                    <Text style={[styles.min, styles.minLayout]}>Min</Text>
                    <Text style={[styles.average, styles.text1Layout]}>
                      Average
                    </Text>
                    <Text style={[styles.average, styles.text1Layout]}>
                      Max
                    </Text>
                  </View>
                </View>
                <View style={styles.parent}>
                  <Text style={[styles.text, styles.textTypo]}>45</Text>
                  <Text style={[styles.text1, styles.textTypo]}>45</Text>
                  <Text style={[styles.text1, styles.textTypo]}>46</Text>
                </View>
              </View>
              <Image
                style={[styles.angleRight3Icon, styles.angleIconLayout]}
                resizeMode="cover"
                source={require("../assets/angleright-1.png")}
              />
            </View>
          </View>
        </View>
        <Pressable
          style={[styles.add2Parent, styles.parentFrameFlexBox]}
          onPress={() => navigation.navigate("SettingHealthIndexView")}
        >
          <Image
            style={[styles.add2Icon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/add-2.png")}
          />
          <Text style={[styles.addMoreIndexes, styles.viewOthersTypo]}>
            Add more indexes
          </Text>
        </Pressable>
        <View style={styles.component32}>
          <View
            style={[styles.component32Child, styles.component32ChildBorder]}
          />
          <Text style={[styles.textField, styles.textTypo]}>
            Manual measure
          </Text>
        </View>
      </Pressable>
      <View style={styles.angleRight2Parent}>
        <Image
          style={[styles.angleRight3Icon, styles.angleIconLayout]}
          resizeMode="cover"
          source={require("../assets/angleright-21.png")}
        />
        <View style={styles.ellipseParent}>
          <Image
            style={[styles.instanceChild, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-1599.png")}
          />
          <Text style={[styles.text13, styles.textFlexBox1]}>3</Text>
        </View>
        <View style={styles.ellipseParent}>
          <Image
            style={[styles.instanceChild, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-1599.png")}
          />
          <Text style={[styles.text13, styles.textFlexBox1]}>4</Text>
        </View>
        <View style={styles.ellipseParent}>
          <Image
            style={[styles.instanceChild, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-1599.png")}
          />
          <Text style={[styles.text13, styles.textFlexBox1]}>5</Text>
        </View>
        <View style={styles.ellipseParent}>
          <Image
            style={[styles.instanceChild, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-1600.png")}
          />
          <Text style={[styles.text16, styles.textFlexBox1]}>6</Text>
        </View>
        <View style={styles.ellipseParent}>
          <Image
            style={[styles.instanceChild, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-1599.png")}
          />
          <Text style={[styles.text13, styles.textFlexBox1]}>7</Text>
        </View>
        <View style={styles.ellipseParent}>
          <Image
            style={[styles.instanceChild, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-1599.png")}
          />
          <Text style={[styles.text13, styles.textFlexBox1]}>8</Text>
        </View>
        <View style={styles.ellipseParent}>
          <Image
            style={[styles.instanceChild, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-1599.png")}
          />
          <Text style={[styles.text13, styles.textFlexBox1]}>9</Text>
        </View>
        <Image
          style={[styles.angleRight1Icon1, styles.angleIconLayout]}
          resizeMode="cover"
          source={require("../assets/angleright-11.png")}
        />
      </View>
      <View style={[styles.uilcalendarAltParent, styles.chevronLeftPosition]}>
        <Image
          style={[styles.uilcalendarAltIcon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/uilcalendaralt.png")}
        />
        <Text style={[styles.viewOthers, styles.viewOthersTypo]}>
          View others
        </Text>
      </View>
      <View style={[styles.groupParent, styles.parentPosition1]}>
        <View style={styles.rectangleParent}>
          <View style={[styles.groupChild, styles.groupPosition]} />
          <Text style={[styles.indexInformation, styles.signUpTypo]}>
            Index Information
          </Text>
          <Image
            style={styles.groupItem}
            resizeMode="cover"
            source={require("../assets/line-6.png")}
          />
        </View>
        <Pressable
          style={styles.rectangleParent}
          onPress={() => navigation.navigate("PillReminder1")}
        >
          <View style={[styles.groupInner, styles.groupPosition]} />
          <Text style={[styles.pillReminder, styles.pillReminderPosition]}>
            Pill Reminder
          </Text>
          <Image
            style={styles.lineIcon}
            resizeMode="cover"
            source={require("../assets/line-6.png")}
          />
        </Pressable>
      </View>
      <View style={styles.overviewHealthIndexChild} />
      <View style={[styles.component27, styles.frameChildPosition]}>
        <Pressable
          style={styles.rectangleLayout}
          onPress={() => navigation.navigate("Home")}
        >
          <View style={[styles.rectangleView, styles.rectangleLayout]} />
          <Image
            style={[styles.home1Icon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/home-11.png")}
          />
        </Pressable>
        <View style={styles.rectangleLayout}>
          <LinearGradient
            style={[styles.rectangleLineargradient, styles.rectangleLayout]}
            locations={[0, 1]}
            colors={["rgba(84, 222, 253, 0.4)", "rgba(84, 222, 253, 0)"]}
            useAngle={true}
            angle={182.4}
          />
          <Image
            style={[styles.home1Icon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/pharmacy-1-2.png")}
          />
        </View>
        <Pressable
          style={styles.rectangleLayout}
          onPress={() => navigation.navigate("Suggest")}
        >
          <View style={[styles.rectangleView, styles.rectangleLayout]} />
          <Image
            style={[styles.home1Icon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/handholdingheart-2.png")}
          />
        </Pressable>
        <Pressable
          style={styles.rectangleLayout}
          onPress={() => navigation.navigate("Connections1")}
        >
          <View style={[styles.rectangleView, styles.rectangleLayout]} />
          <Image
            style={[styles.home1Icon, styles.iconLayout1]}
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
            style={[styles.home1Icon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/bell.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.component38, styles.rectanglePosition]}>
        <View style={styles.component38Child} />
        <View style={styles.statusBarwhitebase}>
          <Image
            style={[styles.instanceChild, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/background.png")}
          />
          <View style={[styles.charge, styles.gsPosition]}>
            <Image
              style={[styles.batteryIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/battery-icon.png")}
            />
            <Text style={[styles.text20, styles.textFlexBox]}>58 %</Text>
          </View>
          <Image
            style={styles.bluetoothIcon}
            resizeMode="cover"
            source={require("../assets/bluetooth-icon.png")}
          />
          <Text style={[styles.text21, styles.textFlexBox]}>9:41 AM</Text>
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
        <View style={styles.rectangleParent4}>
          <View style={[styles.frameChild, styles.frameChildPosition]} />
          <Pressable
            style={[styles.chevronLeft, styles.chevronLeftPosition]}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/chevronleft.png")}
            />
          </Pressable>
          <Text style={[styles.signUp, styles.signUpTypo]}>Health Index</Text>
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
            source={require("../assets/chat-12.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentPosition1: {
    marginLeft: -171.5,
    left: "50%",
    position: "absolute",
  },
  parentFrameFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  mmhgTypo: {
    lineHeight: 27,
    textAlign: "left",
    fontFamily: FontFamily.text1,
  },
  minLayout: {
    height: 15,
    width: 80,
    display: "flex",
    textAlign: "left",
    alignItems: "center",
  },
  text1Layout: {
    marginLeft: 9,
    height: 15,
    width: 80,
    display: "flex",
    textAlign: "left",
    alignItems: "center",
  },
  textTypo: {
    fontFamily: FontFamily.heading3,
    fontWeight: "600",
    fontSize: FontSize.heading3_size,
  },
  angleIconLayout: {
    height: 16,
    width: 16,
  },
  indexShadowBox: {
    height: 102,
    elevation: 9,
    shadowRadius: 9,
    shadowColor: "rgba(26, 26, 26, 0.12)",
    width: 343,
    shadowOpacity: 1,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    borderRadius: Border.br_5xs,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  bpmTypo: {
    fontSize: FontSize.text1_size,
    fontFamily: FontFamily.text1,
  },
  iconLayout1: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  viewOthersTypo: {
    fontFamily: FontFamily.interRegularItalic,
    fontStyle: "italic",
    color: Color.dimgray,
    fontSize: FontSize.notice_size,
  },
  component32ChildBorder: {
    borderColor: "#49c6e5",
    borderStyle: "solid",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  textFlexBox1: {
    height: "62.5%",
    justifyContent: "center",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    position: "absolute",
  },
  chevronLeftPosition: {
    left: 16,
    position: "absolute",
  },
  groupPosition: {
    backgroundColor: Color.whitesmoke,
    height: 34,
    width: 172,
    left: 0,
    top: 0,
    position: "absolute",
  },
  signUpTypo: {
    fontFamily: FontFamily.heading4,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  pillReminderPosition: {
    top: 11,
    fontSize: FontSize.heading4_size,
  },
  frameChildPosition: {
    borderStyle: "solid",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  rectangleLayout: {
    height: 56,
    width: 75,
  },
  rectanglePosition: {
    left: 0,
    top: 0,
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
  bloodPressureIcon: {
    width: 45,
    height: 45,
  },
  bloodPressure: {
    textAlign: "left",
    color: Color.sub2,
    fontFamily: FontFamily.text1,
    fontSize: FontSize.heading3_size,
  },
  mmhg: {
    color: Color.sub3,
    fontSize: FontSize.heading4_size,
    lineHeight: 27,
    marginLeft: 8,
  },
  min: {
    color: Color.dimgray,
    fontSize: FontSize.notice_size,
    fontFamily: FontFamily.text1,
  },
  average: {
    color: Color.dimgray,
    fontSize: FontSize.notice_size,
    fontFamily: FontFamily.text1,
  },
  minParent: {
    marginTop: 16,
  },
  text: {
    height: 15,
    width: 80,
    display: "flex",
    textAlign: "left",
    alignItems: "center",
    color: Color.sub3,
  },
  text1: {
    marginLeft: 9,
    height: 15,
    width: 80,
    display: "flex",
    textAlign: "left",
    alignItems: "center",
    color: Color.sub3,
  },
  parent: {
    marginTop: 8,
    flexDirection: "row",
  },
  angleRight3Icon: {
    overflow: "hidden",
  },
  frameParent: {
    marginLeft: 8,
  },
  bloodPressureParent: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_5xs,
    alignItems: "center",
    left: 0,
    top: 0,
    position: "absolute",
  },
  bpm: {
    color: Color.sub3,
    textAlign: "left",
    marginLeft: 8,
  },
  heartParent: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_5xs,
    alignItems: "center",
    left: 0,
    top: 0,
    position: "absolute",
    borderRadius: Border.br_5xs,
  },
  hrIndex1: {
    marginTop: 16,
  },
  spo2Index1: {
    marginTop: 16,
  },
  frameParent6: {
    marginLeft: 8,
    backgroundColor: Color.white,
  },
  weightParent: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_5xs,
    alignItems: "center",
    left: 0,
    top: 0,
    position: "absolute",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.white,
  },
  weightIndex1: {
    marginTop: 16,
  },
  add2Icon: {
    height: 24,
  },
  addMoreIndexes: {
    textAlign: "center",
    marginLeft: 8,
  },
  add2Parent: {
    paddingHorizontal: Padding.p_68xl,
    paddingVertical: Padding.p_5xs,
    marginTop: 16,
  },
  component32Child: {
    borderWidth: 1,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    borderRadius: Border.br_5xs,
    width: "100%",
    backgroundColor: Color.white,
  },
  textField: {
    marginTop: -13,
    marginLeft: -88.5,
    top: "50%",
    color: Color.skyblue_200,
    textAlign: "center",
    left: "50%",
    position: "absolute",
  },
  component32: {
    height: 48,
    marginTop: 16,
    width: 343,
  },
  blIndex1Parent: {
    top: 230,
    left: "50%",
  },
  instanceChild: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  text13: {
    marginLeft: -15,
    top: "15.63%",
    width: 30,
    fontSize: FontSize.text1_size,
    fontFamily: FontFamily.text1,
    color: Color.dimgray,
    left: "50%",
  },
  ellipseParent: {
    width: 32,
    height: 32,
    marginLeft: 8,
  },
  text16: {
    width: "93.75%",
    top: "18.75%",
    left: "3.13%",
    fontWeight: "700",
    fontFamily: FontFamily.heading1,
    color: Color.white,
    fontSize: FontSize.notice_size,
  },
  angleRight1Icon1: {
    marginLeft: 8,
    overflow: "hidden",
  },
  angleRight2Parent: {
    marginLeft: -159.5,
    top: 142,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  uilcalendarAltIcon: {
    height: 24,
    left: 0,
    top: 0,
    position: "absolute",
  },
  viewOthers: {
    top: 6,
    left: 32,
    textAlign: "left",
    position: "absolute",
  },
  uilcalendarAltParent: {
    top: 190,
    width: 123,
    height: 24,
  },
  groupChild: {
    borderTopLeftRadius: Border.br_5xs,
    borderBottomLeftRadius: Border.br_5xs,
  },
  indexInformation: {
    left: 10,
    top: 11,
    fontSize: FontSize.heading4_size,
    color: Color.skyblue_200,
  },
  groupItem: {
    top: 33,
    left: 7,
    width: 164,
    height: 1,
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
  pillReminder: {
    left: 30,
    color: Color.black,
    lineHeight: 27,
    textAlign: "left",
    fontFamily: FontFamily.text1,
    position: "absolute",
  },
  lineIcon: {
    top: 34,
    left: 173,
    width: 163,
    height: 0,
    display: "none",
    position: "absolute",
  },
  groupParent: {
    top: 92,
    flexDirection: "row",
    left: "50%",
  },
  overviewHealthIndexChild: {
    top: 111,
    left: 126,
    width: 62,
    height: 62,
    position: "absolute",
    overflow: "hidden",
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
    height: 24,
    position: "absolute",
  },
  rectangleLineargradient: {
    backgroundColor: "transparent",
    borderTopWidth: 1.5,
    borderColor: "#49c6e5",
    borderStyle: "solid",
    position: "absolute",
    left: 0,
    top: 0,
  },
  component27: {
    bottom: 2,
    borderColor: "#666",
    borderTopWidth: 1,
    flexDirection: "row",
  },
  component38Child: {
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowRadius: 10,
    elevation: 10,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    position: "absolute",
    width: "100%",
    backgroundColor: Color.white,
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
  text20: {
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
  text21: {
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
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  frameChild: {
    borderColor: "rgba(26, 26, 26, 0.4)",
    borderBottomWidth: 1,
    bottom: "0%",
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
    top: 20,
    height: 16,
    width: 16,
  },
  signUp: {
    top: 18,
    left: 72,
    fontSize: FontSize.heading1_size,
    textTransform: "capitalize",
    color: Color.sub2,
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
  rectangleParent4: {
    height: "73.68%",
    top: "26.32%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
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
  component38: {
    width: 375,
    height: 76,
    position: "absolute",
  },
  overviewHealthIndex: {
    flex: 1,
    height: 888,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default OverviewHealthIndex2;

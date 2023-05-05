import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const Request5 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.request}>
      <View style={styles.elderlyStatusParent}>
        <Text style={styles.elderlyStatus}>Elderly Status</Text>
        <View style={[styles.component37, styles.componentLayout]}>
          <View style={[styles.component37Child, styles.childBorder]} />
          <Text style={[styles.textFill, styles.textTypo]}>Elderly’s Name</Text>
        </View>
        <View style={[styles.component37, styles.componentLayout]}>
          <View style={[styles.component37Child, styles.childBorder]} />
          <Text style={[styles.textFill, styles.textTypo]}>Age</Text>
          <Image
            style={[styles.angleDown2Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/angledown-21.png")}
          />
        </View>
        <View style={[styles.component37, styles.componentLayout]}>
          <View style={[styles.component37Child, styles.childBorder]} />
          <View style={[styles.textFillParent, styles.parentPosition1]}>
            <Text style={styles.textTypo}>Diseases</Text>
            <Image
              style={styles.mdirequiredIcon}
              resizeMode="cover"
              source={require("../assets/mdirequired1.png")}
            />
          </View>
          <Image
            style={[styles.angleDown2Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/angledown-21.png")}
          />
        </View>
        <View style={[styles.rectangleParent, styles.groupChildLayout]}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <Text style={styles.note}>Note</Text>
        </View>
      </View>
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
        <View style={[styles.rectangleGroup, styles.childPosition]}>
          <View style={styles.frameChild} />
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
          <View style={[styles.angleRight2Parent, styles.parentPosition1]}>
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
            <Text style={[styles.signUp, styles.text1Typo]}>Add Request</Text>
            <Pressable
              style={styles.chat1}
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
      <Pressable
        style={[styles.jobDetailParent, styles.parentPosition]}
        onPress={() => navigation.navigate("Request2")}
      >
        <Text style={styles.elderlyStatus}>Job Detail</Text>
        <View style={[styles.component37, styles.componentLayout]}>
          <View style={[styles.component37Child, styles.childBorder]} />
          <View style={[styles.textFillParent, styles.parentPosition1]}>
            <Text style={styles.textTypo}>Date</Text>
            <Image
              style={styles.mdirequiredIcon}
              resizeMode="cover"
              source={require("../assets/mdirequired1.png")}
            />
          </View>
          <Image
            style={[styles.angleDown2Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/angledown-21.png")}
          />
        </View>
        <View style={[styles.component37, styles.componentLayout]}>
          <View style={[styles.component37Child, styles.childBorder]} />
          <View style={[styles.textFillParent, styles.parentPosition1]}>
            <Text style={styles.textTypo}>Time</Text>
            <Image
              style={styles.mdirequiredIcon}
              resizeMode="cover"
              source={require("../assets/mdirequired1.png")}
            />
          </View>
          <Image
            style={[styles.angleDown2Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/angledown-21.png")}
          />
        </View>
        <View style={styles.instanceParent}>
          <View style={styles.tick1Wrapper}>
            <View style={styles.chevronLeftLayout}>
              <View style={[styles.tick1Child, styles.tick1Position]} />
              <Image
                style={[styles.tick1Item, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/vector-221.png")}
              />
            </View>
          </View>
          <Text style={styles.useMyDefault}>{`Use my default address `}</Text>
        </View>
        <View style={styles.instanceParent}>
          <View style={styles.tick1Wrapper}>
            <View style={styles.chevronLeftLayout}>
              <View style={[styles.tick1Inner, styles.tick1Position]} />
              <Image
                style={[styles.tick1Item, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/vector-221.png")}
              />
            </View>
          </View>
          <Text style={styles.chooseAnotherAddress}>
            Choose another address
          </Text>
        </View>
        <View style={[styles.component37, styles.componentLayout]}>
          <View style={[styles.component37Child, styles.childBorder]} />
          <View style={[styles.textFillParent, styles.parentPosition1]}>
            <Text style={styles.textTypo}>Offered Price</Text>
            <Image
              style={styles.mdirequiredIcon}
              resizeMode="cover"
              source={require("../assets/mdirequired1.png")}
            />
          </View>
          <Image
            style={[styles.angleDown2Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/angledown-21.png")}
          />
        </View>
        <View style={[styles.rectangleParent, styles.groupChildLayout]}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <Text style={styles.jobDescription}>Job description</Text>
        </View>
        <View style={[styles.component32, styles.componentLayout]}>
          <View style={styles.component32Child} />
          <Text style={styles.textField}>Finish</Text>
        </View>
      </Pressable>
      <View
        style={[styles.elderlySitterRequirementParent, styles.parentPosition]}
      >
        <Text style={styles.elderlyStatus}>Elderly Sitter Requirement</Text>
        <View style={[styles.component37, styles.componentLayout]}>
          <View style={[styles.component37Child, styles.childBorder]} />
          <Text style={[styles.textFill, styles.textTypo]}>Age</Text>
          <Image
            style={[styles.angleDown2Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/angledown-21.png")}
          />
        </View>
        <View style={[styles.component37, styles.componentLayout]}>
          <View style={[styles.component37Child, styles.childBorder]} />
          <Text style={[styles.textFill, styles.textTypo]}>Gender</Text>
          <Image
            style={[styles.angleDown2Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/angledown-21.png")}
          />
        </View>
        <View style={[styles.component37, styles.componentLayout]}>
          <View style={[styles.component37Child, styles.childBorder]} />
          <Text style={[styles.textFill, styles.textTypo]}>
            Year of Experience
          </Text>
          <Image
            style={[styles.angleDown2Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/angledown-21.png")}
          />
        </View>
        <View style={[styles.component37, styles.componentLayout]}>
          <View style={[styles.component37Child, styles.childBorder]} />
          <View style={[styles.textFillParent, styles.parentPosition1]}>
            <Text style={styles.textTypo}>Skills</Text>
            <Image
              style={styles.mdirequiredIcon}
              resizeMode="cover"
              source={require("../assets/mdirequired1.png")}
            />
          </View>
          <Image
            style={[styles.angleDown2Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/angledown-21.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  componentLayout: {
    width: 343,
    marginTop: 16,
  },
  childBorder: {
    borderWidth: 1,
    borderColor: "#a3a3a3",
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
  },
  textTypo: {
    color: Color.darkgray_100,
    fontFamily: FontFamily.text1,
    fontSize: FontSize.text1_size,
    textAlign: "left",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  parentPosition1: {
    left: 24,
    flexDirection: "row",
    position: "absolute",
  },
  groupChildLayout: {
    height: 80,
    width: 343,
  },
  groupChildPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  childPosition: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    width: "100%",
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
  chevronLeftLayout: {
    height: 16,
    width: 16,
  },
  parentPosition: {
    left: 16,
    position: "absolute",
  },
  tick1Position: {
    borderRadius: Border.br_12xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  elderlyStatus: {
    textAlign: "left",
    color: Color.sub2,
    fontFamily: FontFamily.heading3,
    fontWeight: "600",
    fontSize: FontSize.heading3_size,
  },
  component37Child: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  textFill: {
    top: "34.09%",
    left: "7%",
    position: "absolute",
  },
  component37: {
    height: 44,
    marginTop: 16,
  },
  angleDown2Icon: {
    height: "36.36%",
    width: "4.66%",
    top: "31.82%",
    right: "7%",
    bottom: "31.82%",
    left: "88.34%",
  },
  mdirequiredIcon: {
    height: 8,
    marginLeft: 3,
    width: 8,
    overflow: "hidden",
  },
  textFillParent: {
    top: 15,
    flexDirection: "row",
  },
  groupChild: {
    height: 80,
    width: 343,
    borderWidth: 1,
    borderColor: "#a3a3a3",
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
  },
  note: {
    left: 25,
    width: 48,
    alignItems: "center",
    display: "flex",
    top: 13,
    color: Color.darkgray_100,
    fontFamily: FontFamily.text1,
    fontSize: FontSize.text1_size,
    textAlign: "left",
    position: "absolute",
  },
  rectangleParent: {
    marginTop: 16,
  },
  elderlyStatusParent: {
    marginLeft: -171.5,
    top: 100,
    left: "50%",
    position: "absolute",
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
    height: 13,
    opacity: 0.45,
    width: 8,
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
    borderColor: "rgba(26, 26, 26, 0.4)",
    borderBottomWidth: 1,
    borderStyle: "solid",
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
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
    width: 24,
    height: 24,
    marginLeft: 8,
  },
  angleRight2Parent: {
    top: 8,
    alignItems: "center",
    flexDirection: "row",
  },
  rectangleGroup: {
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
  tick1Child: {
    backgroundColor: Color.sub2,
  },
  tick1Item: {
    height: "65.87%",
    width: "76.25%",
    top: "16.88%",
    right: "11.88%",
    bottom: "17.25%",
    left: "11.87%",
    borderRadius: Border.br_12xs_1,
  },
  tick1Wrapper: {
    padding: Padding.p_9xs,
    flexDirection: "row",
  },
  useMyDefault: {
    marginLeft: 8,
    fontFamily: FontFamily.text1,
    fontSize: FontSize.text1_size,
    textAlign: "left",
    color: Color.sub2,
  },
  instanceParent: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: 16,
  },
  tick1Inner: {
    backgroundColor: Color.white,
  },
  chooseAnotherAddress: {
    fontSize: FontSize.notice_size,
    fontStyle: "italic",
    fontFamily: FontFamily.interRegularItalic,
    color: Color.dimgray,
    marginLeft: 8,
    textAlign: "left",
  },
  jobDescription: {
    top: 13,
    left: 24,
    color: Color.darkgray_100,
    fontFamily: FontFamily.text1,
    fontSize: FontSize.text1_size,
    textAlign: "left",
    position: "absolute",
  },
  component32Child: {
    backgroundColor: Color.skyblue_200,
    borderRadius: Border.br_5xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  textField: {
    marginTop: -13,
    marginLeft: -32.5,
    top: "50%",
    color: Color.white,
    textAlign: "center",
    fontFamily: FontFamily.heading3,
    fontWeight: "600",
    fontSize: FontSize.heading3_size,
    left: "50%",
    position: "absolute",
  },
  component32: {
    height: 48,
    marginTop: 16,
  },
  jobDetailParent: {
    top: 696,
  },
  elderlySitterRequirementParent: {
    top: 416,
  },
  request: {
    flex: 1,
    height: 1156,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Request5;

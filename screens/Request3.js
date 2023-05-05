import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const Request3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.request}>
      <View style={[styles.elderlyStatusParent, styles.chevronLeftPosition]}>
        <Text style={styles.elderlyStatus}>Elderly Status</Text>
        <View style={styles.component37}>
          <View style={[styles.component37Child, styles.childBorder]} />
          <Text style={[styles.textFill, styles.textTypo]}>Sarah Kim</Text>
          <Text style={[styles.title, styles.titleTypo]}>Elderly’s Name</Text>
        </View>
        <View style={[styles.component371, styles.componentLayout]}>
          <View style={[styles.component37Item, styles.childBorder]} />
          <Text style={[styles.textFill1, styles.textTypo]}>65 years old</Text>
          <Image
            style={[styles.angleDown2Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/angledown-21.png")}
          />
          <Text style={[styles.title, styles.titleTypo]}>Age</Text>
        </View>
        <View style={[styles.component371, styles.componentLayout]}>
          <View style={[styles.component37Item, styles.childBorder]} />
          <Text style={[styles.textFill1, styles.textTypo]}>
            High blood sugar
          </Text>
          <Image
            style={[styles.angleDown2Icon1, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/angledown-21.png")}
          />
          <View style={[styles.titleParent, styles.titlePosition]}>
            <Text style={[styles.title2, styles.titleTypo]}>Diseases</Text>
            <Image
              style={styles.mdirequiredIcon}
              resizeMode="cover"
              source={require("../assets/mdirequired.png")}
            />
          </View>
        </View>
        <Text style={[styles.note, styles.titleTypo]}>Note</Text>
        <View style={[styles.rectangleParent, styles.groupLayout]}>
          <View style={[styles.groupChild, styles.groupPosition]} />
          <Text style={styles.kindOfHard}>Kind of hard</Text>
        </View>
      </View>
      <View style={[styles.component38, styles.groupPosition]}>
        <View style={[styles.component38Child, styles.textChildPosition]} />
        <View style={[styles.statusBarwhitebase, styles.textChildPosition]}>
          <Image
            style={[styles.backgroundIcon, styles.textChildPosition]}
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
        <View style={[styles.rectangleGroup, styles.component37Position]}>
          <View style={[styles.frameChild, styles.textChildPosition]} />
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
      <View
        style={[styles.elderlySitterRequirementParent, styles.parentPosition]}
      >
        <Text style={styles.elderlyStatus}>Elderly Sitter Requirement</Text>
        <View style={[styles.textField4, styles.componentLayout]}>
          <View style={[styles.textField4Child, styles.groupItemBorder]} />
          <Text style={[styles.textFill3, styles.textFill3Typo]}>Age</Text>
          <Image
            style={[styles.angleDown2Icon2, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/angledown-21.png")}
          />
        </View>
        <View style={[styles.textField4, styles.componentLayout]}>
          <View style={[styles.textField4Child, styles.groupItemBorder]} />
          <Text style={[styles.textFill3, styles.textFill3Typo]}>Gender</Text>
          <Image
            style={[styles.angleDown2Icon2, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/angledown-21.png")}
          />
        </View>
        <View style={[styles.textField4, styles.componentLayout]}>
          <View style={[styles.textField4Child, styles.groupItemBorder]} />
          <Text style={[styles.textFill3, styles.textFill3Typo]}>
            Year of Experience
          </Text>
          <Image
            style={[styles.angleDown2Icon2, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/angledown-21.png")}
          />
        </View>
        <View style={[styles.component371, styles.componentLayout]}>
          <View style={[styles.component37Item, styles.childBorder]} />
          <Text style={[styles.textFill1, styles.textTypo]}>Cooking</Text>
          <Image
            style={[styles.angleDown2Icon1, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/angledown-21.png")}
          />
          <View style={[styles.titleParent, styles.titlePosition]}>
            <Text style={[styles.title2, styles.titleTypo]}>Skills</Text>
            <Image
              style={styles.mdirequiredIcon}
              resizeMode="cover"
              source={require("../assets/mdirequired.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.jobDetailParent, styles.parentPosition]}>
        <Text style={styles.elderlyStatus}>Job Detail</Text>
        <View style={[styles.component371, styles.componentLayout]}>
          <View style={[styles.component37Item, styles.childBorder]} />
          <Text style={[styles.textFill1, styles.textTypo]}>11/03/2023</Text>
          <Image
            style={[styles.angleDown2Icon1, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/angledown-21.png")}
          />
          <View style={[styles.titleParent, styles.titlePosition]}>
            <Text style={[styles.title2, styles.titleTypo]}>Date</Text>
            <Image
              style={styles.mdirequiredIcon}
              resizeMode="cover"
              source={require("../assets/mdirequired.png")}
            />
          </View>
        </View>
        <View style={[styles.component371, styles.componentLayout]}>
          <View style={[styles.component37Item, styles.childBorder]} />
          <Text style={[styles.textFill1, styles.textTypo]}>10:00 - 13:00</Text>
          <Image
            style={[styles.angleDown2Icon1, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/angledown-21.png")}
          />
          <View style={[styles.titleParent, styles.titlePosition]}>
            <Text style={[styles.title2, styles.titleTypo]}>Time</Text>
            <Image
              style={styles.mdirequiredIcon}
              resizeMode="cover"
              source={require("../assets/mdirequired.png")}
            />
          </View>
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
          <Text style={[styles.chooseAnotherAddress, styles.titleTypo]}>
            Choose another address
          </Text>
        </View>
        <View style={[styles.component371, styles.componentLayout]}>
          <View style={[styles.component37Item, styles.childBorder]} />
          <Text style={[styles.textFill1, styles.textTypo]}>$35/hr</Text>
          <Image
            style={[styles.angleDown2Icon1, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/angledown-21.png")}
          />
          <View style={[styles.titleParent, styles.titlePosition]}>
            <Text style={[styles.title2, styles.titleTypo]}>Offered Price</Text>
            <Image
              style={styles.mdirequiredIcon}
              resizeMode="cover"
              source={require("../assets/mdirequired.png")}
            />
          </View>
        </View>
        <View style={[styles.rectangleParent, styles.groupLayout]}>
          <View style={[styles.groupItem, styles.groupItemBorder]} />
          <Text style={[styles.jobDescription, styles.textFill3Typo]}>
            Job description
          </Text>
        </View>
        <Pressable
          style={[styles.component32, styles.componentLayout]}
          onPress={() => navigation.navigate("Request")}
        >
          <View style={[styles.component32Child, styles.textChildPosition]} />
          <Text style={[styles.textField, styles.parentPosition]}>Finish</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chevronLeftPosition: {
    left: 16,
    position: "absolute",
  },
  childBorder: {
    borderWidth: 1,
    borderColor: "#333",
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  textTypo: {
    color: Color.sub3,
    fontFamily: FontFamily.text1,
    fontSize: FontSize.text1_size,
    top: "55.38%",
    textAlign: "left",
    position: "absolute",
  },
  titleTypo: {
    color: Color.dimgray,
    fontSize: FontSize.notice_size,
    textAlign: "left",
  },
  componentLayout: {
    width: 343,
    marginTop: 16,
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  titlePosition: {
    left: 0,
    position: "absolute",
  },
  groupLayout: {
    height: 80,
    width: 343,
  },
  groupPosition: {
    top: 0,
    left: 0,
  },
  textChildPosition: {
    top: "0%",
    left: "0%",
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
  component37Position: {
    left: "0%",
    bottom: "0%",
  },
  chevronLeftLayout: {
    height: 16,
    width: 16,
  },
  parentPosition: {
    left: "50%",
    position: "absolute",
  },
  groupItemBorder: {
    borderColor: "#a3a3a3",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  textFill3Typo: {
    color: Color.darkgray_100,
    fontFamily: FontFamily.text1,
    fontSize: FontSize.text1_size,
    textAlign: "left",
    position: "absolute",
  },
  tick1Position: {
    borderRadius: Border.br_12xs,
    top: "0%",
    height: "100%",
    right: "0%",
    left: "0%",
    bottom: "0%",
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
    width: "104.89%",
    right: "-4.89%",
    left: "0%",
    bottom: "0%",
    top: "32.31%",
    height: "67.69%",
    borderColor: "#333",
  },
  textFill: {
    left: "7.34%",
  },
  title: {
    top: 1,
    left: 0,
    position: "absolute",
    fontFamily: FontFamily.heading3,
    fontWeight: "600",
  },
  component37: {
    width: 327,
    marginTop: 16,
    height: 65,
  },
  component37Item: {
    right: "0%",
    left: "0%",
    bottom: "0%",
    top: "32.31%",
    height: "67.69%",
    borderColor: "#333",
    width: "100%",
  },
  textFill1: {
    left: "7%",
  },
  angleDown2Icon: {
    bottom: "20%",
    left: "88.34%",
    right: "7%",
    width: "4.66%",
    maxWidth: "100%",
    height: "24.62%",
    top: "55.38%",
  },
  component371: {
    height: 65,
  },
  angleDown2Icon1: {
    top: "53.85%",
    bottom: "21.54%",
    left: "88.34%",
    right: "7%",
    width: "4.66%",
    maxWidth: "100%",
    height: "24.62%",
  },
  title2: {
    fontFamily: FontFamily.heading3,
    fontWeight: "600",
  },
  mdirequiredIcon: {
    width: 4,
    height: 4,
    marginLeft: 4,
    overflow: "hidden",
  },
  titleParent: {
    marginTop: -31.5,
    flexDirection: "row",
    top: "50%",
  },
  note: {
    marginTop: 16,
    fontFamily: FontFamily.heading3,
    fontWeight: "600",
  },
  groupChild: {
    height: 80,
    width: 343,
    borderWidth: 1,
    borderColor: "#333",
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  kindOfHard: {
    left: 25,
    width: 122,
    alignItems: "center",
    display: "flex",
    top: 13,
    color: Color.sub3,
    fontFamily: FontFamily.text1,
    fontSize: FontSize.text1_size,
    textAlign: "left",
    position: "absolute",
  },
  rectangleParent: {
    marginTop: 16,
  },
  elderlyStatusParent: {
    top: 100,
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
    height: "100%",
    right: "0%",
    bottom: "0%",
    top: "0%",
    width: "100%",
    position: "absolute",
    backgroundColor: Color.white,
  },
  backgroundIcon: {
    height: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
    right: "0%",
    bottom: "0%",
    top: "0%",
    width: "100%",
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
    top: "0%",
    left: "0%",
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
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  frameChild: {
    borderColor: "rgba(26, 26, 26, 0.4)",
    borderBottomWidth: 1,
    height: "100%",
    right: "0%",
    borderStyle: "solid",
    top: "0%",
    bottom: "0%",
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
    left: 24,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  rectangleGroup: {
    height: "73.68%",
    top: "26.32%",
    right: "0%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.white,
  },
  component38: {
    width: 375,
    height: 76,
    position: "absolute",
  },
  textField4Child: {
    top: "0%",
    left: "0%",
    height: "100%",
    right: "0%",
    bottom: "0%",
    width: "100%",
  },
  textFill3: {
    top: "34.09%",
    left: "7%",
  },
  angleDown2Icon2: {
    height: "36.36%",
    top: "31.82%",
    bottom: "31.82%",
    left: "88.34%",
    right: "7%",
    width: "4.66%",
    maxWidth: "100%",
  },
  textField4: {
    height: 44,
  },
  elderlySitterRequirementParent: {
    top: 507,
    marginLeft: -171.5,
    left: "50%",
  },
  tick1Child: {
    backgroundColor: Color.sub2,
  },
  tick1Item: {
    height: "65.87%",
    width: "76.25%",
    top: "16.88%",
    right: "11.87%",
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
    fontStyle: "italic",
    fontFamily: FontFamily.interRegularItalic,
    marginLeft: 8,
  },
  groupItem: {
    top: 0,
    left: 0,
    height: 80,
    width: 343,
  },
  jobDescription: {
    left: 24,
    top: 13,
    color: Color.darkgray_100,
  },
  component32Child: {
    backgroundColor: Color.skyblue_200,
    height: "100%",
    right: "0%",
    borderRadius: Border.br_5xs,
    top: "0%",
    bottom: "0%",
    position: "absolute",
    width: "100%",
  },
  textField: {
    marginTop: -13,
    marginLeft: -32.5,
    color: Color.white,
    textAlign: "center",
    top: "50%",
    fontFamily: FontFamily.heading3,
    fontWeight: "600",
    left: "50%",
    fontSize: FontSize.heading3_size,
  },
  component32: {
    height: 48,
  },
  jobDetailParent: {
    top: 807,
    marginLeft: -171.5,
    left: "50%",
  },
  request: {
    flex: 1,
    height: 1327,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Request3;

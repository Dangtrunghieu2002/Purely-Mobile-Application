import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const PillReminder2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.pillReminder}>
      <Pressable
        style={[styles.component37Parent, styles.component32Position]}
        onPress={() => navigation.navigate("PillReminder")}
      >
        <View style={styles.componentLayout}>
          <View style={[styles.component37Child, styles.childPosition]} />
          <Text style={[styles.textFill, styles.endDateTypo]}>Start date</Text>
          <Image
            style={[styles.angleDown2Icon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/angledown-2.png")}
          />
        </View>
        <View style={[styles.component39, styles.componentLayout]}>
          <View style={[styles.component37Child, styles.childPosition]} />
          <Text style={[styles.textFill, styles.endDateTypo]}>
            Total remind
          </Text>
          <Image
            style={[styles.angleDown2Icon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/angledown-2.png")}
          />
        </View>
        <View style={styles.repeatOnParent}>
          <Text style={[styles.repeatOn, styles.atTimeTypo]}>Repeat on</Text>
          <View style={styles.allParent}>
            <Text style={[styles.all, styles.allTypo]}>Everyday</Text>
            <Image
              style={[styles.instanceChild, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/group-10028.png")}
            />
          </View>
          <View style={styles.allParent}>
            <Text style={[styles.all1, styles.allTypo]}>On specific days</Text>
            <Image
              style={[styles.instanceChild, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/group-100281.png")}
            />
          </View>
          <View style={styles.instanceParent}>
            <View style={styles.component7Layout}>
              <Image
                style={[styles.instanceInner, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/ellipse-15991.png")}
              />
              <Text style={styles.text}>2</Text>
            </View>
            <View style={[styles.component7, styles.component7Layout]}>
              <Image
                style={[styles.instanceInner, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/ellipse-16001.png")}
              />
              <Text style={styles.text1}>3</Text>
            </View>
            <View style={[styles.component7, styles.component7Layout]}>
              <Image
                style={[styles.instanceInner, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/ellipse-15991.png")}
              />
              <Text style={styles.text}>4</Text>
            </View>
            <View style={[styles.component7, styles.component7Layout]}>
              <Image
                style={[styles.instanceInner, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/ellipse-15991.png")}
              />
              <Text style={styles.text}>5</Text>
            </View>
            <View style={[styles.component7, styles.component7Layout]}>
              <Image
                style={[styles.instanceInner, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/ellipse-16001.png")}
              />
              <Text style={styles.text1}>6</Text>
            </View>
            <View style={[styles.component7, styles.component7Layout]}>
              <Image
                style={[styles.instanceInner, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/ellipse-15991.png")}
              />
              <Text style={styles.text}>7</Text>
            </View>
            <View style={[styles.component7, styles.component7Layout]}>
              <Image
                style={[styles.instanceInner, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/ellipse-15991.png")}
              />
              <Text style={styles.text}>8</Text>
            </View>
          </View>
          <Text style={[styles.atTime, styles.atTimeTypo]}>At time</Text>
          <View style={styles.allParent}>
            <View>
              <Text style={styles.text7Typo}>First time:</Text>
              <Text style={[styles.text7, styles.text7Typo]}>08:00</Text>
            </View>
            <View style={styles.doseParent}>
              <Text style={[styles.dose, styles.doseLayout]}>Dose:</Text>
              <Text style={[styles.text8, styles.doseLayout]}>1.00</Text>
            </View>
            <Image
              style={[styles.add3Icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/add-3.png")}
            />
          </View>
          <View style={styles.allParent}>
            <View>
              <Text style={styles.text7Typo}>Second time</Text>
              <Text style={[styles.text7, styles.text7Typo]}>16:00</Text>
            </View>
            <View style={styles.doseParent}>
              <Text style={[styles.dose, styles.doseLayout]}>Dose:</Text>
              <Text style={[styles.text8, styles.doseLayout]}>1.50</Text>
            </View>
            <Image
              style={[styles.add3Icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/add-3.png")}
            />
          </View>
          <View style={styles.allParent}>
            <Image
              style={[styles.add2Icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/add-2.png")}
            />
            <Text style={styles.addMoreTimes}>Add more times</Text>
          </View>
          <View style={styles.endDateParent}>
            <Text
              style={[styles.endDate, styles.endDateTypo]}
            >{`End date: `}</Text>
            <Text style={styles.endDate1}>{`End date: `}</Text>
          </View>
        </View>
        <View style={[styles.component39, styles.componentLayout]}>
          <View style={[styles.component37Child, styles.childPosition]} />
          <Text style={[styles.textFill, styles.endDateTypo]}>
            Notification before
          </Text>
          <Image
            style={[styles.angleDown2Icon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/angledown-2.png")}
          />
        </View>
        <View style={[styles.component39, styles.componentLayout]}>
          <View style={[styles.component37Child, styles.childPosition]} />
          <Text style={[styles.textFill, styles.endDateTypo]}>
            Dealy notification
          </Text>
          <Image
            style={[styles.angleDown2Icon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/angledown-21.png")}
          />
        </View>
        <Text style={[styles.addImage, styles.atTimeTypo]}>Add image</Text>
        <View style={[styles.rectangleParent, styles.groupChildLayout]}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <Image
            style={[styles.add2Icon1, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/add-2.png")}
          />
        </View>
      </Pressable>
      <View style={[styles.component38, styles.groupChildPosition]}>
        <View style={[styles.component38Child, styles.instanceInnerPosition]} />
        <View style={styles.statusBarwhitebase}>
          <Image
            style={[styles.instanceInner, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/background.png")}
          />
          <View style={[styles.charge, styles.gsPosition]}>
            <Image
              style={[styles.batteryIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/battery-icon.png")}
            />
            <Text style={[styles.text11, styles.textFlexBox]}>58 %</Text>
          </View>
          <Image
            style={styles.bluetoothIcon}
            resizeMode="cover"
            source={require("../assets/bluetooth-icon.png")}
          />
          <Text style={[styles.text12, styles.textFlexBox]}>9:41 AM</Text>
          <Image
            style={styles.wifiIcon}
            resizeMode="cover"
            source={require("../assets/wifi.png")}
          />
          <Text style={[styles.gs, styles.textFlexBox]}>GS</Text>
          <Image
            style={[styles.signalIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/signal.png")}
          />
        </View>
        <View style={[styles.rectangleGroup, styles.instanceInnerPosition]}>
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
          <View style={styles.angleRight2Parent}>
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
            <Text style={styles.signUp}>Add Reminder</Text>
            <Pressable
              style={[styles.chat1, styles.iconLayout]}
              onPress={() => navigation.navigate("ChatHome")}
            >
              <Image
                style={styles.icon2}
                resizeMode="cover"
                source={require("../assets/chat-11.png")}
              />
            </Pressable>
          </View>
        </View>
      </View>
      <Pressable
        style={[styles.component32, styles.component32Position]}
        onPress={() => navigation.navigate("PillReminder1")}
      >
        <View style={[styles.component32Child, styles.component32Layout]} />
        <Text style={[styles.textField, styles.textPosition]}>Save</Text>
        <View style={[styles.component32Item, styles.component32Layout]} />
        <Text style={[styles.textField1, styles.textPosition]}>Cancel</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  component32Position: {
    left: "50%",
    marginLeft: -171.5,
    position: "absolute",
  },
  childPosition: {
    borderStyle: "solid",
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  endDateTypo: {
    textAlign: "left",
    fontFamily: FontFamily.text1,
    fontSize: FontSize.text1_size,
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  componentLayout: {
    height: 44,
    width: 343,
  },
  atTimeTypo: {
    fontFamily: FontFamily.heading4,
    fontWeight: "500",
    fontSize: FontSize.heading4_size,
    color: Color.sub2,
    textAlign: "left",
  },
  allTypo: {
    zIndex: 1,
    width: 303,
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    fontFamily: FontFamily.text1,
    fontSize: FontSize.text1_size,
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  component7Layout: {
    height: 32,
    width: 32,
  },
  text7Typo: {
    height: 15,
    width: 183,
    color: Color.sub3,
    fontSize: FontSize.notice_size,
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    fontFamily: FontFamily.text1,
  },
  doseLayout: {
    width: 120,
    textAlign: "right",
    height: 15,
    color: Color.sub3,
    display: "flex",
    alignItems: "center",
    fontFamily: FontFamily.text1,
  },
  groupChildLayout: {
    width: 130,
    height: 70,
  },
  groupChildPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  instanceInnerPosition: {
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
    display: "flex",
    color: Color.sub2,
    textAlign: "left",
    position: "absolute",
  },
  chevronLeftLayout: {
    height: 16,
    width: 16,
  },
  component32Layout: {
    width: "47.67%",
    borderRadius: Border.br_5xs,
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  textPosition: {
    top: "50%",
    marginTop: -13,
    fontFamily: FontFamily.heading3,
    fontWeight: "600",
    fontSize: FontSize.heading3_size,
    textAlign: "center",
    left: "50%",
    position: "absolute",
  },
  component37Child: {
    borderColor: "#a3a3a3",
    borderWidth: 1,
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
  },
  textFill: {
    top: "34.09%",
    left: "7%",
    color: Color.darkgray_100,
    position: "absolute",
  },
  angleDown2Icon: {
    height: "36.36%",
    width: "4.66%",
    top: "31.82%",
    right: "7%",
    bottom: "31.82%",
    left: "88.34%",
  },
  component39: {
    marginTop: 16,
  },
  repeatOn: {
    color: Color.sub2,
  },
  all: {
    color: Color.dimgray,
  },
  instanceChild: {
    zIndex: 0,
    marginLeft: 16,
  },
  allParent: {
    marginTop: 12,
    alignItems: "center",
    flexDirection: "row",
  },
  all1: {
    color: Color.sub2,
  },
  instanceInner: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
    top: "0%",
    height: "100%",
  },
  text: {
    marginLeft: -15,
    top: "15.63%",
    color: Color.skyblue_200,
    width: 30,
    textAlign: "center",
    height: "62.5%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: FontFamily.text1,
    fontSize: FontSize.text1_size,
    left: "50%",
    position: "absolute",
  },
  text1: {
    width: "93.75%",
    top: "18.75%",
    left: "3.13%",
    color: Color.white,
    fontFamily: FontFamily.heading3,
    fontWeight: "600",
    fontSize: FontSize.heading3_size,
    textAlign: "center",
    height: "62.5%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  component7: {
    marginLeft: 16,
  },
  instanceParent: {
    marginTop: 12,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    width: 343,
  },
  atTime: {
    marginTop: 12,
    color: Color.sub2,
  },
  text7: {
    marginTop: 8,
  },
  dose: {
    fontSize: FontSize.notice_size,
  },
  text8: {
    fontSize: FontSize.text4_size,
    marginTop: 8,
  },
  doseParent: {
    marginLeft: 8,
    alignItems: "center",
  },
  add3Icon: {
    marginLeft: 8,
    overflow: "hidden",
  },
  add2Icon: {
    overflow: "hidden",
  },
  addMoreTimes: {
    fontStyle: "italic",
    fontFamily: FontFamily.interRegularItalic,
    marginLeft: 8,
    fontSize: FontSize.notice_size,
    textAlign: "center",
    color: Color.dimgray,
  },
  endDate: {
    color: Color.sub2,
  },
  endDate1: {
    width: 241,
    marginLeft: 12,
    display: "none",
    textAlign: "right",
    alignItems: "center",
    color: Color.sub2,
    fontFamily: FontFamily.text1,
    fontSize: FontSize.text1_size,
  },
  endDateParent: {
    marginTop: 12,
    flexDirection: "row",
  },
  repeatOnParent: {
    justifyContent: "center",
    marginTop: 16,
  },
  addImage: {
    color: Color.sub2,
    marginTop: 16,
  },
  groupChild: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: "#666",
    height: 70,
    width: 130,
    borderWidth: 1,
  },
  add2Icon1: {
    top: 23,
    left: 53,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleParent: {
    height: 70,
    marginTop: 16,
  },
  component37Parent: {
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
    left: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    backgroundColor: Color.white,
  },
  batteryIcon: {
    height: "67.86%",
    width: "44.14%",
    top: "17.86%",
    bottom: "14.29%",
    left: "55.86%",
    right: "0%",
  },
  text11: {
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
  text12: {
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
    width: 223,
    marginLeft: 8,
    display: "flex",
    alignItems: "center",
    color: Color.sub2,
    fontFamily: FontFamily.heading4,
    fontWeight: "500",
    textAlign: "left",
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
    flexDirection: "row",
    position: "absolute",
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
  component32Child: {
    right: "0.15%",
    left: "52.19%",
    backgroundColor: Color.skyblue_200,
  },
  textField: {
    marginLeft: 63.5,
    color: Color.white,
  },
  component32Item: {
    right: "52.33%",
    backgroundColor: Color.gainsboro,
    left: "0%",
  },
  textField1: {
    marginLeft: -127.5,
    color: Color.dimgray,
  },
  component32: {
    bottom: 24,
    height: 48,
    width: 343,
  },
  pillReminder: {
    flex: 1,
    height: 868,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default PillReminder2;

import * as React from "react";
import { StyleSheet, View, Pressable, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Padding, Color } from "../GlobalStyles";

const SettingHealthIndexView = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.settingHealthIndexView}>
      <View style={styles.component32}>
        <Pressable
          style={[styles.component32Child, styles.component32Layout]}
          onPress={() => navigation.navigate("OverviewHealthIndex")}
        />
        <Text style={[styles.textField, styles.textTypo]}>Save</Text>
        <Pressable
          style={[styles.component32Item, styles.component32Layout]}
          onPress={() => navigation.navigate("OverviewHealthIndex2")}
        />
        <Text style={[styles.textField1, styles.textTypo]}>Cancel</Text>
      </View>
      <View style={styles.youChose5IndicatorsParent}>
        <Text style={[styles.youChose5, styles.youChose5Typo]}>
          You chose 5 indicators
        </Text>
        <View style={[styles.celsius1Parent, styles.parentFlexBox]}>
          <Image
            style={[styles.celsius1Icon, styles.chat1Layout]}
            resizeMode="cover"
            source={require("../assets/celsius-1.png")}
          />
          <Text style={styles.bodyTemperatureTypo}>Body Temperature</Text>
          <View style={styles.wrapperSpaceBlock}>
            <View style={styles.tick1Layout}>
              <View style={[styles.tick1Child, styles.childPosition]} />
              <Image
                style={[styles.tick1Item, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/vector-22.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.celsius1Parent, styles.parentFlexBox]}>
          <Image
            style={[styles.celsius1Icon, styles.chat1Layout]}
            resizeMode="cover"
            source={require("../assets/bloodpressure-1.png")}
          />
          <Text style={styles.bodyTemperatureTypo}>Blood Pressure</Text>
          <View style={styles.wrapperSpaceBlock}>
            <View style={styles.tick1Layout}>
              <View style={[styles.tick1Child, styles.childPosition]} />
              <Image
                style={[styles.tick1Item, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/vector-22.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.celsius1Parent, styles.parentFlexBox]}>
          <Image
            style={[styles.celsius1Icon, styles.chat1Layout]}
            resizeMode="cover"
            source={require("../assets/bloodtest.png")}
          />
          <Text style={styles.bodyTemperatureTypo}>Blood Sugar</Text>
          <View style={[styles.rectangleWrapper, styles.wrapperSpaceBlock]}>
            <View style={[styles.frameChild, styles.frameChildBorder]} />
          </View>
        </View>
        <View style={[styles.celsius1Parent, styles.parentFlexBox]}>
          <Image
            style={[styles.celsius1Icon, styles.chat1Layout]}
            resizeMode="cover"
            source={require("../assets/heartrate.png")}
          />
          <Text style={styles.bodyTemperatureTypo}>Electrocardiogram</Text>
          <View style={[styles.rectangleWrapper, styles.wrapperSpaceBlock]}>
            <View style={[styles.frameChild, styles.frameChildBorder]} />
          </View>
        </View>
        <View style={[styles.celsius1Parent, styles.parentFlexBox]}>
          <Image
            style={[styles.celsius1Icon, styles.chat1Layout]}
            resizeMode="cover"
            source={require("../assets/biheartpulsefill.png")}
          />
          <Text style={styles.bodyTemperatureTypo}>Heart rate</Text>
          <View style={styles.wrapperSpaceBlock}>
            <View style={styles.tick1Layout}>
              <View style={[styles.tick1Child, styles.childPosition]} />
              <Image
                style={[styles.tick1Item, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/vector-22.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.celsius1Parent, styles.parentFlexBox]}>
          <Image
            style={[styles.celsius1Icon, styles.chat1Layout]}
            resizeMode="cover"
            source={require("../assets/height.png")}
          />
          <Text style={styles.bodyTemperatureTypo}>Height</Text>
          <View style={[styles.rectangleWrapper, styles.wrapperSpaceBlock]}>
            <View style={[styles.frameChild, styles.frameChildBorder]} />
          </View>
        </View>
        <View style={[styles.celsius1Parent, styles.parentFlexBox]}>
          <Image
            style={[styles.celsius1Icon, styles.chat1Layout]}
            resizeMode="cover"
            source={require("../assets/o2-1.png")}
          />
          <Text
            style={[styles.oxygenSaturationSpo2, styles.bodyTemperatureTypo]}
          >
            Oxygen Saturation (SPO2)
          </Text>
          <View style={styles.wrapperSpaceBlock}>
            <View style={styles.tick1Layout}>
              <View style={[styles.tick1Child, styles.childPosition]} />
              <Image
                style={[styles.tick1Item, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/vector-22.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.celsius1Parent, styles.parentFlexBox]}>
          <Image
            style={[styles.celsius1Icon, styles.chat1Layout]}
            resizeMode="cover"
            source={require("../assets/moon-1.png")}
          />
          <Text style={styles.bodyTemperatureTypo}>Sleep Monitoring</Text>
          <View style={[styles.rectangleWrapper, styles.wrapperSpaceBlock]}>
            <View style={[styles.frameChild, styles.frameChildBorder]} />
          </View>
        </View>
        <View style={[styles.celsius1Parent, styles.parentFlexBox]}>
          <Image
            style={[styles.celsius1Icon, styles.chat1Layout]}
            resizeMode="cover"
            source={require("../assets/footsteps.png")}
          />
          <Text style={styles.bodyTemperatureTypo}>Steps</Text>
          <View style={[styles.rectangleWrapper, styles.wrapperSpaceBlock]}>
            <View style={[styles.frameChild, styles.frameChildBorder]} />
          </View>
        </View>
        <View style={[styles.celsius1Parent, styles.parentFlexBox]}>
          <Image
            style={[styles.celsius1Icon, styles.chat1Layout]}
            resizeMode="cover"
            source={require("../assets/stress.png")}
          />
          <Text style={styles.bodyTemperatureTypo}>Stress Monitoring</Text>
          <View style={[styles.rectangleWrapper, styles.wrapperSpaceBlock]}>
            <View style={[styles.frameChild, styles.frameChildBorder]} />
          </View>
        </View>
        <View style={[styles.celsius1Parent, styles.parentFlexBox]}>
          <Image
            style={[styles.celsius1Icon, styles.chat1Layout]}
            resizeMode="cover"
            source={require("../assets/lungs-2.png")}
          />
          <Text style={styles.bodyTemperatureTypo}>Respiratory Rate</Text>
          <View style={[styles.rectangleWrapper, styles.wrapperSpaceBlock]}>
            <View style={[styles.frameChild, styles.frameChildBorder]} />
          </View>
        </View>
        <View style={[styles.celsius1Parent, styles.parentFlexBox]}>
          <Image
            style={[styles.celsius1Icon, styles.chat1Layout]}
            resizeMode="cover"
            source={require("../assets/dumbbell.png")}
          />
          <Text style={styles.bodyTemperatureTypo}>Weight</Text>
          <View style={styles.wrapperSpaceBlock}>
            <View style={styles.tick1Layout}>
              <View style={[styles.tick1Child, styles.childPosition]} />
              <Image
                style={[styles.tick1Item, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/vector-221.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View
        style={[styles.settingWhichIndexIsShowParent, styles.frameChildBorder]}
      >
        <Text style={[styles.settingWhichIndex, styles.chooseAtLeastFlexBox]}>
          Setting which index is show?
        </Text>
        <Text style={[styles.chooseAtLeast, styles.chooseAtLeastFlexBox]}>
          Choose at least 4 indexes to be measured and statisticized
        </Text>
      </View>
      <View style={styles.component38}>
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
            <Text style={[styles.text, styles.gsTypo]}>58 %</Text>
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
          <Text style={[styles.gs, styles.gsTypo]}>GS</Text>
          <Image
            style={[styles.signalIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/signal.png")}
          />
        </View>
        <View style={[styles.rectangleParent, styles.childPosition]}>
          <View style={[styles.frameChild5, styles.frameChild5Border]} />
          <Pressable
            style={[styles.chevronLeft, styles.tick1Layout]}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/chevronleft.png")}
            />
          </Pressable>
          <View style={[styles.angleRight2Parent, styles.parentFlexBox]}>
            <Image
              style={[styles.angleRight2Icon, styles.tick1Layout]}
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
            <Text style={[styles.signUp, styles.text1Typo]}>Custom Index</Text>
            <Pressable
              style={[styles.chat1, styles.chat1Layout]}
              onPress={() => navigation.navigate("ChatHome")}
            >
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../assets/chat-12.png")}
              />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  component32Layout: {
    borderRadius: Border.br_5xs,
    width: "47.67%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
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
  youChose5Typo: {
    fontFamily: FontFamily.text1,
    lineHeight: 27,
    fontSize: FontSize.heading4_size,
  },
  parentFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  chat1Layout: {
    height: 24,
    width: 24,
  },
  childPosition: {
    bottom: "0%",
    right: "0%",
    left: "0%",
    width: "100%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  wrapperSpaceBlock: {
    padding: Padding.p_9xs,
    marginLeft: 16,
    flexDirection: "row",
  },
  frameChildBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  bodyTemperatureTypo: {
    marginLeft: 16,
    width: 263,
    display: "flex",
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.text1_size,
    alignItems: "center",
    fontFamily: FontFamily.text1,
  },
  chooseAtLeastFlexBox: {
    width: 311,
    color: Color.sub2,
    display: "flex",
    textAlign: "left",
    alignItems: "center",
  },
  gsPosition: {
    top: "15%",
    height: "70%",
  },
  gsTypo: {
    fontFamily: FontFamily.sFUITextRegular,
    fontSize: FontSize.size_xs,
    color: Color.sub2,
    display: "flex",
    textAlign: "left",
    alignItems: "flex-end",
    position: "absolute",
  },
  text1Typo: {
    fontWeight: "500",
    color: Color.sub2,
    display: "flex",
    textAlign: "left",
  },
  frameChild5Border: {
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(26, 26, 26, 0.4)",
  },
  tick1Layout: {
    height: 16,
    width: 16,
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
    marginLeft: -163.5,
    bottom: 24,
    width: 343,
    height: 48,
    left: "50%",
    position: "absolute",
  },
  youChose5: {
    textAlign: "right",
    color: Color.dimgray,
  },
  celsius1Icon: {
    overflow: "hidden",
  },
  tick1Child: {
    backgroundColor: Color.sub2,
    borderRadius: Border.br_12xs,
    right: "0%",
    left: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
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
  celsius1Parent: {
    paddingBottom: Padding.p_base,
    marginTop: 16,
    alignItems: "center",
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(26, 26, 26, 0.4)",
  },
  frameChild: {
    borderColor: "#000",
    borderRadius: Border.br_12xs,
    height: 16,
    width: 16,
    backgroundColor: Color.white,
  },
  rectangleWrapper: {
    borderRadius: Border.br_12xs,
  },
  oxygenSaturationSpo2: {
    letterSpacing: -0.4,
  },
  youChose5IndicatorsParent: {
    top: 191,
    alignItems: "flex-end",
    marginLeft: -171.5,
    left: "50%",
    position: "absolute",
  },
  settingWhichIndex: {
    fontFamily: FontFamily.heading3,
    fontWeight: "600",
    fontSize: FontSize.heading3_size,
    color: Color.sub2,
  },
  chooseAtLeast: {
    height: 35,
    marginTop: 8,
    fontFamily: FontFamily.text1,
    lineHeight: 27,
    fontSize: FontSize.heading4_size,
  },
  settingWhichIndexIsShowParent: {
    top: 100,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
    borderColor: "rgba(26, 26, 26, 0.4)",
    borderWidth: 1,
    marginLeft: -171.5,
    borderRadius: Border.br_5xs,
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
    right: "0%",
    left: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    backgroundColor: Color.white,
  },
  backgroundIcon: {
    right: "0%",
    left: "0%",
    bottom: "0%",
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
    fontSize: FontSize.size_xs,
    fontWeight: "500",
    top: "15%",
    height: "70%",
    alignItems: "flex-end",
    position: "absolute",
  },
  wifiIcon: {
    width: 12,
    height: 9,
  },
  gs: {
    width: "4.53%",
    left: "11.73%",
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
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  frameChild5: {
    right: "0%",
    left: "0%",
    bottom: "0%",
    width: "100%",
    top: "0%",
    height: "100%",
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
  chat1: {
    marginLeft: 8,
  },
  angleRight2Parent: {
    top: 8,
    left: 24,
    alignItems: "center",
    position: "absolute",
  },
  rectangleParent: {
    height: "73.68%",
    top: "26.32%",
    right: "0%",
    left: "0%",
    position: "absolute",
    backgroundColor: Color.white,
  },
  component38: {
    top: 0,
    left: 0,
    width: 375,
    height: 76,
    position: "absolute",
  },
  settingHealthIndexView: {
    flex: 1,
    height: 972,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default SettingHealthIndexView;

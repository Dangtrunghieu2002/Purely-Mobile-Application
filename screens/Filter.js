import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const Filter = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.filter}>
      <View style={styles.filterParent}>
        <Text style={[styles.filter1, styles.filter1Typo]}>Filter</Text>
        <Image
          style={[styles.vectorIcon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/vector2.png")}
        />
      </View>
      <View style={styles.filterChild} />
      <View style={styles.component27}>
        <View style={styles.groupLayout}>
          <View style={[styles.groupChild, styles.groupPosition]} />
          <Image
            style={[styles.home1Icon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/home-11.png")}
          />
        </View>
        <View style={styles.groupLayout}>
          <View style={[styles.groupChild, styles.groupPosition]} />
          <Image
            style={[styles.home1Icon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/pharmacy-2.png")}
          />
        </View>
        <View style={styles.groupLayout}>
          <LinearGradient
            style={[styles.groupInner, styles.groupPosition]}
            locations={[0, 1]}
            colors={["rgba(84, 222, 253, 0.4)", "rgba(84, 222, 253, 0)"]}
            useAngle={true}
            angle={182.32}
          />
          <Image
            style={[styles.home1Icon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/handholdingheart-1-2.png")}
          />
        </View>
        <View style={styles.groupLayout}>
          <View style={[styles.groupChild, styles.groupPosition]} />
          <Image
            style={[styles.home1Icon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/users-2.png")}
          />
        </View>
        <View style={styles.groupLayout}>
          <View style={[styles.groupChild, styles.groupPosition]} />
          <Image
            style={[styles.home1Icon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/bell.png")}
          />
        </View>
      </View>
      <View style={[styles.component38, styles.groupPosition]}>
        <View style={styles.component38Child} />
        <View style={styles.statusBarwhitebase}>
          <Image
            style={[styles.backgroundIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/background.png")}
          />
          <View style={[styles.charge, styles.gsPosition]}>
            <Image
              style={[styles.batteryIcon, styles.iconLayout1]}
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
          <Text style={styles.text1}>9:41 AM</Text>
          <Image
            style={styles.wifiIcon}
            resizeMode="cover"
            source={require("../assets/wifi.png")}
          />
          <Text style={[styles.gs, styles.gsTypo]}>GS</Text>
          <Image
            style={[styles.signalIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/signal.png")}
          />
        </View>
        <View style={[styles.rectangleParent2, styles.iconChildPosition]}>
          <View style={[styles.frameChild, styles.frameChildPosition]} />
          <Pressable
            style={[styles.chevronLeft, styles.iconLayout]}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/chevronleft.png")}
            />
          </Pressable>
          <Text style={[styles.signUp, styles.textTypo]}>Elderly Sitter</Text>
          <Pressable
            style={styles.wrapper}
            onPress={() => navigation.navigate("Setting")}
          >
            <Image
              style={[styles.icon1, styles.iconLayout1]}
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
            style={[styles.icon1, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/chat-1.png")}
          />
        </Pressable>
      </View>
      <View style={styles.component42Parent}>
        <View style={styles.component42Layout}>
          <View style={styles.frameParentShadowBox}>
            <View style={styles.frameView}>
              <Image
                style={styles.frameItem}
                resizeMode="cover"
                source={require("../assets/rectangle-34624354.png")}
              />
              <Text style={[styles.hr, styles.hrFlexBox]}>
                <Text style={styles.hrTxt}>
                  <Text style={[styles.text2, styles.textTypo]}>$90</Text>
                  <Text style={styles.hr1Typo}>/hr</Text>
                </Text>
              </Text>
            </View>
            <View style={styles.frameGroup}>
              <View>
                <Text style={[styles.fullName, styles.fullNameLayout]}>
                  Karien Mia
                </Text>
                <Text style={[styles.carer, styles.hr1Typo]}>Carer</Text>
              </View>
              <View style={styles.materialSymbolsstarParent}>
                <Image
                  style={[styles.materialSymbolsstarIcon, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/materialsymbolsstar.png")}
                />
                <Text style={styles.jobsSpaceBlock}>
                  <Text style={[styles.text4, styles.textTypo]}>4.9</Text>
                  <Text style={styles.jobsTypo}>/5</Text>
                </Text>
                <Text style={[styles.jobs, styles.jobsTypo]}>(13 jobs)</Text>
              </View>
              <View style={styles.frameContainer}>
                <View style={styles.wrapperSpaceBlock}>
                  <Text style={[styles.goMarketplace, styles.text18Clr]}>
                    Go marketplace
                  </Text>
                </View>
                <View style={styles.frameParent1}>
                  <View style={styles.wrapperSpaceBlock}>
                    <Text style={[styles.goMarketplace, styles.text18Clr]}>
                      Cooking
                    </Text>
                  </View>
                  <View
                    style={[styles.exercisingWrapper, styles.wrapperSpaceBlock]}
                  >
                    <Text style={[styles.goMarketplace, styles.text18Clr]}>
                      Exercising
                    </Text>
                  </View>
                </View>
                <View
                  style={[
                    styles.healthCheckingWrapper,
                    styles.wrapperSpaceBlock,
                  ]}
                >
                  <Text style={[styles.goMarketplace, styles.text18Clr]}>
                    Health checking
                  </Text>
                </View>
                <Text style={[styles.viewMore, styles.fullNameLayout]}>
                  View more
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.frameWrapper, styles.component42Layout]}>
          <View style={styles.frameParentShadowBox}>
            <View style={styles.frameView}>
              <Image
                style={styles.frameItem}
                resizeMode="cover"
                source={require("../assets/rectangle-34624354.png")}
              />
              <Text style={[styles.hr, styles.hrFlexBox]}>
                <Text style={styles.hrTxt}>
                  <Text style={[styles.text2, styles.textTypo]}>$25</Text>
                  <Text style={styles.hr1Typo}>/hr</Text>
                </Text>
              </Text>
            </View>
            <View style={styles.frameGroup}>
              <View>
                <Text style={[styles.fullName, styles.fullNameLayout]}>
                  Anna Helmo
                </Text>
                <Text style={[styles.carer, styles.hr1Typo]}>Apprentice</Text>
              </View>
              <View style={styles.materialSymbolsstarParent}>
                <Image
                  style={[styles.materialSymbolsstarIcon, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/materialsymbolsstar.png")}
                />
                <Text style={styles.jobsSpaceBlock}>
                  <Text style={[styles.text4, styles.textTypo]}>5.0</Text>
                  <Text style={styles.jobsTypo}>/5</Text>
                </Text>
                <Text style={[styles.jobs, styles.jobsTypo]}>3 jobs</Text>
              </View>
              <View style={styles.frameContainer}>
                <View style={styles.wrapperSpaceBlock}>
                  <Text style={[styles.goMarketplace, styles.text18Clr]}>
                    Go marketplace
                  </Text>
                </View>
                <View style={styles.frameParent1}>
                  <View style={styles.wrapperSpaceBlock}>
                    <Text style={[styles.goMarketplace, styles.text18Clr]}>
                      Cooking
                    </Text>
                  </View>
                  <View
                    style={[styles.exercisingWrapper, styles.wrapperSpaceBlock]}
                  >
                    <Text style={[styles.goMarketplace, styles.text18Clr]}>
                      Exercising
                    </Text>
                  </View>
                </View>
                <View
                  style={[
                    styles.healthCheckingWrapper,
                    styles.wrapperSpaceBlock,
                  ]}
                >
                  <Text style={[styles.goMarketplace, styles.text18Clr]}>
                    Health checking
                  </Text>
                </View>
                <Text style={[styles.viewMore, styles.fullNameLayout]}>
                  View more
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.frameWrapper, styles.component42Layout]}>
          <View style={styles.frameParentShadowBox}>
            <View style={styles.frameView}>
              <Image
                style={styles.frameItem}
                resizeMode="cover"
                source={require("../assets/rectangle-34624354.png")}
              />
              <Text style={[styles.hr, styles.hrFlexBox]}>
                <Text style={styles.hrTxt}>
                  <Text style={[styles.text2, styles.textTypo]}>$15</Text>
                  <Text style={styles.hr1Typo}>/hr</Text>
                </Text>
              </Text>
            </View>
            <View style={styles.frameGroup}>
              <View>
                <Text style={[styles.fullName, styles.fullNameLayout]}>
                  Catherina Beth
                </Text>
                <Text style={[styles.carer, styles.hr1Typo]}>Carer</Text>
              </View>
              <View style={styles.materialSymbolsstarParent}>
                <Image
                  style={[styles.materialSymbolsstarIcon, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/materialsymbolsstar.png")}
                />
                <Text style={styles.jobsSpaceBlock}>
                  <Text style={[styles.text4, styles.textTypo]}>4.7</Text>
                  <Text style={styles.jobsTypo}>/5</Text>
                </Text>
                <Text style={[styles.jobs, styles.jobsTypo]}>25 jobs</Text>
              </View>
              <View style={styles.frameContainer}>
                <View style={styles.wrapperSpaceBlock}>
                  <Text style={[styles.goMarketplace, styles.text18Clr]}>
                    Go marketplace
                  </Text>
                </View>
                <View style={styles.frameParent1}>
                  <View style={styles.wrapperSpaceBlock}>
                    <Text style={[styles.goMarketplace, styles.text18Clr]}>
                      Cooking
                    </Text>
                  </View>
                  <View
                    style={[styles.exercisingWrapper, styles.wrapperSpaceBlock]}
                  >
                    <Text style={[styles.goMarketplace, styles.text18Clr]}>
                      Exercising
                    </Text>
                  </View>
                </View>
                <View
                  style={[
                    styles.healthCheckingWrapper,
                    styles.wrapperSpaceBlock,
                  ]}
                >
                  <Text style={[styles.goMarketplace, styles.text18Clr]}>
                    Health checking
                  </Text>
                </View>
                <Text style={[styles.viewMore, styles.fullNameLayout]}>
                  View more
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.frameWrapper, styles.component42Layout]}>
          <View style={styles.frameParentShadowBox}>
            <View style={styles.frameView}>
              <Image
                style={styles.frameItem}
                resizeMode="cover"
                source={require("../assets/rectangle-34624354.png")}
              />
              <Text style={[styles.hr, styles.hrFlexBox]}>
                <Text style={styles.hrTxt}>
                  <Text style={[styles.text2, styles.textTypo]}>$65</Text>
                  <Text style={styles.hr1Typo}>/hr</Text>
                </Text>
              </Text>
            </View>
            <View style={styles.frameGroup}>
              <View>
                <Text style={[styles.fullName, styles.fullNameLayout]}>
                  Mathieu James
                </Text>
                <Text style={[styles.carer, styles.hr1Typo]}>Carer</Text>
              </View>
              <View style={styles.materialSymbolsstarParent}>
                <Image
                  style={[styles.materialSymbolsstarIcon, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/materialsymbolsstar.png")}
                />
                <Text style={styles.jobsSpaceBlock}>
                  <Text style={[styles.text4, styles.textTypo]}>5.0</Text>
                  <Text style={styles.jobsTypo}>/5</Text>
                </Text>
                <Text style={[styles.jobs, styles.jobsTypo]}>56 jobs</Text>
              </View>
              <View style={styles.frameContainer}>
                <View style={styles.wrapperSpaceBlock}>
                  <Text style={[styles.goMarketplace, styles.text18Clr]}>
                    Go marketplace
                  </Text>
                </View>
                <View style={styles.frameParent1}>
                  <View style={styles.wrapperSpaceBlock}>
                    <Text style={[styles.goMarketplace, styles.text18Clr]}>
                      Cooking
                    </Text>
                  </View>
                  <View
                    style={[styles.exercisingWrapper, styles.wrapperSpaceBlock]}
                  >
                    <Text style={[styles.goMarketplace, styles.text18Clr]}>
                      Exercising
                    </Text>
                  </View>
                </View>
                <View
                  style={[
                    styles.healthCheckingWrapper,
                    styles.wrapperSpaceBlock,
                  ]}
                >
                  <Text style={[styles.goMarketplace, styles.text18Clr]}>
                    Health checking
                  </Text>
                </View>
                <Text style={[styles.viewMore, styles.fullNameLayout]}>
                  View more
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.groupParent}>
        <View style={styles.groupChildLayout}>
          <View style={[styles.groupChild2, styles.groupChildLayout]} />
          <Text style={[styles.indexInformation, styles.requestPosition]}>
            Suggest
          </Text>
          <Image
            style={styles.lineIcon}
            resizeMode="cover"
            source={require("../assets/line-6.png")}
          />
        </View>
        <Pressable
          style={styles.groupChildLayout}
          onPress={() => navigation.navigate("Request3")}
        >
          <View style={[styles.groupChild3, styles.groupChildLayout]} />
          <Text style={[styles.request, styles.requestPosition]}>Request</Text>
          <Image
            style={styles.groupChild4}
            resizeMode="cover"
            source={require("../assets/line-6.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.filterItem, styles.groupPosition]} />
      <Pressable
        style={[styles.framePressable, styles.groupChildLayout1]}
        onPress={() => navigation.navigate("Suggest")}
      >
        <View style={[styles.frameChild2, styles.frameChildPosition]} />
        <Text style={styles.filter2}>Filter</Text>
        <View style={[styles.frameParent14, styles.chevronLeftPosition]}>
          <View>
            <Text style={[styles.review, styles.signUpClr]}>Review</Text>
            <View style={styles.frameParent15}>
              <View style={styles.wrapperSpaceBlock}>
                <Text style={[styles.text18, styles.text18Clr]}>5.0</Text>
              </View>
              <View
                style={[styles.exercisingWrapper, styles.wrapperSpaceBlock]}
              >
                <Text style={[styles.text18, styles.text18Clr]}>4.0</Text>
              </View>
              <View
                style={[styles.exercisingWrapper, styles.wrapperSpaceBlock]}
              >
                <Text style={[styles.text18, styles.text18Clr]}>3.0</Text>
              </View>
              <View
                style={[styles.exercisingWrapper, styles.wrapperSpaceBlock]}
              >
                <Text style={[styles.text18, styles.text18Clr]}>2.0</Text>
              </View>
              <View
                style={[styles.exercisingWrapper, styles.wrapperSpaceBlock]}
              >
                <Text style={[styles.text18, styles.text18Clr]}>1.0</Text>
              </View>
            </View>
          </View>
          <View style={styles.priceParent}>
            <Text style={[styles.review, styles.signUpClr]}>Price</Text>
            <View style={styles.frameParent15}>
              <View style={styles.wrapperSpaceBlock}>
                <Text style={[styles.goMarketplace, styles.text18Clr]}>
                  High to low
                </Text>
              </View>
              <View
                style={[styles.highToLowContainer, styles.wrapperSpaceBlock]}
              >
                <Text style={[styles.goMarketplace, styles.text18Clr]}>
                  High to low
                </Text>
              </View>
            </View>
            <View
              style={[styles.healthCheckingWrapper, styles.wrapperSpaceBlock]}
            >
              <Text style={[styles.goMarketplace, styles.text18Clr]}>
                Under 20
              </Text>
            </View>
            <View
              style={[styles.healthCheckingWrapper, styles.wrapperSpaceBlock]}
            >
              <Text style={[styles.goMarketplace, styles.text18Clr]}>
                From 20 to 50
              </Text>
            </View>
            <View
              style={[styles.healthCheckingWrapper, styles.wrapperSpaceBlock]}
            >
              <Text style={[styles.goMarketplace, styles.text18Clr]}>
                From 51 to 100
              </Text>
            </View>
            <View
              style={[styles.healthCheckingWrapper, styles.wrapperSpaceBlock]}
            >
              <Text style={[styles.goMarketplace, styles.text18Clr]}>
                From 101 to 200
              </Text>
            </View>
            <View
              style={[styles.healthCheckingWrapper, styles.wrapperSpaceBlock]}
            >
              <Text style={[styles.goMarketplace, styles.text18Clr]}>
                More than 201
              </Text>
            </View>
          </View>
          <View style={styles.skillsParent}>
            <Text style={[styles.review, styles.signUpClr]}>Skills</Text>
            <View style={styles.frameParent17}>
              <View style={styles.frameParent18}>
                <View style={styles.wrapperSpaceBlock}>
                  <Text style={[styles.goMarketplace, styles.text18Clr]}>
                    Go marketplace
                  </Text>
                </View>
                <View
                  style={[styles.exercisingWrapper, styles.wrapperSpaceBlock]}
                >
                  <Text style={[styles.goMarketplace, styles.text18Clr]}>
                    Cooking
                  </Text>
                </View>
              </View>
              <View style={styles.frameParent1}>
                <View style={styles.wrapperSpaceBlock}>
                  <Text style={[styles.goMarketplace, styles.text18Clr]}>
                    Health checking
                  </Text>
                </View>
                <View
                  style={[styles.exercisingWrapper, styles.wrapperSpaceBlock]}
                >
                  <Text style={[styles.goMarketplace, styles.text18Clr]}>
                    Exercising
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.groupContainer}>
            <View style={styles.rectangleParentLayout}>
              <View style={[styles.groupChild5, styles.groupChildLayout1]} />
              <Text style={[styles.reset, styles.resetTypo]}>Reset</Text>
            </View>
            <View
              style={[styles.rectangleParent8, styles.rectangleParentLayout]}
            >
              <View style={[styles.groupChild6, styles.groupChildLayout1]} />
              <Text style={[styles.apply, styles.resetTypo]}>Apply</Text>
            </View>
          </View>
        </View>
        <Image
          style={[styles.cross1Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/cross-1.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  filter1Typo: {
    color: Color.dimgray,
    fontFamily: FontFamily.interRegularItalic,
    fontStyle: "italic",
    fontSize: FontSize.text4_size,
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupPosition: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  iconPosition: {
    top: 16,
    position: "absolute",
    overflow: "hidden",
  },
  gsPosition: {
    top: "15%",
    height: "70%",
  },
  gsTypo: {
    alignItems: "flex-end",
    fontFamily: FontFamily.sFUITextRegular,
    fontSize: FontSize.size_xs,
    display: "flex",
    color: Color.sub2,
    textAlign: "left",
    position: "absolute",
  },
  iconChildPosition: {
    bottom: "0%",
    left: "0%",
  },
  frameChildPosition: {
    borderBottomWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  iconLayout: {
    height: 16,
    width: 16,
  },
  textTypo: {
    fontFamily: FontFamily.heading4,
    fontWeight: "500",
  },
  hrFlexBox: {
    display: "flex",
    textAlign: "center",
    alignItems: "center",
  },
  fullNameLayout: {
    width: 247,
    alignItems: "center",
    display: "flex",
  },
  hr1Typo: {
    fontFamily: FontFamily.text1,
    color: Color.dimgray,
    fontSize: FontSize.text4_size,
  },
  jobsTypo: {
    fontSize: FontSize.notice_size,
    fontFamily: FontFamily.text1,
    color: Color.dimgray,
  },
  text18Clr: {
    color: Color.black,
    fontFamily: FontFamily.text1,
  },
  wrapperSpaceBlock: {
    padding: Padding.p_5xs,
    backgroundColor: Color.whitesmoke,
    borderRadius: Border.br_5xs,
    flexDirection: "row",
  },
  component42Layout: {
    height: 223,
    width: 343,
    borderRadius: Border.br_5xs,
  },
  groupChildLayout: {
    height: 34,
    width: 172,
  },
  requestPosition: {
    top: 11,
    fontSize: FontSize.heading4_size,
    textAlign: "left",
    position: "absolute",
  },
  groupChildLayout1: {
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  chevronLeftPosition: {
    left: 16,
    position: "absolute",
  },
  signUpClr: {
    color: Color.sub2,
    textAlign: "left",
  },
  resetTypo: {
    top: "20.45%",
    fontFamily: FontFamily.heading3,
    fontWeight: "600",
    fontSize: FontSize.heading3_size,
    textAlign: "center",
    left: "50%",
    position: "absolute",
  },
  rectangleParentLayout: {
    height: 44,
    width: 140,
  },
  filter1: {
    top: 7,
    left: 30,
    textAlign: "left",
    position: "absolute",
  },
  vectorIcon: {
    width: "34.38%",
    right: "65.63%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  filterParent: {
    top: 142,
    left: 24,
    width: 64,
    height: 24,
    position: "absolute",
  },
  filterChild: {
    top: 76,
    height: 50,
    width: 375,
    left: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  groupChild: {
    height: 56,
    width: 75,
    backgroundColor: Color.white,
  },
  home1Icon: {
    left: 25,
    width: 24,
    height: 24,
  },
  groupLayout: {
    height: 56,
    width: 75,
  },
  groupInner: {
    backgroundColor: "transparent",
    borderTopWidth: 1.5,
    borderColor: "#49c6e5",
    height: 56,
    width: 75,
    borderStyle: "solid",
  },
  component27: {
    bottom: 0,
    borderColor: "#666",
    borderTopWidth: 1,
    flexDirection: "row",
    borderStyle: "solid",
    right: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  component38Child: {
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    right: "0%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.white,
  },
  backgroundIcon: {
    right: "0%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
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
    fontWeight: "500",
    alignItems: "flex-end",
    display: "flex",
    color: Color.sub2,
    fontSize: FontSize.size_xs,
    top: "15%",
    height: "70%",
    textAlign: "left",
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
    position: "absolute",
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
  frameChild: {
    borderColor: "rgba(26, 26, 26, 0.4)",
    right: "0%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
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
  rectangleParent2: {
    height: "73.68%",
    top: "26.32%",
    right: "0%",
    left: "0%",
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
    height: 76,
    width: 375,
  },
  frameItem: {
    borderRadius: Border.br_17xl,
    height: 72,
    width: 72,
  },
  text2: {
    color: Color.skyblue_200,
    fontSize: FontSize.heading4_size,
  },
  hrTxt: {
    lineBreak: "anywhere",
    width: "100%",
  },
  hr: {
    marginTop: 12,
    textAlign: "center",
    width: 72,
    alignItems: "center",
  },
  frameView: {
    alignItems: "center",
  },
  fullName: {
    color: Color.sub3,
    fontSize: FontSize.heading4_size,
    fontFamily: FontFamily.heading4,
    fontWeight: "500",
    textAlign: "left",
  },
  carer: {
    marginTop: 8,
    textAlign: "left",
  },
  materialSymbolsstarIcon: {
    overflow: "hidden",
  },
  text4: {
    color: Color.goldenrod,
    fontSize: FontSize.heading4_size,
  },
  jobsSpaceBlock: {
    marginLeft: 6,
    textAlign: "left",
  },
  jobs: {
    marginLeft: 6,
    textAlign: "left",
  },
  materialSymbolsstarParent: {
    height: 15,
    marginTop: 12,
    alignItems: "center",
    flexDirection: "row",
  },
  goMarketplace: {
    lineHeight: 27,
    color: Color.black,
    fontSize: FontSize.heading4_size,
    textAlign: "center",
  },
  exercisingWrapper: {
    marginLeft: 8,
  },
  frameParent1: {
    marginTop: 8,
    alignItems: "center",
    flexDirection: "row",
  },
  healthCheckingWrapper: {
    marginTop: 8,
  },
  viewMore: {
    textAlign: "right",
    marginTop: 8,
    color: Color.dimgray,
    fontFamily: FontFamily.interRegularItalic,
    fontStyle: "italic",
    fontSize: FontSize.text4_size,
  },
  frameContainer: {
    marginTop: 12,
  },
  frameGroup: {
    marginLeft: 8,
  },
  frameParentShadowBox: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_5xs,
    borderRadius: Border.br_5xs,
    elevation: 9,
    shadowRadius: 9,
    shadowColor: "rgba(26, 26, 26, 0.12)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    top: 0,
    flexDirection: "row",
    left: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  frameWrapper: {
    marginTop: 16,
  },
  component42Parent: {
    top: 182,
    alignItems: "center",
    elevation: 9,
    shadowRadius: 9,
    shadowColor: "rgba(26, 26, 26, 0.12)",
    left: "50%",
    marginLeft: -171.5,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    position: "absolute",
    overflow: "hidden",
  },
  groupChild2: {
    borderTopLeftRadius: Border.br_5xs,
    borderBottomLeftRadius: Border.br_5xs,
    backgroundColor: Color.whitesmoke,
    width: 172,
    top: 0,
    left: 0,
    position: "absolute",
  },
  indexInformation: {
    left: 50,
    color: Color.skyblue_200,
    fontFamily: FontFamily.heading4,
    fontWeight: "500",
  },
  lineIcon: {
    top: 33,
    left: 7,
    width: 164,
    height: 1,
    position: "absolute",
  },
  groupChild3: {
    borderTopRightRadius: Border.br_5xs,
    borderBottomRightRadius: Border.br_5xs,
    backgroundColor: Color.whitesmoke,
    width: 172,
    top: 0,
    left: 0,
    position: "absolute",
  },
  request: {
    left: 53,
    color: Color.black,
    fontFamily: FontFamily.text1,
    lineHeight: 27,
  },
  groupChild4: {
    top: 34,
    left: 173,
    width: 163,
    height: 0,
    display: "none",
    position: "absolute",
  },
  groupParent: {
    top: 92,
    left: "50%",
    marginLeft: -171.5,
    flexDirection: "row",
    position: "absolute",
  },
  filterItem: {
    backgroundColor: Color.darkgray_200,
    width: 375,
    height: 812,
  },
  frameChild2: {
    marginLeft: -43.5,
    top: 12,
    width: 87,
    height: 36,
    left: "50%",
    borderColor: "#49c6e5",
  },
  filter2: {
    marginLeft: -27.5,
    top: 19,
    fontFamily: FontFamily.heading3,
    fontWeight: "600",
    fontSize: FontSize.heading3_size,
    textAlign: "center",
    left: "50%",
    color: Color.sub2,
    position: "absolute",
  },
  review: {
    fontWeight: "700",
    fontFamily: FontFamily.heading1,
    fontSize: FontSize.heading4_size,
  },
  text18: {
    fontSize: FontSize.text1_size,
    width: 35,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    display: "flex",
  },
  frameParent15: {
    marginTop: 8,
    flexDirection: "row",
  },
  highToLowContainer: {
    marginLeft: 18,
  },
  priceParent: {
    justifyContent: "center",
    marginTop: 16,
  },
  frameParent18: {
    alignItems: "center",
    flexDirection: "row",
  },
  frameParent17: {
    marginTop: 8,
  },
  skillsParent: {
    alignSelf: "stretch",
    marginTop: 16,
  },
  groupChild5: {
    borderWidth: 1,
    borderColor: "#49c6e5",
    borderStyle: "solid",
    right: "0%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  reset: {
    marginLeft: -30.75,
    color: Color.skyblue_200,
  },
  groupChild6: {
    backgroundColor: Color.skyblue_100,
    right: "0%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  apply: {
    marginLeft: -27.75,
    color: Color.white,
  },
  rectangleParent8: {
    marginLeft: 16,
  },
  groupContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  frameParent14: {
    top: 52,
  },
  cross1Icon: {
    left: 295,
    top: 16,
    position: "absolute",
    overflow: "hidden",
  },
  framePressable: {
    marginTop: -271,
    marginLeft: -163.5,
    top: "50%",
    width: 327,
    height: 542,
    left: "50%",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  filter: {
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Filter;

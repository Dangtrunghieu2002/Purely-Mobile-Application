import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const Notification2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.notification}>
      <View style={styles.frameParent}>
        <View style={[styles.ellipseParent, styles.parentPosition]}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/ellipse-1639.png")}
          />
          <View style={styles.sarahKimsHeartRateIs129Parent}>
            <Text style={styles.containerFlexBox}>
              <Text style={styles.sarahKimsHeartContainer1}>
                <Text style={[styles.sarahKimsHeartRateIs, styles.bpmTypo]}>
                  <Text style={styles.sarahKim}>Sarah Kim</Text>
                  <Text style={styles.sHeartRate}>{`’s heart rate is `}</Text>
                </Text>
                <Text style={[styles.text, styles.textTypo1]}>129</Text>
                <Text style={[styles.bpm, styles.bpmTypo]}> bpm.</Text>
              </Text>
            </Text>
            <View style={[styles.parent, styles.parentSpaceBlock]}>
              <Text style={[styles.text1, styles.textTypo]}>13:45</Text>
              <Text style={[styles.text2, styles.textTypo]}>23/01/2023</Text>
            </View>
          </View>
        </View>
        <View style={[styles.groupParent, styles.parentPosition]}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/group-10030.png")}
          />
          <View style={styles.sarahKimsHeartRateIs129Parent}>
            <Text style={styles.containerFlexBox}>
              <Text style={styles.sarahKimsHeartContainer1}>
                <Text
                  style={[styles.bpm, styles.bpmTypo]}
                >{`Your heart rate is `}</Text>
                <Text style={[styles.text, styles.textTypo1]}>129</Text>
                <Text style={[styles.bpm, styles.bpmTypo]}> bpm.</Text>
              </Text>
            </Text>
            <View style={[styles.parent, styles.parentSpaceBlock]}>
              <Text style={[styles.text1, styles.textTypo]}>09:10</Text>
              <Text style={[styles.text2, styles.textTypo]}>23/01/2023</Text>
            </View>
          </View>
        </View>
        <View style={[styles.groupParent, styles.parentPosition]}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/group-100301.png")}
          />
          <View style={styles.sarahKimsHeartRateIs129Parent}>
            <Text style={[styles.aCandidateApplied, styles.bpmTypo]}>
              A candidate applied to your elderly booking request.
            </Text>
            <View style={[styles.parent, styles.parentSpaceBlock]}>
              <Text style={[styles.text1, styles.textTypo]}>08:34</Text>
              <Text style={[styles.text2, styles.textTypo]}>23/01/2023</Text>
            </View>
            <View
              style={[styles.view3ApplicationsWrapper, styles.parentSpaceBlock]}
            >
              <Text style={styles.view3Applications}>View 3 applications</Text>
            </View>
          </View>
        </View>
        <View style={[styles.ellipseParent, styles.parentPosition]}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/group-100302.png")}
          />
          <View style={styles.sarahKimsHeartRateIs129Parent}>
            <Text style={[styles.itIsTimeContainer, styles.bpmTypo]}>
              <Text style={styles.sarahKimsHeartContainer1}>
                <Text style={styles.sHeartRate}>{`It is time to drink `}</Text>
                <Text style={styles.sarahKim}>Amoxicillin</Text>
                <Text style={styles.sHeartRate}>.</Text>
              </Text>
            </Text>
            <View style={[styles.parent, styles.parentSpaceBlock]}>
              <Text style={[styles.text1, styles.textTypo]}>13:45</Text>
              <Text style={[styles.text2, styles.textTypo]}>20/01/2023</Text>
            </View>
            <View
              style={[styles.view3ApplicationsWrapper, styles.parentSpaceBlock]}
            >
              <Text style={styles.view3Applications}>Take it</Text>
            </View>
          </View>
        </View>
        <View style={[styles.groupParent, styles.parentPosition]}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/group-100303.png")}
          />
          <View style={styles.sarahKimsHeartRateIs129Parent}>
            <Text style={[styles.aCandidateApplied, styles.bpmTypo]}>
              Your post gets 15 reposts.
            </Text>
            <View style={[styles.parent, styles.parentSpaceBlock]}>
              <Text style={[styles.text1, styles.textTypo]}>13:45</Text>
              <Text style={[styles.text2, styles.textTypo]}>15/01/2023</Text>
            </View>
          </View>
        </View>
        <View style={[styles.ellipseParent, styles.parentPosition]}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/group-100304.png")}
          />
          <View style={styles.sarahKimsHeartRateIs129Parent}>
            <Text style={[styles.itIsTimeContainer, styles.bpmTypo]}>
              <Text style={styles.sarahKimsHeartContainer1}>
                <Text style={styles.sarahKim}>Mathieu Jims</Text>
                <Text style={styles.sHeartRate}>
                  {" "}
                  and 46 others react to your post.
                </Text>
              </Text>
            </Text>
            <View style={[styles.parent, styles.parentSpaceBlock]}>
              <Text style={[styles.text1, styles.textTypo]}>12:06</Text>
              <Text style={[styles.text2, styles.textTypo]}>15/01/2023</Text>
            </View>
          </View>
        </View>
        <View style={[styles.groupParent, styles.parentPosition]}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/group-100302.png")}
          />
          <View style={styles.sarahKimsHeartRateIs129Parent}>
            <Text style={[styles.itIsTimeContainer, styles.bpmTypo]}>
              <Text style={styles.sarahKimsHeartContainer1}>
                <Text style={styles.sHeartRate}>{`It is `}</Text>
                <Text style={styles.sarahKim}>Sarah Kim</Text>
                <Text style={styles.sHeartRate}>{`’s time to drink `}</Text>
                <Text style={styles.sarahKim}>Ativan</Text>
                <Text style={styles.sHeartRate}>.</Text>
              </Text>
            </Text>
            <View style={[styles.parent, styles.parentSpaceBlock]}>
              <Text style={[styles.text1, styles.textTypo]}>13:45</Text>
              <Text style={[styles.text2, styles.textTypo]}>13/01/2023</Text>
            </View>
            <View
              style={[styles.view3ApplicationsWrapper, styles.parentSpaceBlock]}
            >
              <Text style={styles.view3Applications}>Remind her</Text>
            </View>
          </View>
        </View>
        <View style={[styles.groupParent, styles.parentPosition]}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/group-100301.png")}
          />
          <View style={styles.sarahKimsHeartRateIs129Parent}>
            <Text style={[styles.aCandidateApplied, styles.bpmTypo]}>
              Your booking will overdue in next 01 hour at 16:00.
            </Text>
            <View style={[styles.parent, styles.parentSpaceBlock]}>
              <Text style={[styles.text1, styles.textTypo]}>15:00</Text>
              <Text style={[styles.text2, styles.textTypo]}>09/01/2023</Text>
            </View>
            <View
              style={[styles.view3ApplicationsWrapper, styles.parentSpaceBlock]}
            >
              <Text style={styles.view3Applications}>Extend my booking</Text>
            </View>
          </View>
        </View>
        <View style={[styles.groupParent, styles.parentPosition]}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/group-100304.png")}
          />
          <View style={styles.sarahKimsHeartRateIs129Parent}>
            <Text style={[styles.itIsTimeContainer, styles.bpmTypo]}>
              <Text style={styles.sarahKimsHeartContainer1}>
                <Text style={styles.sarahKim}>{`River Mollian `}</Text>
                <Text style={styles.sHeartRate}>
                  has just posted: When a drug is first discovered,...
                </Text>
              </Text>
            </Text>
            <View style={[styles.parent, styles.parentSpaceBlock]}>
              <Text style={[styles.text1, styles.textTypo]}>13:45</Text>
              <Text style={[styles.text2, styles.textTypo]}>15/01/2023</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.component27, styles.component27Position]}>
        <Pressable
          style={styles.groupChildLayout}
          onPress={() => navigation.navigate("Home")}
        >
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <Image
            style={styles.home1Icon}
            resizeMode="cover"
            source={require("../assets/home-1.png")}
          />
        </Pressable>
        <Pressable
          style={styles.groupChildLayout}
          onPress={() => navigation.navigate("OverviewHealthIndex2")}
        >
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <Image
            style={styles.home1Icon}
            resizeMode="cover"
            source={require("../assets/pharmacy-2.png")}
          />
        </Pressable>
        <Pressable
          style={styles.groupChildLayout}
          onPress={() => navigation.navigate("Suggest")}
        >
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <Image
            style={styles.home1Icon}
            resizeMode="cover"
            source={require("../assets/handholdingheart-2.png")}
          />
        </Pressable>
        <Pressable
          style={styles.groupChildLayout}
          onPress={() => navigation.navigate("Connections1")}
        >
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <Image
            style={styles.home1Icon}
            resizeMode="cover"
            source={require("../assets/users-2.png")}
          />
        </Pressable>
        <Image
          style={styles.groupChildLayout}
          resizeMode="cover"
          source={require("../assets/group-10007.png")}
        />
      </View>
      <View style={[styles.component38, styles.groupChildPosition]}>
        <View style={[styles.component38Child, styles.childPosition]} />
        <View style={[styles.statusBarwhitebase, styles.component27Position]}>
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
            <Text style={[styles.text22, styles.textFlexBox]}>58 %</Text>
          </View>
          <Image
            style={styles.bluetoothIcon}
            resizeMode="cover"
            source={require("../assets/bluetooth-icon.png")}
          />
          <Text style={[styles.text23, styles.textFlexBox]}>9:41 AM</Text>
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
          <View style={[styles.frameChild6, styles.childPosition]} />
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
          <Text style={[styles.signUp, styles.textTypo1]}>Notification</Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  parentPosition: {
    alignItems: "center",
    paddingBottom: Padding.p_5xs,
    paddingTop: Padding.p_base,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "rgba(26, 26, 26, 0.4)",
    borderStyle: "solid",
  },
  bpmTypo: {
    fontSize: FontSize.notice_size,
    color: Color.sub2,
  },
  textTypo1: {
    fontFamily: FontFamily.heading4,
    fontWeight: "500",
  },
  parentSpaceBlock: {
    marginTop: 8,
    flexDirection: "row",
  },
  textTypo: {
    color: Color.dimgray,
    fontSize: FontSize.text4_size,
    fontFamily: FontFamily.text1,
    textAlign: "left",
  },
  component27Position: {
    right: "0%",
    position: "absolute",
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
    position: "absolute",
    width: "100%",
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
    color: Color.sub2,
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  frameChild: {
    width: 32,
    height: 32,
  },
  sarahKim: {
    fontWeight: "700",
    fontFamily: FontFamily.heading1,
  },
  sHeartRate: {
    fontFamily: FontFamily.text1,
  },
  sarahKimsHeartRateIs: {
    color: Color.sub2,
  },
  text: {
    fontSize: FontSize.heading4_size,
    color: Color.red,
  },
  bpm: {
    fontFamily: FontFamily.text1,
    color: Color.sub2,
  },
  sarahKimsHeartContainer1: {
    lineBreak: "anywhere",
    width: "100%",
  },
  containerFlexBox: {
    width: 303,
    display: "flex",
    textAlign: "left",
    alignItems: "center",
  },
  text1: {
    width: 60,
    height: 10,
    alignItems: "center",
    display: "flex",
    color: Color.dimgray,
  },
  text2: {
    marginLeft: 5,
  },
  parent: {
    height: 10,
    alignItems: "center",
  },
  sarahKimsHeartRateIs129Parent: {
    marginLeft: 8,
  },
  ellipseParent: {
    backgroundColor: Color.whitesmoke,
  },
  groupParent: {
    backgroundColor: Color.white,
  },
  aCandidateApplied: {
    fontFamily: FontFamily.text1,
    color: Color.sub2,
    width: 303,
    display: "flex",
    textAlign: "left",
    alignItems: "center",
  },
  view3Applications: {
    color: Color.skyblue_200,
    fontSize: FontSize.text4_size,
    fontFamily: FontFamily.text1,
    textAlign: "left",
  },
  view3ApplicationsWrapper: {
    borderRadius: Border.br_5xs,
    borderColor: "#49c6e5",
    borderWidth: 1,
    padding: Padding.p_5xs,
    borderStyle: "solid",
    marginTop: 8,
  },
  itIsTimeContainer: {
    color: Color.sub2,
    width: 303,
    display: "flex",
    textAlign: "left",
    alignItems: "center",
  },
  frameParent: {
    marginLeft: -171.5,
    top: 92,
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
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  groupChildLayout: {
    height: 56,
    width: 75,
  },
  component27: {
    bottom: 0,
    borderColor: "#666",
    borderTopWidth: 1,
    left: "0%",
    flexDirection: "row",
    right: "0%",
    borderStyle: "solid",
    width: "100%",
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
    top: "0%",
    height: "100%",
    backgroundColor: Color.white,
  },
  backgroundIcon: {
    bottom: "0%",
    left: "0%",
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
  text22: {
    width: "50.45%",
    fontFamily: FontFamily.sFUITextRegular,
    alignItems: "flex-end",
    fontSize: FontSize.size_xs,
    top: "0%",
    height: "100%",
    left: "0%",
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
  text23: {
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
    top: "0%",
    left: "0%",
    width: "100%",
  },
  frameChild6: {
    top: "0%",
    height: "100%",
    borderBottomWidth: 1,
    borderColor: "rgba(26, 26, 26, 0.4)",
    bottom: "0%",
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
    color: Color.sub2,
    textAlign: "left",
    fontFamily: FontFamily.heading4,
    fontWeight: "500",
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
  groupView: {
    height: "73.68%",
    top: "26.32%",
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
  notification: {
    flex: 1,
    height: 876,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Notification2;

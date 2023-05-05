const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import LogIn1 from "./screens/LogIn1";
import User3Profile from "./screens/User3Profile";
import User3Profile1 from "./screens/User3Profile1";
import OverviewHealthIndex from "./screens/OverviewHealthIndex";
import SettingHealthIndexView from "./screens/SettingHealthIndexView";
import DangerNoti from "./screens/DangerNoti";
import OverviewHealthIndex1 from "./screens/OverviewHealthIndex1";
import PillReminder from "./screens/PillReminder";
import FriendRequest from "./screens/FriendRequest";
import User3Profile2 from "./screens/User3Profile2";
import RegisterConfirm from "./screens/RegisterConfirm";
import RegisterElderlySitter from "./screens/RegisterElderlySitter";
import NotiHealthIndex from "./screens/NotiHealthIndex";
import NotiConnection from "./screens/NotiConnection";
import NotiElderlySitter from "./screens/NotiElderlySitter";
import Notification1 from "./screens/Notification1";
import Language from "./screens/Language";
import ViewMode from "./screens/ViewMode";
import SignUp from "./screens/SignUp";
import LogIn from "./screens/LogIn";
import Chat from "./screens/Chat";
import PillReminder1 from "./screens/PillReminder1";
import SignUp1 from "./screens/SignUp1";
import Request1 from "./screens/Request1";
import Profile from "./screens/Profile";
import Setting from "./screens/Setting";
import Filter from "./screens/Filter";
import OverviewHealthIndex2 from "./screens/OverviewHealthIndex2";
import Request2 from "./screens/Request2";
import Request3 from "./screens/Request3";
import Request4 from "./screens/Request4";
import SignUp2 from "./screens/SignUp2";
import SignUp3 from "./screens/SignUp3";
import Connections from "./screens/Connections";
import Home from "./screens/Home";
import PillReminder2 from "./screens/PillReminder2";
import Notification2 from "./screens/Notification2";
import ChatHome from "./screens/ChatHome";
import Chat1 from "./screens/Chat1";
import Connections1 from "./screens/Connections1";
import Request5 from "./screens/Request5";
import Suggest from "./screens/Suggest";
import SettingHealthIndexView1 from "./screens/SettingHealthIndexView1";
import SignUp4 from "./screens/SignUp4";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="LogIn1"
              component={LogIn1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="User3Profile"
              component={User3Profile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="User3Profile1"
              component={User3Profile1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OverviewHealthIndex"
              component={OverviewHealthIndex}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SettingHealthIndexView"
              component={SettingHealthIndexView}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DangerNoti"
              component={DangerNoti}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OverviewHealthIndex1"
              component={OverviewHealthIndex1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PillReminder"
              component={PillReminder}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FriendRequest"
              component={FriendRequest}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="User3Profile2"
              component={User3Profile2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RegisterConfirm"
              component={RegisterConfirm}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RegisterElderlySitter"
              component={RegisterElderlySitter}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NotiHealthIndex"
              component={NotiHealthIndex}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NotiConnection"
              component={NotiConnection}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NotiElderlySitter"
              component={NotiElderlySitter}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Notification"
              component={Notification1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Language"
              component={Language}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ViewMode"
              component={ViewMode}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LogIn"
              component={LogIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Chat"
              component={Chat}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PillReminder1"
              component={PillReminder1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp1"
              component={SignUp1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Request"
              component={Request1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Setting"
              component={Setting}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Filter"
              component={Filter}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OverviewHealthIndex2"
              component={OverviewHealthIndex2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Request1"
              component={Request2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Request2"
              component={Request3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Request3"
              component={Request4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp2"
              component={SignUp2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp3"
              component={SignUp3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Connections"
              component={Connections}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PillReminder2"
              component={PillReminder2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Notification1"
              component={Notification2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChatHome"
              component={ChatHome}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Chat1"
              component={Chat1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Connections1"
              component={Connections1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Request4"
              component={Request5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Suggest"
              component={Suggest}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SettingHealthIndexView1"
              component={SettingHealthIndexView1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp4"
              component={SignUp4}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;

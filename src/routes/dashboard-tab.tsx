import { Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "styled-components/native";

import HomeIcon from "../assets/icons/home.svg";
import HomeFillIcon from "../assets/icons/home-fill.svg";
import MoreOptionsIcon from "../assets/icons/more-options.svg";
import MoreOptionsFillIcon from "../assets/icons/more-options-fill.svg";

import { Home } from "../screens/Home";
import { MoreOptions } from "../screens/MoreOptions";
import { MyDetran } from "../screens/MyDetran";

export function DashboardTab() {
  const { Navigator, Screen } = createBottomTabNavigator();
  const navigation = useNavigation();

  const THEME = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: THEME.colors.light,
        tabBarInactiveTintColor: THEME.colors.primary_light,
        tabBarStyle: {
          borderTopEndRadius: 16,
          borderTopStartRadius: 16,
          backgroundColor: THEME.colors.primary,
          height: 70,
          position: "absolute",
        },
        tabBarLabelStyle: {
          fontSize: THEME.fontSize.normal,
          fontWeight: 700,
        },
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          title: "Início",
          tabBarIcon: ({ focused }) =>
            focused ? <HomeFillIcon /> : <HomeIcon />,
        }}
      />
      <Screen
        name="MoreOptions"
        component={MoreOptions}
        options={{
          title: "Mais",
          tabBarIcon: ({ focused }) =>
            focused ? <MoreOptionsFillIcon /> : <MoreOptionsIcon />,
        }}
      />
      <Screen
        name="MyDetran"
        component={MyDetran}
        options={{
          title: "Meu Detran",
          tabBarButton: (props) => (
            <Pressable
              {...props}
              onPress={() => navigation.navigate("MyDetran" as never)}
            />
          ),
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons
              color={color}
              name={focused ? "person" : "person-outline"}
              size={28}
            />
          ),
        }}
      />
    </Navigator>
  );
}

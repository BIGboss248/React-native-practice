import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

interface IconProps {
  color: string;
  size: number;
  focused: boolean;
}
export const InfoIcon = ({ color, size, focused }: IconProps) => <Ionicons name={focused ? "home" : "home-outline"} color={color} size={size} />
export const aboutIcon = ({ color, size, focused }: IconProps) => <Ionicons name={focused ? "information-circle" : "information-circle-outline"} color={color} size={size} />

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "red", headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{ tabBarIcon: InfoIcon }}
      />
      <Tabs.Screen
        name="about"
        options={{ tabBarIcon: aboutIcon }}
      />
    </Tabs>
  )
}

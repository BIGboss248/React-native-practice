import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "red" }}>
      <Tabs.Screen name="index" options={{ tabBarIcon: ({ color, size, focused }) => <Ionicons name={focused ? "home" : "home-outline"} color={color} size={size} /> }} />
      <Tabs.Screen name="about" options={{ tabBarIcon: ({ color, size, focused }) => <Ionicons name={focused ? "information-circle" : "information-circle-outline"} color={color} size={size} /> }} />
    </Tabs>
  )
}

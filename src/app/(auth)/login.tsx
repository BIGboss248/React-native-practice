import { useAuth } from "@/context/AuthContext";
import { Button, View } from "react-native";

export default function Login() {
  const { login } = useAuth();
  return (
    <View>
      <Button title="Login" onPress={login}></Button>
    </View>
  )
}
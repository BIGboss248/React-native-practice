import { AuthProvider, useAuth } from "@/context/AuthContext";
import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";

// TODO fix auth context
export default function RootLayout() {

  const router = useRouter();
  const user = useAuth().user;

  useEffect(() => {
    router.replace("/(auth)/login")
  }, [user])

  return (
    <AuthProvider>
      <Stack>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="(auth)" />
      </Stack>
    </AuthProvider>
  );
}

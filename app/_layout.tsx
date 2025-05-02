import { Stack } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Colors from "@/constants/Colors";

const queryClient: QueryClient = new QueryClient();

export const unstable_settings = {
  initialRouteName: "(tabs)",
};

export default function RootLayout() {
  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <Stack
          initialRouteName="(tabs)"
          screenOptions={{ headerTintColor: Colors.dark.background }}
        >
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="detail"
            options={{
              title: "",
              headerBackTitle: "Home",
              headerTintColor: Colors.dark.color,
              headerStyle: {
                backgroundColor: Colors.dark.background,
              },
            }}
          />
        </Stack>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}

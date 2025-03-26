import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { Image } from "expo-image";
import { useRouter } from "expo-router";

export default function WelcomeComponent() {
  const router = useRouter();

  useEffect(() => {
    // After 3 seconds, navigate to the next screen.
    const timer = setTimeout(() => {
      // Replace with the route you want to navigate to (e.g., "/home" or "/dashboard")
      router.replace("/home");
    }, 3000);

    // Clear the timer if this component unmounts
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View className="flex-1 items-center justify-center bg-white">
      {/* 
        Replace require("../assets/bowl.png") with the actual path or URL of your image.
        If using a remote URL, just pass it as the source object: 
        source={{ uri: "https://example.com/your-image.png" }} 
      */}
      <Image source={require("../assets/bowl.png")} contentFit="contain" className="w-32 h-32 mb-4" />
      <Text className="text-3xl font-bold text-orange-600">Pocket Taste</Text>
    </View>
  );
}

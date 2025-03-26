import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { Image } from "expo-image";
import { useRouter } from "expo-router";

export default function WelcomeComponent() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/auth/login");
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Image source={require("../assets/pt.gif")} contentFit="contain" className="w-32 h-32 mb-4" />
      <Text className="text-3xl font-bold text-orange-600">Pocket Taste</Text>
    </View>
  );
}

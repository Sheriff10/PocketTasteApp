import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { router } from "expo-router";

export default function EmailVerificationComplete() {
  return (
    <SafeAreaView className="flex-1 bg-white px-6 py-32">
      <View className="flex-1 items-center justify-around">
        <Text className="text-4xl font-semibold text-[#14213D] mb-8">Email verification complete</Text>
        <Image source={require("../../assets/mail.png")} contentFit="contain" className="w-64 h-64 " />
        <TouchableOpacity className="bg-primary-orange rounded-xl py-3 w-full">
          <Text className="text-white text-center font-semibold text-base" onPress={() => router.push("/dashboard")}>
            Continue To Login
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

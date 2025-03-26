import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { router } from "expo-router";

export default function VeggieRiceScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#FD7F2C]">
      <View className="flex-row items-center px-4 py-4">
        <TouchableOpacity onPress={() => router.push("/dashboard")} className="mr-4">
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
      </View>
      <View className="flex-1 items-center justify-center">
        <View className="w-60 h-60 rounded-full border-4 border-blue-500 overflow-hidden mb-6">
          <Image source={require("../../assets/food/b2.png")} contentFit="cover" className="w-full h-full" />
        </View>
        <Text className="text-4xl text-black mb-2">Veggie Rice</Text>
        <Text className="text-lg text-black mb-8">Enjoy Your Meal</Text>
        <TouchableOpacity className="bg-white px-8 py-3 rounded-full">
          <Text className="text-[#FD7F2C] font-semibold">Weldone</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

import React from "react";
import { SafeAreaView, View, Text, TextInput, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";

export default function Signup() {
  return (
    <SafeAreaView className="flex-1 bg-white px-6 pt-12">
      <View className="items-center mb-6">
        <Image source={require("../../assets/pt.gif")} contentFit="contain" className="w-24 h-24 mb-4" />
        <Text className="text-4xl font-bold text-orange-600">Pocket Taste</Text>
      </View>
      <Text className="text-center text-2xl font-bold text-gray-800 mb-6">Welcome Back</Text>
      <View className="space-y-4 mb-6">
        <TextInput
          placeholder="johndoe@gmail.com"
          keyboardType="email-address"
          className="bg-[#DEE2E6] placeholder:text-[#14213D80] rounded-lg px-4 h-[64px] "
        />
        <TextInput
          placeholder="********"
          secureTextEntry
          className="bg-[#DEE2E6] placeholder:text-[#14213D80] rounded-lg px-4 h-[64px] "
        />
      </View>
      <TouchableOpacity className="bg-primary-orange rounded-md py-3 mb-4">
        <Text className="text-white text-center font-semibold text-base">Login</Text>
      </TouchableOpacity>
      <View className="flex-row items-center mb-6">
        <TouchableOpacity className="mr-2">
          <View className="w-5 h-5 border border-gray-400 rounded-sm" />
        </TouchableOpacity>
        <Text className="text-gray-600">Remember me</Text>
      </View>
      <View className="space-y-4 mb-6 px-10">
        <View className="flex-row items-center justify-center gap-5">
          <TouchableOpacity className="p-3  rounded-lg  flex items-center justify-center border-gray-200 border ">
            <Image source={require("../../assets/google.png")} contentFit="contain" className="w-5 h-5 " />
          </TouchableOpacity>
          <TouchableOpacity className="p-3  rounded-lg w-[100%] h-full flex items-center justify-center border-gray-200 border ">
            <View className="flex flex-row w-full items-center justify-between">
              <Text>Continue with google</Text>
              <Ionicons name="chevron-forward" size={20} color="gray" />
            </View>
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center justify-center gap-5">
          <TouchableOpacity className="p-3  rounded-lg  flex items-center justify-center border-gray-200 border ">
            <Image source={require("../../assets/apple.png")} contentFit="contain" className="w-5 h-5 " />
          </TouchableOpacity>
          <TouchableOpacity className="p-3  rounded-lg w-[100%] h-full flex items-center justify-center border-gray-200 border ">
            <View className="flex flex-row w-full items-center justify-between">
              <Text>Continue with google</Text>
              <Ionicons name="chevron-forward" size={20} color="gray" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View className="flex-row justify-center">
        <Text className="text-gray-500">Don't have an account? </Text>
        <TouchableOpacity>
          <Text className="text-orange-500 font-semibold">Sign up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

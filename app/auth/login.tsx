import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { router } from "expo-router";
// import bowl from "../../assets/pt.gif"
export default function SignupComponent() {
  return (
    <View className="flex-1 bg-white px-6 pt-12">
      <View className="items-center mb-8">
        <Image source={require("../../assets/pt.gif")} contentFit="contain" className="w-24 h-24 mb-4" />
        <Text className="text-2xl font-bold text-gray-900">Create your Account</Text>
      </View>

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

      <TouchableOpacity className="bg-[#FD7F2CFA] rounded-md py-3 mb-6">
        <Text className="text-white text-center font-semibold text-base" onPress={() => router.push("/auth/otp")}>
          Sign Up
        </Text>
      </TouchableOpacity>

      <View className="flex-row items-center justify-center mb-6">
        <Text className="text-gray-500 font-semibold">Or continue with</Text>
      </View>

      <View className="flex-row items-center justify-center space-x-6 mb-8">
        <TouchableOpacity className="p-3  rounded-lg  flex items-center justify-center border-gray-200 border ">
          <Image source={require("../../assets/google.png")} contentFit="contain" className="w-5 h-5 " />
        </TouchableOpacity>
        <TouchableOpacity className="p-3  rounded-lg  flex items-center justify-center border-gray-200 border ">
          <Image source={require("../../assets/apple.png")} contentFit="contain" className="w-5 h-5 " />
        </TouchableOpacity>
      </View>

      <View className="flex-row justify-center">
        <Text className="text-gray-500">Already Have an account? </Text>
        <TouchableOpacity>
          <Text className="text-orange-500 font-semibold">Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

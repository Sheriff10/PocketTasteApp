import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Link } from "expo-router";

export default function ProfileScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#FD7F2C]/40">
      <View className="flex-row items-center justify-center py-4 border-b border-gray-300">
        <Text className="text-lg font-bold">Profile</Text>
      </View>
      <View className="bg-[#D9D9D9] flex-row items-center px-4 py-4">
        <Image source={require("../../assets/user.png")} contentFit="cover" className="w-12 h-12 rounded-full" />
        <Text className="ml-4 text-base font-semibold">John Doe</Text>
        <View className="flex-1" />
        <Ionicons name="chevron-forward" size={24} color="#000" />
      </View>
      <TouchableOpacity className="bg-[#D9D9D9] border-t-4 border-[#FCD2A6] px-4 py-3 flex-row items-center justify-between">
        <Text className="text-xl text-gray-800">My Recipes</Text>
        <Ionicons name="chevron-forward" size={20} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity className="bg-[#D9D9D9] border-t-4 border-[#FCD2A6] px-4 py-3 flex-row items-center justify-between">
        <Text className="text-xl text-gray-800">Diet</Text>
        <Ionicons name="chevron-forward" size={20} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity className="bg-[#D9D9D9] border-t-4 border-[#FCD2A6] px-4 py-3 flex-row items-center justify-between">
        <Text className="text-xl text-gray-800">Saved Recipes</Text>
        <Ionicons name="chevron-forward" size={20} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity className="bg-[#D9D9D9] border-t-4 border-[#FCD2A6] px-4 py-3 flex-row items-center justify-between">
        <Text className="text-xl text-gray-800">Settings</Text>
        <Ionicons name="chevron-forward" size={20} color="#000" />
      </TouchableOpacity>
      <View className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex-row justify-around items-center py-3">
        <TouchableOpacity className="items-center">
          <Link href={"/dashboard"}>
            <Ionicons name="home" size={24} color="#999" />
          </Link>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <Link href={"/dashboard/search"}>
            <Ionicons name="search" size={24} color="#999" />
          </Link>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <Link href={"/dashboard/order-success"}></Link>
          <Ionicons name="cart-outline" size={24} color="#999" />
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <Link href={"/dashboard/profile"}>
            <Ionicons name="person" size={24} color="#FCD2A6" />
          </Link>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

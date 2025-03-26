import React from "react";
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-row items-center justify-between px-4 py-4">
        <Text className="text-4xl">Home</Text>
        <Image source={require("../../assets/user.png")} contentFit="cover" className="w-10 h-10 rounded-full" />
      </View>
      <View className="px-4 mb-4">
        <View className="flex-row items-center bg-[#D9D9D9] h-[50px] rounded-3xl text-[#626262 text-2xl] px-3 py-2">
          <Ionicons name="search" size={20} color="#999" className="" />
          <TextInput placeholder="Search" className="ml-2 flex-1" />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="px-4">
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-4">
            <View className="flex-row space-x-4">
              <TouchableOpacity className="items-center">
                <View className="w-20 h-20 bg-[#FD7F2C] rounded-3xl justify-center items-center mb-2">
                  <Image source={require("../../assets/food/v1.png")} contentFit="contain" className="w-16 h-16" />
                </View>
                <Text className="text-sm">All</Text>
              </TouchableOpacity>
              <TouchableOpacity className="items-center">
                <View className="w-20 h-20 bg-gray-300 rounded-3xl justify-center items-center mb-2">
                  <Image source={require("../../assets/food/v2.png")} contentFit="cover" className="w-16 h-16" />
                </View>
                <Text className="text-sm">Breakfast</Text>
              </TouchableOpacity>
              <TouchableOpacity className="items-center">
                <View className="w-20 h-20 bg-gray-300 rounded-3xl justify-center items-center mb-2">
                  <Image source={require("../../assets/food/v3.png")} contentFit="contain" className="w-16 h-16" />
                </View>
                <Text className="text-sm">Lunch</Text>
              </TouchableOpacity>
              <TouchableOpacity className="items-center">
                <View className="w-20 h-20 bg-gray-300 rounded-3xl justify-center items-center mb-2">
                  <Image source={require("../../assets/food/v4.png")} contentFit="contain" className="w-16 h-16" />
                </View>
                <Text className="text-sm">Salads</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
          <Text className="text-3xl mb-2">Recipies</Text>
          <View className="bg-[linear-gradient(180deg,_#fd802c34,_#974c1a9d)] rounded-xl p-4 mb-4 py-6">
            <View className="flex-row w-[100%]">
              <View className="mr-2 ">
                <View className="w-[70%]">
                  <Text className="text-2xl mb-1">Chinese Stir Fry Noodles</Text>
                  <Text className="text-gray-700 text-sm mb-2">
                    Damn ipsum dolor sit amet, consectetur adipiscing elit.
                  </Text>
                </View>
                <View className="flex-row items-center justify-between w-full space-x-2">
                  <View className="flex-row items-center space-x-1">
                    <Ionicons name="time-outline" size={16} color="#000" />
                    <Text className="text-black text-sm">30 minutes</Text>
                  </View>
                  <View className="flex-row items-center space-x-1">
                    <Ionicons name="heart" size={16} className="text-red-500" />
                    <Text className="text-black text-sm">507</Text>
                  </View>
                  <View className="flex-row items-center space-x-1">
                    <Ionicons name="eye" size={16} color="#000" />
                    <Text className="text-black text-sm">1066</Text>
                  </View>
                </View>
              </View>
              <Image
                source={require("../../assets/food/b3.png")}
                contentFit="contain"
                className="w-40 h-40 rounded-md absolute -right-10 top-[-60px]"
              />
            </View>
          </View>
          <Text className="text-xl font-bold mb-2">Popular</Text>
          <View className="flex-row space-x-4 mb-20">
            <View className="bg-gray-100 rounded-xl p-3 w-1/2">
              <Image
                source={require("../../assets/food/b1.png")}
                contentFit="cover"
                className="w-full h-40 rounded-md mb-2"
              />
              <Text className="font-bold mb-1">Beef Burger</Text>
              <Text className="text-gray-700 text-sm">Damn ipsum dolor sit amet.</Text>
              <View className="flex-row items-center space-x-2 mt-2">
                <View className="flex-row items-center space-x-1">
                  <Ionicons name="time-outline" size={16} color="#999" />
                  <Text className="text-gray-700 text-sm">20 min</Text>
                </View>
                <View className="flex-row items-center space-x-1">
                  <Ionicons name="heart-outline" size={16} color="#999" />
                  <Text className="text-gray-700 text-sm">324</Text>
                </View>
              </View>
            </View>
            <View className="bg-gray-100 rounded-xl p-3 w-1/2">
              <Image
                source={require("../../assets/food/b2.png")}
                contentFit="cover"
                className="w-full h-40 rounded-md mb-2"
              />
              <Text className="font-bold mb-1">Veggie Rice</Text>
              <Text className="text-gray-700 text-sm">Damn ipsum dolor sit amet.</Text>
              <View className="flex-row items-center space-x-2 mt-2">
                <View className="flex-row items-center space-x-1">
                  <Ionicons name="time-outline" size={16} color="#999" />
                  <Text className="text-gray-700 text-sm">25 min</Text>
                </View>
                <View className="flex-row items-center space-x-1">
                  <Ionicons name="heart-outline" size={16} color="#999" />
                  <Text className="text-gray-700 text-sm">289</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex-row justify-around items-center py-3">
        <TouchableOpacity className="items-center">
          <Link href={"/dashboard"}>
            <Ionicons name="home" size={24} color="#14213D" />
          </Link>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <Link href={"/dashboard/search"}>
            <Ionicons name="search" size={24} color="#999" />
          </Link>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <Link href={"/dashboard/order-success"}>
            <Ionicons name="heart-outline" size={24} color="#999" />
          </Link>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <Link href={"/dashboard/profile"}>
            <Ionicons name="person-outline" size={24} color="#999" />
          </Link>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

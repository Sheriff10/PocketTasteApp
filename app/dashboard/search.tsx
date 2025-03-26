import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";

export default function FruitSaladScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="relative h-60">
        <Image
          source={{ uri: "https://via.placeholder.com/500x300.png?text=Top+Image" }}
          contentFit="cover"
          className="w-full h-full"
        />
        <View className="absolute top-4 right-4 flex-row space-x-2">
          <TouchableOpacity className="bg-white/70 rounded-full p-2">
            <Ionicons name="ellipsis-horizontal" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
      <View className="bg-white -mt-8 rounded-t-3xl px-4 pt-8 flex-1">
        <View className="items-center">
          <Image
            source={{ uri: "https://via.placeholder.com/150.png?text=Fruit+Salad" }}
            contentFit="cover"
            className="w-40 h-40 rounded-full mb-4"
          />
          <Text className="text-2xl font-bold mb-2">Fruit Salad</Text>
        </View>
        <Text className="text-center text-gray-600 px-6 mb-4">
          Torem ipsum dolor sit amet, consectetur adipiscing elit. Torem ipsum dolor sit amet, consectetur adip
        </Text>
        <View className="bg-gray-100 rounded-xl p-4 mx-4 mb-4">
          <View className="relative">
            <Image
              source={{ uri: "https://via.placeholder.com/350x200.png?text=Salad+Video" }}
              contentFit="cover"
              className="w-full h-44 rounded-xl"
            />
            <TouchableOpacity className="absolute inset-0 items-center justify-center">
              <Ionicons name="play-circle-outline" size={48} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <Text className="text-gray-600 px-6">
          Torem ipsum dolor sit amet, consectetur adipiscing elit. Torem ipsum dolor sit amet, consectetur adip
        </Text>
      </View>

      <View className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex-row justify-around items-center py-3">
        <TouchableOpacity className="items-center">
          <Ionicons name="home" size={24} color="#14213D" />
          <Text className="text-xs text-gray-500">Home</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <Ionicons name="search" size={24} color="#999" />
          <Text className="text-xs text-[#14213D]">Explore</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <Ionicons name="heart-outline" size={24} color="#999" />
          <Text className="text-xs text-gray-500">Favorites</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <Ionicons name="person-outline" size={24} color="#999" />
          <Text className="text-xs text-gray-500">Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

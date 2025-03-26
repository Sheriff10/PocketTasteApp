import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function Otp() {
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const inputRefs = useRef<(TextInput | null)[]>([]);

  const handleChange = (text: string, index: number) => {
    if (text.length > 1) {
      text = text.slice(-1);
    }
    const updated = [...otp];
    updated[index] = text;
    setOtp(updated);
    if (text !== "" && index < 4) {
      inputRefs.current[index + 1]?.focus();
    }
    if (updated.every((v) => v !== "")) {
      router.push("/auth/verification-complete");
    }
  };

  const handleKeyPress = (e: NativeSyntheticEvent<TextInputKeyPressEventData>, index: number) => {
    if (e.nativeEvent.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white px-6">
      <View className="flex-row items-center mb-8">
        <TouchableOpacity>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <Text className="flex-1 text-center text-4xl font-semibold text-[#14213D] mt-32">Verify your email</Text>
      </View>
      <Text className="text-center text-sm text-gray-700 mb-4">
        A 5 digit code has been sent to johnd*****@gmail.com
      </Text>
      <View className="flex-row justify-center space-x-2 mb-4 gap-5">
        {otp.map((digit, idx) => (
          <TextInput
            key={idx}
            className="w-[52px] h-[64px] bg-primary-gray text-center rounded-xl text-xl font-bold flex justify-center items-center"
            value={digit}
            onChangeText={(text) => handleChange(text, idx)}
            keyboardType="number-pad"
            maxLength={1}
            ref={(ref) => (inputRefs.current[idx] = ref)}
            onKeyPress={(e) => handleKeyPress(e, idx)}
          />
        ))}
      </View>
      <Text className="text-center text-gray-500 mb-8">
        Resend code in <Text className="text-primary-orange">49</Text>s
      </Text>
    </SafeAreaView>
  );
}

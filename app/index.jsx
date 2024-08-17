import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useRef } from 'react'
import { StatusBar } from 'expo-status-bar';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
// import Animated from 'react-native-reanimated';



const Welcome = () => {

  const animation = useRef(null);
  const navigation = useNavigation();
  return (
    <View className="flex-1 bg-[#f64e32] justify-center items-center space-y-10 relative">
      <Image
        source={require("../assets/images/background.png")}
        style={{
          position: "absolute",
          width: wp(100),
          height: hp(100),
          resizeMode: "cover"
        }}
      />

      <StatusBar style='light' />

      <View>
        <LottieView
          autoPlay
          ref={animation}
          style={{
            width: 200,
            height: 300
          }}
          source={require("../assets/lottie/food-logo.json")}
        />
      </View>

      {/* Title and subtitle */}

      <View className='flex items-center tracking-widest'>
          <Text 
           className='text-white font-extrabold tracking-widest'
           style={{
            fontSize:hp(5)
           }}
          >
            Food Cafe
          </Text>

          <Text
          className="text-white tracking-widest font-medium"
          style={{
            fontSize:hp(2.5)
          }}
          >
            Explore some delicious food
          </Text>
      </View>

      <View>
        <TouchableOpacity
         style={{
          backgroundColor:'#fff',
          paddingVertical:hp(1.5),
          paddingHorizontal:hp(5),
          borderRadius:hp(1.5)
         }}
         onPress={()=> navigation.navigate("home")}
        >
          <Text
           style={{
            color:"#f64e32",
            fontSize:hp(2.2),
            fontWeight:"medium"
           }}
          >
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Welcome
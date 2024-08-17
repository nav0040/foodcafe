import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { AdjustmentsHorizontalIcon } from 'react-native-heroicons/outline'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const home = () => {
  return (
    <View className="flex-1 bg-white">
      <StatusBar style='dark' />

      <SafeAreaView>
        <ScrollView
         showsVerticalScrollIndicator={false}
         contentContainerStyle={{
          paddingBottom:50
         }}
         className="space-y-6 pt-14"
        >

          {/*  Avatar and Bell Icon */}
          <View className="mx-4 flex-row justify-between items-center">
            <AdjustmentsHorizontalIcon size={hp(4)} color={"gray"} />
            <Image 
              source={require("../assets/images/avatar.png")}
              style={{
                width:hp(5),
                height:hp(5),
                resizeMode:"cover"
              }}
              className="rounded-full"
            />
          </View>

          {/* Headlines */}

          <View>
             <View>
              <Text 
               style={{
                fontSize:hp(3.5),

               }}

               className="font-bold text-neutral-800"
              >
                Fast & Delicious
              </Text>
             </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

export default home
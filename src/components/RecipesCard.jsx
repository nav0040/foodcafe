import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';

const RecipesCard = ({item,index,navigation}) => {

    const isEven = index % 2 === 0;


    

  return (
    <View className="mx-1">
      <Pressable
       style={{
        width:"100%",
        paddingLeft:isEven ? 8 :0,
       }}
       className="flex justify-center mb-4 space-y-1"
       onPress={()=> router.push(`/recipe/${item.idMeal}`,{ ...item })}
      >
        <Image
         source={{
            uri:item.strMealThumb,
         }}
         style={{
            width:"100%",
            height:index % 3 == 0 ? hp(25) : hp(35),
            borderRadius:35
         }}

         className="bg-black/5 relative"
        />

        {/* <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.9)']}
          style={{
            position:"absolute",
            bottom:0,
            width:"100%",
            height:hp(20),
            // borderBottomLeftRadius:35,
            // borderBottomRightRadius:35,
          }}
          start={{ x:0.5, y:0}}
          end={{ x:0.5,y:1}}
        
        
        /> */}

        <Text
        style={{
            fontSize:hp(2.2)
        }}
        className="font-semibold ml-2 text-gray-50 absolute bottom-7 left-2 max-w-[80%]"
        >
            {
                item.strMeal?.length > 20 ?
                item.strMeal.slice(0,20)+"..."
                : item.strMeal
            }
        </Text>

      </Pressable>
    </View>
  )
}

export default RecipesCard
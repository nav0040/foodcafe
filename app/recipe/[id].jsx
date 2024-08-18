import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { router, useGlobalSearchParams, useLocalSearchParams, useNavigation } from 'expo-router'
import axios from 'axios'
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid'
import Loading from '../../src/components/Loading'

const recipe_details = (props) => {


  const { id } = useLocalSearchParams();




  const [meal, setMeal] = useState(null);
  const [mealData, setMealData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFavourite, setIsFavourite] = useState(false);


  useEffect(() => {

    getMealData(id)
  }, [id]);

  const getMealData = async (id) => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );

      // console.log(response.data.meals[0]);

      if (response && response.data) {
        setMealData(response.data.meals);
        setMeal(response.data.meals[0]);
        setIsLoading(false);
      }

    } catch (error) {
      console.log(error.message);

    }
  }


  const ingredientsIndexes = (meal) => {
    if (!meal) return [];
    let indexes = [];

    for (let i = 1; i <= 20; i++) {
      if (meal["strIngredient" + i]) {
        indexes.push(i);
      }
    }
    return indexes;
  }



  return (
    <ScrollView
      className='flex-1 bg-white'
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: 30,
      }}
    >

      <StatusBar style='white' />

      {/* Recipw Image */}
      <View className="flex-row justify-center">
        {/* <Image
          uri={mealData.strMealThumb}
          // sharedTransitionTag={mealData.strMeal}
          style={{
            width:wp(100),
            height:hp(45)
          }}
        /> */}

        <Image
          source={{
            uri: meal?.strMealThumb,
          }}
          style={{
            width: "100%",
            width: wp(100),
            height: hp(45)
          }}

          className="bg-black/5 relative"
        />
      </View>


      {/* Back Button  and Favorite Icon */}
      <View className="w-full absolute flex-row justify-between items-center pt-14">

        <View
          className="p-2 rounded-full bg-white ml-5"
        >
          <TouchableOpacity
            onPress={() => router.back()}
          >
            <ChevronLeftIcon size={hp(3.5)} color={'#f64e32'} strokeWidth={4.5} />
          </TouchableOpacity>
        </View>


        <View className="p-2 rounded-full bg-white mr-5">
          <TouchableOpacity
            onPress={() => setIsFavourite(!isFavourite)}
          >
            <HeartIcon size={hp(3.5)} color={isFavourite ? "#f64e32" : "gray"} strokeWidth={4.5} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Meal Description */}
      {
        isLoading ? (
          <Loading size="large" className="mt-16" />
        ) : (
          <View
            className="px-4 flex justify-between space-y-6 bg-white mt-[-46]"
            style={{
              borderTopLeftRadius: 50,
              borderTopRightRadius: 50,
              paddingTop: hp(3)
            }}
          >

            {/* Meal Name */}
            <View className="space-y-2 px-4"
            >
              <Text className="font-bold flex-1 text-neutral-700"
                style={{
                  fontSize: hp(3),
                }}
              >{meal?.strMeal}</Text>

              <Text
                style={{
                  fontSize: hp(2)
                }}
                className="text-neutral-500 font-medium"
              >{meal?.strArea}</Text>


            </View>

            {/* Ingredients */}

            <View className="space-y-4 p-4">
              <Text
                style={{
                  fontSize: hp(2.5),
                }}

                className="font-bold flex-1 text-neutral-700"
              >
                Ingredients
              </Text>

              <View className="space-y-2 ml-3">
                {
                  ingredientsIndexes(meal).map((i) => {
                    return (
                      <View className="flex-row space-x-4 items-center" key={i}>
                        <View className="bg-[#f64e32]"
                          style={{
                            height: hp(1.5),
                            width: hp(1.5),
                          }}
                        />
                        <View className="flex-row space-x-2 items-center">
                          <Text style={{
                            fontSize: hp(1.7)
                          }}
                            className="font-medium text-neutral-800"
                          >
                            {meal["strIngredient" + i]}
                          </Text>

                          <Text className="font-extrabold text-neutral-700">
                            {meal["strIngredient" + i]}
                          </Text>

                        </View>


                      </View>
                    )
                  })
                }

              </View>
            </View>

            {/* Instructions */}
            <View className="space-y-4 p-4">
              <Text
                className="font-bold flex-1 text-neutral-700"
                style={{
                  fontSize: hp(2.5)
                }}
              >
                Instructions
              </Text>
              <Text
                className="text-neutral-700"
                style={{
                  fontSize: hp(1.7)
                }}
              >
                {meal?.strInstructions}
              </Text>
            </View>

          </View>
        )
      }
    </ScrollView>
  )
}

export default recipe_details
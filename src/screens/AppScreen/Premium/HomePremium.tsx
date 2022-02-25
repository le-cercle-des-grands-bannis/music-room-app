import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PremiumService from '@services/PremiumService';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

import PremiumCard from '../../../components/Premuim/PremiumCard';
import { Premium } from '../../../types/services/PremiumService/getPremiums';

const Tab = createBottomTabNavigator();

export default function HomePremium() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<Premium[] | null>(null);

  const getPremiums = async () => {
    try {
      const response = await new PremiumService().getPremiums();
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log(error.response.data);
      setData(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    void getPremiums();
  }, []);
  return (
    <>
      {isLoading ? (
        <View
          style={{
            height: '100%',
            display: 'flex',
            backgroundColor: 'darkgrey',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator color="red" size="large" />
        </View>
      ) : (
        <>
          {data !== null ? (
            <Tab.Navigator
              screenOptions={{
                headerShown: false,
                tabBarIconStyle: { display: 'none' },
                tabBarLabelPosition: 'beside-icon',
                tabBarLabelStyle: {
                  fontWeight: '700',
                  fontSize: 13,
                },
                tabBarShowLabel: true,
                tabBarActiveTintColor: 'orange',
              }}>
              {data.map((value, index) => {
                return (
                  <Tab.Screen key={index} name={value.name}>
                    {() => <PremiumCard data={value} />}
                  </Tab.Screen>
                );
              })}
            </Tab.Navigator>
          ) : (
            <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
              <Text>NO DATA</Text>
            </View>
          )}
        </>
      )}
    </>
  );
}

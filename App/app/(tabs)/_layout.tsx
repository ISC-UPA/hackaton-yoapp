import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

import Foundation from '@expo/vector-icons/Foundation';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>

      <Tabs.Screen
        name="home"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color }) => <Foundation name="home" size={20} color={color} />,
        }}
      />
      <Tabs.Screen
        name="cards"
        options={{
          title: 'Tarjetas',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="credit-card-multiple-outline" size={20} color={color} />,
        }}
      />
      <Tabs.Screen
        name="bus-routes"
        options={{
          title: 'Rutas',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="routes" size={20} color={color} />,
        }}
      />
      <Tabs.Screen
        name="bus-location"
        options={{
          title: 'Localizar',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="bus-marker" size={20} color={color} />,
        }}
      />
    </Tabs>
    
  );
}

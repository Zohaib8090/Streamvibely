
import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          backgroundColor: Colors.dark.background,
          borderTopColor: Colors.dark.background,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="magnify" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="library"
        options={{
          title: 'Library',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="music-box-multiple"
              size={28}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="create-playlist"
        options={{
          title: 'Create Playlist',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="plus-box" size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

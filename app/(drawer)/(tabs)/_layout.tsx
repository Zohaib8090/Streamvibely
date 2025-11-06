
import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from 'expo-router';
import { Tabs } from 'expo-router';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const TabsLayout = () => {
  const navigation = useNavigation();

  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: true,
          title: 'Home',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
              style={{ marginLeft: 15 }}
            >
              <Ionicons name="menu" size={24} color="white" />
            </TouchableOpacity>
          ),
        }}
      />
      <Tabs.Screen name="search" options={{ headerShown: false, title: 'Search' }} />
      <Tabs.Screen
        name="library"
        options={{
          headerShown: false,
          title: 'Library',
        }}
      />
      <Tabs.Screen name="create-playlist" options={{ headerShown: false, title: 'Create Playlist' }} />
    </Tabs>
  );
};

export default TabsLayout;

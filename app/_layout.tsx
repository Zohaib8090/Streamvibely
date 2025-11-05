
import React, { useEffect, useState } from 'react';
import { Slot, useRouter, useSegments } from 'expo-router';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import { SplashScreen } from 'expo-router';
import NetInfo from '@react-native-community/netinfo';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const router = useRouter();
  const segments = useSegments();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const checkInternetAndAuth = async () => {
      const netInfoState = await NetInfo.fetch();
      if (!netInfoState.isConnected) {
        // Offline: redirect to a specific offline screen or the main content
        router.replace('/(tabs)');
        setInitialized(true);
        return;
      }

      const unsubscribe = onAuthStateChanged(auth, (user) => {
        const inAuthGroup = segments[0] === '(auth)';

        if (user && !inAuthGroup) {
          router.replace('/(tabs)');
        } else if (user && inAuthGroup) {
          router.replace('/(tabs)');
        } else if (!user) {
          router.replace('/(auth)/login');
        }
        setInitialized(true);
      });
      return unsubscribe;
    };

    const unsubscribePromise = checkInternetAndAuth();

    return () => {
      unsubscribePromise.then(unsubscribe => {
        if (unsubscribe) {
          unsubscribe();
        }
      });
    };
  }, [segments, router]);

  useEffect(() => {
    if (initialized) {
      SplashScreen.hideAsync();
    }
  }, [initialized]);

  return initialized ? <Slot /> : null;
};

export default RootLayout;

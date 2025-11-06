
import { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, Alert } from 'react-native';
import { auth } from '@/firebase';
import { updateProfile } from 'firebase/auth';
import { Colors } from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';

const ProfileScreen = () => {
  const [displayName, setDisplayName] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const user = auth.currentUser;

  useEffect(() => {
    if (user) {
      setDisplayName(user.displayName || '');
      setAvatarUrl(user.photoURL || '');
    }
  }, [user]);

  const handleUpdateProfile = async () => {
    if (user) {
      try {
        await updateProfile(user, { displayName, photoURL: avatarUrl });
        Alert.alert('Success', 'Profile updated successfully!');
      } catch (error: any) {
        Alert.alert('Error', error.message);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: avatarUrl || 'https://via.placeholder.com/150' }} style={styles.avatar} />
        <Text style={styles.headerText}>{user?.displayName}</Text>
        <Text style={styles.emailText}>{user?.email}</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.label}>Display Name</Text>
        <TextInput
          style={styles.input}
          value={displayName}
          onChangeText={setDisplayName}
        />
        <Text style={styles.label}>Avatar URL</Text>
        <TextInput
          style={styles.input}
          value={avatarUrl}
          onChangeText={setAvatarUrl}
        />
        <View style={styles.buttonContainer}>
          <Button title="Update Profile" onPress={handleUpdateProfile} color={Colors.dark.primary} />
          <Button title="Change Password" onPress={() => {}} color={Colors.dark.primary} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  headerText: {
    color: Colors.dark.text,
    fontSize: 24,
    fontFamily: Fonts.bold,
  },
  emailText: {
    color: Colors.dark.text,
    fontSize: 16,
    fontFamily: Fonts.regular,
  },
  form: {
    width: '100%',
  },
  label: {
    color: Colors.dark.text,
    fontSize: 16,
    fontFamily: Fonts.regular,
    marginBottom: 5,
  },
  input: {
    backgroundColor: Colors.dark.card,
    color: Colors.dark.text,
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default ProfileScreen;

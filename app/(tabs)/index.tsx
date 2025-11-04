
import { Colors } from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const playlists = [
  {
    id: '1',
    title: 'Chill Vibes',
    description: 'Relax and unwind with these m...',
    image: 'https://picsum.photos/seed/picsum/200/300',
  },
  {
    id: '2',
    title: 'Workout Beats',
    description: 'High-energy tracks to power y...',
    image: 'https://picsum.photos/seed/picsum/200/300',
  },
  {
    id: '3',
    title: 'Focus Flow',
    description: 'Stay productive with these tun...',
    image: 'https://picsum.photos/seed/picsum/200/300',
  },
];

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>Personalized Recommendations</Text>
        </View>

        <View style={styles.recommendationCard}>
          <View style={styles.recommendationHeader}>
            <MaterialCommunityIcons
              name="star-four-points"
              size={24}
              color={Colors.light.tint}
            />
            <Text style={styles.recommendationTitle}>
              Personalized Suggestions
            </Text>
          </View>
          <Text style={styles.recommendationText}>
            Our AI will recommend songs based on your listening history. The more
            you listen, the better the recommendations.
          </Text>
          <TouchableOpacity style={styles.recommendationButton}>
            <MaterialCommunityIcons
              name="star-four-points"
              size={20}
              color={Colors.dark.text}
            />
            <Text style={styles.recommendationButtonText}>
              Get Fresh Recommendations
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.playlistsHeader}>
          <Text style={styles.playlistsTitle}>Playlists</Text>
        </View>

        <FlatList
          data={playlists}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.playlistsContainer}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.playlistCard}>
              <Image source={{ uri: item.image }} style={styles.playlistImage} />
              <Text style={styles.playlistTitle}>{item.title}</Text>
              <Text style={styles.playlistDescription}>{item.description}</Text>
            </View>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
  },
  headerContainer: {
    padding: 20,
  },
  headerTitle: {
    fontSize: 24,
    color: Colors.dark.text,
    fontFamily: Fonts.bold,
  },
  recommendationCard: {
    backgroundColor: Colors.dark.background,
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: Colors.dark.text,
  },
  recommendationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  recommendationTitle: {
    fontSize: 18,
    color: Colors.dark.text,
    marginLeft: 10,
    fontFamily: Fonts.bold,
  },
  recommendationText: {
    fontSize: 14,
    color: Colors.dark.text,
    marginBottom: 15,
    fontFamily: Fonts.regular,
  },
  recommendationButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.light.tint,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  recommendationButtonText: {
    fontSize: 16,
    color: Colors.dark.text,
    marginLeft: 10,
    fontFamily: Fonts.bold,
  },
  playlistsHeader: {
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  playlistsTitle: {
    fontSize: 22,
    color: Colors.dark.text,
    fontFamily: Fonts.bold,
  },
  playlistsContainer: {
    paddingLeft: 20,
  },
  playlistCard: {
    marginRight: 15,
    width: 160,
  },
  playlistImage: {
    width: 160,
    height: 160,
    borderRadius: 10,
    marginBottom: 10,
  },
  playlistTitle: {
    fontSize: 16,
    color: Colors.dark.text,
    fontFamily: Fonts.bold,
  },
  playlistDescription: {
    fontSize: 12,
    color: Colors.dark.text,
    fontFamily: Fonts.regular,
  },
});

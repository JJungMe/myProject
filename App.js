import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, StatusBar, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CarPool() {
  const [searchText, setSearchText] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>RideShare</Text>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search for ride"
          onChangeText={(text) => setSearchText(text)}
          value={searchText}
        />
      </View>
      <View style={styles.categoriesContainer}>
        <View style={styles.categoryContainer}>
          <Text style={styles.category}>Car Pool</Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Button 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Button 2</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.categoryContainer}>
          <Text style={styles.category}>Taxi Pot</Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Button 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Button 2</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.profileContainer}>
        <Ionicons name="person-circle" size={40} color="#555" />
        <Text style={styles.profileText}>Profile</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: 10,
    backgroundColor: 'red',
  },
  logo: {
    width: '100%',
    height: '100%',
    fontSize: 30,
    backgroundColor: 'red',
  },
  searchContainer: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
    marginTop: 70,
    backgroundColor: 'teal',
  },
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  categoriesContainer: {
    flex: 10,
    flexDirection: 'column',
    width: '100%',
    marginBottom: 20,
    marginLeft: 20,
    backgroundColor: 'blue',
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  category: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
  },
  profileContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 5,
    backgroundColor: 'red',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#ccc',
  },
});
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'; 
import { useNavigation } from '@react-navigation/native';

const SettingsScreen = () => {
  const navigation = useNavigation();

  const handleContactAdminPress = () => {
    navigation.navigate('ContactAdminScreen'); 
  };

  const handleLogoutPress = () => {
    navigation.navigate('StartScreen');
  };

  const handleAboutUsPress = () => {
    navigation.navigate('AboutUsScreen');
  };

  const handleInformationPress = () => {
    navigation.navigate('InformationScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
   
      <View style={styles.buttonDivision}>
        <TouchableOpacity style={styles.button} onPress={handleContactAdminPress}>
          <Text style={styles.buttonText}>Contact Admin</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleAboutUsPress}>
          <Text style={styles.buttonText}>About Us</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonDivision}>
        <TouchableOpacity style={styles.button} onPress={handleInformationPress}>
          <Text style={styles.buttonText}>Information</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleLogoutPress}>
          <Text style={styles.buttonText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonDivision: {
    flexDirection: 'row', 
    width: windowWidth * 0.7, 
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#458a0a',
    padding: 10,
    borderRadius: 10,
    width: '48%',
    marginVertical: 5, 
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default SettingsScreen;

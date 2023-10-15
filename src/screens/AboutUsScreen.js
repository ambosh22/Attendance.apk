import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import Logo from '../components/Logo'

const AboutUsScreen = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack(); 
  };

  return (
    <View style={styles.container}>
    
      <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
        <Icon name="arrow-left" size={20} color="blue" />
      </TouchableOpacity>  
      <Logo />
      <Text style={styles.title}>Group8 Pattend's</Text>
      <Text style={styles.title}>DEVELOPERS</Text>
      <Text style={styles.contactInfo}>Contact: +123456789</Text>
      <Text style={styles.contactInfo}>Email: developer@example.com</Text>

      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('GitLabScreen')}>
          <Icon name="gitlab" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('FacebookScreen')}>
          <Icon name="facebook" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('InstagramScreen')}>
          <Icon name="instagram" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  backIcon: {
    fontSize: 20,
    color: 'blue',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  contactInfo: {
    fontSize: 16,
    marginBottom: 5,
  },
  iconContainer: {
    justifyContent: 'space-between',
    marginVertical: 20,
    flexDirection: 'row',  
  },
  icon: {
    fontSize: 30,
    color: '#458a0a',
  },
});

export default AboutUsScreen;

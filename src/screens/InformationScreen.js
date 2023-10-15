import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const InformationScreen = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack(); 
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
        <Icon name="arrow-left" size={20} color="blue" />
      </TouchableOpacity>
      <Text style={styles.title}>Attendance System</Text>
      <Text style={styles.infoText}>
        The Attendance System is a digital solution designed to track and manage the attendance of individuals in various settings such as schools, workplaces, and events.
      </Text>
      <Text style={styles.infoText}>
        Purpose of the System:
      </Text>
      <Text style={styles.infoText}>
        1. Automated Tracking: The system automates the process of recording attendance, reducing manual effort and errors.
      </Text>
      <Text style={styles.infoText}>
        2. Real-time Monitoring: Provides real-time visibility into attendance, enabling timely interventions and decision-making.
      </Text>
      <Text style={styles.infoText}>
        3. Data Analysis: Enables data analysis to identify attendance trends, patterns, and areas that may require improvement.
      </Text>
      <Text style={styles.infoText}>
        4. Accountability: Helps in holding individuals accountable for their attendance and punctuality.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default InformationScreen;

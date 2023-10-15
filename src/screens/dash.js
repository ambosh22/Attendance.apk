import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function TeacherDashboard() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        {/* Students Panel with Icon */}
        <View style={styles.panel}>
          <Icon name="graduation-cap" size={30} color="#007AFF" style={styles.panelIcon} />
          <Text style={styles.panelTitle}>STUDENTS</Text>
          <Text style={styles.panelSubtitle}>50</Text>
        </View>

        {/* Classes Panel with Icon */}
        <View style={styles.panel}>
          <Icon name="chalkboard-teacher" size={30} color="#FF5733" style={styles.panelIcon} />
          <Text style={styles.panelTitle}>CLASSES</Text>
          <Text style={styles.panelSubtitle}>3 Sections</Text>
        </View>

        {/* Event List Panel with Icon */}
        <View style={styles.panel}>
          <Icon name="calendar" size={30} color="#00A786" style={styles.panelIcon} />
          <Text style={styles.panelTitle}>EVENT LIST</Text>
          <Text style={styles.panelSubtitle}>Upcoming events and activities</Text>
        </View>

        {/* Graph Panel with Icon */}
        <View style={styles.panel}>
          <Icon name="bar-chart" size={30} color="#FFD700" style={styles.panelIcon} />
          <Text style={styles.panelTitle}>GRAPH</Text>
          <Text style={styles.panelSubtitle}>Visual representation of data</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 10,
  },
  panel: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  panelIcon: {
    marginRight: 10,
  },
  panelTitle: {
    fontSize: 24,
    fontWeight: 'bold', // Make the title text bold
    color: '#333', // Text color for the title
  },
  panelSubtitle: {
    fontSize: 16,
    fontWeight: 'bold', // Make the subtitle text bold
    color: '#888', // Text color for the subtitle
    marginLeft:'50px',
    width:'300px'
  },
});

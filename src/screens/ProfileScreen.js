import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native';

const ProfileScreen = () => {
  const [report, setReport] = useState(''); 
  const [reports, setReports] = useState([]); 
  const [editIndex, setEditIndex] = useState(null);

  const handleAddReport = () => {
    if (report.trim() !== '') {
     
      if (editIndex !== null) {
        const updatedReports = [...reports];
        updatedReports[editIndex] = report;
        setReports(updatedReports);
        setEditIndex(null);
      } else {
        
        setReports([...reports, report]);
      }
   
      setReport('');
    }
  };

  const handleEditReport = (index) => {
   
    setReport(reports[index]);
   
    setEditIndex(index);
  };

  const handleDeleteReport = (index) => {
    
    const updatedReports = [...reports];
    updatedReports.splice(index, 1);
  
    setReports(updatedReports);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
  
      <TouchableOpacity style={styles.circularShape}>
      
        <Text style={styles.initials}>JD</Text>
      </TouchableOpacity>

     
      <View style={styles.infoContainer}>
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.label}>Teacher</Text>
        <Text style={styles.location}>Location: New York</Text> 
        <Text style={styles.zip}>ZIP Code: 10001</Text> 
        <Text style={styles.email}>john.doe@example.com</Text>
        <Text style={styles.phone}>Phone: +1 (123) 456-7890</Text>
       
      </View>

     
      <View style={styles.reportContainer}>
        <Text style={styles.reportLabel}>Report:</Text>
        <TextInput
          style={styles.reportInput}
          multiline
          placeholder="Write a report..."
          value={report}
          onChangeText={(text) => setReport(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddReport}>
          <Text style={styles.addButtonText}>
            {editIndex !== null ? 'Update Report' : 'Add Report'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Display Reports */}
      <View style={styles.reportsContainer}>
        <Text style={styles.reportsLabel}>Reports:</Text>
        {reports.map((item, index) => (
          <View key={index} style={styles.reportItem}>
            <Text style={styles.reportText}>{item}</Text>
            <TouchableOpacity
              style={styles.editButton}
              onPress={() => handleEditReport(index)}
            >
              <Text style={styles.editButtonText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => handleDeleteReport(index)}
            >
              <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingBottom: 20, 
  },
  circularShape: {
    width: 150, 
    height: 150,
    borderRadius: 75, 
    backgroundColor: 'lightgray', 
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  initials: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white', 
  },
  infoContainer: {
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'gray', 
  },
  location: {
    fontSize: 18,
    marginTop: 5,
  },
  zip: {
    fontSize: 18,
    marginTop: 5,
  },
  email: {
    fontSize: 18,
    marginTop: 5,
  },
  phone: {
    fontSize: 18,
    marginTop: 5,
  },
  reportContainer: {
    alignSelf: 'stretch', 
    paddingHorizontal: 20,
  },
  reportLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  reportInput: {
    fontSize: 16,
    marginTop: 10,
    paddingHorizontal: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    minHeight: 100, 
  },
  addButton: {
    backgroundColor: '#458a0a', 
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  reportsContainer: {
    alignSelf: 'stretch', 
    paddingHorizontal: 20,
    marginTop: 20,
  },
  reportsLabel: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  reportItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  reportText: {
    fontSize: 16,
    flex: 1,
  },
  editButton: {
    backgroundColor: '#458a0a',
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
    marginRight: 10,
  },
  editButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ProfileScreen;

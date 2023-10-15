import React, { useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';

const AttendanceScreen = () => {
  const [students1, setStudents1] = useState([
    { name: 'Student 1', studentNumber: '12345', isPresent: false },
    { name: 'Student 2', studentNumber: '67890', isPresent: false },
    { name: 'Student 3', studentNumber: '54321', isPresent: false },
    { name: 'Student 4', studentNumber: '98765', isPresent: false },
    { name: 'Student 5', studentNumber: '13579', isPresent: false },
  
  ]);

  const markAttendance = (index, studentList, setStudentList) => {
    const updatedStudents = [...studentList];
    updatedStudents[index].isPresent = !updatedStudents[index].isPresent;
    setStudentList(updatedStudents);
  };

  const presentCount = students1.filter((student) => student.isPresent).length;
  const absentCount = students1.length - presentCount;

  const renderItem = ({ item, index, studentList, setStudentList }) => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
      <View style={{ flex: 1, borderWidth: 1, borderColor: '#ccc', padding: 5 }}>
        <Text>{item.name}</Text>
      </View>
      <View style={{ flex: 1, borderWidth: 1, borderColor: '#ccc', padding: 10 }}>
        <Text>{item.studentNumber}</Text>
      </View>
      <View style={{ flex: 1, borderWidth: 1, borderColor: '#ccc', padding: 3 }}>
        <Button
          title={item.isPresent ? 'Present' : 'Absent'}
          onPress={() => markAttendance(index, studentList, setStudentList)}
        />
      </View>
    </View>
  );

  return (
    <View style={{ backgroundColor: '#fff', paddingBottom: 10 }}>
      <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold', marginVertical: 10 }}>FA1-BSIT03-WEBDEV2</Text>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>Present: {presentCount}</Text>
        <Text style={{ fontWeight: 'bold' }}>Absent: {absentCount}</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, backgroundColor: '#eee' }}>
        <View style={{ flex: 2 }}>
          <Text style={{ fontWeight: 'bold' }}>Name</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ fontWeight: 'bold' }}>ID Number</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ fontWeight: 'bold' }}>Attendance</Text>
        </View>
      </View>
      <FlatList
        data={students1}
        renderItem={({ item, index }) => renderItem({ item, index, studentList: students1, setStudentList: setStudents1 })}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default AttendanceScreen;

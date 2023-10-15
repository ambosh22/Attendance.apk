import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ScheduleRow = ({ section, time, subject, isOdd }) => (
  <View style={[styles.tableRow, isOdd && styles.tableRowOdd]}>
    <Text style={styles.tableCell}>{section}</Text>
    <Text style={styles.tableCell}>{time}</Text>
    <Text style={styles.tableCell}>{subject}</Text>
  </View>
);

const Schedule = () => (
  <View style={styles.container}>
    <Text style={styles.day}>Monday</Text>

    <View style={styles.tableRow}>
      <Text style={[styles.tableCell, styles.headerCell]}>Section</Text>
      <Text style={[styles.tableCell, styles.headerCell]}>Time</Text>
      <Text style={[styles.tableCell, styles.headerCell]}>Subject</Text>
    </View>

    <ScheduleRow
      section="Section 1"
      time="8:00 AM - 9:30 AM"
      subject="ITE329"
      isOdd={false}
    />

    <ScheduleRow
      section="Section 2"
      time="10:00 AM - 11:30 AM"
      subject="ITE301"
      isOdd={true}
    />

    <ScheduleRow
      section="Section 3"
      time="11:00 AM - 12:30 AM"
      subject="ITE304"
      isOdd={false}
    />

    <ScheduleRow
      section="Section 4"
      time="1:00 PM - 2:30 PM"
      subject="ITE305"
      isOdd={true}
    />

    <Text style={styles.day}>Tuesday</Text>

    <View style={styles.tableRow}>
      <Text style={[styles.tableCell, styles.headerCell]}>Section</Text>
      <Text style={[styles.tableCell, styles.headerCell]}>Time</Text>
      <Text style={[styles.tableCell, styles.headerCell]}>Subject</Text>
    </View>

    <ScheduleRow
      section="Section 1"
      time="9:00 AM - 10:30 AM"
      subject="Math101"
      isOdd={false}
    />

    <ScheduleRow
      section="Section 2"
      time="11:00 AM - 12:30 PM"
      subject="Science202"
      isOdd={true}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    paddingVertical: 10,
  },
  tableRowOdd: {
    backgroundColor: 'lightblue',
  },
  tableCell: {
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 5,
  },
  headerCell: {
    fontWeight: 'bold',
  },
  day: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default Schedule;

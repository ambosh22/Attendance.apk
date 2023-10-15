import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import SettingsScreen from './SettingsScreen'; 
import ScheduleScreen from './ScheduleScreen'; 
import AttendanceScreen from './AttendanceScreen'; 
import dash from './dash';
import ProfileScreen from './ProfileScreen';

const Tab = createBottomTabNavigator();

const Dashboard = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Dashboard') {
            iconName = 'bookmark';
          } else if (route.name === 'Profile') {
            iconName = 'user';
          }else if (route.name === 'Settings') {
            iconName = 'cog';
          } else if (route.name === 'Attendance') {
            iconName = 'file';
          } else if (route.name === 'Schedule') {
            iconName = 'clipboard';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'blue', 
        tabBarStyle: {
          display: 'flex', 
        },
      })}
    >
      <Tab.Screen name="Dashboard" component={dash} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Schedule" component={ScheduleScreen} />
      <Tab.Screen name="Attendance" component={AttendanceScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default Dashboard;

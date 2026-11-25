import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { RootStackParamList, TabParamList } from './types';

import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ScheduleScreen from '../screens/ScheduleScreen';
import GradesScreen from '../screens/GradesScreen';
import SubjectsScreen from '../screens/SubjectsScreen';
import AttendanceScreen from '../screens/AttendanceScreen';
import NewsScreen from '../screens/NewsScreen';
import EventsScreen from '../screens/EventsScreen';
import LibraryScreen from '../screens/LibraryScreen';
import PaymentsScreen from '../screens/PaymentsScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#2457C5' },
        headerTintColor: 'white',
        tabBarActiveTintColor: '#2457C5',
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen}
        options={{ title: 'Басты бет' }} />
      <Tab.Screen name="Schedule" component={ScheduleScreen}
        options={{ title: 'Кесте' }} />
      <Tab.Screen name="Grades" component={GradesScreen}
        options={{ title: 'Бағалар' }} />
      <Tab.Screen name="Profile" component={ProfileScreen}
        options={{ title: 'Профиль' }} />
      <Tab.Screen name="Settings" component={SettingsScreen}
        options={{ title: 'Баптау' }} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen}
          options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen}
          options={{ title: 'Кіру' }} />
        <Stack.Screen name="Register" component={RegisterScreen}
          options={{ title: 'Тіркелу' }} />
        <Stack.Screen name="MainTabs" component={MainTabs}
          options={{ headerShown: false }} />
        <Stack.Screen name="Subjects" component={SubjectsScreen} />
        <Stack.Screen name="Attendance" component={AttendanceScreen} />
        <Stack.Screen name="News" component={NewsScreen} />
        <Stack.Screen name="Events" component={EventsScreen} />
        <Stack.Screen name="Library" component={LibraryScreen} />
        <Stack.Screen name="Payments" component={PaymentsScreen} />
        <Stack.Screen name="Notifications" component={NotificationsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

function HomeScreen() {
  return (
    <View style={styles.home}>
      <Text>Welcome to the Home Screen!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={styles.settings}>
      <Text>Welcome to the Settings!</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.profile}>
      <Text>Welcome to your Profile!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

                // SET ICONS FOR BOTTOM TABS
            if (route.name === 'Home') {
              iconName = focused ? 'ios-home' : 'md-home';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'md-person' : 'ios-person';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'md-settings' : 'ios-settings';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>

        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: "#FFBF84",
    alignItems: "center",
    justifyContent: "center",
  },
  settings: {
    flex: 1,
    backgroundColor: "#AEAEAE",
    alignItems: "center",
    justifyContent: "center",
  },
  profile: {
    flex: 1,
    backgroundColor: "#61B3FF",
    alignItems: "center",
    justifyContent: "center",
  },
});

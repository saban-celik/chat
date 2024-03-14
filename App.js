import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import ChatList from './screens/ChatList';
import Settings from './screens/Settings';
import { Ionicons } from '@expo/vector-icons';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import Chat from './screens/Chat';
import { Provider } from 'react-native-paper';
import { useEffect } from 'react';
import 'firebase/auth';
import 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { ReactNativeAsyncStorage } from 'firebase/auth';
import { firebase } from './screens/Config';

export const firebaseConfig = {
  apiKey: "AIzaSyDBURZOG2GlHS8b65moloZiAQ0io3w0_mU",
  authDomain: "lookchat-64b42.firebaseapp.com",
  projectId: "lookchat-64b42",
  storageBucket: "lookchat-64b42.appspot.com",
  messagingSenderId: "629755343620",
  appId: "1:629755343620:web:cdc307ac2b519691e19651",
  measurementId: "G-CD4YS88E9X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const TabsNavigator = () => {

  const navigation = useNavigation();

  useEffect(() => {
    const isLoggedIn = false;
    if (!isLoggedIn) {
      navigation.navigate("SignUp")
    }
  }, [])

  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          return <Ionicons name={route.name === 'ChatList' ? "chatbubbles" : "settings"} size={size} color={color} />;
        }
      })}
    >
      <Tabs.Screen name='ChatList' component={ChatList} />
      <Tabs.Screen name='Settings' component={Settings} />
    </Tabs.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Provider>
        <Stack.Navigator>
          <Stack.Screen name='Main' component={TabsNavigator} options={{ headerShown: false }} />
          <Stack.Screen name='Chat' component={Chat} />
          <Stack.Screen name='SignUp' component={SignUp} options={{ presentation: "fullScreenModal" }} />
          <Stack.Screen name='SignIn' component={SignIn} options={{ presentation: "fullScreenModal" }} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

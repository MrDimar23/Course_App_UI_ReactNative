import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./app/view/screens/HomeScreen";
import React from "react";
import  Icon from "react-native-vector-icons/MaterialIcons";
import { Image } from "react-native";
import CourseScreen from "./app/view/screens/CourseScreen";


const Stack = createStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
       <Stack.Navigator  screenOptions={{title:null, headerStyle: {elevation: 0}}} >
          <Stack.Screen 
            name= 'HomeScreen' 
            component={HomeScreen}
            options={{
              headerLeft: () => (
                <Icon name='sort'
                 size={25}
                 style={{marginLeft: 20}} />
                 ),
                 headerRight: () => (
                  <Image 
                    style={{height:40, width:40, marginRight: 20}}
                    source={require('./app/assets/person.png')} />
                 )
                 }}>
          </Stack.Screen>
          <Stack.Screen 
            name='CourseScreen'
            component={CourseScreen}>
              
          </Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;

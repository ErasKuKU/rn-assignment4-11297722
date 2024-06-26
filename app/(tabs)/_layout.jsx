import { StyleSheet, Text, View , Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { icons } from "../../constants"


const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View style={styles.iconBox}>
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        style={styles.icon}
      />
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular" } text-xs`}
        style={styles.text}
      >
      
      </Text>
    </View>
  );
};






const Tablayout = ()=>{

    return (
        <Tabs
        screenOptions={{
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "black",
          tabBarShowLabel: true,
          tabBarLabelStyle: {
            fontSize: 12, 
          },
          tabBarStyle: {
            backgroundColor: 'white',
            borderTopWidth: 1,
            borderTopColor: "white",
            height: 84,
          },
        }}
      >
         <Tabs.Screen
          name="Home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
              />
            ),
          }}
          />
          <Tabs.Screen
          name="MyCards"
          options={{
            title: "MyCards",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.myCards}
                color={color}
                name="My Cards"
                focused={focused}
              />
            ),
          }}
          />
           <Tabs.Screen
          name="Statistics"
          options={{
            title: "Statistics",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.statistics}
                color={color}
                name="Statistics"
                focused={focused}
              />
            ),
          }}
          />
            <Tabs.Screen
          name="Settings"
          options={{
            title: "Settings",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.settings}
                color={color}
                name="Settings"
                focused={focused}
              />
            ),
          }}
          />
        

          






    
      </Tabs>

    )
  }


export default Tablayout


const styles = StyleSheet.create({

    icon: {
      width: 23, // Adjust icon width as needed
      height: 23, // Adjust icon height as needed
    },
   
  iconBox:{
   
  },
  text:{
    
  }
})
import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { Tabs } from 'expo-router'

const Tablayout = ()=>{

    return (
        <Tabs
        screenOptions={{
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "blue",
          tabBarShowLabel: true,
          tabBarStyle: {
            backgroundColor: 'white',
            borderTopWidth: 1,
            borderTopColor: "#232533",
            height: 84,
          },
        }}
      >
         <Tabs.Screen
          name="index"
          options={{
            title: "index",
            headerShown: false,
          }}
          />
          <Tabs.Screen
          name="About"
          options={{
            title: "About",
            headerShown: false,
          }}
          />
           <Tabs.Screen
          name="Profile"
          options={{
            title: "Profile",
            headerShown: false,
          }}
          />
        

          







      </Tabs>

    )
  }


export default Tablayout